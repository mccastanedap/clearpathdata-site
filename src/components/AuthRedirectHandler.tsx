"use client";

import { useEffect } from "react";

export default function AuthRedirectHandler() {
  useEffect(() => {
    const hash = window.location.hash;
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const hashParams = new URLSearchParams(hash.replace("#", ""));

    const type = params.get("type") || hashParams.get("type");
    const tokenHash = params.get("token_hash");
    const code = params.get("code");

    if (type === "invite" || (tokenHash && type === "invite")) {
      window.location.href = "/auth/confirm" + (search || hash);
    } else if (type === "recovery" || (tokenHash && type === "recovery")) {
      window.location.href = "/auth/reset-password" + (search || hash);
    } else if (code) {
      // PKCE flow - redirect to confirm with code
      window.location.href = "/auth/confirm" + search;
    } else if (hash.includes("type=invite")) {
      window.location.href = "/auth/confirm" + hash;
    } else if (hash.includes("type=recovery")) {
      window.location.href = "/auth/reset-password" + hash;
    }
  }, []);

  return null;
}
