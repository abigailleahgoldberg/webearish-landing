'use client';
import Link from "next/link";
const GUIDES = [
  { href: "/ages/toddler", label: "Toddlers (0-5)", desc: "Early signs, early intervention, speech therapy, and what to expect in the first years." },
  { href: "/ages/school-age", label: "School Age (6-12)", desc: "IEP navigation, friendships, masking at school, and sensory challenges in the classroom." },
  { href: "/ages/teen", label: "Teens (13-17)", desc: "Puberty, identity, self-advocacy, dating, and preparing for adulthood." },
  { href: "/ages/adult", label: "Adults (18+)", desc: "Late diagnosis, employment rights, housing, relationships, and burnout." },
];
export default function AgesPageClient() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--lime)", fontWeight: 700 }}>AGE-BASED GUIDES</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-2px", margin: "12px 0 16px" }}>Autism at Every Age</h1>
        <p style={{ fontSize: 16, color: "rgba(250,250,248,0.55)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>Autism presents differently across the lifespan. Each stage brings different challenges, different strengths, and different support needs.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {GUIDES.map(g => (
            <Link key={g.href} href={g.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,232,135,0.1)", padding: "28px 24px", height: "100%", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(184,232,135,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(184,232,135,0.1)")}>
                <div style={{ fontWeight: 900, fontSize: 18, color: "var(--lime)", marginBottom: 10 }}>{g.label}</div>
                <p style={{ fontSize: 14, color: "rgba(250,250,248,0.55)", lineHeight: 1.65, margin: 0 }}>{g.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
