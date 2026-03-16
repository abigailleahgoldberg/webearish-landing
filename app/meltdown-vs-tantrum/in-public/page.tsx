import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Meltdowns in Public: A Parent's Guide | WeBearish",
  description: 'How to handle autistic meltdowns in public — managing the moment, dealing with onlookers, keeping your child safe, and building confidence for outings.',
  alternates: { canonical: 'https://webearish.com/meltdown-vs-tantrum/in-public' },
};

export default function MeltdownInPublicPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/meltdown-vs-tantrum" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Meltdown vs. Tantrum</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Meltdowns in Public</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>MELTDOWNS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Meltdowns in Public: A Parent's Guide
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Public meltdowns are one of the most stressful experiences for parents of autistic children. The combination of your child in distress and the judgment of strangers creates a uniquely awful moment. You are simultaneously managing a neurological crisis and performing under the scrutiny of people who do not understand what they are looking at. This guide is for that moment and for the preparation that makes it more manageable.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes and for building practical resilience.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>In the Moment: What to Do</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Focus on your child, not the audience', desc: 'Your child is having a neurological crisis. The strangers staring are uncomfortable but are not your responsibility. Every ounce of your attention belongs on your child\'s safety and wellbeing. Let the stares land on an invisible shield. Your child needs you present, not performing for an audience.' },
              { label: 'Move to a less stimulating area if possible', desc: 'If you can move to a quieter area — a corner of the store, a bench outside, the car — do so. This reduces sensory input for your child and removes the audience simultaneously. If the child cannot be moved safely, bring the quiet to them — create a physical buffer using your body, a blanket, or a stroller.' },
              { label: 'Use your go-bag', desc: 'A prepared bag with your child\'s specific regulation tools — headphones, a preferred snack, a comfort object, a chewy, a weighted lap pad — is the single most practical thing you can bring into public spaces. Having tools ready means you do not need to think clearly while your own stress is high. Just reach into the bag.' },
              { label: 'Block and buffer', desc: 'Position yourself between your child and the public. Use your body, a shopping cart, a stroller, or simply standing in a doorway to create a visual and physical buffer. This gives your child a micro-space of reduced stimulation within the public environment.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Dealing with Strangers</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'You do not owe anyone an explanation', desc: 'You are not required to explain your child\'s autism, their meltdown, or your parenting to anyone. A brief "my child is autistic and is having a hard time" is enough if you want to say something. But you do not have to say anything at all. Protect your child\'s privacy.' },
              { label: 'If someone offers help, accept or decline simply', desc: '"Thank you, we are okay" or "Could you please give us some space?" are complete responses. Most people who offer help genuinely want to help. If someone is being judgmental or aggressive, a firm "My child is autistic. Please give us space." is sufficient.' },
              { label: 'Autism awareness cards', desc: 'Some parents carry small cards that say something like "My child is autistic. This is a meltdown, not a tantrum. They are overwhelmed, not misbehaving. Thank you for your patience." Handing a card to a staring stranger can redirect judgment without requiring you to find words in a stressful moment.' },
              { label: 'If someone threatens to call authorities', desc: 'Calmly identify yourself as the parent, state that your child is autistic and is experiencing a meltdown, and continue to focus on your child\'s safety. Having autism documentation accessible (on your phone, in a wallet card) can be useful in rare situations where authorities become involved.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Preparation: Making Outings More Manageable</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Identify exit routes before entering any public space — know how to leave quickly from any position in the building',
              'Time outings for low-traffic periods — early morning grocery shopping, weekday restaurant visits, off-peak park visits',
              'Keep outings short and build up gradually — a 20-minute successful trip is better than a 90-minute one that ends in meltdown',
              'Preview the environment with your child using photos or video before going — reduce the unpredictability',
              'Pack the go-bag every time: headphones, snacks, a drink, fidgets, comfort object, change of clothes for younger children',
              'Have a clear plan for who does what if a meltdown happens when two adults are present — one manages the child, one manages the environment and other children',
              'Talk to your child about the plan: "We are going to the store. If your body feels too big, we will go to the car."',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>After a Public Meltdown: You Need Recovery Too</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Public meltdowns are traumatic for parents. The shame, the exhaustion, the helplessness, the judgment — it all lands on you. Afterward, give yourself the same grace you give your child. You are not a bad parent because your child had a meltdown in public. The meltdown does not mean you failed. It means the situation exceeded your child's capacity — and that happens to every autistic child and every parent of an autistic child. Reach out to other parents who understand. You are not alone in this.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum/before" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Early Warning Signs →</Link>
            <Link href="/meltdown-vs-tantrum/during" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>During a Meltdown →</Link>
            <Link href="/meltdown-vs-tantrum/after" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>After a Meltdown →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown vs. Tantrum Hub →</Link>
            <Link href="/parents/self-care" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parent Self-Care →</Link>
            <Link href="/community" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Community →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
