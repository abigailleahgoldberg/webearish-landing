import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Housing and Independent Living for Autistic Adults | WeBearish",
  description: "Independent living options, supported living programs, Medicaid waivers, and housing resources for autistic adults.",
  alternates: { canonical: "https://webearish.com/adults/housing" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/adults" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Adults Hub
        </Link>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>Housing for Autistic Adults</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Range of Housing Options</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Autistic adults live in the full range of housing settings: independently, with family, with roommates, in supported living programs, in group homes, and in intentional autistic communities. There is no single right answer. The goal is maximum independence and quality of life with appropriate support.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Medicaid HCBS Waivers</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Medicaid Home and Community-Based Services (HCBS) waivers fund services that support autistic adults in living in the community rather than institutional settings. Services may include supported living, personal assistance, day programs, transportation, and more. Waitlists can be years long. Contact your state's developmental disability agency now, even if you do not need services immediately.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Supported Living</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Supported living programs provide assistance with daily activities while the person lives in their own home or in shared housing. Support levels vary from a few hours per week to 24-hour staffing. Finding supported living providers that are neurodiversity-affirming rather than compliance-focused significantly affects quality of life.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Planning Ahead</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Housing planning for autistic adults is most effective when started before it is urgent. If you have a young adult at home, beginning the conversation about future housing now gives time to explore options, get on waitlists, and understand what funding is available. Organizations like the Autism Housing Network provide resources for autistic adults and their families.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Intentional Communities</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Intentional communities for autistic adults, where residents share space and build community with support available, are a growing housing option. They are not available everywhere, but their number is increasing. The Autism Housing Network (autismhousingnetwork.org) maintains a directory.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
          <Link href="/voices" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autistic Voices →</Link>
        </div>
      </div>
    </div>
  );
}
