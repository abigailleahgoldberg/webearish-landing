import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Is This Autism? Traits and Signs Guide | WeBearish', description: 'Common autism traits in plain language. For parents with questions, adults exploring late diagnosis, and anyone who sees themselves in the descriptions.', alternates: { canonical: 'https://webearish.com/is-this-autism' } };
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM TRAITS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 16px' }}>Is This Autism?</h1>
        <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, marginBottom: 20, maxWidth: 640 }}>Common autism traits in plain language. For parents with questions, adults exploring late diagnosis, and anyone who sees themselves in the descriptions.</p>
        <div style={{ marginBottom: 40, padding: '14px 20px', background: 'rgba(255,209,102,0.08)', border: '1px solid rgba(255,209,102,0.2)', fontSize: 13, color: 'rgba(250,250,248,0.6)' }}>For informational purposes only. Not medical advice. Never say a person is autistic — always say they may be.</div>
        <div>
          <a key="Signs in Girls and Women" href="Signs in Girls and Women" style={{ display:'block', padding:'20px 20px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(184,232,135,0.1)', textDecoration:'none', marginBottom:8, color:'var(--lime)', fontWeight:800, fontSize:15 }}>/is-this-autism/signs-in-girls →</a>
          <a key="Signs in Boys and Men" href="Signs in Boys and Men" style={{ display:'block', padding:'20px 20px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(184,232,135,0.1)', textDecoration:'none', marginBottom:8, color:'var(--lime)', fontWeight:800, fontSize:15 }}>/is-this-autism/signs-in-boys →</a>
          <a key="Late Diagnosis" href="Late Diagnosis" style={{ display:'block', padding:'20px 20px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(184,232,135,0.1)', textDecoration:'none', marginBottom:8, color:'var(--lime)', fontWeight:800, fontSize:15 }}>/is-this-autism/late-diagnosis →</a>
          <a key="In Adults" href="In Adults" style={{ display:'block', padding:'20px 20px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(184,232,135,0.1)', textDecoration:'none', marginBottom:8, color:'var(--lime)', fontWeight:800, fontSize:15 }}>/is-this-autism/in-adults →</a>
          <a key="High-Masking Autism" href="High-Masking Autism" style={{ display:'block', padding:'20px 20px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(184,232,135,0.1)', textDecoration:'none', marginBottom:8, color:'var(--lime)', fontWeight:800, fontSize:15 }}>/is-this-autism/high-masking →</a>
        </div>
      </div>
    </div>
  );
}
