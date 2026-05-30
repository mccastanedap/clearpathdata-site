"use client";

import { useEffect } from "react";

export default function AuthRedirectHandler() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.includes("type=invite")) {
      window.location.href = "/auth/confirm" + hash;
    } else if (hash && hash.includes("type=recovery")) {
      window.location.href = "/auth/reset-password" + hash;
    }
  }, []);

  return null;
}
