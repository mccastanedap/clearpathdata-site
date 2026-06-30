import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import AuthRedirectHandler from "@/components/AuthRedirectHandler";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clearpath Data — Inventory Analytics for Retailers",
    template: "%s | Clearpath Data",
  },
  description: "Clearpath Data gives retailers clear, actionable inventory insights. Stop guessing — know exactly what to reorder, when, and how much.",
  keywords: [
    "inventory analytics",
    "retail inventory management",
    "inventory insights",
    "retail data platform",
    "inventory optimization",
    "stock management software",
    "retail analytics",
    "inventory decision software",
  ],
  authors: [{ name: "Clearpath Data" }],
  creator: "Clearpath Data",
  metadataBase: new URL("https://clearpathdata.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clearpathdata.org",
    siteName: "Clearpath Data",
    title: "Clearpath Data — Inventory Analytics for Retailers",
    description: "Clearpath Data gives retailers clear, actionable inventory insights. Stop guessing — know exactly what to reorder, when, and how much.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Clearpath Data — Inventory Analytics for Retailers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clearpath Data — Inventory Analytics for Retailers",
    description: "Clearpath Data gives retailers clear, actionable inventory insights.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-neutral-500 hover:text-[#112b50] transition"
    >
      {children}
    </a>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`${spaceGrotesk.className} min-h-screen bg-white text-neutral-950 antialiased`}>
        {/* HEADER */}
        <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            {/* Logo — izquierda */}
            <a href="/" className="flex items-center gap-3 flex-shrink-0">
              <img src="/logo.svg" alt="Clearpath Data" className="h-10 w-auto" />
              <div className="leading-[1.2]">
                <div className="text-base font-semibold">
                  <span className="text-[#112b50]">Clear</span><span className="text-[#ef9f38]">path</span>
                </div>
                <div className="text-[11px] font-bold tracking-[0.2em] text-[#64b8c0]">DATA</div>
              </div>
            </a>

            {/* Nav + CTA — derecha juntos */}
            <div className="hidden md:flex items-center gap-7">
              <NavItem href="/#who-its-for">Who is this for</NavItem>
              <NavItem href="/#how-it-works">How it works</NavItem>
              <NavItem href="/#architecture">Architecture</NavItem>
              <NavItem href="/#early-access">Early Access</NavItem>
              <NavItem href="/#why-it-matters">Why it matters</NavItem>
              <a
                href="/#contact"
                className="rounded-full bg-[#64b8c0] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Contact us
              </a>
              <a
                href="/login"
                className="rounded-full border border-[#112b50]/20 px-5 py-2 text-sm font-medium text-[#112b50] hover:bg-[#112b50]/5 transition"
              >
                Client Login
              </a>
            </div>

            {/* Mobile hamburger */}
            <MobileNav />
          </div>
        </header>

        <AuthRedirectHandler />

        {/* CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#112b50] border-t border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 md:grid-cols-2">
            {/* Left */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo-dark.svg" alt="Clearpath Data" className="h-10 w-auto" />
                <div className="leading-[1.2]">
                  <div className="text-base font-semibold">
                    <span className="text-white">Clear</span><span className="text-[#ef9f38]">path</span>
                  </div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-[#64b8c0]">DATA</div>
                </div>
              </div>

              <p className="text-sm text-neutral-400 max-w-sm">
                Data-driven inventory analytics for modern retailers.
              </p>

              <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()} Clearpath Data. All rights reserved.
              </p>

              <p className="text-sm text-neutral-500">
                Designed and operated as an independent analytics platform.
              </p>
            </div>

            {/* Right */}
            <div className="flex md:justify-end">
              <nav className="flex flex-col gap-2 text-sm text-neutral-400">
                <a href="#who-its-for" className="hover:text-[#64b8c0] transition">Who is this for</a>
                <a href="#how-it-works" className="hover:text-[#64b8c0] transition">How it works</a>
                <a href="#architecture" className="hover:text-[#64b8c0] transition">Architecture</a>
                <a href="#early-access" className="hover:text-[#64b8c0] transition">Early Access</a>
                <a href="#contact" className="hover:text-[#64b8c0] transition">Contact</a>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
