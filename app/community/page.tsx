import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Join the WeBearish Parent Community | WeBearish',
  description: 'A private community for parents of autistic children. $3/month or $25/year. Monthly newsletter, peer support, merch discounts. Coming soon — join the waitlist.',
  alternates: { canonical: 'https://www.webearish.com/community' },
}
export default function CommunityPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--dark,#0F1A0F)', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ padding: '80px 5vw 64px', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(184,232,135,0.1)', border: '1px solid rgba(184,232,135,0.2)', fontSize: 11, letterSpacing: '2px', color: '#B8E887', fontWeight: 700, marginBottom: 28 }}>
          COMING SOON
        </div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, color: '#FAFAF8', margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          The WeBearish<br />Parent Community
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(250,250,248,0.5)', lineHeight: 1.8, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
          A private community for parents of autistic children who want peer support, real resources, and a community that does not treat their child as a problem to solve.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 48, textAlign: 'left' }}>
          {[
            ['Monthly Newsletter', 'Curated resources, community wins, and what is actually happening in autism acceptance.'],
            ['Peer Support', 'Connect with other parents who get it. No tragedy narratives. No cure-seeking.'],
            ['Merch Discounts', 'Members get discounts on everything in the WeBearish shop.'],
            ['Expert Q&As', 'Monthly live sessions with autistic adult advocates who share lived experience.'],
          ].map(([title, desc]) => (
            <div key={title} style={{ background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.1)', padding: '20px' }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#B8E887', marginBottom: 8 }}>{title}</div>
              <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '36px', marginBottom: 32 }}>
          <div style={{ fontSize: 32, fontWeight: 900, color: '#B8E887', marginBottom: 4 }}>$3<span style={{ fontSize: 18, color: 'rgba(184,232,135,0.6)' }}>/month</span></div>
          <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.35)', marginBottom: 20 }}>or $25/year — less than a cup of coffee a month</div>
          <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 24, lineHeight: 1.6 }}>
            We priced this intentionally. Every parent — regardless of budget — should have access to real community.
          </p>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: '#FAFAF8', marginBottom: 16 }}>Join the waitlist. Be first in.</h3>
          <form action="https://formspree.io/f/webearish-community" method="POST" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <input type="email" name="email" placeholder="your@email.com" required
              style={{ flex: 1, minWidth: 220, padding: '14px 16px', background: 'rgba(250,250,248,0.08)', border: '1px solid rgba(184,232,135,0.2)', color: '#FAFAF8', fontSize: 14, outline: 'none' }} />
            <button type="submit"
              style={{ background: '#B8E887', color: '#0F1A0F', fontWeight: 900, fontSize: 13, padding: '14px 28px', border: 'none', letterSpacing: '1px', cursor: 'pointer' }}>
              JOIN WAITLIST
            </button>
          </form>
          <p style={{ fontSize: 11, color: 'rgba(250,250,248,0.2)', marginTop: 12 }}>No spam. You will be notified when we launch. Unsubscribe anytime.</p>
        </div>
        <p style={{ color: 'rgba(250,250,248,0.2)', fontSize: 13 }}>
          All membership revenue follows the WeBearish mission: 13% of every dollar goes directly back into autism acceptance programs.
        </p>
      </div>
    </div>
  )
}
