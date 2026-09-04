-- v56: Allow Lead Mechanics to permanently delete accidental checkout submissions
-- Run this once in the Supabase SQL Editor.

create or replace function public.delete_checkout_sheet_as_lead(
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
    raise exception 'Only the lead mechanic can delete checkout sheets';
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

  delete from public.checkout_submissions
  where id = p_submission_id;

  return true;
end;
$$;

revoke all
on function public.delete_checkout_sheet_as_lead(uuid,text,uuid)
from public;

grant execute
on function public.delete_checkout_sheet_as_lead(uuid,text,uuid)
to anon, authenticated;
