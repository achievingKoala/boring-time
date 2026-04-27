create table silent_events (
  id bigint generated always as identity primary key,
  anon_id text not null,
  event text not null,
  payload jsonb,
  created_at timestamptz default now()
);

-- 允许匿名写入（RLS）
alter table silent_events enable row level security;

create policy "allow anon insert"
on silent_events for insert
to anon
with check (true);