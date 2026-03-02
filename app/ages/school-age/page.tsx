import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Autism in School-Age Children (Ages 6-12) | WeBearish",
  description: "IEP navigation, friendships, masking at school, sensory challenges, and how to support your school-age autistic child.",
  alternates: { canonical: "https://webearish.com/ages/school-age" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/ages" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Age Guides
        </Link>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>Autism in School-Age Children</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The IEP in Practice</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>If your child has an IEP, read it in full. Do you understand every goal? Do the goals reflect your child's actual needs? Are the services being delivered as written? Many IEPs are technically compliant but practically insufficient. You have the right to request an IEP meeting at any time, not just at the annual review.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Masking at School</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Many autistic school-age children mask extensively at school — suppressing stims, monitoring their behavior, performing expected social responses — and then decompress at home. This is called the school-home divide: a child may appear fine at school and then melt down at home. Meltdowns at home after school often reflect the cost of masking, not the quality of the school day.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Friendships</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Friendships look different for autistic children. Some autistic children have no interest in peers. Some want connection deeply but struggle to navigate peer social rules. Both are valid. Supporting friendship might mean: facilitating connection around shared interests, reducing unstructured social demands, providing explicit teaching of social rules that are not intuitive, and advocating for a social environment that accommodates difference.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Sensory in School Settings</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Schools are often sensory challenging: fluorescent lights, crowded hallways, noisy cafeterias, and transitions every 45 minutes. Sensory accommodations can be written into an IEP: preferential seating, headphones, lunch in a quieter space, movement breaks, and advance warning before transitions. These accommodations significantly reduce meltdowns and improve learning.</p>
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
