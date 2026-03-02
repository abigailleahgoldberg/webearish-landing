import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Autism in Adults: Resources and Guides | WeBearish",
  description: "Late diagnosis, employment rights, housing options, relationships, and autistic burnout in adulthood.",
  alternates: { canonical: "https://webearish.com/ages/adult" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/ages" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Age Guides
        </Link>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>Autism in Adults</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Late Diagnosis in Adulthood</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Many autistic adults were never diagnosed in childhood. Receiving a diagnosis as an adult can bring relief, grief, and a need to reinterpret decades of experience. You are not obligated to disclose to anyone. Finding autistic community is often the most meaningful step you can take in the period after diagnosis.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Employment Rights</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>The Americans with Disabilities Act requires employers to provide reasonable accommodations for employees with disabilities, including autism. Disclosing at work is a personal decision with real risks and real benefits. You do not have to disclose your diagnosis to request accommodations. You can describe your needs without using the word autism.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Relationships</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Autistic adults navigate relationships with the same desires as anyone else. Friendships and romantic relationships may require more explicit communication and less reliance on unspoken norms. Many autistic people find that relationships with other autistic or neurodivergent people require significantly less effort and masking.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Autistic Burnout</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Autistic burnout is a state of physical, mental, and emotional exhaustion caused by sustained masking and unrelenting demands. It can involve loss of previously held skills. Recovery requires reducing demands, not increasing them. Burnout is preventable. It should not be treated as a personal failing.</p>
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
