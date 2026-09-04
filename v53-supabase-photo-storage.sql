-- v53: Checkout Photo Storage + Metadata
create table if not exists public.checkout_submission_photos (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null references public.checkout_submissions(id) on delete cascade,
  object_path text not null unique,
  file_name text not null,
  mime_type text,
  created_at timestamptz not null default now()
);

create index if not exists checkout_submission_photos_submission_idx
  on public.checkout_submission_photos(submission_id, created_at);

alter table public.checkout_submission_photos enable row level security;
revoke all on table public.checkout_submission_photos from anon, authenticated;

insert into storage.buckets (id,name,public)
values ('checkout-photos','checkout-photos',false)
on conflict (id) do update set public=false;

drop policy if exists "checkout photos anon insert" on storage.objects;
create policy "checkout photos anon insert"
on storage.objects for insert to anon, authenticated
with check (bucket_id='checkout-photos');

drop policy if exists "checkout photos anon read" on storage.objects;
create policy "checkout photos anon read"
on storage.objects for select to anon, authenticated
using (bucket_id='checkout-photos');

create or replace function public.attach_checkout_photo(
  p_submission_id uuid,
  p_object_path text,
  p_file_name text,
  p_mime_type text default null
)
returns uuid
language plpgsql
security definer
set search_path=public
as $$
declare new_id uuid;
begin
  if not exists(select 1 from public.checkout_submissions s where s.id=p_submission_id) then
    raise exception 'Checkout submission not found';
  end if;
  if nullif(trim(p_object_path),'') is null then raise exception 'Photo object path is required'; end if;

  insert into public.checkout_submission_photos(submission_id,object_path,file_name,mime_type)
  values(p_submission_id,trim(p_object_path),coalesce(nullif(trim(p_file_name),''),'photo'),p_mime_type)
  returning id into new_id;
  return new_id;
end;
$$;

create or replace function public.get_checkout_photos(p_submission_id uuid)
returns table(
  id uuid,
  submission_id uuid,
  object_path text,
  file_name text,
  mime_type text,
  created_at timestamptz
)
language sql
security definer
set search_path=public
as $$
  select p.id,p.submission_id,p.object_path,p.file_name,p.mime_type,p.created_at
  from public.checkout_submission_photos p
  where p.submission_id=p_submission_id
  order by p.created_at;
$$;

revoke all on function public.attach_checkout_photo(uuid,text,text,text) from public;
grant execute on function public.attach_checkout_photo(uuid,text,text,text) to anon, authenticated;
revoke all on function public.get_checkout_photos(uuid) from public;
grant execute on function public.get_checkout_photos(uuid) to anon, authenticated;
