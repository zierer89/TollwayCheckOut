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
