import { createClient } from '@supabase/supabase-js';

// Supabase client for server-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for type safety
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service_interest: string;
  message: string;
  created_at?: string;
  ip_address?: string;
  user_agent?: string;
}
