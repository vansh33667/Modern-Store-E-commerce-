-- Create profiles table for user preferences
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- Create user preferences table
create table if not exists public.user_preferences (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  favorite_categories text[] default '{}',
  price_range_min integer default 0,
  price_range_max integer default 1000,
  preferred_colors text[] default '{}',
  brand_preferences text[] default '{}',
  created_at timestamp default now(),
  updated_at timestamp default now(),
  unique(user_id)
);

-- Create user interactions table for tracking browsing/purchase history
create table if not exists public.user_interactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id text not null,
  interaction_type text not null, -- 'view', 'add_to_cart', 'purchase', 'wishlist'
  interaction_data jsonb,
  created_at timestamp default now()
);

-- Create personalized recommendations cache
create table if not exists public.recommendations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  recommended_product_ids text[] not null,
  recommendation_type text not null, -- 'personalized', 'trending', 'similar'
  score numeric,
  created_at timestamp default now(),
  expires_at timestamp default now() + interval '24 hours',
  unique(user_id, recommendation_type)
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.user_preferences enable row level security;
alter table public.user_interactions enable row level security;
alter table public.recommendations enable row level security;

-- Create RLS policies for profiles
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- Create RLS policies for user_preferences
create policy "user_preferences_select_own"
  on public.user_preferences for select
  using (auth.uid() = user_id);

create policy "user_preferences_insert_own"
  on public.user_preferences for insert
  with check (auth.uid() = user_id);

create policy "user_preferences_update_own"
  on public.user_preferences for update
  using (auth.uid() = user_id);

-- Create RLS policies for user_interactions
create policy "user_interactions_select_own"
  on public.user_interactions for select
  using (auth.uid() = user_id);

create policy "user_interactions_insert_own"
  on public.user_interactions for insert
  with check (auth.uid() = user_id);

-- Create RLS policies for recommendations
create policy "recommendations_select_own"
  on public.recommendations for select
  using (auth.uid() = user_id);

create policy "recommendations_insert_own"
  on public.recommendations for insert
  with check (auth.uid() = user_id);

-- Create trigger to auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id)
  values (new.id)
  on conflict (id) do nothing;
  
  insert into public.user_preferences (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
