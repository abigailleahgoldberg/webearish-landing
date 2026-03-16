import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marriage & Partnership When Parenting an Autistic Child | WeBearish',
  description: 'How autism caregiving stresses partnerships and what couples can do to protect their relationship while raising an autistic child.',
  alternates: { canonical: 'https://webearish.com/parents/partnership' },
};

export default function PartnershipPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/parents" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Parents</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Marriage &amp; Partnership</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>PARENTS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Marriage &amp; Partnership
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Parenting an autistic child puts unique strains on partnerships. The time demands, financial pressures, sleep deprivation, disagreements about approaches, and grief that comes in unexpected waves can pull couples apart in ways that standard relationship advice does not adequately address. The divorce and separation rates among parents of autistic children are higher than the general population. That statistic is not inevitable, but it is a signal worth taking seriously.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. If your partnership is under significant strain, couples therapy with a therapist experienced in caregiving families can be genuinely transformative.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How Autism Caregiving Stresses Relationships</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Unequal labor distribution', desc: 'In most households, one parent carries significantly more of the caregiving burden — managing appointments, communicating with schools, researching therapies, responding to crises. This imbalance creates resentment in the primary caregiver and disconnection in the other.' },
              { label: 'Different acceptance timelines', desc: 'Partners often process the diagnosis and its implications at different speeds. One partner may have moved into problem-solving mode while the other is still grieving. One may have accepted their child\'s neurology while the other is still searching for cures. These differences, if unacknowledged, create distance.' },
              { label: 'Disagreements about approach', desc: 'Decisions about therapy, education, discipline, disclosure, and daily accommodations can become significant sources of conflict. Couples who had parallel parenting philosophies with neurotypical children may find they diverge sharply.' },
              { label: 'Loss of couple identity', desc: 'With caregiving demands this intense, many couples stop being partners and become co-managers. The parts of the relationship that existed before the child — friendship, intimacy, shared interests — can be crowded out entirely.' },
              { label: 'Social isolation', desc: 'Many autism families withdraw from social activities because of the challenges of attending with their child. This isolation affects the couple as a unit — they lose the social connection and community that normally sustains adults.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Protects Relationships</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Regular explicit check-ins about the division of labor', desc: 'Not assumed, not defaulted — explicitly negotiated and regularly reviewed. Who is carrying which responsibilities? What is no longer sustainable? The conversation needs to happen on schedule, not when someone is at breaking point.' },
              { label: 'Couple time that is protected', desc: 'Even an hour, without the child, without discussing autism logistics — the relationship needs to exist independent of the caregiving role. This requires respite, planning, and intention. It is worth the effort.' },
              { label: 'A shared understanding of your child', desc: 'Couples who have a shared language and philosophy around their child\'s autism — who have done enough learning and processing together to broadly agree on approach — are more resilient. Disagreements about approach are exhausting when they never resolve.' },
              { label: 'Permission to grieve differently', desc: 'Both partners need to be able to have their emotional experience without managing the other\'s. You do not need to grieve identically or simultaneously.' },
              { label: 'Couples therapy proactively', desc: 'Not when the relationship is in crisis — before. Couples therapy with an experienced therapist provides structure, communication tools, and a neutral space that most couples benefit from well before things are broken.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>If Separation Happens</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Some partnerships do not survive. This is not a moral failure. If your relationship ends, the needs of your autistic child remain at the center of co-parenting decisions. Co-parenting an autistic child requires particular attention to consistency across households, shared communication with schools and providers, and agreement on major care decisions. Family mediation and co-parenting therapy can help establish structures that work for your child.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/parents/single-parenting" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Single Parenting →</Link>
            <Link href="/parents/self-care/deep-dive" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Self-Care Deep Dive →</Link>
            <Link href="/parents/siblings" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sibling Experience →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/parents" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parents Hub →</Link>
            <Link href="/parents/self-care" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Self-Care →</Link>
            <Link href="/community" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Community →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
