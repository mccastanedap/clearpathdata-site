"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function SetPasswordPage() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("error") === "expired") setExpired(true);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!businessName.trim() || !businessType.trim()) {
      setError("Please complete your business name and business type.");
      return;
    }
    if (!password) { setError("Please enter a password."); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      password,
      data: { business_name: businessName, business_type: businessType }
    });

    if (error) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    } else {
      window.location.href = "https://app.clearpathdata.org";
    }
  }

  return (
    <div className="min-h-screen bg-[#f0f7f8] flex items-center justify-center px-5">
      <div className="w-full max-w-md">

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
          <h1 className="text-2xl font-bold text-[#112b50] text-center">Set your password</h1>
          <p className="mt-2 text-sm text-neutral-500 text-center">
            Create a password to access your Clearpath Data account
          </p>

          {expired ? (
            <div className="mt-8 text-center space-y-3">
              <p className="text-sm text-red-500">
                This invitation link has expired or was already used. Please ask Clearpath Data for a new one.
              </p>
              <a href="/#contact" className="text-sm text-[#64b8c0] hover:underline">
                Contact Clearpath Data
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Business name</label>
                <input
                  type="text"
                  required
                  autoComplete="organization"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Your company name"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#64b8c0] focus:ring-2 focus:ring-[#64b8c0]/20 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Business type</label>
                <select
                  required
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-[#64b8c0] focus:ring-2 focus:ring-[#64b8c0]/20 transition"
                >
                  <option value="">Select your business type</option>
                  <option value="Juice bar">Juice bar</option>
                  <option value="Coffee shop">Coffee shop</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Retail store">Retail store</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">New password</label>
                <input
                  type="password"
                  autoComplete="new-password"
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
                  autoComplete="new-password"
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
                {loading ? "Setting password…" : "Set password & enter portal"}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}