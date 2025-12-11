-- Create flash deals table
create table if not exists public.flash_deals (
  id uuid primary key default gen_random_uuid(),
  product_id text not null,
  original_price numeric not null,
  discounted_price numeric not null,
  discount_percentage integer not null,
  quantity_available integer not null,
  quantity_sold integer default 0,
  deal_start_time timestamp not null,
  deal_end_time timestamp not null,
  is_active boolean default true,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- Create deal notifications table for user alerts
create table if not exists public.deal_notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  deal_id uuid references public.flash_deals(id) on delete cascade,
  notified_at timestamp default now(),
  clicked boolean default false,
  unique(user_id, deal_id)
);

-- Create deal purchase history
create table if not exists public.deal_purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  deal_id uuid references public.flash_deals(id) on delete cascade,
  product_id text not null,
  quantity integer not null,
  price_paid numeric not null,
  purchased_at timestamp default now()
);

-- Enable Row Level Security
alter table public.flash_deals enable row level security;
alter table public.deal_notifications enable row level security;
alter table public.deal_purchases enable row level security;

-- RLS policies for flash_deals (publicly readable)
create policy "flash_deals_select_all"
  on public.flash_deals for select
  using (true);

-- RLS policies for deal_notifications
create policy "deal_notifications_select_own"
  on public.deal_notifications for select
  using (auth.uid() = user_id);

create policy "deal_notifications_insert_own"
  on public.deal_notifications for insert
  with check (auth.uid() = user_id);

-- RLS policies for deal_purchases
create policy "deal_purchases_select_own"
  on public.deal_purchases for select
  using (auth.uid() = user_id);

create policy "deal_purchases_insert_own"
  on public.deal_purchases for insert
  with check (auth.uid() = user_id);

-- Create index for efficient queries
create index flash_deals_active_idx on public.flash_deals(is_active) where is_active = true;
create index flash_deals_time_idx on public.flash_deals(deal_start_time, deal_end_time);
create index deal_notifications_user_idx on public.deal_notifications(user_id);
