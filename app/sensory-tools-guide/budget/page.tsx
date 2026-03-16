import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sensory Tools on a Budget | WeBearish',
  description: 'Affordable sensory tools for autistic children — DIY options, discount sources, insurance coverage, and how to get the most impact for less money.',
  alternates: { canonical: 'https://webearish.com/sensory-tools-guide/budget' },
};

export default function SensoryToolsBudgetPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/sensory-tools-guide" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Sensory Tools Guide</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Budget Tools</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>SENSORY TOOLS GUIDE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Sensory Tools on a Budget
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Sensory tools matter. They are not luxuries — they are accessibility tools that help autistic children participate in daily life. And yet the cost of sensory equipment, specialized clothing, and therapy tools adds up fast. This page is about getting the most impact for the least cost, finding free or low-cost alternatives, and knowing what resources exist to help cover expenses.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. Consult an occupational therapist for individualized sensory support.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Highest Impact, Lowest Cost</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Before spending money, consider what is free or already in your home:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Heavy work activities', desc: 'Carrying groceries, pushing laundry, wheelbarrow walks, animal walks — these deliver significant proprioceptive input and cost nothing. Build them into daily routines.' },
              { label: 'Household sensory play', desc: 'Rice bins, beans, water play, playdough, sand — all can be assembled cheaply from the kitchen or dollar store and provide hours of tactile regulation.' },
              { label: 'Existing furniture as tools', desc: 'A pile of sofa cushions becomes a crash pad. Blankets and pillows become a deep-pressure cocoon. Stair climbing delivers proprioceptive input. Look at your home through a sensory lens.' },
              { label: 'Free apps for regulation', desc: 'Many children regulate with visual or auditory input from devices they already have. YouTube white noise videos, free visual timer apps, and nature sound apps cost nothing.' },
              { label: 'Library sensory kits', desc: 'Some public libraries now lend sensory kits — fidget tools, noise-canceling headphones, weighted vests. Check with your local branch.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Low-Cost Alternatives to Expensive Tools</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Ear defenders vs. noise-canceling headphones', desc: '3M Peltor ear defenders for children cost $15-25 and provide excellent noise reduction. Active noise-canceling headphones are $100-300. For many children, the passive option is equally or more effective.' },
              { label: 'DIY weighted blanket', desc: 'Weighted blankets can cost $60-200 at retail. A DIY version uses plastic poly pellets (available on Amazon in bulk) sewn into a regular blanket or duvet cover. Total cost: $20-30 and an afternoon.' },
              { label: 'Dollar store fidgets', desc: 'Dollar stores and discount stores regularly stock stress balls, putty, small spinning tops, and tactile toys for $1-3. Test cheap options before investing in specialized fidget tools.' },
              { label: 'Foam bed rail bumpers as crash padding', desc: 'Pool noodles and foam bed rail bumpers are inexpensive alternatives to commercial crash pad foam. Stack with old blankets and pillows for a custom crash zone.' },
              { label: 'Resistance bands instead of therapy equipment', desc: 'Exercise resistance bands looped under a desk can provide proprioceptive input for leg bouncing (a common regulation behavior). They cost $5-10 and can replace more expensive fidget foot bands.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Financial Resources for Sensory Tools</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Medicaid waiver programs (Home and Community Based Services waivers) in many states cover sensory tools and adaptive equipment. Check your state\'s HCBS waiver.',
              'Flexible Spending Accounts (FSA) and Health Savings Accounts (HSA) can pay for many sensory tools if prescribed by an OT. Get a letter of medical necessity.',
              'The ABLE Act allows tax-advantaged ABLE accounts to be used for disability-related expenses including assistive technology and sensory tools.',
              'Autism-specific nonprofits and family support organizations sometimes offer grants for equipment purchases. Search your state\'s autism society.',
              'Buy Nothing groups, Facebook Marketplace, and autism parent Facebook groups are sources of used sensory equipment at reduced or no cost. Many families donate items their children outgrow.',
              'IEP schools must provide necessary sensory tools during school hours if documented as needed for FAPE. This includes weighted lap pads, fidgets, and noise-canceling headphones.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What to Buy First</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            If you have limited funds and need to prioritize, here is a ranked starting point based on common impact across sensory profiles:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              '1. Noise-reducing ear defenders or foam earplugs — sound sensitivity affects more settings than any other sensory challenge.',
              '2. Seamless socks and tagless clothing — daily comfort has outsized effects on baseline regulation.',
              '3. A fidget tool — $5-10, keeps hands busy, reduces anxiety in multiple settings.',
              '4. A weighted lap pad — cheaper than a full weighted blanket, usable at school.',
              '5. A visual timer — reduces transition anxiety with predictable time structure.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.06)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide/visual" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Visual Tools →</Link>
            <Link href="/sensory-tools-guide/auditory" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Auditory Tools →</Link>
            <Link href="/sensory-tools-guide/tactile" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Tactile Tools →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Hub →</Link>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Resources →</Link>
            <Link href="/autism-diagnosis-cost" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Diagnosis Cost Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
