import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WeBearish — Autism Acceptance Movement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#1B4FD8",
          color: "#FFB800",
          fontFamily: "Arial Black, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#FFB800",
            fontSize: 56,
            marginBottom: 24,
            color: "#1B4FD8",
          }}
        >
          🐻
        </div>
        <div style={{ fontSize: 72, fontWeight: 900, marginBottom: 12, color: "#FFFFFF" }}>
          WeBearish
        </div>
        <div style={{ fontSize: 28, color: "#FFB800", marginBottom: 8 }}>
          Autism Acceptance Movement
        </div>
        <div style={{ fontSize: 22, color: "#FFFFFF", opacity: 0.7 }}>
          webearish.com
        </div>
      </div>
    ),
    { ...size }
  );
}
