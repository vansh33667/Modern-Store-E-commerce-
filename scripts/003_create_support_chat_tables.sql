-- Create support tickets table
create table if not exists public.support_tickets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  email text not null,
  subject text not null,
  status text default 'open', -- 'open', 'in_progress', 'resolved', 'closed'
  priority text default 'normal', -- 'low', 'normal', 'high', 'urgent'
  created_at timestamp default now(),
  updated_at timestamp default now(),
  resolved_at timestamp
);

-- Create chat messages table for AI support conversations
create table if not exists public.support_messages (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid references public.support_tickets(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  message_type text not null, -- 'user', 'assistant', 'system'
  content text not null,
  is_ai_generated boolean default false,
  confidence_score numeric default 0,
  created_at timestamp default now()
);

-- Create knowledge base articles for AI to reference
create table if not exists public.knowledge_base (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  category text not null,
  tags text[] default '{}',
  helpful_count integer default 0,
  unhelpful_count integer default 0,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- Create customer feedback on AI responses
create table if not exists public.ai_response_feedback (
  id uuid primary key default gen_random_uuid(),
  message_id uuid references public.support_messages(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  rating integer, -- 1-5 stars
  feedback_text text,
  was_helpful boolean,
  created_at timestamp default now()
);

-- Enable Row Level Security
alter table public.support_tickets enable row level security;
alter table public.support_messages enable row level security;
alter table public.knowledge_base enable row level security;
alter table public.ai_response_feedback enable row level security;

-- RLS policies for support_tickets
create policy "support_tickets_select_own"
  on public.support_tickets for select
  using (auth.uid() = user_id);

create policy "support_tickets_insert_own"
  on public.support_tickets for insert
  with check (auth.uid() = user_id);

create policy "support_tickets_update_own"
  on public.support_tickets for update
  using (auth.uid() = user_id);

-- RLS policies for support_messages
create policy "support_messages_select_own"
  on public.support_messages for select
  using (auth.uid() = user_id);

create policy "support_messages_insert_own"
  on public.support_messages for insert
  with check (auth.uid() = user_id);

-- RLS policies for knowledge_base (publicly readable)
create policy "knowledge_base_select_all"
  on public.knowledge_base for select
  using (true);

-- RLS policies for ai_response_feedback
create policy "ai_response_feedback_select_own"
  on public.ai_response_feedback for select
  using (auth.uid() = user_id);

create policy "ai_response_feedback_insert_own"
  on public.ai_response_feedback for insert
  with check (auth.uid() = user_id);

-- Create indexes for performance
create index support_tickets_user_idx on public.support_tickets(user_id);
create index support_tickets_status_idx on public.support_tickets(status);
create index support_messages_ticket_idx on public.support_messages(ticket_id);
create index knowledge_base_category_idx on public.knowledge_base(category);
create index knowledge_base_tags_idx on public.knowledge_base using gin(tags);
