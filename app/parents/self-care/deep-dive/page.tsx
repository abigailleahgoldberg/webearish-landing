import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Parent Self-Care Deep Dive | WeBearish',
  description: 'A deeper look at sustainable self-care for parents of autistic children — beyond bubble baths, into the structural and emotional realities of caregiver sustainability.',
  alternates: { canonical: 'https://webearish.com/parents/self-care/deep-dive' },
};

export default function ParentSelfCareDeepDivePage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/parents" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Parents</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/parents/self-care" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Self-Care</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Deep Dive</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>PARENTS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Parent Self-Care Deep Dive
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          The phrase "self-care" has been reduced to bath products and candles. This page is about something more real: the structural, emotional, and physical sustainability of being a parent to an autistic child over the long haul. Not what you do in a bubble bath. What you build into your life so you can keep showing up as the parent your child needs, for years and decades, without burning completely out.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. If you are experiencing significant depression, anxiety, or caregiver burnout, please seek support from a mental health professional.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Caregiver Burnout Actually Is</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Research consistently shows that parents of autistic children experience higher rates of chronic stress, anxiety, and depression than parents of neurotypical children and even parents of children with other disabilities. This is not a character flaw. It is a predictable response to a genuinely demanding situation with inadequate systemic support.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Chronic vigilance', desc: 'Many autism parents are always on — monitoring for escalation, anticipating triggers, managing schedules, tracking appointments, coordinating services. This sustained state of alert is physically and neurologically costly.' },
              { label: 'Sleep deprivation', desc: 'Sleep problems affect 50-80% of autistic children. Their sleep problems become their parents\' sleep problems. Chronic sleep deprivation affects every cognitive and emotional function.' },
              { label: 'Grief that does not resolve', desc: 'Many autism parents experience ongoing grief — not grief about their child\'s autism, but grief about the gap between what they hoped parenting would be and what it actually is. Isolation. Lost milestones. Relationships that have been strained. This grief is real and it needs acknowledgment, not suppression.' },
              { label: 'Secondary traumatic stress', desc: 'Witnessing your child\'s distress repeatedly — meltdowns, pain responses, fear — can create trauma responses in caregivers. This is not weakness. It is a documented psychological phenomenon.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Structural Self-Care: Building a Sustainable Life</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Respite care', desc: 'Respite is not a luxury — it is medically necessary. Having someone else care for your child for a few hours so you can sleep, be alone, or do something restorative is not abandonment. It is sustainability. Look into Medicaid waiver programs, autism-specific respite services, and family support programs in your state.' },
              { label: 'Sharing the load', desc: 'If you have a partner, the distribution of caregiving labor needs to be regularly examined and renegotiated. Unequal distribution is one of the most common causes of caregiver burnout in two-parent homes. If you are a single parent, building a support network is not optional — it is survival.' },
              { label: 'Therapy for you', desc: 'Individual therapy for parents of autistic children is genuinely useful. Look for a therapist with experience in family caregiving, chronic stress, or autism specifically. The Gottman Institute and Psychology Today both have therapist directories.' },
              { label: 'Financial sustainability', desc: 'Autism caregiving can be expensive and can limit employment. Review what financial support is available — SSI for your child, Medicaid waivers, FSA/HSA, state family support programs. Reduce financial pressure where possible.' },
              { label: 'Community', desc: 'Isolation is the most dangerous component of caregiver burnout. Finding people who understand — other autism parents, family members who are genuinely supportive, an online community — provides the validation and relief that reduces burnout risk.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Permission Most Parents Need</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'You are allowed to be exhausted without it meaning you are failing.',
              'You are allowed to grieve, even if your child is loved and cherished.',
              'You are allowed to need things for yourself.',
              'You are allowed to not have an answer right now.',
              'You are allowed to be angry at systems that don\'t support your family.',
              'You are allowed to leave the dishes and take a walk.',
              'You are allowed to find this hard — because it is hard.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/parents/partnership" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Marriage &amp; Partnership →</Link>
            <Link href="/parents/single-parenting" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Single Parenting →</Link>
            <Link href="/parents/roadmap" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parent Roadmap →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/parents" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parents Hub →</Link>
            <Link href="/parents/siblings" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sibling Experience →</Link>
            <Link href="/community" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Community →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
