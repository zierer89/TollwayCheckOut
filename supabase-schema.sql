-- Illinois Tollway Checkout App - Shared online backend
-- Run this entire file once in the Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.fleet_mechanics (
  id uuid primary key default gen_random_uuid(),
  location text not null,
  name text not null,
  pin_hash text not null,
  created_at timestamptz not null default now()
);

create unique index if not exists fleet_mechanics_location_name_unique
  on public.fleet_mechanics (location, lower(name));

create table if not exists public.checkout_submissions (
  id uuid primary key default gen_random_uuid(),
  location text not null,
  form_type text not null,
  submitted_at timestamptz not null default now(),
  details jsonb not null default '[]'::jsonb
);

create index if not exists checkout_submissions_location_time_idx
  on public.checkout_submissions (location, submitted_at desc);

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

create or replace function public.create_fleet_mechanic(
  p_location text,
  p_name text,
  p_pin text
)
returns table(id uuid, location text, name text)
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

  return query
  insert into public.fleet_mechanics(location, name, pin_hash)
  values (p_location, trim(p_name), crypt(p_pin, gen_salt('bf')))
  returning fleet_mechanics.id, fleet_mechanics.location, fleet_mechanics.name;
end;
$$;

create or replace function public.list_fleet_mechanics(p_location text)
returns table(id uuid, location text, name text)
language sql
security definer
set search_path = public
as $$
  select m.id, m.location, m.name
  from public.fleet_mechanics m
  where m.location = p_location
  order by lower(m.name);
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
      and m.pin_hash = crypt(p_pin, m.pin_hash)
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
  details jsonb
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
    and m.pin_hash = crypt(p_pin, m.pin_hash);

  if mechanic_location is null then
    raise exception 'Invalid mechanic or PIN';
  end if;

  return query
  select s.id, s.form_type, s.location, s.submitted_at, s.details
  from public.checkout_submissions s
  where s.location = mechanic_location
  order by s.submitted_at desc;
end;
$$;

revoke all on public.fleet_mechanics from anon, authenticated;
revoke all on public.checkout_submissions from anon, authenticated;

grant execute on function public.valid_tollway_location(text) to anon, authenticated;
grant execute on function public.create_fleet_mechanic(text,text,text) to anon, authenticated;
grant execute on function public.list_fleet_mechanics(text) to anon, authenticated;
grant execute on function public.verify_fleet_mechanic_pin(uuid,text) to anon, authenticated;
grant execute on function public.submit_checkout_sheet(text,text,jsonb) to anon, authenticated;
grant execute on function public.get_mechanic_submissions(uuid,text) to anon, authenticated;
