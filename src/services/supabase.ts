import 'react-native-url-polyfill/auto';
import {createClient, SupabaseClient} from '@supabase/supabase-js';

const SUPABASE_URL = `${process.env.URL}`;
const SUPABASE_ANON_KEY = `${process.env.ANON_KEY}`;

export const supabase: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
);
