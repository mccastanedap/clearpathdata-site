"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email) { setError("Please enter your email address."); return; }

    setStatus("loading");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://clearpathdata.org/auth/reset-password",
    });

    if (error) {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    } else {
      setStatus("sent");
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

          {status === "sent" ? (
            <div className="text-center space-y-3">
              <div className="text-4xl">📬</div>
              <h1 className="text-2xl font-bold text-[#112b50]">Check your email</h1>
              <p className="text-sm text-neutral-500">
                We sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the instructions.
              </p>
              <a href="/login" className="inline-block mt-4 text-sm text-[#64b8c0] hover:underline">
                ← Back to login
              </a>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-[#112b50] text-center">Forgot your password?</h1>
              <p className="mt-2 text-sm text-neutral-500 text-center">
                Enter your email and we'll send you a reset link
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

                {error && <p className="text-sm text-red-500">{error}</p>}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-xl bg-[#112b50] py-3 text-sm font-semibold text-white hover:bg-[#1a3a6b] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending…" : "Send reset link"}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-neutral-400">
          <a href="/login" className="hover:text-[#112b50] transition">← Back to login</a>
        </p>

      </div>
    </div>
  );
}
