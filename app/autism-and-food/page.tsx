import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism and Food: Understanding Selective Eating | WeBearish',
  description: 'Why many autistic children have very selective eating, the sensory reasons behind food refusal, how to expand diet without force, and when to involve a feeding therapist.',
  alternates: { canonical: 'https://webearish.com/autism-and-food' },
};

export default function AutismAndFoodPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>SENSORY AND DAILY LIFE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Autism and Food: Understanding Selective Eating
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Selective eating -- also called "picky eating" -- affects a large proportion of autistic children. Research estimates that between 46 and 89 percent of autistic children have some level of food selectivity, compared to about 18 percent of neurotypical children. This is not pickiness as a personality trait. It has neurological roots, and understanding those roots changes how you approach mealtimes.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Selective Eating Happens</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Food is an intensely sensory experience. Texture, temperature, smell, color, appearance, sound (yes, some foods are too crunchy), and taste all contribute to the experience of eating. For autistic children with heightened sensory processing, any one of these factors can make a food genuinely intolerable -- not merely unpleasant.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Food refusal in autistic children is different from garden-variety pickiness. Autistic food refusal is often about sensory overwhelm rather than preference. An autistic child refusing certain textures is not being stubborn -- their nervous system is generating a genuine distress response.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Texture sensitivity', desc: 'The most common sensory issue with food. Mixed textures, soft textures, or unexpected textures can be genuinely unbearable for some autistic children. Gagging and vomiting from texture are real physiological responses.' },
              { label: 'Smell sensitivity', desc: 'Autistic children with heightened olfactory processing may refuse foods based on smell alone, or may be disturbed by the cooking smells in the kitchen before the food even reaches the table.' },
              { label: 'Taste intensity', desc: 'Some autistic children experience taste more intensely than neurotypical children. "Too strong" is a real perception, not an excuse. Foods that taste mild to a neurotypical adult may be overwhelming.' },
              { label: 'Visual and appearance-based refusal', desc: 'Foods that are mixed together, sauces touching other foods, or familiar foods presented differently can trigger refusal. Visual consistency matters.' },
              { label: 'Temperature sensitivity', desc: 'Strong preferences for foods within a narrow temperature range are common. Some autistic children can only tolerate lukewarm or room-temperature food.' },
              { label: 'The role of routine and predictability', desc: 'Many autistic children eat a narrow range of familiar foods because familiarity is safe. New foods are unpredictable. The preference for sameness in foods is connected to the same drive for predictability that affects other parts of autistic life.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Does Not Help</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Many common approaches to selective eating backfire when the root cause is sensory. These include:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Forcing a child to eat a food they have refused -- this creates negative associations and increases food aversion.',
              '"Clean plate" rules -- these override the child\'s own body signals and increase mealtime stress.',
              'Bribing with dessert -- creates a dynamic where both the refused food and the reward become loaded.',
              'Humiliating or shaming food refusal -- this is harmful and does not change the sensory experience.',
              'Hiding foods in other foods -- when discovered (often), this destroys trust and may expand the foods the child refuses.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>--</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How to Expand Diet Without Force</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Expanding an autistic child's diet is possible, but it requires patience, respect for sensory experience, and a very gradual approach. The goal is to build safety around new foods, not to override the child's nervous system.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Food chaining', desc: 'A structured approach that begins with accepted foods and makes very small, gradual changes -- same flavor, different brand; same brand, different shape; same texture, different color. Each step is tiny enough not to trigger refusal.' },
              { label: 'Repeated exposure without pressure', desc: 'Research shows that children are more likely to accept new foods they have seen many times without being required to eat them. Putting a small amount of a new food on the table -- not on the plate -- without comment or pressure is a genuine strategy.' },
              { label: 'Play-based food exploration', desc: 'Touching, smelling, examining, or playing with a food before eating is a meaningful step. Many children need many exposures at this non-eating level before they are ready to taste.' },
              { label: 'Sensory accommodation', desc: 'Identify the specific sensory issue and work with it. If texture is the problem, try different preparations of the same food. If smell is the issue, try cooking in a different room or serving after it has cooled.' },
              { label: 'Consistent mealtimes and predictable structure', desc: 'Predictable mealtimes reduce the overall anxiety around eating. Children who know what to expect and are not surprised by new foods at every meal have a lower stress baseline at the table.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>When to Involve a Feeding Therapist</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            A feeding therapist -- usually a speech-language pathologist or occupational therapist with specialized training in feeding -- can be an important resource when:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Your child eats fewer than 20 foods and the number is shrinking.',
              'The child is losing weight or medical providers have nutrition concerns.',
              'Mealtimes involve significant distress -- crying, gagging, vomiting, or complete refusal to sit at the table.',
              'The selective eating is affecting family functioning, social participation, or the child\'s own distress level.',
              'The child gags or chokes frequently, which may indicate an oral motor or sensory processing issue beyond typical selectivity.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginTop: 16 }}>
            When seeking a feeding therapist, ask about their approach. The best feeding therapy for autistic children is play-based and child-led, not coercive. Avoid programs that use punishment, food restriction, or required eating as part of their approach.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Nutrition Concerns with Limited Diets</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Many autistic children with selective eating manage adequate nutrition despite a narrow diet. Some do not. If you are concerned about nutritional gaps, speak with your pediatrician about:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Blood panels to check for common deficiencies (iron, vitamin D, B12, zinc) in children with limited diets.',
              'Nutritional supplements in forms the child can tolerate -- chewable, liquid, or gummy formats exist for most key nutrients.',
              'Working with a registered dietitian who has experience with autistic children.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.06)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>All Resources →</Link>
            <Link href="/blog" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>WeBearish Blog →</Link>
            <Link href="/contact" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Contact Us →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Guide →</Link>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown vs. Tantrum →</Link>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
