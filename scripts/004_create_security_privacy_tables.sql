-- Create audit logs table for tracking all user actions
create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  action text not null,
  resource_type text not null, -- 'order', 'profile', 'payment', 'cart', etc.
  resource_id text,
  old_values jsonb,
  new_values jsonb,
  ip_address text,
  user_agent text,
  status text default 'success', -- 'success', 'failed'
  created_at timestamp default now()
);

-- Create user privacy settings table
create table if not exists public.privacy_settings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  data_collection_enabled boolean default true,
  personalization_enabled boolean default true,
  marketing_emails_enabled boolean default true,
  third_party_sharing_enabled boolean default false,
  profile_visibility text default 'private', -- 'private', 'friends', 'public'
  activity_history_retention integer default 90, -- days
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- Create data deletion requests
create table if not exists public.data_deletion_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  request_type text not null, -- 'full_account', 'order_history', 'personal_data'
  status text default 'pending', -- 'pending', 'approved', 'completed', 'cancelled'
  requested_at timestamp default now(),
  completed_at timestamp,
  reason text,
  verification_token text unique,
  expires_at timestamp
);

-- Create security events table for detecting suspicious activity
create table if not exists public.security_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  event_type text not null, -- 'login_attempt', 'failed_payment', 'unauthorized_access', 'data_access'
  severity text default 'low', -- 'low', 'medium', 'high', 'critical'
  description text,
  ip_address text,
  user_agent text,
  resolved boolean default false,
  created_at timestamp default now()
);

-- Create trusted devices table for 2FA
create table if not exists public.trusted_devices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  device_fingerprint text not null,
  device_name text,
  ip_address text,
  user_agent text,
  trusted_at timestamp default now(),
  last_used_at timestamp default now(),
  expires_at timestamp default now() + interval '90 days',
  unique(user_id, device_fingerprint)
);

-- Create session management table
create table if not exists public.user_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  session_token text unique,
  ip_address text,
  user_agent text,
  device_name text,
  created_at timestamp default now(),
  expires_at timestamp,
  last_activity timestamp default now(),
  is_active boolean default true
);

-- Enable Row Level Security
alter table public.audit_logs enable row level security;
alter table public.privacy_settings enable row level security;
alter table public.data_deletion_requests enable row level security;
alter table public.security_events enable row level security;
alter table public.trusted_devices enable row level security;
alter table public.user_sessions enable row level security;

-- RLS policies for audit_logs
create policy "audit_logs_select_own"
  on public.audit_logs for select
  using (auth.uid() = user_id);

-- RLS policies for privacy_settings
create policy "privacy_settings_select_own"
  on public.privacy_settings for select
  using (auth.uid() = user_id);

create policy "privacy_settings_insert_own"
  on public.privacy_settings for insert
  with check (auth.uid() = user_id);

create policy "privacy_settings_update_own"
  on public.privacy_settings for update
  using (auth.uid() = user_id);

-- RLS policies for data_deletion_requests
create policy "data_deletion_requests_select_own"
  on public.data_deletion_requests for select
  using (auth.uid() = user_id);

create policy "data_deletion_requests_insert_own"
  on public.data_deletion_requests for insert
  with check (auth.uid() = user_id);

-- RLS policies for security_events
create policy "security_events_select_own"
  on public.security_events for select
  using (auth.uid() = user_id);

-- RLS policies for trusted_devices
create policy "trusted_devices_select_own"
  on public.trusted_devices for select
  using (auth.uid() = user_id);

create policy "trusted_devices_insert_own"
  on public.trusted_devices for insert
  with check (auth.uid() = user_id);

create policy "trusted_devices_delete_own"
  on public.trusted_devices for delete
  using (auth.uid() = user_id);

-- RLS policies for user_sessions
create policy "user_sessions_select_own"
  on public.user_sessions for select
  using (auth.uid() = user_id);

create policy "user_sessions_delete_own"
  on public.user_sessions for delete
  using (auth.uid() = user_id);

-- Create indexes
create index audit_logs_user_idx on public.audit_logs(user_id);
create index audit_logs_action_idx on public.audit_logs(action);
create index security_events_user_idx on public.security_events(user_id);
create index security_events_resolved_idx on public.security_events(resolved);
create index trusted_devices_user_idx on public.trusted_devices(user_id);
create index user_sessions_user_idx on public.user_sessions(user_id);
create index user_sessions_active_idx on public.user_sessions(is_active);
