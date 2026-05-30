"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    async function verifyToken() {
      const params = new URLSearchParams(window.location.search);
      const token_hash = params.get("token_hash");
      const type = params.get("type") as "recovery" | null;

      if (token_hash && type) {
        const { error } = await supabase.auth.verifyOtp({ token_hash, type });
        if (error) {
          setError("This reset link has expired or is invalid. Please request a new one.");
        } else {
          setReady(true);
        }
      } else {
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          setReady(true);
        } else {
          const { data: listener } = supabase.auth.onAuthStateChange((event) => {
            if (event === "PASSWORD_RECOVERY") {
              setReady(true);
              listener.subscription.unsubscribe();
            }
          });
        }
      }
      setVerifying(false);
    }

    verifyToken();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!password) { setError("Please enter a new password."); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    } else {
      window.location.href = "/login";
    }
  }

  return (
    <div className="min-h-screen bg-[#f0f7f8] flex items-center justify-center px-5">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src="/logo.svg" alt="Clearpath Data" className="h-10 w-auto" />
          <div className="leading-[1.2]">
            <div className="text-base font-semibold">
              <span className="text-[#112b50]">Clear</span>
              <span className="text-[#ef9f38]">path</span>
            </div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#64b8c0]">DATA</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 px-8 py-10">
          <h1 className="text-2xl font-bold text-[#112b50] text-center">Reset your password</h1>
          <p className="mt-2 text-sm text-neutral-500 text-center">
            Enter your new password below
          </p>

          {verifying && (
            <p className="mt-8 text-center text-sm text-neutral-400">Verifying your link…</p>
          )}

          {!verifying && !ready && error && (
            <div className="mt-8 text-center space-y-3">
              <p className="text-sm text-red-500">{error}</p>
              <a href="/login" className="text-sm text-[#64b8c0] hover:underline">
                Back to login
              </a>
            </div>
          )}

          {!verifying && ready && (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">New password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#64b8c0] focus:ring-2 focus:ring-[#64b8c0]/20 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Confirm password</label>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Repeat your password"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#64b8c0] focus:ring-2 focus:ring-[#64b8c0]/20 transition"
                />
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#112b50] py-3 text-sm font-semibold text-white hover:bg-[#1a3a6b] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Updating…" : "Update password"}
              </button>
            </form>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-neutral-400">
          <a href="/login" className="hover:text-[#112b50] transition">← Back to login</a>
        </p>

      </div>
    </div>
  );
}
