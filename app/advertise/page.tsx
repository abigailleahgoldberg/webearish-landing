import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advertise With Us | WeBearish',
  description: 'Partner with WeBearish. Reach autism advocates, parents of autistic children, and neurodivergent adults through sponsored content and editorial placements.',
  robots: 'noindex',
}

export default function AdvertisePage() {
  const options = [
    { name: 'Sponsored Post', price: '$400', desc: 'Full editorial article in the autism acceptance, neurodiversity, parenting, or sensory niche. Written to our editorial standards. One dofollow link. Permanent.', tags: ['800-1,500 words', '1 dofollow link', 'Permanent', 'Editorial review'] },
    { name: 'Link Insertion', price: '$150', desc: 'Contextual link added to an existing WeBearish article. Relevant anchor text. Permanent placement.', tags: ['Existing content', '1 dofollow link', 'Permanent'] },
    { name: 'Resource Feature', price: '$200', desc: 'Add your sensory tool, book, therapy resource, or product to our resources page. Ideal for brands serving the autism and neurodivergent community.', tags: ['Resources page', 'Affiliate or flat fee', 'Permanent'] },
    { name: 'Brand Partnership', price: 'Custom', desc: 'Ongoing partnerships for brands genuinely committed to the autism acceptance community. No cure narratives. No inspiration porn. Real partnership.', tags: ['Custom', 'Values-aligned only', 'Long-term'] },
  ]
  return (
    <div style={{ minHeight: '100vh', background: 'var(--dark, #0F1A0F)', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ padding: '72px 5vw 56px', maxWidth: 860, margin: '0 auto', textAlign: 'center', borderBottom: '1px solid rgba(184,232,135,0.1)' }}>
        <div style={{ fontSize: 12, letterSpacing: '3px', color: '#B8E887', fontWeight: 700, marginBottom: 20 }}>PARTNERSHIPS</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 900, color: '#FAFAF8', margin: '0 0 20px', letterSpacing: '-1px' }}>Advertise on WeBearish</h1>
        <p style={{ fontSize: 17, color: 'rgba(250,250,248,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          Reach autism advocates, parents of autistic children, educators, and neurodivergent adults who are actively engaged and deeply loyal.
        </p>
      </div>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '56px 5vw 0', background: 'rgba(184,232,135,0.04)', borderBottom: '1px solid rgba(184,232,135,0.08)', marginBottom: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 1, paddingBottom: 32 }}>
          {[['Audience','Autism advocates + neurodivergent adults'],['Content','Science-accurate, identity-first'],['Philosophy','Acceptance — never cure, never pity'],['Site','WeBearish.com']].map(([k,v]) => (
            <div key={k} style={{ padding: '20px 16px' }}>
              <div style={{ fontSize: 10, color: '#B8E887', fontWeight: 700, letterSpacing: '1.5px', marginBottom: 6 }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.7)', fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 5vw' }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8, color: '#FAFAF8' }}>Editorial Standards</h2>
        <p style={{ color: 'rgba(250,250,248,0.45)', marginBottom: 32, fontSize: 14, lineHeight: 1.7 }}>
          We only accept partners who align with WeBearish values. No cure narratives. No functioning labels used pejoratively. No ABA promotion. No inspiration porn. No content that treats autism as tragedy. If you are not sure, email us — we will tell you honestly.
        </p>
        <div style={{ display: 'grid', gap: 20 }}>
          {options.map(o => (
            <div key={o.name} style={{ border: '1px solid rgba(184,232,135,0.15)', padding: '32px', background: 'rgba(184,232,135,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: '#FAFAF8' }}>{o.name}</h3>
                <span style={{ fontSize: 24, fontWeight: 900, color: '#B8E887' }}>{o.price}</span>
              </div>
              <p style={{ color: 'rgba(250,250,248,0.5)', lineHeight: 1.7, marginBottom: 16 }}>{o.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {o.tags.map(t => <span key={t} style={{ fontSize: 11, padding: '5px 10px', background: 'rgba(184,232,135,0.08)', color: '#B8E887', fontWeight: 600 }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: '#1A3A1A', borderTop: '1px solid rgba(184,232,135,0.15)', padding: '56px 5vw', textAlign: 'center' }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, color: '#FAFAF8', marginBottom: 12 }}>Get in Touch</h2>
        <p style={{ color: 'rgba(250,250,248,0.45)', marginBottom: 28, fontSize: 15 }}>Send your target URL, niche, and preferred option. We respond within 48 hours.</p>
        <a href="mailto:hello@webearish.com?subject=WeBearish%20Advertising%20Inquiry"
          style={{ display: 'inline-block', background: '#B8E887', color: '#0F1A0F', fontWeight: 900, fontSize: 14, padding: '16px 40px', textDecoration: 'none', letterSpacing: '1px' }}>
          EMAIL TO GET STARTED
        </a>
      </div>
    </div>
  )
}
