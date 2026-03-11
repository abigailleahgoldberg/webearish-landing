import Link from 'next/link';

const FOREST = '#1A3A1A';
const LIME   = '#B8E887';
const CORAL  = '#FF7B5C';
const CREAM  = '#FAFAF8';
const DARK   = '#0F1A0F';

export default function NotFound() {
  return (
    <main style={{ background: DARK, color: CREAM, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', textAlign: 'center', fontFamily: "'Nunito', system-ui, sans-serif" }}>
      {/* Bear SVG */}
      <svg viewBox="0 0 200 200" width="120" height="120" fill="rgba(184,232,135,0.18)" style={{ marginBottom: 32 }}>
        <circle cx="55" cy="55" r="28"/>
        <circle cx="145" cy="55" r="28"/>
        <circle cx="100" cy="105" r="65"/>
        <ellipse cx="100" cy="125" rx="28" ry="20"/>
        <ellipse cx="100" cy="115" rx="12" ry="8" fill="rgba(184,232,135,0.3)"/>
        <circle cx="78" cy="92" r="8" fill="rgba(184,232,135,0.35)"/>
        <circle cx="122" cy="92" r="8" fill="rgba(184,232,135,0.35)"/>
      </svg>

      <div style={{ fontSize: 11, letterSpacing: '3px', color: LIME, fontWeight: 800, marginBottom: 16 }}>404</div>
      <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, letterSpacing: '-2px', marginBottom: 16, lineHeight: 1.1 }}>
        This page got lost<br/>in the woods.
      </h1>
      <p style={{ fontSize: 17, color: 'rgba(250,250,248,0.6)', maxWidth: 480, lineHeight: 1.75, marginBottom: 40 }}>
        We couldn&apos;t find what you were looking for. Head back to a familiar path.
      </p>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{ background: LIME, color: FOREST, fontWeight: 900, fontSize: 14, padding: '14px 32px', textDecoration: 'none', letterSpacing: '1px' }}>
          HOME
        </Link>
        <Link href="/shop" style={{ background: 'transparent', color: LIME, border: `2px solid ${LIME}`, fontWeight: 800, fontSize: 14, padding: '14px 32px', textDecoration: 'none', letterSpacing: '1px' }}>
          SHOP
        </Link>
        <Link href="/blog" style={{ background: 'transparent', color: LIME, border: `2px solid rgba(184,232,135,0.3)`, fontWeight: 800, fontSize: 14, padding: '14px 32px', textDecoration: 'none', letterSpacing: '1px' }}>
          BLOG
        </Link>
      </div>
    </main>
  );
}
