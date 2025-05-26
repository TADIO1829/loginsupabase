import { createClient } from "@supabase/supabase-js";
const supabaseUrl ="https://imnnjgfzwgdzuvjuvjyz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltbm5qZ2Z6d2dkenV2anV2anl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyOTc1NjAsImV4cCI6MjA2Mzg3MzU2MH0.TbHCEdtPz3tw88qOChQJSlBfLVLSsjc5Ck2Vuw95Xz4";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);