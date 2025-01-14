-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- Create analytics_events table for real-time metrics
create table analytics_events (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id),
  event_name text not null,
  event_data jsonb not null default '{}',
  platform text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create audience_demographics table
create table audience_demographics (
  id uuid primary key default uuid_generate_v4(),
  platform text not null,
  age_range text not null,
  gender text,
  location text,
  interests text[],
  follower_count integer not null default 0,
  engagement_rate numeric(5,2),
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create content_performance table
create table content_performance (
  id uuid primary key default uuid_generate_v4(),
  content_id text not null,
  platform text not null,
  content_type text not null,
  impressions integer not null default 0,
  reach integer not null default 0,
  likes integer not null default 0,
  comments integer not null default 0,
  shares integer not null default 0,
  saves integer not null default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create roi_metrics table
create table roi_metrics (
  id uuid primary key default uuid_generate_v4(),
  campaign_id uuid not null,
  platform text not null,
  spend numeric(10,2) not null default 0,
  revenue numeric(10,2) not null default 0,
  conversions integer not null default 0,
  conversion_rate numeric(5,2),
  cost_per_conversion numeric(10,2),
  roi numeric(5,2),
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table analytics_events enable row level security;
alter table audience_demographics enable row level security;
alter table content_performance enable row level security;
alter table roi_metrics enable row level security;

-- Create policies for analytics_events
create policy "Analysts and admins can view all analytics events"
  on analytics_events for select
  using (
    exists (
      select 1 from user_profiles
      where user_id = auth.uid()
      and role in ('admin', 'analyst')
    )
  );

-- Create policies for audience_demographics
create policy "All authenticated users can view demographics"
  on audience_demographics for select
  using (auth.role() = 'authenticated');

create policy "Only admins can modify demographics"
  on audience_demographics for all
  using (
    exists (
      select 1 from user_profiles
      where user_id = auth.uid()
      and role = 'admin'
    )
  );

-- Create policies for content_performance
create policy "All authenticated users can view content performance"
  on content_performance for select
  using (auth.role() = 'authenticated');

create policy "Analysts and admins can modify content performance"
  on content_performance for all
  using (
    exists (
      select 1 from user_profiles
      where user_id = auth.uid()
      and role in ('admin', 'analyst')
    )
  );

-- Create policies for roi_metrics
create policy "Analysts and admins can view ROI metrics"
  on roi_metrics for select
  using (
    exists (
      select 1 from user_profiles
      where user_id = auth.uid()
      and role in ('admin', 'analyst')
    )
  );

create policy "Only admins can modify ROI metrics"
  on roi_metrics for all
  using (
    exists (
      select 1 from user_profiles
      where user_id = auth.uid()
      and role = 'admin'
    )
  );

-- Enable real-time subscriptions for these tables
alter publication supabase_realtime add table analytics_events;
alter publication supabase_realtime add table audience_demographics;
alter publication supabase_realtime add table content_performance;
alter publication supabase_realtime add table roi_metrics;
