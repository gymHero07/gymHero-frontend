// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL ;
const supabaseKey = process.env.REACT_APP_SUPABASE_API ;

let supabase = null;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or key is missing. Check your .env configuration.');
} else {
  supabase = createClient(supabaseUrl, supabaseKey);
}