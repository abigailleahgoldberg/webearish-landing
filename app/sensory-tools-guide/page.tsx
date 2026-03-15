import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Sensory Tools for Autistic People: A Complete Guide | WeBearish',
  description: 'The best sensory tools for autistic children and adults. Noise-canceling headphones, weighted blankets, fidgets, lighting solutions, and more — chosen by the autism community.',
  alternates: { canonical: 'https://www.webearish.com/sensory-tools-guide' },
}
const categories = [
  { name: 'Sound & Hearing', emoji: '🎧', desc: 'Many autistic people experience sound more intensely. These tools help manage auditory input.',
    tools: [
      { name: 'Noise-Canceling Headphones for Kids', why: 'Reduces overwhelming ambient sound. One of the highest-impact tools for many autistic children.', link: 'https://www.amazon.com/s?k=noise+canceling+headphones+kids+autism&tag=webearish-20', price: '$30-$300' },
      { name: 'Loop Earplugs (Adult)', why: 'Reduces sound without full isolation. Popular with autistic adults who want to reduce overwhelm while staying present.', link: 'https://www.amazon.com/s?k=loop+earplugs+noise+reduction&tag=webearish-20', price: '$25-$45' },
      { name: 'White Noise Machine', why: 'Consistent background sound masks unpredictable noise. Helps with sleep and focus.', link: 'https://www.amazon.com/s?k=white+noise+machine+sleep&tag=webearish-20', price: '$25-$60' },
    ]
  },
  { name: 'Touch & Pressure', emoji: '🤗', desc: 'Deep pressure and tactile input can be regulating for many autistic people.',
    tools: [
      { name: 'Weighted Blanket', why: 'Deep pressure stimulation. Research supports use for anxiety and sleep regulation in autistic people.', link: 'https://www.amazon.com/s?k=weighted+blanket+autism&tag=webearish-20', price: '$40-$120' },
      { name: 'Compression Vest', why: 'Provides consistent deep pressure throughout the day. Often used at school or during transitions.', link: 'https://www.amazon.com/s?k=compression+vest+autism+sensory&tag=webearish-20', price: '$30-$80' },
      { name: 'Fidget Tools Set', why: 'Tactile regulation for hands. Supports focus without disrupting others. Not punishment — tool.', link: 'https://www.amazon.com/s?k=fidget+tools+sensory+set&tag=webearish-20', price: '$10-$30' },
    ]
  },
  { name: 'Light & Vision', emoji: '💡', desc: 'Fluorescent lighting and visual clutter can be overwhelming. Simple adjustments make real differences.',
    tools: [
      { name: 'Warm LED Bulbs (set)', why: 'Replace harsh cool/fluorescent light with warm, steady light. One of the cheapest environment changes with big impact.', link: 'https://www.amazon.com/s?k=warm+led+bulbs+soft+white+autism&tag=webearish-20', price: '$15-$40' },
      { name: 'Blue Light Blocking Glasses', why: 'Reduces screen-related sensory strain. Particularly helpful for evening screen use and sleep.', link: 'https://www.amazon.com/s?k=blue+light+blocking+glasses+kids&tag=webearish-20', price: '$15-$40' },
      { name: 'Blackout Curtains', why: 'Eliminates disruptive light for sleep. Helps create a consistent, low-stimulation sleep environment.', link: 'https://www.amazon.com/s?k=blackout+curtains+bedroom&tag=webearish-20', price: '$25-$60' },
    ]
  },
  { name: 'Movement & Proprioception', emoji: '🏃', desc: 'Movement is regulation, not misbehavior. These tools support the need to move.',
    tools: [
      { name: 'Mini Trampoline (indoor)', why: 'Jumping provides vestibular and proprioceptive input. A trampoline at home can transform a difficult hour.', link: 'https://www.amazon.com/s?k=mini+trampoline+kids+indoor&tag=webearish-20', price: '$40-$100' },
      { name: 'Balance Board', why: 'Provides movement input during seated activities. Used at desks and homework stations.', link: 'https://www.amazon.com/s?k=balance+board+kids+wobble&tag=webearish-20', price: '$25-$60' },
      { name: 'Therapy Putty Set', why: 'Hand strengthening and tactile regulation. Works well for children who need hand fidgeting.', link: 'https://www.amazon.com/s?k=therapy+putty+sensory&tag=webearish-20', price: '$10-$25' },
    ]
  },
  { name: 'Books Worth Reading', emoji: '📚', desc: 'Identity-first books about autism that celebrate autistic people rather than pathologizing them.',
    tools: [
      { name: 'Divergent Mind — Jenara Nerenberg', why: 'Explores neurodivergence through the lens of empowerment. Written for and about adults.', link: 'https://www.amazon.com/s?k=divergent+mind+nerenberg&tag=webearish-20', price: '$14' },
      { name: 'Unmasking Autism — Devon Price', why: 'The definitive book on autistic masking. Widely recommended by autistic adults.', link: 'https://www.amazon.com/s?k=unmasking+autism+devon+price&tag=webearish-20', price: '$16' },
      { name: 'The Explosive Child — Ross Greene', why: 'Collaborative problem-solving approach. Respected by autism advocates as an alternative to compliance-based approaches.', link: 'https://www.amazon.com/s?k=explosive+child+ross+greene&tag=webearish-20', price: '$15' },
    ]
  },
]
export default function SensoryToolsGuidePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--dark,#0F1A0F)', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: 'linear-gradient(135deg, #0F1A0F 0%, #1A3A1A 100%)', padding: '64px 5vw 56px', textAlign: 'center' }}>
        <div style={{ fontSize: 12, letterSpacing: '3px', color: '#B8E887', marginBottom: 16, fontWeight: 700 }}>SENSORY TOOLS</div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 900, color: '#FAFAF8', margin: '0 0 16px', letterSpacing: '-1px' }}>
          Sensory Tools That Actually Help
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(250,250,248,0.5)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          Chosen based on what the autistic community actually recommends. No cure claims. No therapy-speak. Just tools that make daily life more manageable.
        </p>
      </div>
      <div style={{ background: 'rgba(184,232,135,0.04)', borderBottom: '1px solid rgba(184,232,135,0.08)', padding: '12px 5vw', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: 'rgba(250,250,248,0.3)', margin: 0 }}>
          Some links are affiliate links. WeBearish earns a small commission if you purchase through them. Every dollar supports our mission.
        </p>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 5vw' }}>
        {categories.map(cat => (
          <div key={cat.name} style={{ marginBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <span style={{ width: 16, height: 16, borderRadius: '50%', background: '#B8E887', display: 'inline-block', flexShrink: 0 }} />
              <h2 style={{ fontSize: 26, fontWeight: 900, color: '#B8E887', margin: 0 }}>{cat.name}</h2>
            </div>
            <p style={{ color: 'rgba(250,250,248,0.4)', fontSize: 14, marginBottom: 20, marginLeft: 40 }}>{cat.desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
              {cat.tools.map(tool => (
                <a key={tool.name} href={tool.link} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.1)', padding: '22px', textDecoration: 'none' }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#FAFAF8', marginBottom: 8, lineHeight: 1.3 }}>{tool.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.45)', lineHeight: 1.6, marginBottom: 14 }}>{tool.why}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#B8E887' }}>{tool.price}</span>
                    <span style={{ fontSize: 11, color: 'rgba(184,232,135,0.6)', fontWeight: 700 }}>VIEW ON AMAZON →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: '#1A3A1A', borderTop: '1px solid rgba(184,232,135,0.1)', padding: '48px 5vw', textAlign: 'center' }}>
        <p style={{ color: 'rgba(250,250,248,0.4)', fontSize: 15, marginBottom: 20 }}>
          These tools help. Acceptance helps more. Read more on the WeBearish blog.
        </p>
        <a href="/blog" style={{ display: 'inline-block', background: '#B8E887', color: '#0F1A0F', fontWeight: 900, fontSize: 14, padding: '14px 36px', textDecoration: 'none', letterSpacing: '1px' }}>
          READ THE BLOG
        </a>
      </div>
    </div>
  )
}
