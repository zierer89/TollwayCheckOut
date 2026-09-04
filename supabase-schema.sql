-- Illinois Tollway Checkout App - Shared online backend
-- Run this entire file once in the Supabase SQL Editor.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.fleet_mechanics (
  id uuid primary key default gen_random_uuid(),
  location text not null,
  name text not null,
  pin_hash text not null,
  is_lead boolean not null default false,
  created_at timestamptz not null default now()
);

create unique index if not exists fleet_mechanics_location_name_unique
  on public.fleet_mechanics (location, lower(name));

create table if not exists public.app_admin (
  singleton boolean primary key default true check (singleton = true),
  password_hash text not null,
  updated_at timestamptz not null default now()
);
alter table public.app_admin enable row level security;

create table if not exists public.fleet_district_managers (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now()
);

alter table public.fleet_district_managers enable row level security;

-- v44 credential-reset fields
alter table public.fleet_mechanics
  add column if not exists reset_required boolean not null default false;

alter table public.fleet_mechanics
  add column if not exists reset_code_hash text;

alter table public.fleet_district_managers
  add column if not exists reset_required boolean not null default false;

alter table public.fleet_district_managers
  add column if not exists reset_code_hash text;

create table if not exists public.checkout_submissions (
  id uuid primary key default gen_random_uuid(),
  location text not null,
  form_type text not null,
  submitted_at timestamptz not null default now(),
  details jsonb not null default '[]'::jsonb,
  review_status text not null default 'Pending',
  reviewed_by uuid references public.fleet_mechanics(id),
  reviewed_at timestamptz
);

create index if not exists checkout_submissions_location_time_idx
  on public.checkout_submissions (location, submitted_at desc);

alter table public.fleet_mechanics
  add column if not exists is_lead boolean not null default false;

alter table public.checkout_submissions
  add column if not exists review_status text not null default 'Pending';

alter table public.checkout_submissions
  add column if not exists reviewed_by uuid references public.fleet_mechanics(id);

alter table public.checkout_submissions
  add column if not exists reviewed_at timestamptz;

create unique index if not exists fleet_mechanics_one_lead_per_location
  on public.fleet_mechanics(location)
  where is_lead = true;

alter table public.fleet_mechanics enable row level security;
alter table public.checkout_submissions enable row level security;

-- No direct table policies are intentionally created.
-- The app accesses data only through the SECURITY DEFINER functions below.

create or replace function public.valid_tollway_location(p_location text)
returns boolean
language sql
immutable
as $$
  select p_location = any(array[
    'M1','M2','M3','M4','M5','M6','M7','M8',
    'M11','M12','M14','M16','CAG','E02','E06',
    'Sign Shop','Road Electric'
  ]);
$$;

drop function if exists public.create_fleet_mechanic(text,text,text,boolean);
create or replace function public.create_fleet_mechanic(
  p_location text,
  p_name text,
  p_pin text,
  p_is_lead boolean default false
)
returns table(id uuid, location text, name text, is_lead boolean, reset_required boolean)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.valid_tollway_location(p_location) then
    raise exception 'Invalid location';
  end if;

  if nullif(trim(p_name),'') is null then
    raise exception 'Mechanic name is required';
  end if;

  if p_pin !~ '^[0-9]{4,6}$' then
    raise exception 'PIN must be 4 to 6 numbers';
  end if;

  if coalesce(p_is_lead,false) and exists(
    select 1 from public.fleet_mechanics m
    where m.location = p_location and m.is_lead = true
  ) then
    raise exception 'A lead mechanic is already assigned to this location';
  end if;

  return query
  insert into public.fleet_mechanics(location, name, pin_hash, is_lead)
  values (p_location, trim(p_name), extensions.crypt(p_pin, extensions.gen_salt('bf')), coalesce(p_is_lead,false))
  returning fleet_mechanics.id, fleet_mechanics.location, fleet_mechanics.name, fleet_mechanics.is_lead, fleet_mechanics.reset_required;
end;
$$;

drop function if exists public.list_fleet_mechanics(text);
create or replace function public.list_fleet_mechanics(p_location text)
returns table(id uuid, location text, name text, is_lead boolean, reset_required boolean)
language sql
security definer
set search_path = public
as $$
  select m.id, m.location, m.name, m.is_lead, m.reset_required
  from public.fleet_mechanics m
  where m.location = p_location
  order by m.is_lead desc, lower(m.name);
$$;

create or replace function public.verify_fleet_mechanic_pin(
  p_mechanic_id uuid,
  p_pin text
)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists(
    select 1
    from public.fleet_mechanics m
    where m.id = p_mechanic_id
      and not m.reset_required
      and m.pin_hash = extensions.crypt(p_pin, m.pin_hash)
  );
$$;

create or replace function public.submit_checkout_sheet(
  p_location text,
  p_form_type text,
  p_details jsonb
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  new_id uuid;
begin
  if not public.valid_tollway_location(p_location) then
    raise exception 'Invalid location';
  end if;

  if nullif(trim(p_form_type),'') is null then
    raise exception 'Form type is required';
  end if;

  insert into public.checkout_submissions(location, form_type, details)
  values (p_location, trim(p_form_type), coalesce(p_details, '[]'::jsonb))
  returning id into new_id;

  return new_id;
end;
$$;

create or replace function public.get_mechanic_submissions(
  p_mechanic_id uuid,
  p_pin text
)
returns table(
  id uuid,
  form_type text,
  location text,
  submitted_at timestamptz,
  details jsonb,
  review_status text,
  reviewed_by_name text,
  reviewed_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  mechanic_location text;
begin
  select m.location
  into mechanic_location
  from public.fleet_mechanics m
  where m.id = p_mechanic_id
    and m.pin_hash = extensions.crypt(p_pin, m.pin_hash);

  if mechanic_location is null then
    raise exception 'Invalid mechanic or PIN';
  end if;

  return query
  select
    s.id,
    s.form_type,
    s.location,
    s.submitted_at,
    s.details,
    s.review_status,
    reviewer.name,
    s.reviewed_at
  from public.checkout_submissions s
  left join public.fleet_mechanics reviewer on reviewer.id = s.reviewed_by
  where s.location = mechanic_location
  order by s.submitted_at desc;
end;
$$;


create or replace function public.sign_off_checkout_sheet(
  p_mechanic_id uuid,
  p_pin text,
  p_submission_id uuid
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  mechanic_location text;
  mechanic_is_lead boolean;
  submission_location text;
begin
  select m.location, m.is_lead
  into mechanic_location, mechanic_is_lead
  from public.fleet_mechanics m
  where m.id = p_mechanic_id
    and m.pin_hash = extensions.crypt(p_pin, m.pin_hash);

  if mechanic_location is null then
    raise exception 'Invalid mechanic or PIN';
  end if;

  if mechanic_is_lead is not true then
    raise exception 'Only the lead mechanic can sign off checkout sheet reviews';
  end if;

  select s.location
  into submission_location
  from public.checkout_submissions s
  where s.id = p_submission_id;

  if submission_location is null then
    raise exception 'Checkout submission not found';
  end if;

  if submission_location <> mechanic_location then
    raise exception 'This checkout sheet belongs to another location';
  end if;

  update public.checkout_submissions
  set review_status = 'Reviewed',
      reviewed_by = p_mechanic_id,
      reviewed_at = now()
  where id = p_submission_id;

  return true;
end;
$$;


create or replace function public.change_fleet_mechanic_pin(
  p_mechanic_id uuid,
  p_current_pin text,
  p_new_pin text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_new_pin !~ '^[0-9]{4,6}$' then
    raise exception 'New PIN must be 4 to 6 numbers';
  end if;

  update public.fleet_mechanics
  set pin_hash = extensions.crypt(p_new_pin, extensions.gen_salt('bf'))
  where id = p_mechanic_id
    and pin_hash = extensions.crypt(p_current_pin, pin_hash);

  if not found then
    raise exception 'Invalid mechanic or current PIN';
  end if;

  return true;
end;
$$;

create or replace function public.delete_fleet_mechanic(
  p_mechanic_id uuid,
  p_current_pin text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists(
    select 1
    from public.fleet_mechanics m
    where m.id = p_mechanic_id
      and m.pin_hash = extensions.crypt(p_current_pin, m.pin_hash)
  ) then
    raise exception 'Invalid mechanic or current PIN';
  end if;

  -- Preserve previously reviewed checkout sheets while allowing the profile to be deleted.
  update public.checkout_submissions
  set reviewed_by = null
  where reviewed_by = p_mechanic_id;

  delete from public.fleet_mechanics
  where id = p_mechanic_id;

  return true;
end;
$$;


create or replace function public.create_fleet_district_manager(
  p_name text,
  p_password text
)
returns table(id uuid, name text)
language plpgsql
security definer
set search_path = public
as $$
begin
  if nullif(trim(p_name),'') is null then
    raise exception 'District manager name is required';
  end if;

  if length(p_password) < 4 then
    raise exception 'Password must be at least 4 characters';
  end if;

  return query
  insert into public.fleet_district_managers(name, password_hash)
  values (trim(p_name), extensions.crypt(p_password, extensions.gen_salt('bf')))
  returning fleet_district_managers.id, fleet_district_managers.name;
end;
$$;

create or replace function public.list_fleet_district_managers()
returns table(id uuid, name text, reset_required boolean)
language sql
security definer
set search_path = public
as $$
  select m.id, m.name, m.reset_required
  from public.fleet_district_managers m
  order by lower(m.name);
$$;

create or replace function public.verify_fleet_district_manager_password(
  p_manager_id uuid,
  p_password text
)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists(
    select 1
    from public.fleet_district_managers m
    where m.id = p_manager_id
      and not m.reset_required
      and m.password_hash = extensions.crypt(p_password, m.password_hash)
  );
$$;

create or replace function public.update_fleet_district_manager_name(
  p_manager_id uuid,
  p_password text,
  p_new_name text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if nullif(trim(p_new_name),'') is null then
    raise exception 'District manager name is required';
  end if;

  update public.fleet_district_managers
  set name = trim(p_new_name)
  where id = p_manager_id
    and password_hash = extensions.crypt(p_password, password_hash);

  if not found then
    raise exception 'Invalid manager or password';
  end if;

  return true;
end;
$$;

create or replace function public.change_fleet_district_manager_password(
  p_manager_id uuid,
  p_current_password text,
  p_new_password text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if length(p_new_password) < 4 then
    raise exception 'Password must be at least 4 characters';
  end if;

  update public.fleet_district_managers
  set password_hash = extensions.crypt(p_new_password, extensions.gen_salt('bf'))
  where id = p_manager_id
    and password_hash = extensions.crypt(p_current_password, password_hash);

  if not found then
    raise exception 'Invalid manager or password';
  end if;

  return true;
end;
$$;

create or replace function public.delete_fleet_district_manager(
  p_manager_id uuid,
  p_password text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from public.fleet_district_managers
  where id = p_manager_id
    and password_hash = extensions.crypt(p_password, password_hash);

  if not found then
    raise exception 'Invalid manager or password';
  end if;

  return true;
end;
$$;

revoke all on public.fleet_mechanics from anon, authenticated;
revoke all on public.checkout_submissions from anon, authenticated;

grant execute on function public.valid_tollway_location(text) to anon, authenticated;
grant execute on function public.create_fleet_mechanic(text,text,text,boolean) to anon, authenticated;
grant execute on function public.list_fleet_mechanics(text) to anon, authenticated;
grant execute on function public.verify_fleet_mechanic_pin(uuid,text) to anon, authenticated;
grant execute on function public.submit_checkout_sheet(text,text,jsonb) to anon, authenticated;
grant execute on function public.get_mechanic_submissions(uuid,text) to anon, authenticated;

grant execute on function public.sign_off_checkout_sheet(uuid,text,uuid) to anon, authenticated;

grant execute on function public.change_fleet_mechanic_pin(uuid,text,text) to anon, authenticated;
grant execute on function public.delete_fleet_mechanic(uuid,text) to anon, authenticated;

revoke all on public.fleet_district_managers from anon, authenticated;
grant execute on function public.create_fleet_district_manager(text,text) to anon, authenticated;
grant execute on function public.list_fleet_district_managers() to anon, authenticated;
grant execute on function public.verify_fleet_district_manager_password(uuid,text) to anon, authenticated;
grant execute on function public.update_fleet_district_manager_name(uuid,text,text) to anon, authenticated;
grant execute on function public.change_fleet_district_manager_password(uuid,text,text) to anon, authenticated;
grant execute on function public.delete_fleet_district_manager(uuid,text) to anon, authenticated;

create or replace function public.admin_password_exists()
returns boolean language sql security definer set search_path=public as $$
 select exists(select 1 from public.app_admin where singleton=true);
$$;

create or replace function public.create_admin_password(p_password text)
returns boolean language plpgsql security definer set search_path=public as $$
begin
 if exists(select 1 from public.app_admin where singleton=true) then raise exception 'Admin password has already been created'; end if;
 if length(p_password)<6 then raise exception 'Admin password must be at least 6 characters'; end if;
 insert into public.app_admin(singleton,password_hash) values(true,extensions.crypt(p_password,extensions.gen_salt('bf')));
 return true;
end; $$;

create or replace function public.verify_admin_password(p_password text)
returns boolean language sql security definer set search_path=public as $$
 select exists(select 1 from public.app_admin where singleton=true and password_hash=extensions.crypt(p_password,password_hash));
$$;

create or replace function public.reset_admin_password(p_current_password text,p_new_password text)
returns boolean language plpgsql security definer set search_path=public as $$
begin
 if length(p_new_password)<6 then raise exception 'Admin password must be at least 6 characters'; end if;
 update public.app_admin set password_hash=extensions.crypt(p_new_password,extensions.gen_salt('bf')),updated_at=now()
 where singleton=true and password_hash=extensions.crypt(p_current_password,password_hash);
 if not found then raise exception 'Incorrect Admin password'; end if;
 return true;
end; $$;

create or replace function public.admin_delete_fleet_mechanic(p_admin_password text,p_mechanic_id uuid)
returns boolean language plpgsql security definer set search_path=public as $$
begin
 if not exists(select 1 from public.app_admin where singleton=true and password_hash=extensions.crypt(p_admin_password,password_hash)) then raise exception 'Incorrect Admin password'; end if;
 update public.checkout_submissions set reviewed_by=null where reviewed_by=p_mechanic_id;
 delete from public.fleet_mechanics where id=p_mechanic_id;
 if not found then raise exception 'Mechanic not found'; end if;
 return true;
end; $$;

create or replace function public.admin_delete_fleet_district_manager(p_admin_password text,p_manager_id uuid)
returns boolean language plpgsql security definer set search_path=public as $$
begin
 if not exists(select 1 from public.app_admin where singleton=true and password_hash=extensions.crypt(p_admin_password,password_hash)) then raise exception 'Incorrect Admin password'; end if;
 delete from public.fleet_district_managers where id=p_manager_id;
 if not found then raise exception 'District manager not found'; end if;
 return true;
end; $$;

revoke all on public.app_admin from anon, authenticated;
grant execute on function public.admin_password_exists() to anon, authenticated;
grant execute on function public.create_admin_password(text) to anon, authenticated;
grant execute on function public.verify_admin_password(text) to anon, authenticated;
grant execute on function public.reset_admin_password(text,text) to anon, authenticated;
grant execute on function public.admin_delete_fleet_mechanic(text,uuid) to anon, authenticated;
grant execute on function public.admin_delete_fleet_district_manager(text,uuid) to anon, authenticated;

create or replace function public.admin_reset_fleet_mechanic_pin(p_admin_password text,p_mechanic_id uuid)
returns text language plpgsql security definer set search_path=public as $$
declare v_code text;
begin
 if not exists(select 1 from public.app_admin where singleton=true and password_hash=extensions.crypt(p_admin_password,password_hash)) then raise exception 'Incorrect Admin password'; end if;
 v_code := lpad((floor(random()*1000000))::int::text,6,'0');
 update public.fleet_mechanics set reset_required=true, reset_code_hash=extensions.crypt(v_code,extensions.gen_salt('bf')) where id=p_mechanic_id;
 if not found then raise exception 'Mechanic not found'; end if;
 return v_code;
end; $$;

create or replace function public.complete_fleet_mechanic_pin_reset(p_mechanic_id uuid,p_reset_code text,p_new_pin text)
returns boolean language plpgsql security definer set search_path=public as $$
begin
 if p_new_pin !~ '^[0-9]{4,6}$' then raise exception 'PIN must be 4-6 digits'; end if;
 update public.fleet_mechanics set pin_hash=extensions.crypt(p_new_pin,extensions.gen_salt('bf')),reset_required=false,reset_code_hash=null
 where id=p_mechanic_id and reset_required=true and reset_code_hash=extensions.crypt(p_reset_code,reset_code_hash);
 if not found then raise exception 'Incorrect temporary reset code'; end if;
 return true;
end; $$;

create or replace function public.admin_reset_fleet_district_manager_password(p_admin_password text,p_manager_id uuid)
returns text language plpgsql security definer set search_path=public as $$
declare v_code text;
begin
 if not exists(select 1 from public.app_admin where singleton=true and password_hash=extensions.crypt(p_admin_password,password_hash)) then raise exception 'Incorrect Admin password'; end if;
 v_code := lpad((floor(random()*1000000))::int::text,6,'0');
 update public.fleet_district_managers set reset_required=true,reset_code_hash=extensions.crypt(v_code,extensions.gen_salt('bf')) where id=p_manager_id;
 if not found then raise exception 'District manager not found'; end if;
 return v_code;
end; $$;

create or replace function public.complete_fleet_district_manager_password_reset(p_manager_id uuid,p_reset_code text,p_new_password text)
returns boolean language plpgsql security definer set search_path=public as $$
begin
 if length(p_new_password)<4 then raise exception 'Password must be at least 4 characters'; end if;
 update public.fleet_district_managers set password_hash=extensions.crypt(p_new_password,extensions.gen_salt('bf')),reset_required=false,reset_code_hash=null
 where id=p_manager_id and reset_required=true and reset_code_hash=extensions.crypt(p_reset_code,reset_code_hash);
 if not found then raise exception 'Incorrect temporary reset code'; end if;
 return true;
end; $$;

grant execute on function public.admin_reset_fleet_mechanic_pin(text,uuid) to anon, authenticated;
grant execute on function public.complete_fleet_mechanic_pin_reset(uuid,text,text) to anon, authenticated;
grant execute on function public.admin_reset_fleet_district_manager_password(text,uuid) to anon, authenticated;
grant execute on function public.complete_fleet_district_manager_password_reset(uuid,text,text) to anon, authenticated;

create or replace function public.admin_update_fleet_mechanic_assignment(p_admin_password text,p_mechanic_id uuid,p_location text,p_is_lead boolean)
returns boolean language plpgsql security definer set search_path=public as $$
begin
 if not exists(select 1 from public.app_admin where singleton=true and password_hash=extensions.crypt(p_admin_password,password_hash)) then raise exception 'Incorrect Admin password'; end if;
 if not public.valid_tollway_location(p_location) then raise exception 'Invalid work location'; end if;
 if p_is_lead and exists(select 1 from public.fleet_mechanics where location=p_location and is_lead=true and id<>p_mechanic_id) then raise exception 'This location already has a Lead Mechanic'; end if;
 update public.fleet_mechanics set location=p_location,is_lead=p_is_lead where id=p_mechanic_id;
 if not found then raise exception 'Mechanic not found'; end if;
 return true;
end; $$;
grant execute on function public.admin_update_fleet_mechanic_assignment(text,uuid,text,boolean) to anon, authenticated;



-- v49: Fleet District Managers can view ONLY reviewed checkout sheets from ALL locations.
-- Authentication uses the manager's existing password. Direct table access remains blocked.

drop function if exists public.get_district_manager_reviewed_submissions(uuid,text);

create or replace function public.get_district_manager_reviewed_submissions(
  p_manager_id uuid,
  p_password text
)
returns table(
  id uuid,
  form_type text,
  location text,
  submitted_at timestamptz,
  details jsonb,
  review_status text,
  reviewed_by_name text,
  reviewed_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists(
    select 1
    from public.fleet_district_managers dm
    where dm.id = p_manager_id
      and not dm.reset_required
      and dm.password_hash = extensions.crypt(p_password, dm.password_hash)
  ) then
    raise exception 'Invalid District Manager or password';
  end if;

  return query
  select
    s.id,
    s.form_type,
    s.location,
    s.submitted_at,
    s.details,
    s.review_status,
    reviewer.name,
    s.reviewed_at
  from public.checkout_submissions s
  left join public.fleet_mechanics reviewer on reviewer.id = s.reviewed_by
  where s.review_status = 'Reviewed'
    and s.reviewed_at is not null
  order by s.reviewed_at desc, s.submitted_at desc;
end;
$$;

revoke all on function public.get_district_manager_reviewed_submissions(uuid,text) from public;
grant execute on function public.get_district_manager_reviewed_submissions(uuid,text) to anon, authenticated;
