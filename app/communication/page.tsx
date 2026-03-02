import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Autism Communication Resources | WeBearish",
  description: "Communication resources for autistic people and their families: AAC, augmentative communication, and supporting all forms of communication.",
  alternates: { canonical: "https://webearish.com/communication" },
};
export default function CommunicationPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--lime)", fontWeight: 700 }}>COMMUNICATION</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-2px", margin: "12px 0 16px" }}>Communication and AAC</h1>
        <p style={{ fontSize: 16, color: "rgba(250,250,248,0.55)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>Every autistic person has the right to a communication system that works for them. That system may include speech, AAC, writing, sign, pictures, or any combination.</p>
        <Link href="/communication/aac" style={{ textDecoration: "none", display: "block", maxWidth: 480 }}>
          <div style={{ background: "rgba(184,232,135,0.06)", border: "1px solid rgba(184,232,135,0.25)", padding: "28px 24px" }}>
            <div style={{ fontWeight: 900, fontSize: 18, color: "var(--lime)", marginBottom: 10 }}>AAC Complete Guide →</div>
            <p style={{ fontSize: 14, color: "rgba(250,250,248,0.6)", lineHeight: 1.65, margin: 0 }}>Everything about Augmentative and Alternative Communication: types, devices, apps, how to introduce AAC, funding, and how to support AAC users.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
