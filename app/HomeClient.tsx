'use client';
import NewsletterSignup from './components/NewsletterSignup';
import { OrganizationSchema } from './components/SchemaOrg';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FOREST  = '#1A3A1A';
const LIME    = '#B8E887';
const CORAL   = '#FF7B5C';
const YELLOW  = '#FFD166';
const CREAM   = '#FAFAF8';
const DARK    = '#0F1A0F';

// Seed notes — always shown, real people
const SEED_NOTES = [
  {
    id: 'seed-1',
    note: "Some nights I sat in the hallway outside his room and cried because I didn't know how to help him. I wasn't grieving who he was. I was grieving the world that kept telling me he needed to be different. He doesn't. The world does.",
    from: null,
    approved: true,
  },
  {
    id: 'seed-2',
    note: "I have worked with autistic children for years. The ones who thrive are not the ones who were pushed hardest to act typical. They are the ones who had one adult — just one — who looked at them and said: you are enough exactly as you are. Be that person.",
    from: "David Jones, advocate",
    approved: true,
  },
  {
    id: 'seed-3',
    note: "My grandson lights up a room in ways most people have never experienced. He notices things nobody else sees. He loves with his whole body. The word I would use for him is not autistic. It is extraordinary. The world is lucky he is in it.",
    from: "Beth Hunter, grandmother",
    approved: true,
  },
];

const TICKER_ITEMS = [
  '1 in 36 children in the US are autistic — CDC MMWR 2023',
  'Acceptance is not a finish line. It is a daily practice.',
  'WeBearish exists for every child who was told they were too much.',
  '100% of profits are reinvested into the movement.',
  'Autism is not a tragedy. The lack of support is.',
  'Every autistic child deserves to be seen exactly as they are.',
  'Built by parents. For families. Because no child is less than.',
];

export default function HomeClient() {
  const [notes, setNotes]         = useState<any[]>([]);
  const [noteText, setNoteText]   = useState('');
  const [noteFrom, setNoteFrom]   = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [noteError, setNoteError] = useState('');
  const [menuOpen, setMenuOpen]   = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  // Scroll-reveal observer
  useEffect(() => {
    const els = document.querySelectorAll('.wb-reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('wb-revealed');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch('/api/parent-notes')
      .then(r => r.json())
      .then(d => setNotes((d.notes || []).filter((n: any) => n.approved)))
      .catch(() => {});
  }, []);

  async function submitNote(e: React.FormEvent) {
    e.preventDefault();
    if (!noteText.trim()) { setNoteError('Please write your note.'); return; }
    setSubmitting(true);
    setNoteError('');
    try {
      const res = await fetch('/api/parent-notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note: noteText, from: noteFrom }),
      });
      const d = await res.json();
      if (d.ok) { setSubmitted(true); setNoteText(''); setNoteFrom(''); }
      else setNoteError(d.error || 'Something went wrong.');
    } catch { setNoteError('Could not submit. Please try again.'); }
    setSubmitting(false);
  }

  const displayNotes = [...SEED_NOTES, ...notes].slice(0, 9);

  return (
    <div style={{ background: DARK, color: CREAM, fontFamily: "'Nunito', system-ui, sans-serif", overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: ${DARK}; }
        .ticker-track { display: flex; gap: 0; white-space: nowrap; animation: ticker 38s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .nav-link { color: rgba(250,250,248,0.65); text-decoration: none; font-size: 14px; font-weight: 600; transition: color 0.2s; }
        .nav-link:hover { color: ${LIME}; }
        .bear-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .bear-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(184,232,135,0.15); }
        .note-card { transition: border-color 0.2s; }
        .note-card:hover { border-color: ${LIME}44 !important; }
        .stat-num { line-height: 1; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-text { text-align: center !important; }
          .hero-img { margin: 0 auto; max-width: 320px; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
          .notes-grid { grid-template-columns: 1fr !important; }
          .cta-two-col { grid-template-columns: 1fr !important; }
          .manifesto-text { font-size: clamp(28px, 7vw, 60px) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
        .wb-hub-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
        @media (max-width: 900px) { .wb-hub-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 600px) { .wb-hub-grid { grid-template-columns: repeat(2, 1fr); } }
        .wb-reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .wb-revealed { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) { .wb-reveal, .wb-revealed { opacity: 1; transform: none; transition: none; } }
      `}</style>

      {/* NAV */}
      <nav style={{ background: DARK, borderBottom: `1px solid ${LIME}22`, padding: '0 5vw', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image src="/bear-logo.png" alt="WeBearish" width={36} height={36} style={{ objectFit: 'contain' }} />
            <span style={{ fontWeight: 900, fontSize: 20, color: CREAM, letterSpacing: '-0.5px' }}>We<span style={{ color: LIME }}>Bearish</span></span>
          </Link>
          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
            {[['About', '/about'], ['Mission', '/mission'], ['Shop', '/shop'], ['Blog', '/blog'], ['Resources', '/resources'], ['Contact', '/contact']].map(([l, h]) => (
              <Link key={l} href={h} className="nav-link">{l}</Link>
            ))}
            <Link href="/shop" style={{ background: CORAL, color: CREAM, fontWeight: 800, fontSize: 13, padding: '9px 22px', textDecoration: 'none', borderRadius: 2, letterSpacing: '0.5px' }}>SHOP THE MISSION</Link>
          </div>
          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: CREAM, fontSize: 24 }} className="burger">☰</button>
        </div>
        {menuOpen && (
          <div style={{ padding: '16px 0 24px', borderTop: `1px solid ${LIME}22`, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[['About', '/about'], ['Mission', '/mission'], ['Shop', '/shop'], ['Blog', '/blog'], ['Resources', '/resources'], ['Contact', '/contact']].map(([l, h]) => (
              <Link key={l} href={h} className="nav-link" style={{ fontSize: 16, paddingLeft: 8 }} onClick={() => setMenuOpen(false)}>{l}</Link>
            ))}
          </div>
        )}
      </nav>

      {/* TICKER */}
      <div style={{ background: LIME, overflow: 'hidden', padding: '10px 0', borderBottom: `2px solid ${FOREST}` }}>
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ color: FOREST, fontWeight: 700, fontSize: 13, padding: '0 40px', letterSpacing: '0.3px' }}>
              {item} <span style={{ color: FOREST, opacity: 0.4, marginLeft: 20 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* HERO — Two-tone split */}
      <section>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '55% 45%' }}>
          {/* Left panel — DARK — existing copy */}
          <div style={{ background: DARK, padding: 'clamp(60px,8vw,100px) clamp(28px,5vw,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 11, letterSpacing: '3px', color: LIME, fontWeight: 800, marginBottom: 20 }}>AUTISM ACCEPTANCE MOVEMENT</div>
            <h1 style={{ fontSize: 'clamp(36px,5.5vw,64px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-2px', marginBottom: 28, color: CREAM }}>
              Every child<br/>
              <span style={{ color: LIME }}>deserves</span><br/>
              to be seen.<br/>
              <span style={{ color: CORAL, fontSize: '0.88em' }}>Not fixed.</span><br/>
              <span style={{ color: YELLOW, fontSize: '0.88em' }}>Accepted.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(250,250,248,0.65)', maxWidth: 520, marginBottom: 36 }}>
              WeBearish is a movement built by parents who are done waiting for the world to catch up. Every dollar we make goes back in: play centers, sensory tools, and the families who need them most.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/mission" style={{ background: LIME, color: FOREST, fontWeight: 900, fontSize: 15, padding: '16px 36px', textDecoration: 'none', letterSpacing: '0.5px' }}>OUR MISSION →</Link>
              <Link href="/shop" style={{ background: 'transparent', color: CREAM, fontWeight: 800, fontSize: 15, padding: '16px 36px', textDecoration: 'none', letterSpacing: '0.5px', border: `2px solid ${LIME}44` }}>SHOP THE MOVEMENT</Link>
            </div>
          </div>
          {/* Right panel — LIME — Bear silhouette */}
          <div style={{ background: LIME, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'clamp(280px,40vw,500px)', padding: '40px 24px' }}>
            <svg viewBox="0 0 200 200" width="clamp(160px,20vw,280px)" height="clamp(160px,20vw,280px)" fill="rgba(15,26,15,0.15)">
              <circle cx="55" cy="55" r="28"/>
              <circle cx="145" cy="55" r="28"/>
              <circle cx="100" cy="105" r="65"/>
              <ellipse cx="100" cy="125" rx="28" ry="20"/>
              <ellipse cx="100" cy="115" rx="12" ry="8" fill="rgba(15,26,15,0.25)"/>
              <circle cx="78" cy="92" r="8" fill="rgba(15,26,15,0.3)"/>
              <circle cx="122" cy="92" r="8" fill="rgba(15,26,15,0.3)"/>
            </svg>
            <div style={{ marginTop: 20, fontSize: 11, letterSpacing: '3px', fontWeight: 900, color: 'rgba(15,26,15,0.5)', fontVariant: 'small-caps', textTransform: 'uppercase' }}>
              Autism Acceptance Movement
            </div>
          </div>
        </div>
      </section>

      {/* BIG STAT STOPPER */}
      <section style={{ background: FOREST, borderTop: `1px solid ${LIME}22`, borderBottom: `1px solid ${LIME}22`, padding: 'clamp(48px,6vw,80px) 5vw', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '3px', color: LIME, fontWeight: 800, marginBottom: 24 }}>THE REALITY WE ARE BUILDING FOR</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span className="stat-num" style={{ fontSize: 'clamp(80px,16vw,160px)', fontWeight: 900, color: CORAL, letterSpacing: '-4px', lineHeight: 0.9 }}>1</span>
            <span style={{ fontSize: 'clamp(32px,6vw,72px)', fontWeight: 900, color: 'rgba(250,250,248,0.25)', alignSelf: 'center' }}>in</span>
            <span className="stat-num" style={{ fontSize: 'clamp(80px,16vw,160px)', fontWeight: 900, color: LIME, letterSpacing: '-4px', lineHeight: 0.9 }}>36</span>
          </div>
          <p style={{ fontSize: 'clamp(18px,2.5vw,26px)', fontWeight: 700, color: CREAM, marginBottom: 12 }}>children in the United States are autistic.</p>
          <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.45)', marginBottom: 40 }}>Source: CDC MMWR Surveillance Summary, 2023</p>
          <div className="stats-grid wb-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { num: '85%', label: 'of autistic adults are under- or unemployed', color: YELLOW },
              { num: '3×', label: 'more likely to experience mental health challenges', color: CORAL },
              { num: '7 yrs', label: 'average delay to diagnosis for women and girls', color: LIME },
              { num: '$60K', label: 'average annual cost of autism support per family', color: CREAM },
            ].map(s => (
              <div key={s.num} style={{ background: `${DARK}99`, border: `1px solid ${LIME}22`, padding: '24px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: s.color, marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.5)', lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE HUMAN VOICE — Parent note + anonymous */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 5vw', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 720, marginBottom: 20 }}>
          <div style={{ fontSize: 11, letterSpacing: '3px', color: CORAL, fontWeight: 800, marginBottom: 20 }}>FROM THE COMMUNITY</div>
          <h2 style={{ fontSize: 'clamp(32px,5vw,64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1.5px', marginBottom: 16, whiteSpace: 'nowrap' }}>
            The notes parents write at <span style={{ color: CORAL }}>midnight.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.5)', lineHeight: 1.7 }}>
            These are real words from real families. No names. No polish. Just the truth of what it feels like to love an autistic child in a world that does not always love them back.
          </p>
        </div>

        {/* Submit form + notes — redesigned layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(300px,45%,560px) 1fr', gap: 'clamp(24px,4vw,56px)', alignItems: 'start' }}>

          {/* LEFT: Submit form */}
          <div style={{ background: FOREST, border: `1px solid ${LIME}22`, padding: 'clamp(28px,3vw,44px)' }}>
            <div style={{ fontSize: 10, letterSpacing: '3px', color: LIME, fontWeight: 800, marginBottom: 14 }}>SHARE YOUR NOTE</div>
            <h3 style={{ fontSize: 'clamp(18px,2vw,24px)', fontWeight: 900, lineHeight: 1.2, marginBottom: 8, color: CREAM }}>Write your note.</h3>
            <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.45)', marginBottom: 24, lineHeight: 1.65 }}>
              No judgment. No editing. Your words. Sign your name or stay anonymous. Either way, your note belongs here.
            </p>
            {submitted ? (
              <div style={{ background: `${LIME}15`, border: `1px solid ${LIME}33`, padding: '20px 22px', borderLeft: `4px solid ${LIME}` }}>
                <div style={{ color: LIME, fontWeight: 900, fontSize: 15, marginBottom: 6 }}>Thank you for sharing.</div>
                <div style={{ color: 'rgba(250,250,248,0.55)', fontSize: 13, lineHeight: 1.6 }}>Your note has been received. Once reviewed, it will appear with the others.</div>
              </div>
            ) : (
              <form onSubmit={submitNote} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ position: 'relative' }}>
                  <textarea
                    placeholder="Write your note here..."
                    value={noteText}
                    onChange={e => setNoteText(e.target.value)}
                    maxLength={600}
                    rows={6}
                    style={{ width: '100%', background: 'rgba(0,0,0,0.3)', border: `1px solid ${LIME}22`, borderRadius: 0, color: CREAM, padding: '14px 16px', fontSize: 15, outline: 'none', resize: 'none', fontFamily: 'inherit', lineHeight: 1.7, boxSizing: 'border-box' }}
                  />
                  <span style={{ position: 'absolute', bottom: 10, right: 12, fontSize: 11, color: 'rgba(250,250,248,0.2)', pointerEvents: 'none' }}>{noteText.length}/600</span>
                </div>
                <input
                  type="text"
                  placeholder="Your name or leave blank to stay anonymous"
                  value={noteFrom}
                  onChange={e => setNoteFrom(e.target.value)}
                  maxLength={60}
                  style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${LIME}22`, color: CREAM, padding: '12px 16px', fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                />
                {noteError && <div style={{ color: CORAL, fontSize: 13 }}>{noteError}</div>}
                <button
                  type="submit"
                  disabled={submitting}
                  style={{ background: CORAL, color: '#fff', fontWeight: 900, fontSize: 13, padding: '15px', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', letterSpacing: '1.5px', opacity: submitting ? 0.7 : 1, marginTop: 4 }}
                >
                  {submitting ? 'SENDING...' : 'SHARE MY NOTE'}
                </button>
                <p style={{ fontSize: 11, color: 'rgba(250,250,248,0.2)', lineHeight: 1.6 }}>
                  Notes are reviewed before appearing. No contact info collected. By submitting, you agree to our <Link href="/privacy" style={{ color: 'rgba(250,250,248,0.35)', textDecoration: 'underline' }}>privacy policy</Link>.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT: Notes stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {displayNotes.slice(0, 4).map((n, i) => {
              const accentColors = [LIME, CORAL, YELLOW, LIME];
              const accent = accentColors[i % accentColors.length];
              return (
                <div key={n.id} style={{
                  background: i === 0 ? FOREST : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${i === 0 ? LIME + '33' : 'rgba(255,255,255,0.05)'}`,
                  borderLeft: `3px solid ${accent}`,
                  padding: '22px 24px',
                }}>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: i === 0 ? 'rgba(250,250,248,0.85)' : 'rgba(250,250,248,0.6)', fontStyle: 'italic', marginBottom: 12 }}>
                    &ldquo;{n.note}&rdquo;
                  </p>
                  <div style={{ fontSize: 11, fontWeight: 700, color: accent, letterSpacing: '1px', opacity: 0.75 }}>
                    {n.from ? n.from.toUpperCase() : 'ANONYMOUS'}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHAT ACCEPTANCE LOOKS LIKE — Mission pillars */}
      <section style={{ background: FOREST, borderTop: `1px solid ${LIME}22`, borderBottom: `1px solid ${LIME}22`, padding: 'clamp(60px,8vw,100px) 5vw' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '3px', color: LIME, fontWeight: 800, marginBottom: 16 }}>WHAT ACCEPTANCE ACTUALLY MEANS</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 48, maxWidth: 600 }}>
            Not a finish line.<br/><span style={{ color: CORAL }}>A daily practice.</span>
          </h2>
          <div className="pillars-grid wb-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { num: '01', title: 'See the child.', body: 'Not the diagnosis. Not the behavior. Not the chart. The actual child — with humor, preferences, opinions, and an inner world that does not require your interpretation to be valid.', color: LIME },
              { num: '02', title: 'Change the environment.', body: 'Autistic children do not fail in the world. Environments fail autistic children. Sensory-friendly spaces, flexible learning, and patient communication cost far less than the alternative.', color: CORAL },
              { num: '03', title: 'Fund the mission.', body: 'Every WeBearish purchase goes back into play centers, sensory tools, and programs built specifically for autistic children and their families. No charity language. Just action.', color: YELLOW },
            ].map(p => (
              <div key={p.num} className="bear-card" style={{ background: `${DARK}cc`, border: `1px solid ${p.color}33`, padding: '32px 28px' }}>
                <div style={{ fontSize: 48, fontWeight: 900, color: p.color, opacity: 0.25, lineHeight: 1, marginBottom: 12 }}>{p.num}</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: p.color, marginBottom: 14 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE BEAR FAMILY — Photo section */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 5vw', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontSize: 11, letterSpacing: '3px', color: LIME, fontWeight: 800, marginBottom: 16 }}>THE MOVEMENT IN MOTION</div>
        <h2 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 40, maxWidth: 560 }}>
          A family that sticks<br/>together is <span style={{ color: LIME }}>unstoppable.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 12, marginBottom: 48 }}>
          <div style={{ gridRow: 'span 2' }}>
            <Image src="/bears/bears-together.jpg" alt="Bears together" width={600} height={480} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <Image src="/bears/bears-cubs.jpg" alt="Bear cubs" width={280} height={230} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <Image src="/bears/bears-cubs2.jpg" alt="Bear cubs 2" width={280} height={230} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ gridColumn: 'span 2', background: CORAL, padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: CREAM, lineHeight: 1.3 }}>Every purchase funds the mission directly.<br/><span style={{ fontSize: 14, fontWeight: 600, opacity: 0.8 }}>100% of profits reinvested into programs for autistic children.</span></div>
            <Link href="/shop" style={{ background: DARK, color: CREAM, fontWeight: 900, fontSize: 14, padding: '14px 28px', textDecoration: 'none', letterSpacing: '1px', whiteSpace: 'nowrap' }}>SHOP NOW →</Link>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN CTA */}

      {/* NEWSLETTER */}
      <section style={{ padding: 'clamp(60px,8vw,80px) 5vw', background: 'var(--forest)', borderTop: '1px solid rgba(184,232,135,0.1)', borderBottom: '1px solid rgba(184,232,135,0.1)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <NewsletterSignup variant="banner" />
        </div>
      </section>

      {/* RESOURCE HUB GRID — 2 rows of 6, modern SVG icons */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 5vw', background: FOREST, borderTop: `1px solid ${LIME}22` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: LIME, marginBottom: 12 }}>EXPLORE THE HUB</div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 'clamp(24px,4vw,40px)', marginBottom: 8, color: CREAM }}>Everything You Need. All in One Place.</h2>
          <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.55)', marginBottom: 40, maxWidth: 560, lineHeight: 1.7 }}>WeBearish is built to be the most comprehensive autism acceptance resource on the internet. Start anywhere.</p>
          <div className="wb-hub-grid wb-reveal">
            {[
              {
                label: 'Glossary', desc: '72 terms explained', href: '/glossary',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="12" y1="7" x2="16" y2="7"/><line x1="12" y1="11" x2="16" y2="11"/></svg>
              },
              {
                label: 'Diagnosis Guide', desc: 'Evaluation to acceptance', href: '/diagnosis',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              },
              {
                label: 'IEP Center', desc: 'Know your rights', href: '/iep',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="12" y2="17"/></svg>
              },
              {
                label: 'Therapies', desc: 'OT, speech, ABA + more', href: '/therapies',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              },
              {
                label: 'Research', desc: 'What the studies say', href: '/research',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              },
              {
                label: 'By Age', desc: 'Toddler through adult', href: '/ages',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
              },
              {
                label: 'Autistic Voices', desc: 'First-person essays', href: '/voices',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              },
              {
                label: 'State Resources', desc: 'All 50 states', href: '/resources',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              },
              {
                label: 'Tools + Apps', desc: 'AAC, sensory, planning', href: '/tools',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              },
              {
                label: 'Safety', desc: 'Crisis & safety planning', href: '/safety',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              },
              {
                label: 'Calendar', desc: '51 awareness events', href: '/calendar',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              },
              {
                label: 'Conditions', desc: 'Co-occurring conditions', href: '/conditions',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10, background: 'rgba(250,250,248,0.03)', border: `1px solid ${LIME}18`, padding: '20px 18px', textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s', borderRadius: 6 }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(184,232,135,0.07)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${LIME}44`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(250,250,248,0.03)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${LIME}18`; }}
              >
                <div style={{ color: LIME, opacity: 0.85 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: CREAM, marginBottom: 3 }}>{item.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(250,250,248,0.4)', lineHeight: 1.4 }}>{item.desc}</div>
                </div>
              </a>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .hub-grid { grid-template-columns: repeat(4, 1fr) !important; } }
            @media (max-width: 600px) { .hub-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          `}</style>
        </div>
      </section>
      {/* ── RESOURCE HUB ─────────────────────────────────────── */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 5vw', background: DARK, borderTop: `1px solid ${LIME}11` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 'clamp(32px,5vw,56px)' }}>
            <div style={{ fontSize: 11, letterSpacing: '2px', color: LIME, fontWeight: 800, marginBottom: 12 }}>EXPLORE THE HUB</div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, color: CREAM, lineHeight: 1.1, maxWidth: 600 }}>
              Everything you need.<br/>All in one place.
            </h2>
            <p style={{ fontSize: 'clamp(14px,1.5vw,17px)', color: 'rgba(250,250,248,0.5)', marginTop: 16, maxWidth: 560, lineHeight: 1.7 }}>
              WeBearish is built to be the most comprehensive autism acceptance resource on the internet. Start anywhere.
            </p>
          </div>

          <div className="wb-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              {
                label: 'Understanding Autism',
                color: LIME,
                desc: 'Diagnosis, co-occurring conditions, autism in girls, nonverbal autism, and more.',
                links: [['Getting a Diagnosis', '/getting-a-diagnosis'], ['Is This Autism?', '/is-this-autism'], ['Autism in Girls', '/autism-in-girls'], ['Conditions', '/conditions']],
                cta: 'Explore →', href: '/diagnosis',
              },
              {
                label: 'For Families',
                color: YELLOW,
                desc: 'School rights, IEPs, sibling support, safety, meltdowns — real help for real families.',
                links: [['School Rights & IEP', '/iep'], ['For Parents', '/parents'], ['Siblings', '/autism-and-siblings'], ['Safety', '/safety']],
                cta: 'Explore →', href: '/parents',
              },
              {
                label: 'Resources & Tools',
                color: CORAL,
                desc: 'Guides, sensory tools, therapy options, research, and a full glossary.',
                links: [['Sensory Tools Guide', '/sensory-tools-guide'], ['Therapies', '/therapies'], ['Guides', '/guides'], ['Research', '/research']],
                cta: 'Explore →', href: '/resources',
              },
              {
                label: 'Community',
                color: '#7EC8E3',
                desc: 'Blog, voices, events calendar, advocacy, and the people building this movement.',
                links: [['Voices', '/voices'], ['Blog', '/blog'], ['Calendar', '/calendar'], ['Acceptance', '/acceptance']],
                cta: 'Explore →', href: '/community',
              },
            ].map((silo) => (
              <div
                key={silo.label}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderTop: `3px solid ${silo.color}`,
                  borderRadius: 8,
                  padding: 'clamp(20px,3vw,32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
              >
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 900, color: CREAM, marginBottom: 8 }}>{silo.label}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.45)', lineHeight: 1.65 }}>{silo.desc}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {silo.links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      style={{ fontSize: 13, color: 'rgba(250,250,248,0.55)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = silo.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,250,248,0.55)')}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: silo.color, flexShrink: 0, display: 'inline-block' }}></span>
                      {label}
                    </Link>
                  ))}
                </div>
                <Link
                  href={silo.href}
                  style={{
                    marginTop: 'auto',
                    display: 'inline-block',
                    color: silo.color,
                    fontWeight: 900,
                    fontSize: 13,
                    letterSpacing: '0.5px',
                    textDecoration: 'none',
                  }}
                >
                  {silo.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA TWO-COL ──────────────────────────────────────── */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 5vw', background: FOREST, borderTop: `1px solid ${LIME}22` }}>
        <div className="cta-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ background: LIME, padding: 'clamp(32px,4vw,52px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 280 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '2px', color: FOREST, fontWeight: 800, marginBottom: 12 }}>THE SHOP</div>
              <h3 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, color: FOREST, lineHeight: 1.1, marginBottom: 16 }}>Wear the movement.<br/>Fund the mission.</h3>
              <p style={{ fontSize: 15, color: `${FOREST}aa`, lineHeight: 1.65 }}>Every item you buy puts real resources into the hands of autistic children and the families who love them.</p>
            </div>
            <Link href="/shop" style={{ marginTop: 28, display: 'inline-block', background: FOREST, color: LIME, fontWeight: 900, fontSize: 14, padding: '14px 32px', textDecoration: 'none', letterSpacing: '1px', alignSelf: 'flex-start' }}>SHOP THE MOVEMENT →</Link>
          </div>
          <div style={{ background: DARK, border: `1px solid ${LIME}33`, padding: 'clamp(32px,4vw,52px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 280 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '2px', color: CORAL, fontWeight: 800, marginBottom: 12 }}>GET INVOLVED</div>
              <h3 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, color: CREAM, lineHeight: 1.1, marginBottom: 16 }}>Have a question,<br/>idea, or story?</h3>
              <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.5)', lineHeight: 1.65 }}>We are building this together. Reach out to connect, collaborate, or just say you are with us.</p>
            </div>
            <Link href="/contact" style={{ marginTop: 28, display: 'inline-block', background: CORAL, color: CREAM, fontWeight: 900, fontSize: 14, padding: '14px 32px', textDecoration: 'none', letterSpacing: '1px', alignSelf: 'flex-start' }}>REACH OUT →</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#080F08', borderTop: `1px solid ${LIME}22`, padding: 'clamp(40px,6vw,64px) 5vw 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40, marginBottom: 48 }}>
            <div style={{ maxWidth: 320 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Image src="/bear-logo.png" alt="WeBearish" width={32} height={32} style={{ objectFit: 'contain' }} />
                <span style={{ fontWeight: 900, fontSize: 20, color: CREAM }}>We<span style={{ color: LIME }}>Bearish</span></span>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.4)', lineHeight: 1.7 }}>An autism acceptance movement built by parents. 100% of profits reinvested into programs for autistic children and their families.</p>
            </div>
            <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
              {[
                { head: 'Mission', links: [['About', '/about'], ['Our Mission', '/mission'], ['Blog', '/blog']] },
                { head: 'Community', links: [['Resources', '/resources'], ['Quiz', '/quiz'], ['Contact', '/contact']] },
                { head: 'Legal', links: [['Privacy Policy', '/privacy'], ['Terms', '/terms'], ['COPPA Notice', '/coppa']] },
              ].map(col => (
                <div key={col.head}>
                  <div style={{ fontSize: 11, letterSpacing: '2px', color: LIME, fontWeight: 800, marginBottom: 16 }}>{col.head}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {col.links.map(([l, h]) => (
                      <Link key={l} href={h} style={{ fontSize: 14, color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>{l}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${LIME}15`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 12, color: 'rgba(250,250,248,0.25)' }}>
            <div>© 2025 WeBearish. All rights reserved. WeBearish is not a nonprofit. Profits are reinvested into the mission.</div>
            <div>Built by parents. For families. For the children.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
