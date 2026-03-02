import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Employment Rights for Autistic Adults | WeBearish",
  description: "ADA rights, reasonable workplace accommodations, disclosure decisions, and employment support programs for autistic adults.",
  alternates: { canonical: "https://webearish.com/adults/employment" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/adults" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Adults Hub
        </Link>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>Autistic Adults and Employment</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Your Rights Under the ADA</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>The Americans with Disabilities Act prohibits employment discrimination against qualified individuals with disabilities, including autism. Employers with 15 or more employees must provide reasonable accommodations unless doing so would cause undue hardship. Reasonable accommodations are modifications that allow an employee with a disability to perform the essential functions of their job.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Disclosure: A Personal Decision</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>You are not required to disclose your autism diagnosis to an employer. You can request accommodations without disclosing your diagnosis — you can describe your needs without using the word autism. Disclosure changes the legal protections available to you but does not guarantee better treatment. It is a personal decision with real risks and real benefits that depends on your specific employer and situation.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Accommodations to Request</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Common autism-related workplace accommodations include: written instructions rather than verbal only, a quieter workspace or permission to use noise-canceling headphones, flexible hours to avoid sensory-overwhelming commute times, the ability to work remotely, clear and specific feedback delivered in writing, advance warning for schedule or routine changes, and permission to skip optional social events.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Employment Support Programs</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Vocational rehabilitation services are available in every US state to support autistic adults in finding and maintaining employment. The Division of Vocational Rehabilitation (DVR) or similar agency provides job coaching, training, and placement support. Ask your state's disability services agency about autism-specific employment programs.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
          <Link href="/voices" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autistic Voices →</Link>
        </div>
      </div>
    </div>
  );
}
