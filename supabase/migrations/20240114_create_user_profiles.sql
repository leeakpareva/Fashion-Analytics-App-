-- Create enum for user roles
create type user_role as enum ('admin', 'analyst', 'viewer');

-- Create user_profiles table
create table user_profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role user_role not null default 'viewer',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  constraint user_profiles_user_id_key unique (user_id)
);

-- Enable Row Level Security
alter table user_profiles enable row level security;

-- Create policies
create policy "Users can view their own profile"
  on user_profiles for select
  using (auth.uid() = user_id);

create policy "Only admins can update profiles"
  on user_profiles for update
  using (
    exists (
      select 1 from user_profiles
      where user_id = auth.uid()
      and role = 'admin'
    )
  );

-- Create function to handle user creation
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.user_profiles (user_id, role)
  values (new.id, 'viewer');
  return new;
end;
$$ language plpgsql security definer;

-- Create trigger for new user creation
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();
