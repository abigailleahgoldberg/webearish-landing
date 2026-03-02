'use client';
import Link from "next/link";
const GUIDES = [
  { href: "/adults/late-diagnosis", t: "Late Diagnosis", d: "What it means to receive an autism diagnosis as an adult, the grief and relief of it, and what to do next." },
  { href: "/adults/employment", t: "Employment", d: "ADA rights, workplace accommodations, disclosure decisions, and employment support programs." },
  { href: "/adults/relationships", t: "Relationships", d: "Dating, disclosing to partners, friendships, and finding autistic community." },
  { href: "/adults/burnout", t: "Autistic Burnout", d: "What autistic burnout is, why it happens, and what recovery actually looks like." },
  { href: "/adults/housing", t: "Housing and Independence", d: "Independent living options, supported living, and Medicaid waiver programs for autistic adults." },
];
export default function AdultsPageClient() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--lime)", fontWeight: 700 }}>FOR AUTISTIC ADULTS</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-2px", margin: "12px 0 16px" }}>Adults Hub</h1>
        <p style={{ fontSize: 16, color: "rgba(250,250,248,0.55)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>Resources for autistic adults: employment, housing, relationships, and the specific experience of living as an autistic adult in a neurotypical world.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {GUIDES.map(g => (
            <Link key={g.href} href={g.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,232,135,0.1)", padding: "24px 20px", height: "100%", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(184,232,135,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(184,232,135,0.1)")}>
                <div style={{ fontWeight: 800, fontSize: 15, color: "var(--lime)", marginBottom: 8 }}>{g.t}</div>
                <p style={{ fontSize: 13, color: "rgba(250,250,248,0.5)", lineHeight: 1.6, margin: 0 }}>{g.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
