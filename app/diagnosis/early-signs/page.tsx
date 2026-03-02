import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Early Signs of Autism by Age Group | WeBearish",
  description: "A guide to early autism signs at ages 0-2, 2-5, and 5-12. For parents with questions about their child's development.",
  alternates: { canonical: "https://webearish.com/diagnosis/early-signs" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Diagnosis Guide
        </Link>
        <div style={{ marginTop: 24, marginBottom: 20, padding: '14px 20px', background: 'rgba(255,209,102,0.08)', border: '1px solid rgba(255,209,102,0.2)', fontSize: 13, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>
          For informational purposes only. Not medical advice. Consult a licensed professional.
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>Early Signs of Autism by Age Group</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>About This Guide</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>These are signs that may indicate autism, not a diagnostic checklist. Many autistic children show some of these signs. Many non-autistic children show them too. Only a licensed professional can make a diagnosis. The goal here is to give parents language for what they are observing.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Ages 0-2: Early Indicators</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Signs in the first two years may include limited or no eye contact by 6 months, not responding to name by 12 months, no pointing or waving by 12 months, no babbling by 12 months, loss of previously acquired speech or social skills at any age, limited social smiling, and unusual responses to sensory input. Loss of previously acquired skills at any age is always worth discussing with a pediatrician promptly.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Ages 2-5: Emerging Patterns</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Between ages 2 and 5, patterns may include differences in play (parallel rather than interactive, interest in parts of objects), language differences (echolalia, scripted speech, unusual tone), difficulty with transitions, strong sensory responses, limited imitation, differences in emotional expression, and hyperlexia (reading words above expected level with lower comprehension). Many autistic children receive their first diagnosis during this period.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Ages 5-12: School-Age Patterns</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>In school-age children, signs often become more visible in social contexts: difficulty with unstructured time, challenges with unwritten peer social rules, intense interests in specific topics, sensory challenges in school environments, meltdowns or shutdowns after school, and executive function challenges. High-masking autism, particularly in girls and gender-diverse children, may begin concealing signs during this period, delaying diagnosis.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/diagnosis/evaluation-process" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>The Evaluation Process →</a>
            <a href="/diagnosis/getting-assessed" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>How to Get Assessed →</a>
            <a href="/is-this-autism" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Is This Autism? →</a>
        </div>
      </div>
    </div>
  );
}
