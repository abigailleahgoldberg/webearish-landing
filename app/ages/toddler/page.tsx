import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Autism in Toddlers (Ages 0-5) | WeBearish",
  description: "Early signs, early intervention, speech therapy, and what to expect in the early years of an autism diagnosis.",
  alternates: { canonical: "https://webearish.com/ages/toddler" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/ages" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Age Guides
        </Link>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>Autism in Toddlers</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Early Signs in Toddlers</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>The first signs of autism may appear in the first year: limited eye contact, not responding to name by 12 months, limited gesturing or pointing, and loss of previously acquired skills. Not all autistic toddlers show early signs, and many non-autistic toddlers show them temporarily. If you have concerns, discuss them with your pediatrician.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Early Intervention</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Early intervention services under Part C of IDEA are available from birth to age 3. They are provided in natural environments and are free for eligible children. Services may include speech-language therapy, occupational therapy, physical therapy, and developmental instruction. Early intervention does not require an autism diagnosis — developmental delay alone qualifies. Ask your pediatrician for a referral.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Therapy to Choose</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Multiple therapy approaches are used for young autistic children: speech-language therapy for communication, occupational therapy for sensory processing and motor development, ABA in various forms, and relationship-based approaches like Floortime. Research the approach before committing, and ask about the therapist's specific methods. What are the goals? How is progress measured? What does the therapist believe about autism?</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Parents Actually Need to Know</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Your child is autistic right now. Not a future non-autistic version of themselves. The goal is not to make them appear neurotypical. The goal is to support their development, give them communication access, understand their sensory needs, and help them thrive. Play matters. Relationship matters. Sensory safety matters. You do not have to have everything figured out in the first weeks.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/iep" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>IEP Resource Center →</Link>
          <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
          <Link href="/glossary" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autism Glossary →</Link>
        </div>
      </div>
    </div>
  );
}
