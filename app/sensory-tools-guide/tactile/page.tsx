import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tactile & Touch Sensory Tools for Autistic Children | WeBearish',
  description: 'Weighted blankets, fidgets, clothing accommodations, and other tactile tools to support autistic children with touch sensitivity and tactile seeking.',
  alternates: { canonical: 'https://webearish.com/sensory-tools-guide/tactile' },
};

export default function TactileSensoryToolsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/sensory-tools-guide" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Sensory Tools Guide</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Tactile Tools</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>SENSORY TOOLS GUIDE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Tactile &amp; Touch Tools
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Touch is the most fundamental sense, and tactile differences are among the most impactful sensory challenges in autism. Whether a child is hypersensitive to touch (finds certain textures or unexpected contact unbearable) or hyposensitive (craves intense tactile input), there are tools and strategies that can make daily life significantly more comfortable and help the nervous system regulate.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. An occupational therapist can design an individualized sensory diet for your child.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Tactile Hypersensitivity: When Touch Hurts</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Tactile hypersensitivity means the nervous system treats ordinary touch as threatening or painful. Common experiences include:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Clothing sensitivity', desc: 'Tags, seams, tight waistbands, socks with seams at the toes, or certain fabrics can be genuinely painful or impossible to tolerate. This is one of the most common daily challenges for tactilely hypersensitive autistic children.' },
              { label: 'Unexpected touch', desc: 'Light, unexpected touch is often more distressing than firm, expected touch. Being touched from behind, a casual brush from a stranger, or unexpected hugs can trigger an immediate defensive response.' },
              { label: 'Grooming challenges', desc: 'Haircuts, nail trimming, teeth brushing, face washing, and hair washing all involve significant tactile input to sensitive areas. For hypersensitive children, these can be genuinely distressing experiences.' },
              { label: 'Food texture aversion', desc: 'Tactile sensitivity extends inside the mouth. Many autistic children refuse foods based on texture — gummy, mushy, mixed, or wet textures can be intolerable. This overlaps significantly with selective eating.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Clothing and Fabric Accommodations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Seamless socks and underwear', desc: 'One of the highest-impact, lowest-cost sensory accommodations. Brands like Hanna Andersson, Smartwool, and Sensory Smart offer seamless children\'s socks. Tag-free and seam-free underwear is also widely available.' },
              { label: 'Tagless clothing', desc: 'Cut out tags immediately. Better: buy tagless. Many mainstream brands now offer printed labels instead of sewn-in tags. Tommy Hilfiger, Old Navy, and others carry sensory-friendly lines.' },
              { label: 'Soft, breathable fabrics', desc: 'Bamboo, modal, and 100% cotton without synthetic blends are preferred by many tactilely sensitive children. Avoid scratchy wool, stiff denim, and synthetic fibers that can feel rough or create static.' },
              { label: 'Compression clothing', desc: 'For children who crave deep pressure, compression shorts, undershirts, or full-body suits provide continuous proprioceptive input. They work under regular clothing and can dramatically improve regulation throughout the day.' },
              { label: 'Allowing clothing choices', desc: 'Wherever possible, let the child choose their clothing. A child who chooses their outfit based on sensory comfort is less likely to be dysregulated before they leave the house. Clothing battles are rarely worth the cost.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Tactile Tools for Regulation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Weighted blankets (typically 10% of body weight) provide deep pressure input that activates the parasympathetic nervous system. Many autistic children sleep better and feel calmer under weighted blankets.',
              'Weighted lap pads provide similar input during sitting tasks at school or home without the full blanket.',
              'Fidget tools — smooth stones, textured rings, spiky sensory balls, stretchy toys — provide portable tactile input for children who need hand-based stimulation to concentrate.',
              'Kinetic sand, playdough, and slime provide controlled, voluntary tactile exploration that helps desensitize hypersensitive children over time.',
              'Vibrating massagers or vibrating pillows can be deeply regulating for children who need significant proprioceptive and tactile input.',
              'Koosh balls, velvet pouches, and varied-texture collections let children build familiarity with different tactile inputs at their own pace.',
              'A sensory bin filled with rice, beans, sand, or water beads gives children a structured space to explore tactile input on their own terms.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Making Grooming More Manageable</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Use electric hair clippers with guards rather than scissors for haircuts — many children prefer the vibration and even pressure to the unpredictable snip of scissors.',
              'Desensitize with pre-grooming play: practice gentle face washing during calm bath time, not as a rushed daily necessity.',
              'For nail trimming, try an electric nail file instead of clippers. Some children find the pressure of clippers more distressing than the gentle filing sensation.',
              'Flavored, dye-free toothpaste in textures the child tolerates makes teeth brushing more approachable.',
              'Silicone scalp massager brushes for hair washing can replace the overwhelming sensation of fingers on scalp for some children.',
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
            <Link href="/sensory-tools-guide/proprioceptive" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Proprioceptive Tools →</Link>
            <Link href="/sensory-tools-guide/auditory" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Auditory Tools →</Link>
            <Link href="/sensory-tools-guide/budget" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Tools on a Budget →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Hub →</Link>
            <Link href="/autism-and-food" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism and Food →</Link>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdowns →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
