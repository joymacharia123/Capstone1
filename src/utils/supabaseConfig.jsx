import { createClient } from "@supabase/supabase-js/"

const supaBaseUrl ='https://ocoovpsanggvpkvmzqwj.supabase.co'
const supaBaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jb292cHNhbmdndnBrdm16cXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4OTIyNzgsImV4cCI6MjAyNTQ2ODI3OH0.0ChDwrBCwMNekcOyl1UKnM6kS27tCuflbWrekEXxhaM'

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey)