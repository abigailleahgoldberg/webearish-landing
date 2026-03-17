"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { label: "AutismAcceptance.world", href: "https://autismacceptance.world" },
  { label: "AI Skills Agents", href: "https://aiskillsagents.com" },
];

export default function NetworkBar() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const val = localStorage.getItem("webearish-network-bar-dismissed");
    if (val !== "1") setDismissed(false);
  }, []);

  const dismiss = () => {
    localStorage.setItem("webearish-network-bar-dismissed", "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div style={{
      background: "#0F1A0F",
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      position: "relative",
      fontSize: 11,
      letterSpacing: "0.5px",
      fontFamily: "'Nunito', sans-serif",
    }}>
      <span style={{ color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap" }}>
        WeBearish Network
      </span>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(184,232,135,0.8)",
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 700,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#b8e887")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(184,232,135,0.8)")}
          >
            {l.label}
          </a>
        ))}
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss network bar"
        style={{
          position: "absolute",
          right: 12,
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.35)",
          cursor: "pointer",
          fontSize: 14,
          lineHeight: 1,
          padding: "0 4px",
        }}
      >
        &times;
      </button>
    </div>
  );
}
