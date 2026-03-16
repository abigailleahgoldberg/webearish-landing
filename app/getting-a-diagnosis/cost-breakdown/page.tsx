import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism Evaluation Cost Breakdown | WeBearish',
  description: 'What does an autism evaluation actually cost? Breakdown of private pay, insurance, school evaluation, and low-cost options for families.',
  alternates: { canonical: 'https://webearish.com/getting-a-diagnosis/cost-breakdown' },
};

export default function CostBreakdownPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Getting a Diagnosis</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>AUTISM DIAGNOSIS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Autism Evaluation Costs: What to Expect
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          The cost of an autism evaluation varies enormously depending on where you go, what insurance covers, and whether you pursue a private or school-based evaluation. Understanding the cost landscape helps families plan — and find options they didn't know existed.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Private Evaluation Costs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Comprehensive neuropsychological evaluation', desc: '$2,500 – $5,000+ out of pocket. The most thorough option, typically covering autism, ADHD, learning disabilities, and cognitive testing. Often has the longest waitlists.' },
              { label: 'Autism-specific evaluation (developmental pediatrician or psychologist)', desc: '$1,500 – $3,500 out of pocket. Focuses specifically on autism diagnosis without the full neuropsychological battery.' },
              { label: 'Psychiatric evaluation', desc: '$500 – $2,000+. May be faster to access and more covered by insurance, but less comprehensive for autism specifically.' },
              { label: 'Speech-language assessment (add-on)', desc: '$300 – $800. Often needed alongside autism evaluation to document communication needs for school services.' },
              { label: 'Occupational therapy assessment (add-on)', desc: '$300 – $600. Documents sensory processing and fine motor needs.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Lower-Cost and No-Cost Options</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'School evaluation (free)', desc: 'Parents of school-age children can request a free evaluation from the school district. Schools must evaluate if there is reason to suspect a disability. The school evaluation is educationally focused and may not provide a clinical diagnosis, but it can qualify a child for special education services.' },
              { label: 'University training clinics', desc: 'Many universities with psychology, speech, or developmental programs offer evaluations at significantly reduced cost — often $200-$800 — conducted by graduate students under licensed supervision.' },
              { label: 'Federally Qualified Health Centers', desc: 'FQHCs provide services on a sliding scale based on income. Some have developmental pediatricians or psychologists on staff.' },
              { label: 'Medicaid', desc: 'Medicaid covers autism evaluation with no out-of-pocket cost. Medicaid-accepting evaluators may have longer waitlists.' },
              { label: 'State-funded developmental disability agencies', desc: 'Many states have early intervention programs (for children under 3) and school-age programs that include evaluation at no cost.' },
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
            We are not doctors. We are advocates. Cost should not be a barrier to diagnosis. Free and low-cost options exist — they may require more research to find and more patience to access.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/getting-a-diagnosis/insurance" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Insurance Coverage →</Link>
            <Link href="/getting-a-diagnosis/finding-evaluators" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Finding Evaluators →</Link>
            <Link href="/getting-a-diagnosis/what-to-expect" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>What to Expect →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
