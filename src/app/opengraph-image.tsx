import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Clearpath Data — Inventory Analytics for Retailers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#64b8c0",
            display: "flex",
          }}
        />

        {/* Logo text */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 32 }}>
          {/* Icon placeholder circle */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#f0f7f8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #64b8c0",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#112b50",
                display: "flex",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
              <span style={{ color: "#112b50" }}>Clear</span>
              <span style={{ color: "#ef9f38" }}>path</span>
            </div>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.3em",
                color: "#64b8c0",
                marginTop: 4,
              }}
            >
              DATA
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#404040",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Inventory analytics that help retailers make smarter decisions
        </div>

        {/* URL */}
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            color: "#64b8c0",
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          clearpathdata.org
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#112b50",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
