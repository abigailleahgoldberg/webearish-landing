import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'School Advocacy for Autistic Girls | WeBearish',
  description: 'How to advocate for autistic girls in school settings — getting the right evaluation, IEP supports that reflect how girls present, and fighting against the bias that misses them.',
  alternates: { canonical: 'https://webearish.com/autism-in-girls/school-advocacy' },
};

export default function GirlsSchoolAdvocacyPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/autism-in-girls" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Autism in Girls</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>AUTISM IN GIRLS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          School Advocacy for Autistic Girls
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Autistic girls in school face a double challenge: an educational system that often misses their autism in the first place, and one that — once diagnosis is obtained — may provide supports designed for a different presentation. Advocacy must address both.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The School Identification Problem</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Schools identify students for evaluation based on observed behavior. Autistic girls who have learned to camouflage in school settings are often invisible to the system until they collapse.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'A girl who holds it together at school and falls apart at home will not be flagged for evaluation by teachers who only see the school behavior.',
              'Girls who have academic success are often told they "can\'t be autistic" because of their grades — ignoring the enormous effort behind that performance.',
              '"She has friends" is not evidence against autism. Many autistic girls have friends while struggling significantly with the social demands involved.',
              'Requesting a school evaluation in writing triggers a timeline and legal obligations. Verbal conversations do not.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>--</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Advocating for Appropriate Evaluation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Request a comprehensive evaluation in writing', desc: 'Submit your request by email or certified letter to the school principal and special education director. Schools have 60 days to complete evaluation after written consent.' },
              { label: 'Document the home behavior', desc: 'Keep notes or video of the meltdowns, shutdowns, exhaustion, and dysregulation that happen at home. This context is critical for evaluators who only see the school mask.' },
              { label: 'Request evaluators familiar with female presentation', desc: 'Ask whether the evaluators have experience with autistic girls, masking, and social camouflage. This is a legitimate question that affects evaluation validity.' },
              { label: 'Provide input formally', desc: 'Submit a written parent statement for the evaluation. Describe what you see at home in detail. Ask that your observations be specifically addressed in the evaluation report.' },
              { label: 'Consider independent evaluation', desc: 'If the school evaluation misses the autism, you have the right to request an Independent Educational Evaluation (IEE) at school expense if you disagree with the school\'s evaluation.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. If you know something is wrong and the school says your daughter is fine — trust what you are seeing. You have the right to push for more.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/iep" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>IEP Guide →</Link>
            <Link href="/autism-in-girls/masking" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Masking →</Link>
            <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Getting a Diagnosis →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
