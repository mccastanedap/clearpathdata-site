"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Forgot password modal
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotStatus, setForgotStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [forgotError, setForgotError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email) { setError("Please enter your email address."); return; }
    if (!password) { setError("Please enter your password."); return; }

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    } else {
      window.location.href = "https://app.clearpathdata.org";
    }
  }

  async function handleForgot(e: React.FormEvent) {
    e.preventDefault();
    setForgotError("");

    if (!forgotEmail) { setForgotError("Please enter your email address."); return; }

    setForgotStatus("loading");
    const { error } = await supabase.auth.resetPasswordForEmail(forgotEmail, {
      redirectTo: "https://clearpathdata.org/auth/reset-password",
    });

    if (error) {
      setForgotError("Something went wrong. Please try again.");
      setForgotStatus("idle");
    } else {
      setForgotStatus("sent");
    }
  }

  function closeForgot() {
    setShowForgot(false);
    setForgotEmail("");
    setForgotStatus("idle");
    setForgotError("");
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

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 px-8 py-10">
          <h1 className="text-2xl font-bold text-[#112b50] text-center">Client Portal</h1>
          <p className="mt-2 text-sm text-neutral-500 text-center">
            Sign in with the credentials provided by Clearpath Data
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#64b8c0] focus:ring-2 focus:ring-[#64b8c0]/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#64b8c0] focus:ring-2 focus:ring-[#64b8c0]/20 transition"
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="text-right">
              <button
                type="button"
                onClick={() => setShowForgot(true)}
                className="text-xs text-[#64b8c0] hover:underline"
              >
                Forgot your password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#112b50] py-3 text-sm font-semibold text-white hover:bg-[#1a3a6b] transition mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-neutral-400">
            Don&apos;t have access?{" "}
            <a href="/#contact" className="text-[#64b8c0] hover:underline">
              Contact us
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-400">
          <a href="/" className="hover:text-[#112b50] transition">← Back to Clearpath Data</a>
        </p>

      </div>

      {/* Forgot password modal */}
      {showForgot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-5"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          onClick={(e) => { if (e.target === e.currentTarget) closeForgot(); }}
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm px-8 py-8 relative">

            {/* Close button */}
            <button
              onClick={closeForgot}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {forgotStatus === "sent" ? (
              <div className="text-center space-y-3">
                <div className="text-4xl">📬</div>
                <h2 className="text-xl font-bold text-[#112b50]">Check your email</h2>
                <p className="text-sm text-neutral-500">
                  We sent a reset link to <strong>{forgotEmail}</strong>. Check your inbox and follow the instructions.
                </p>
                <button
                  onClick={closeForgot}
                  className="mt-2 text-sm text-[#64b8c0] hover:underline"
                >
                  Back to login
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-[#112b50]">Forgot your password?</h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Enter your email and we'll send you a reset link.
                </p>

                <form onSubmit={handleForgot} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#64b8c0] focus:ring-2 focus:ring-[#64b8c0]/20 transition"
                    />
                  </div>

                  {forgotError && <p className="text-sm text-red-500">{forgotError}</p>}

                  <button
                    type="submit"
                    disabled={forgotStatus === "loading"}
                    className="w-full rounded-xl bg-[#112b50] py-3 text-sm font-semibold text-white hover:bg-[#1a3a6b] transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {forgotStatus === "loading" ? "Sending…" : "Send reset link"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
