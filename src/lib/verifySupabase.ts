import { supabase } from './supabaseClient';

async function verifyTables() {
  console.log('Verifying Supabase tables...');

  // Test user profiles access
  const { data: userProfiles, error: userError } = await supabase
    .from('user_profiles')
    .select('*')
    .limit(1);
  console.log('User Profiles:', userError ? `Error: ${userError.message}` : 'Accessible');

  // Test analytics events access
  const { data: analytics, error: analyticsError } = await supabase
    .from('analytics_events')
    .select('*')
    .limit(1);
  console.log('Analytics:', analyticsError ? `Error: ${analyticsError.message}` : 'Accessible');

  // Test social media accounts access
  const { data: socialAccounts, error: socialError } = await supabase
    .from('social_media_accounts')
    .select('*')
    .limit(1);
  console.log('Social Media Accounts:', socialError ? `Error: ${socialError.message}` : 'Accessible');

  // Test reports access
  const { data: reports, error: reportsError } = await supabase
    .from('reports')
    .select('*')
    .limit(1);
  console.log('Reports:', reportsError ? `Error: ${reportsError.message}` : 'Accessible');

  // Test user preferences access
  const { data: preferences, error: preferencesError } = await supabase
    .from('user_preferences')
    .select('*')
    .limit(1);
  console.log('User Preferences:', preferencesError ? `Error: ${preferencesError.message}` : 'Accessible');

  return {
    userProfiles,
    analytics,
    socialAccounts,
    reports,
    preferences,
    errors: {
      userError,
      analyticsError,
      socialError,
      reportsError,
      preferencesError
    }
  };
}

export { verifyTables };
