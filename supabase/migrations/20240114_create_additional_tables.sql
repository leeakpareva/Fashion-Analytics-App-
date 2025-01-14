-- Create social_media_accounts table
create table social_media_accounts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  platform text not null,
  platform_user_id text not null,
  access_token text,
  refresh_token text,
  token_expires_at timestamp with time zone,
  account_name text not null,
  account_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  constraint unique_user_platform unique (user_id, platform)
);

-- Create reports table
create table reports (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  description text,
  report_type text not null,
  config jsonb not null default '{}',
  schedule jsonb,
  last_generated timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create user_preferences table
create table user_preferences (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  theme text default 'light',
  notification_settings jsonb default '{"email": true, "push": false}'::jsonb,
  dashboard_layout jsonb,
  custom_metrics jsonb[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  constraint user_preferences_user_id_key unique (user_id)
);

-- Enable Row Level Security
alter table social_media_accounts enable row level security;
alter table reports enable row level security;
alter table user_preferences enable row level security;

-- Create policies for social_media_accounts
create policy "Users can view their own social media accounts"
  on social_media_accounts for select
  using (auth.uid() = user_id);

create policy "Users can manage their own social media accounts"
  on social_media_accounts for all
  using (auth.uid() = user_id);

-- Create policies for reports
create policy "Users can view their own reports"
  on reports for select
  using (auth.uid() = user_id);

create policy "Users can manage their own reports"
  on reports for all
  using (auth.uid() = user_id);

create policy "Analysts can view all reports"
  on reports for select
  using (
    exists (
      select 1 from user_profiles
      where user_id = auth.uid()
      and role = 'analyst'
    )
  );

-- Create policies for user_preferences
create policy "Users can view their own preferences"
  on user_preferences for select
  using (auth.uid() = user_id);

create policy "Users can manage their own preferences"
  on user_preferences for all
  using (auth.uid() = user_id);

-- Enable real-time subscriptions
alter publication supabase_realtime add table social_media_accounts;
alter publication supabase_realtime add table reports;
alter publication supabase_realtime add table user_preferences;

-- Create indexes for better query performance
create index idx_social_media_accounts_user_id on social_media_accounts(user_id);
create index idx_social_media_accounts_platform on social_media_accounts(platform);
create index idx_reports_user_id on reports(user_id);
create index idx_reports_type on reports(report_type);
create index idx_user_preferences_user_id on user_preferences(user_id);
