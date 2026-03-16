import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Emergency ID for Autistic Children: What to Include | WeBearish',
  description: 'Medical ID bracelets, shoe tags, GPS devices, and registries for autistic children. What information to include and how to make sure first responders know what they need to know.',
  alternates: { canonical: 'https://webearish.com/safety/emergency-id' },
};

export default function EmergencyIDPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/safety" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Safety Guide</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>SAFETY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Emergency ID for Autistic Children
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          When an autistic child elopes or is found alone, the first 30 seconds of a first responder interaction can go very wrong without the right information. Emergency ID is not optional equipment — it is a safety critical tool for any autistic person who may be separated from their caregivers.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Information to Include</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Name and emergency contact number', desc: 'The most basic requirement. Include at least two contact numbers if space allows.' },
              { label: '"Autism" or "autistic"', desc: 'This single word tells first responders a significant amount about how to adjust their approach. It prepares them for potential communication differences, sensory sensitivities, and the fact that standard verbal instructions may not work.' },
              { label: '"Nonverbal" or "limited speech" if applicable', desc: 'This prevents a communication failure from being interpreted as refusal to cooperate.' },
              { label: '"May not respond to name"', desc: 'Critical for search situations. Many autistic children do not respond to their name even when they hear it — for reasons unrelated to being hidden or in distress.' },
              { label: '"Attracted to water" if applicable', desc: 'Direct first responders to check water sources immediately when relevant.' },
              { label: 'Calming strategies if space allows', desc: 'Some ID systems allow notes on the back or QR codes linking to a full profile. "Calm voice, no sudden movements, offer [preferred item]" can change an encounter entirely.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Types of Emergency ID</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Medical ID bracelets', desc: 'The most visible and universal. Silicone bracelets, metal tags, and beaded bracelets are all available. Some children tolerate one style but not another — find what works for your child.' },
              { label: 'Shoe tags', desc: 'ID information attached to shoe laces or slipped into the shoe. Good for children who remove wrist items. Many families use shoe tags in addition to bracelets.' },
              { label: 'Iron-on clothing labels', desc: 'ID information in clothing — particularly useful for children who remove other ID items. Labels for waistbands, collar tags, and shoe liners are available.' },
              { label: 'QR code ID cards', desc: 'Cards in a wallet or backpack with a QR code linking to a full safety profile. Road ID and similar services support this. Best combined with something worn on the body.' },
              { label: 'GPS wearables', desc: 'Angel Sense, Jiobit, and similar devices combine location tracking with the ability to listen in via microphone. These are not replacement for physical ID — they are complementary.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Registries and Community Notification</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Many local police departments have vulnerable persons registries. Register your child before an emergency, not during one.',
              'The National Center for Missing and Exploited Children maintains resources and can assist with active cases.',
              'Nextdoor and neighborhood Facebook groups are fast community notification tools — introduce your child before an emergency.',
              'Team HOPE (through the Autism Society) provides peer support to families after elopement incidents.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. The best time to set up emergency ID is before you need it. Do it this week.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/safety/elopement" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Elopement →</Link>
            <Link href="/safety/water" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Water Safety →</Link>
            <Link href="/safety/public-spaces" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Public Spaces →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
