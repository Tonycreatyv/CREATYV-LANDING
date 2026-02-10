// src/lib/supabaseClient.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Flag para saber si Supabase está configurado en Netlify
export const hasSupabaseEnv = Boolean(url && anon);

// Si faltan env vars, NO creamos cliente (evita crash / pantalla negra)
export const supabase: SupabaseClient | null = hasSupabaseEnv
  ? createClient(url!, anon!)
  : null;

if (!hasSupabaseEnv) {
  console.warn('[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY');
}
