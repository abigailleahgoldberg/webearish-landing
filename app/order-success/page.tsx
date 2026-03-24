"use client";
import Link from "next/link";

export default function OrderSuccess() {
  return (
    <div style={{ background: "#FEF9F2", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ textAlign: "center", maxWidth: 500, padding: "40px 24px" }}>
        <div style={{ fontSize: 72, marginBottom: 24 }}></div>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: "#4B7C2F", marginBottom: 16 }}>Order Confirmed!</h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "#6B5E4E", marginBottom: 8 }}>Thank you for being part of the movement.</p>
        <p style={{ fontSize: 14, color: "#9B8E82", marginBottom: 40 }}>You will receive a confirmation email shortly. Ships in 3-7 business days.</p>
        <Link href="/shop" style={{ background: "#4B7C2F", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 900, textDecoration: "none", fontSize: 14, letterSpacing: "1px", textTransform: "uppercase" }}>
          BACK TO SHOP
        </Link>
      </div>
    </div>
  );
}
