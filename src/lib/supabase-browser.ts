import { createBrowserClient } from "@supabase/ssr";

/**
 * Cookie domain for cross-subdomain session sharing.
 *
 * In production (clearpathdata.org / app.clearpathdata.org) we set the cookie
 * on the root domain ".clearpathdata.org" so the session is shared across
 * subdomains.
 *
 * On localhost (or any non-clearpathdata.org host, e.g. preview deploys) the
 * browser would REJECT a ".clearpathdata.org" cookie, so we leave the domain
 * undefined and the cookie defaults to the current host. This keeps local
 * `npm run dev` working without any extra config.
 */
const cookieDomain =
  typeof window !== "undefined" &&
  window.location.hostname.endsWith("clearpathdata.org")
    ? ".clearpathdata.org"
    : undefined;

export const supabaseBrowser = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    cookieOptions: {
      domain: cookieDomain,
      path: "/",
      sameSite: "lax",
      // `secure` requires HTTPS. Only enable it when we're on the real domain;
      // on http://localhost the cookie would otherwise be dropped.
      secure: cookieDomain !== undefined,
    },
  }
);
