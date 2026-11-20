-- Chefmane table reservations. Run once against the Neon database:
--   psql "$DATABASE_URL" -f db/schema.sql
create table if not exists reservations (
  id         bigserial primary key,
  name       text        not null,
  phone      text        not null,
  guests     integer     not null default 2,
  date       date        not null,
  time       text        not null,
  notes      text,
  status     text        not null default 'pending'
             check (status in ('pending', 'confirmed', 'seated', 'cancelled')),
  created_at timestamptz not null default now()
);

create index if not exists reservations_date_time_idx on reservations (date, time);
