import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Navigating Public Spaces Safely with Autistic Children | WeBearish',
  description: 'Practical strategies for keeping autistic children safe in grocery stores, parking lots, airports, restaurants, and other public environments.',
  alternates: { canonical: 'https://webearish.com/safety/public-spaces' },
};

export default function PublicSpacesPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/safety" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Safety Guide</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>SAFETY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Autistic Children in Public Spaces: Safety Strategies
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Public spaces combine unpredictability, sensory intensity, and physical hazards in ways that require planning. Autistic children can safely access public spaces — but it requires intentional preparation, not just hope.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>High-Risk Public Settings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Parking lots', desc: 'Cars move unpredictably, the environment is loud and disorienting, and autistic children may dart between vehicles. Establish a firm "hold my hand in the parking lot" rule and practice it every time.' },
              { label: 'Crowded stores', desc: 'Sensory overload in crowded environments can trigger flight responses. Having a plan for the child to hold your hand, stay in the cart, or hold a backpack strap provides physical anchoring.' },
              { label: 'Airports and transit', desc: 'Loud, unpredictable, disorienting, and easy to get separated in. Wristband ID, wearable GPS, and establishing a "meet at this spot if separated" plan are all appropriate.' },
              { label: 'Playgrounds and parks', desc: 'Open, boundary-free environments near roads or water require active supervision. Know your exit points and your child\'s likely elopement direction before they get there.' },
              { label: 'Events and festivals', desc: 'Crowds, amplified sound, unexpected schedule changes — these environments combine sensory intensity with the physical risks of large crowds. Have a clear meeting point and an exit plan.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Practical Safety Strategies</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Prepare visually before going', desc: 'Show pictures or video of where you\'re going. Walk through the plan: "We\'ll park, walk in, get the groceries, and come back to the car." Predictability reduces anxiety, which reduces elopement risk.' },
              { label: 'Establish physical anchoring habits', desc: 'Hand-holding, backpack harnesses, and cart-riding are all legitimate safety tools. Build these into the routine before they are needed as emergency interventions.' },
              { label: 'Identify a meeting spot', desc: 'In every public space, identify and show your child a specific meeting spot: "If we get separated, go to the person at the register and show them your card." Practice this.' },
              { label: 'Carry emergency information', desc: 'ID card in pocket or backpack. Your phone accessible. A recent photo of the child in your phone. The name of the nearest police station.' },
              { label: 'Know your child\'s sensory tipping point', desc: 'Visit stores at off-peak hours when possible. Leave before overwhelm peaks, not after the meltdown starts. Leaving early is a success, not a failure.' },
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
            We are not doctors. We are advocates. Public space access is a right. Good planning makes it safer for everyone.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/safety/elopement" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Elopement →</Link>
            <Link href="/safety/emergency-id" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Emergency ID →</Link>
            <Link href="/safety/teaching-safety" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Teaching Safety →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
