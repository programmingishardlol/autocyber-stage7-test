-- supabase/migrations/001_public_profiles.sql
create policy "public read"
on profiles
for select
using (true);