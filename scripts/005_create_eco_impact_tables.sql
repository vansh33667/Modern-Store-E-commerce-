-- Create product eco-metrics table
create table if not exists public.product_eco_metrics (
  id uuid primary key default gen_random_uuid(),
  product_id text not null unique,
  carbon_footprint_kg numeric, -- kg CO2 equivalent
  water_usage_liters numeric,
  packaging_recyclable_percentage integer,
  sustainable_material_percentage integer,
  manufacturing_country text,
  shipping_method text, -- 'air', 'sea', 'rail', 'truck'
  eco_certifications text[] default '{}', -- 'organic', 'fair_trade', 'carbon_neutral', etc.
  lifespan_years integer,
  repairability_score integer, -- 0-100
  recyclability_score integer, -- 0-100
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- Create user carbon footprint tracking
create table if not exists public.user_carbon_footprint (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  total_carbon_kg numeric default 0,
  total_purchases integer default 0,
  sustainable_purchases integer default 0,
  offset_carbon_kg numeric default 0,
  trees_equivalent integer default 0, -- equivalent trees to offset
  year_data jsonb default '{}', -- monthly breakdown
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- Create carbon offset programs
create table if not exists public.carbon_offset_programs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  carbon_offset_per_unit numeric, -- kg CO2 per unit
  unit_type text, -- 'tree', 'project', 'credit'
  cost_per_offset numeric,
  partner_url text,
  verified boolean default true,
  created_at timestamp default now()
);

-- Create user carbon offset purchases
create table if not exists public.user_offsets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  program_id uuid references public.carbon_offset_programs(id) on delete cascade,
  units_purchased integer,
  carbon_offset_kg numeric,
  cost_usd numeric,
  purchase_date timestamp default now()
);

-- Create sustainability badges/achievements
create table if not exists public.sustainability_badges (
  id uuid primary key default gen_random_uuid(),
  badge_id text unique not null,
  name text not null,
  description text,
  icon_url text,
  criteria jsonb, -- requirements to earn badge
  created_at timestamp default now()
);

-- Create user badges
create table if not exists public.user_badges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  badge_id text references public.sustainability_badges(badge_id) on delete cascade,
  earned_at timestamp default now(),
  unique(user_id, badge_id)
);

-- Enable Row Level Security
alter table public.product_eco_metrics enable row level security;
alter table public.user_carbon_footprint enable row level security;
alter table public.carbon_offset_programs enable row level security;
alter table public.user_offsets enable row level security;
alter table public.sustainability_badges enable row level security;
alter table public.user_badges enable row level security;

-- RLS policies for product_eco_metrics (publicly readable)
create policy "product_eco_metrics_select_all"
  on public.product_eco_metrics for select
  using (true);

-- RLS policies for user_carbon_footprint
create policy "user_carbon_footprint_select_own"
  on public.user_carbon_footprint for select
  using (auth.uid() = user_id);

create policy "user_carbon_footprint_insert_own"
  on public.user_carbon_footprint for insert
  with check (auth.uid() = user_id);

create policy "user_carbon_footprint_update_own"
  on public.user_carbon_footprint for update
  using (auth.uid() = user_id);

-- RLS policies for carbon_offset_programs
create policy "carbon_offset_programs_select_all"
  on public.carbon_offset_programs for select
  using (true);

-- RLS policies for user_offsets
create policy "user_offsets_select_own"
  on public.user_offsets for select
  using (auth.uid() = user_id);

create policy "user_offsets_insert_own"
  on public.user_offsets for insert
  with check (auth.uid() = user_id);

-- RLS policies for sustainability_badges
create policy "sustainability_badges_select_all"
  on public.sustainability_badges for select
  using (true);

-- RLS policies for user_badges
create policy "user_badges_select_own"
  on public.user_badges for select
  using (auth.uid() = user_id);

-- Create indexes
create index product_eco_metrics_product_idx on public.product_eco_metrics(product_id);
create index user_carbon_footprint_user_idx on public.user_carbon_footprint(user_id);
create index user_offsets_user_idx on public.user_offsets(user_id);
create index user_badges_user_idx on public.user_badges(user_id);

-- Insert sample carbon offset programs
insert into public.carbon_offset_programs (name, description, carbon_offset_per_unit, unit_type, cost_per_offset, partner_url, verified)
values
  ('Reforestation Project', 'Plant trees in degraded forests', 21, 'tree', 2.50, 'https://example.com/trees', true),
  ('Renewable Energy', 'Support wind and solar projects', 5, 'credit', 10.00, 'https://example.com/renewable', true),
  ('Ocean Cleanup', 'Remove plastic from oceans', 1, 'project', 25.00, 'https://example.com/ocean', true)
on conflict do nothing;

-- Insert sample sustainability badges
insert into public.sustainability_badges (badge_id, name, description, icon_url, criteria)
values
  ('eco_shopper', 'Eco Shopper', 'Made 10 sustainable purchases', '/badges/eco-shopper.svg', '{"sustainable_purchases": 10}'),
  ('carbon_neutral', 'Carbon Neutral', 'Offset all carbon from purchases', '/badges/carbon-neutral.svg', '{"offset_equals_total": true}'),
  ('green_champion', 'Green Champion', 'Purchased 50+ sustainable items', '/badges/green-champion.svg', '{"sustainable_purchases": 50}'),
  ('zero_waste', 'Zero Waste', '5 orders with sustainable packaging', '/badges/zero-waste.svg', '{"zero_waste_orders": 5}')
on conflict do nothing;
