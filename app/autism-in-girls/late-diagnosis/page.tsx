import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Late Autism Diagnosis in Girls and Women | WeBearish',
  description: 'Why autistic girls are diagnosed years later than boys, what the missed years cost, and what late diagnosis means for identity and support.',
  alternates: { canonical: 'https://webearish.com/autism-in-girls/late-diagnosis' },
};

export default function GirlsLateDiagnosisPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/autism-in-girls" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Autism in Girls</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>AUTISM IN GIRLS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Late Diagnosis: Why Girls Are Missed
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Autistic girls are diagnosed an average of 1.5 to 4 years later than autistic boys. Many are not diagnosed until adulthood — often not until their 30s, 40s, or later. This is not because their autism is less real. It is because the diagnostic system was built around a narrow, male-coded presentation of autism that does not reflect how autism presents in many girls.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Girls Are Missed</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'The diagnostic criteria were built on male samples', desc: 'Early autism research focused almost entirely on boys. The resulting diagnostic criteria reflect male-typical presentations — leading to systematic underidentification of girls who present differently.' },
              { label: 'Masking obscures the symptoms', desc: 'Girls who have learned to copy neurotypical social behavior appear to "pass" in ways that don\'t trigger referrals for evaluation. They may be thought of as shy, anxious, or quirky rather than autistic.' },
              { label: 'Girls are more socially motivated', desc: 'Many autistic girls want to connect socially and put significant effort into doing so — which looks different from the stereotype of autistic children who avoid social interaction.' },
              { label: 'Special interests are less visible', desc: 'Autistic girls often have special interests in socially acceptable areas — animals, books, fictional characters, psychology — that don\'t trigger the same noticing as stereotypically "unusual" special interests.' },
              { label: 'Misdiagnoses are common', desc: 'Girls who are eventually diagnosed autistic often first receive diagnoses of anxiety, depression, OCD, ADHD, borderline personality disorder, or eating disorders. These are not wrong — they are real co-occurrences — but they can delay the underlying autism identification.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Late Diagnosis Means</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            A late diagnosis is not just delayed paperwork. The missed years have consequences:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Years of unexplained difficulty — social, academic, emotional — often attributed to personal failure rather than neurological difference.',
              'Internalized shame and self-blame for not being able to do things that appeared easy for others.',
              'Development of mental health conditions (anxiety, depression, burnout) that might have been reduced with earlier understanding.',
              'Missed accommodations in school and later in workplace settings.',
              'Identity confusion — not knowing who you are under the mask, because the mask has been worn so long.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>--</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginTop: 16 }}>
            A late diagnosis also brings relief, self-understanding, and access to community. It is never too late. It matters at every age.
          </p>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. If you have a daughter who has always seemed to be working harder than everyone else to keep up — who falls apart at home after holding it together all day — please consider whether autism might explain what other frameworks have not.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/autism-in-girls/masking" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Masking →</Link>
            <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Getting a Diagnosis →</Link>
            <Link href="/autism-in-girls/school-advocacy" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>School Advocacy →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
