'use client';
import Link from "next/link";
export default function ParentsPageClient() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--lime)", fontWeight: 700 }}>FOR PARENTS</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-2px", margin: "12px 0 16px" }}>Parent Hub</h1>
        <p style={{ fontSize: 16, color: "rgba(250,250,248,0.55)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>Resources for parents navigating diagnosis, services, school systems, and daily life with autistic children.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 64 }}>
          {[
            { href: "/parents/self-care", title: "Parent Self-Care", desc: "Caregiver burnout, respite care, and the resources you need to keep going." },
            { href: "/iep", title: "IEP Resource Center", desc: "Your legal rights, the meeting process, accommodations to request, and what to do when school says no." },
            { href: "/school-rights", title: "School Rights Guide", desc: "IDEA, FAPE, LRE, Section 504 vs IEP, and dispute resolution." },
            { href: "/safety", title: "Safety and Crisis Resources", desc: "Elopement prevention, emergency planning, and crisis lines." },
            { href: "/resources/by-state", title: "Resources by State", desc: "Medicaid waivers, insurance mandates, and autism organizations in your state." },
            { href: "/guides/meltdown-vs-tantrum", title: "Meltdown Guide", desc: "What causes meltdowns, what to do during one, and what never to do." },
          ].map(c => (
            <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,232,135,0.1)", padding: "24px 20px", height: "100%", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(184,232,135,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(184,232,135,0.1)")}>
                <div style={{ fontWeight: 800, fontSize: 15, color: "var(--cream)", marginBottom: 8 }}>{c.title}</div>
                <p style={{ fontSize: 13, color: "rgba(250,250,248,0.5)", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
