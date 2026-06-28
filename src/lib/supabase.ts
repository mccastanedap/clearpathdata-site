// Re-export the @supabase/ssr browser client under the original `supabase`
// name so existing imports (login, auth/confirm, reset-password, etc.) keep
// working unchanged. See ./supabase-browser for the cookie configuration.
export { supabaseBrowser as supabase } from "./supabase-browser";
