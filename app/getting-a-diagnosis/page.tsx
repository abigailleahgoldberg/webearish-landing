import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'How to Get an Autism Diagnosis: A Parent\'s Complete Guide | WeBearish',
  description: 'Step-by-step guide to getting your child evaluated for autism. What to say to your doctor, what the evaluation involves, and what happens after the diagnosis.',
  alternates: { canonical: 'https://www.webearish.com/getting-a-diagnosis' },
}
const steps = [
  {
    num: 1, title: 'Document what you are observing',
    body: `Before any appointment, write down what you have noticed. Be specific. Not "he seems different" — but "he lines up his toys every morning for 20 minutes and becomes very distressed if they are moved." Not "she has trouble with social stuff" — but "she does not initiate play with other children but engages deeply in parallel play and has detailed knowledge of her special interests."

Specifics matter. Evaluators need concrete examples, not general impressions. Keep a notes document on your phone and add to it over 2-4 weeks before your first appointment.`
  },
  {
    num: 2, title: 'Request a referral from your pediatrician',
    body: `Book an appointment specifically to discuss your concerns. At the appointment, use direct language: "I would like a referral for a comprehensive developmental evaluation for autism."

If your pediatrician dismisses your concerns, you have two options: push back with your documented observations, or ask directly for a second opinion or specialist referral. You know your child. You have the right to request an evaluation.

Under IDEA (federal law), if your child is school-age, you can also request a free evaluation through your school district in writing. The district must respond within 60 days in most states.`
  },
  {
    num: 3, title: 'Understand what a comprehensive evaluation includes',
    body: `A proper autism evaluation is not a single appointment. A thorough evaluation typically includes:

A developmental history interview with parents. Direct observation of the child. Standardized assessment tools (ADOS-2 is the current gold standard). Cognitive and language assessment. Review of school records and teacher reports.

Be cautious of any evaluation that takes less than a full day or does not include parent interviews and direct child observation. Quick screenings are a starting point — not a diagnosis.`
  },
  {
    num: 4, title: 'Know your rights during the process',
    body: `You have the right to receive the evaluation report in writing. You have the right to request an independent evaluation if you disagree with the results. You have the right to bring a support person to any meeting. You have the right to ask any question and receive a plain-English answer.

If your child is evaluated through the school district, you have the right to an IEP meeting within 30 days of a qualifying result. If you disagree with the school's evaluation, you can request an Independent Educational Evaluation (IEE) at district expense.`
  },
  {
    num: 5, title: 'After the diagnosis: what actually matters',
    body: `A diagnosis is information. It is not a ceiling. It does not define what your child can or cannot do. It opens access to services, support, and community — and it gives your child language for who they are.

What matters most after diagnosis is not finding the right intervention program. It is building a support system that respects your child's identity and meets their actual needs. That starts with listening to autistic adults about their own experiences — because your child will become an autistic adult.

WeBearish exists for this moment. You are not alone, and neither is your child.`
  },
]
export default function GettingADiagnosisPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--dark,#0F1A0F)', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ padding: '64px 5vw 56px', maxWidth: 800, margin: '0 auto', borderBottom: '1px solid rgba(184,232,135,0.1)', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '3px', color: '#B8E887', marginBottom: 16, fontWeight: 700 }}>PARENT GUIDE</div>
        <h1 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#FAFAF8', margin: '0 0 16px', letterSpacing: '-1px', lineHeight: 1.1 }}>
          How to Get Your Child Evaluated for Autism
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.45)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          A plain-English guide to the evaluation process — from first concerns to diagnosis and beyond.
        </p>
        <p style={{ fontSize: 12, color: 'rgba(250,250,248,0.25)', marginTop: 16 }}>
          This guide is for informational purposes only. It is not a substitute for professional medical advice. We never diagnose — we inform.
        </p>
      </div>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '56px 5vw' }}>
        {steps.map(step => (
          <div key={step.num} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid rgba(184,232,135,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, background: 'rgba(184,232,135,0.1)', border: '1px solid rgba(184,232,135,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 16, fontWeight: 900, color: '#B8E887' }}>{step.num}</span>
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 900, color: '#FAFAF8', margin: 0, lineHeight: 1.3 }}>{step.title}</h2>
            </div>
            <div style={{ paddingLeft: 60 }}>
              {step.body.split('\n\n').map((para, i) => (
                <p key={i} style={{ color: 'rgba(250,250,248,0.6)', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>{para}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Email capture */}
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '36px', textAlign: 'center', marginTop: 16 }}>
          <h3 style={{ fontSize: 20, fontWeight: 900, color: '#FAFAF8', marginBottom: 8 }}>Get our free parent guide</h3>
          <p style={{ color: 'rgba(250,250,248,0.45)', marginBottom: 24, fontSize: 14 }}>
            Join our community and get the WeBearish Parent Starter Guide — what to read, who to trust, and how to advocate for your child.
          </p>
          <form action="https://formspree.io/f/webearish-parent" method="POST" style={{ display: 'flex', gap: 12, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input type="email" name="email" placeholder="your@email.com" required
              style={{ flex: 1, minWidth: 200, padding: '12px 16px', background: 'rgba(250,250,248,0.08)', border: '1px solid rgba(184,232,135,0.2)', color: '#FAFAF8', fontSize: 14, outline: 'none' }} />
            <button type="submit"
              style={{ background: '#B8E887', color: '#0F1A0F', fontWeight: 900, fontSize: 13, padding: '12px 24px', border: 'none', letterSpacing: '1px', cursor: 'pointer' }}>
              GET FREE GUIDE
            </button>
          </form>
          <p style={{ fontSize: 11, color: 'rgba(250,250,248,0.2)', marginTop: 12 }}>No spam. Unsubscribe anytime.</p>
        </div>
      </div>
      <div style={{ background: '#1A3A1A', borderTop: '1px solid rgba(184,232,135,0.1)', padding: '48px 5vw', textAlign: 'center' }}>
        <p style={{ color: 'rgba(250,250,248,0.4)', fontSize: 15, marginBottom: 20 }}>
          More resources for parents and autistic people on the WeBearish blog.
        </p>
        <a href="/blog" style={{ display: 'inline-block', background: '#B8E887', color: '#0F1A0F', fontWeight: 900, fontSize: 14, padding: '14px 36px', textDecoration: 'none', letterSpacing: '1px' }}>
          READ THE BLOG
        </a>
      </div>
    </div>
  )
}
