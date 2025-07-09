// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Detect Vite vs CRA safely
let SUPABASE_URL, SUPABASE_KEY;

if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_SUPABASE_URL) {
  SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
} else {
  SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
  SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;
}

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("[supabase] Missing environment variables! Check .env.local and restart.");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
