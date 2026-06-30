"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const links = [
  { href: "/#who-its-for", label: "Who is this for" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#architecture", label: "Architecture" },
  { href: "/#early-access", label: "Early Access" },
  { href: "/#why-it-matters", label: "Why it matters" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const drawer = (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed", inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 9998,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed", top: 0, left: 0,
          width: "100%", height: "100%",
          backgroundColor: "#ffffff",
          zIndex: 9999,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid #f5f5f5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/logo.svg" alt="Clearpath Data" style={{ height: 40, width: "auto", display: "block" }} />
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>
                <span style={{ color: "#112b50" }}>Clear</span>
                <span style={{ color: "#ef9f38" }}>path</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#64b8c0" }}>DATA</div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: "none", background: "transparent", cursor: "pointer" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#112b50" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav style={{ display: "flex", flexDirection: "column", padding: "24px" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ padding: "14px 0", fontSize: 15, fontWeight: 500, color: "#404040", borderBottom: "1px solid #f0f0f0", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            style={{ marginTop: 24, borderRadius: 999, backgroundColor: "#64b8c0", padding: "14px 20px", fontSize: 14, fontWeight: 600, color: "#ffffff", textAlign: "center", textDecoration: "none" }}
          >
            Contact us
          </a>
          <a
            href="/login"
            onClick={() => setOpen(false)}
            style={{ marginTop: 10, borderRadius: 999, border: "1px solid rgba(17,43,80,0.2)", padding: "14px 20px", fontSize: 14, fontWeight: 500, color: "#112b50", textAlign: "center", textDecoration: "none" }}
          >
            Client Login
          </a>
        </nav>
      </div>
    </>
  );

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg hover:bg-neutral-100 transition"
      >
        <span className={`block w-5 h-[2px] bg-[#112b50] rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-5 h-[2px] bg-[#112b50] rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-[2px] bg-[#112b50] rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Portal: renders directly under <body> */}
      {mounted && createPortal(drawer, document.body)}
    </div>
  );
}
