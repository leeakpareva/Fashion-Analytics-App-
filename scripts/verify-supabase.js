import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyTables() {
  console.log('Verifying Supabase tables...\n');

  const tables = [
    { name: 'user_profiles', desc: 'User Profiles' },
    { name: 'analytics_events', desc: 'Analytics Events' },
    { name: 'social_media_accounts', desc: 'Social Media Accounts' },
    { name: 'reports', desc: 'Reports' },
    { name: 'user_preferences', desc: 'User Preferences' }
  ];

  for (const table of tables) {
    try {
      const { data, error } = await supabase
        .from(table.name)
        .select('*')
        .limit(1);

      if (error) {
        console.log(`❌ ${table.desc}:`, error.message);
      } else {
        console.log(`✅ ${table.desc}: Accessible`);
      }
    } catch (err) {
      console.log(`❌ ${table.desc}:`, err.message);
    }
  }
}

verifyTables()
  .catch(console.error)
  .finally(() => process.exit());
