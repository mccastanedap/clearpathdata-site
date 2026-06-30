import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Clearpath Data — Inventory Analytics for Retailers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const logoData = readFileSync(join(process.cwd(), "public/logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, backgroundColor: "#64b8c0", display: "flex" }} />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoBase64} width={280} height={280} alt="Clearpath Data" style={{ objectFit: "contain" }} />

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            color: "#404040",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
            marginTop: 16,
          }}
        >
          Inventory analytics that help retailers make smarter decisions
        </div>

        {/* URL */}
        <div style={{ marginTop: 28, fontSize: 20, color: "#64b8c0", fontWeight: 600, letterSpacing: "0.05em" }}>
          clearpathdata.org
        </div>

        {/* Bottom accent */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 8, backgroundColor: "#112b50", display: "flex" }} />
      </div>
    ),
    { ...size }
  );
}
