import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Does an Autism Diagnosis Cost? | WeBearish',
  description: 'Real cost breakdown for autism evaluations: private ($2,000-$5,000), school evaluations (free), insurance coverage, and how to get evaluated at low or no cost.',
  alternates: { canonical: 'https://webearish.com/autism-diagnosis-cost' },
};

export default function AutismDiagnosisCostPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>GETTING A DIAGNOSIS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          How Much Does an Autism Diagnosis Cost?
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Cost is one of the most significant barriers to getting an autism diagnosis. Private evaluations are expensive, waitlists are long, and insurance coverage varies widely. This guide breaks down the real numbers, explains your free options, and tells you what to ask your insurer before you spend a dollar.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>The Real Cost of a Private Evaluation</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 20 }}>
            A comprehensive private autism evaluation in the United States typically costs between $2,000 and $5,000. Some specialized clinics or evaluators charge more. The range depends on location, provider type, and what is included in the evaluation.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Full neuropsychological evaluation', cost: '$3,000 -- $5,000', desc: 'Conducted by a licensed neuropsychologist. Includes IQ testing, memory, processing speed, executive function, adaptive skills, and autism-specific assessments. The most comprehensive option.' },
              { label: 'Developmental pediatrician evaluation', cost: '$1,500 -- $3,500', desc: 'Conducted by a physician specializing in child development. May be covered at a higher rate by insurance if billed under a medical code.' },
              { label: 'Psychologist evaluation (autism-focused)', cost: '$1,500 -- $3,000', desc: 'Includes autism-specific assessment tools (ADOS-2, ADI-R, CARS-2) plus cognitive testing. Varies significantly by region.' },
              { label: 'Speech-language pathology assessment only', cost: '$300 -- $800', desc: 'Can assess communication and some autism-related language patterns but does not produce a diagnosis on its own.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: 'rgba(250,250,248,0.9)' }}>{item.label}</div>
                  <div style={{ fontWeight: 900, fontSize: 14, color: 'var(--lime)', whiteSpace: 'nowrap' }}>{item.cost}</div>
                </div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.55)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Free Option: School Evaluation</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            If your child is school-age or younger (birth to 21), the public school system is required by federal law to evaluate them for free if you request it in writing. This comes from the Individuals with Disabilities Education Act (IDEA). The evaluation is at no cost to you, regardless of your income or insurance status.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            School evaluations have limitations. They assess educational need, not just clinical diagnosis. A school evaluation may determine that your child does not qualify for special education services even if a private evaluator would diagnose autism. The bar is different. But for families who cannot afford a private evaluation, a school evaluation is a real and useful option.
          </p>
          <div style={{ padding: '20px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.12)' }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--lime)', marginBottom: 10 }}>How to request a school evaluation:</div>
            <div style={{ fontFamily: 'monospace', fontSize: 13, lineHeight: 1.8, color: 'rgba(250,250,248,0.65)' }}>
              Write to your school principal and special education director. State: "I am requesting a comprehensive evaluation for special education eligibility under IDEA. I have concerns about [brief description]." Send via email with read receipt or certified mail. The school has 60 days to complete the evaluation after receiving written consent.
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Insurance Coverage: What to Know</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            All 50 US states have autism insurance mandate laws, but they vary significantly in what they require. Many plans cover at least some portion of a diagnostic evaluation. Whether you get covered depends on the plan type, the provider, how the evaluation is coded, and your specific policy.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
            {[
              { label: 'ACA marketplace and employer plans', desc: 'Required to cover autism diagnosis and treatment as an essential health benefit in most states. Check your specific state mandate.' },
              { label: 'Medicaid', desc: 'Covers autism evaluation for children in most states. Medicaid through CHIP (Children\'s Health Insurance Program) often covers evaluation and many therapies. Eligibility is income-based.' },
              { label: 'Self-funded employer plans (ERISA)', desc: 'These are not subject to state insurance mandates. They follow federal rules only, which are less specific. Many large employer plans still cover evaluations, but you must verify.' },
              { label: 'Tricare (military families)', desc: 'Covers autism diagnosis and Applied Behavior Analysis. Military families should confirm provider network status before scheduling.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 14 }}>{item.label}: </span>
                  <span style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Questions to Ask Your Insurer Before You Schedule</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Call the member services number on your insurance card and ask these questions. Write down the answers, the date, and the name of the representative.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Is a comprehensive autism evaluation covered under my plan?',
              'What are the covered diagnostic codes? (Ask for ICD-10 codes Z03.89 and F84.0)',
              'Do I need a referral or prior authorization before scheduling an evaluation?',
              'Is the evaluator I am considering in-network? What is their NPI number?',
              'What is my deductible, and how much has already been met this year?',
              'What is my out-of-pocket maximum for this type of service?',
              'Is there a limit on the number of evaluation hours covered per year?',
              'If I get an out-of-network evaluation, what is the reimbursement rate?',
            ].map((q, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.06)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0, fontSize: 13 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 14, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{q}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Low-Cost and No-Cost Evaluation Options</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'University training clinics', desc: 'Many universities with psychology or speech programs offer evaluations at reduced cost, conducted by graduate students under licensed supervision. Search "[your city] university autism evaluation clinic."' },
              { title: 'Federally Qualified Health Centers (FQHCs)', desc: 'FQHCs receive federal funding and charge on a sliding scale based on income. They often have shorter wait times than private clinics. Find one at findahealthcenter.hrsa.gov.' },
              { title: 'Early Intervention (birth to age 3)', desc: 'Children under three can receive a free developmental evaluation through the Early Intervention program in every state. This is separate from the school system. Contact your state\'s Early Intervention program directly.' },
              { title: 'Autism Speaks resource navigator', desc: 'Autism Speaks maintains a navigator service that can help families find local evaluation resources. Look for their resource guide at autismspeaks.org (note: always evaluate organizational philosophy for alignment with autistic-led values).' },
              { title: 'State developmental disability agencies', desc: 'Some states have regional centers or developmental disability agencies that provide or fund evaluations for children with suspected developmental differences.' },
            ].map(item => (
              <div key={item.title} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>If You Are Denied Coverage</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Insurance denials are common and often successfully appealed. If your claim is denied, request the denial in writing with the specific reason. You have the right to file an internal appeal with your insurer, and then an external appeal with your state insurance commissioner if the internal appeal fails. Your state's Department of Insurance website has instructions for filing an external appeal. Do not give up after the first denial.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>All Resources →</Link>
            <Link href="/blog" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>WeBearish Blog →</Link>
            <Link href="/contact" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Contact Us →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/getting-a-diagnosis" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Getting a Diagnosis →</Link>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Resource Center →</Link>
            <Link href="/school-rights" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Rights →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
