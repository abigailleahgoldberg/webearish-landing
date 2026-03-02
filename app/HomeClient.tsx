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

      {/* HERO */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 5vw clamp(40px,6vw,80px)', maxWidth: 1200, margin: '0 auto' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '55% 43%', gap: '5%', alignItems: 'center' }}>
          {/* Left — Manifesto Headline */}
          <div className="hero-text">
            <div style={{ fontSize: 11, letterSpacing: '3px', color: LIME, fontWeight: 800, marginBottom: 20 }}>AUTISM ACCEPTANCE MOVEMENT</div>
            <h1 className="manifesto-text" style={{ fontSize: 'clamp(38px,5.5vw,72px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-2px', marginBottom: 28 }}>
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
          {/* Right — Bear */}
          <div className="hero-img" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', border: `4px solid ${LIME}`, boxShadow: `0 0 40px ${LIME}55, 0 0 80px ${LIME}22`, maxWidth: 440 }}>
              <Image src="/bears/bear-standing.jpg" alt="WeBearish bear" width={440} height={520} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              {/* Floating badge */}
              <div style={{ position: 'absolute', bottom: -18, right: -18, background: CORAL, color: CREAM, fontWeight: 900, fontSize: 11, letterSpacing: '1.5px', padding: '12px 18px', zIndex: 2 }}>
                100% PROFITS<br/>REINVESTED
              </div>
            </div>
            {/* Animated second bear */}
            <div style={{ position: 'absolute', top: -20, left: -30, opacity: 0.18, pointerEvents: 'none' }}>
              <Image src="/bears/bear-white.gif" alt="" width={120} height={120} style={{ objectFit: 'contain' }} unoptimized />
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
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
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
          <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 16 }}>
            The notes parents write<br/>at <span style={{ color: CORAL }}>midnight.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.5)', lineHeight: 1.7 }}>
            These are real words from real families. No names. No polish. Just the truth of what it feels like to love an autistic child in a world that does not always love them back.
          </p>
        </div>

        {/* Submit form — above notes */}
        <div style={{ background: FOREST, border: `1px solid ${LIME}33`, padding: 'clamp(28px,4vw,44px)', maxWidth: 680, marginBottom: 48 }}>
          <div style={{ fontSize: 11, letterSpacing: '2px', color: LIME, fontWeight: 800, marginBottom: 12 }}>SHARE YOUR NOTE</div>
          <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8, lineHeight: 1.2 }}>Write your autism note.</h3>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.5)', marginBottom: 24, lineHeight: 1.6 }}>
            No judgment. No editing. Just your words. You can sign your name or stay anonymous — either way, your note belongs here.
          </p>
          {submitted ? (
            <div style={{ background: `${LIME}22`, border: `1px solid ${LIME}44`, padding: '20px 24px' }}>
              <div style={{ color: LIME, fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Thank you for sharing.</div>
              <div style={{ color: 'rgba(250,250,248,0.6)', fontSize: 14 }}>Your note has been received. Once reviewed, it will appear alongside others in this section.</div>
            </div>
          ) : (
            <form onSubmit={submitNote} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <textarea
                placeholder="Write your note here... (up to 600 characters)"
                value={noteText}
                onChange={e => setNoteText(e.target.value)}
                maxLength={600}
                rows={5}
                style={{ background: DARK, border: `1px solid ${LIME}33`, color: CREAM, padding: '14px 16px', fontSize: 15, outline: 'none', resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.7 }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(250,250,248,0.3)', marginTop: -8 }}>
                <span>Your words, your story.</span>
                <span>{noteText.length}/600</span>
              </div>
              <input
                type="text"
                placeholder="Sign your note (optional — leave blank to stay anonymous)"
                value={noteFrom}
                onChange={e => setNoteFrom(e.target.value)}
                maxLength={60}
                style={{ background: DARK, border: `1px solid ${LIME}33`, color: CREAM, padding: '12px 16px', fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
              />
              {noteError && <div style={{ color: CORAL, fontSize: 13 }}>{noteError}</div>}
              <button
                type="submit"
                disabled={submitting}
                style={{ background: CORAL, color: CREAM, fontWeight: 900, fontSize: 14, padding: '14px', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', letterSpacing: '1px', opacity: submitting ? 0.7 : 1 }}
              >
                {submitting ? 'SENDING...' : 'SHARE MY NOTE →'}
              </button>
              <p style={{ fontSize: 11, color: 'rgba(250,250,248,0.25)', lineHeight: 1.6 }}>
                Notes are reviewed before appearing on the site. No contact info is collected. By submitting, you agree to our <Link href="/privacy" style={{ color: 'rgba(250,250,248,0.4)' }}>privacy policy</Link>.
              </p>
            </form>
          )}
        </div>

        {/* Notes grid — below form */}
        <div className="notes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {displayNotes.map((n, i) => (
            <div key={n.id} className="note-card" style={{
              background: i === 0 ? FOREST : '#111',
              border: `1px solid ${i === 0 ? LIME + '44' : '#2a2a2a'}`,
              padding: '28px 24px',
              position: 'relative',
            }}>
              <div style={{ fontSize: 48, lineHeight: 1, color: i === 0 ? LIME : i === 1 ? CORAL : YELLOW, opacity: 0.3, fontFamily: 'Georgia, serif', marginBottom: 8 }}>"</div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: i === 0 ? CREAM : 'rgba(250,250,248,0.7)', fontStyle: 'italic', marginBottom: 20 }}>{n.note}</p>
              <div style={{ fontSize: 12, fontWeight: 700, color: i === 0 ? LIME : i === 1 ? CORAL : YELLOW, letterSpacing: '0.5px', opacity: 0.8 }}>
                — {n.from ? n.from : 'Parent, signed as anonymous'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT ACCEPTANCE LOOKS LIKE — Mission pillars */}
      <section style={{ background: FOREST, borderTop: `1px solid ${LIME}22`, borderBottom: `1px solid ${LIME}22`, padding: 'clamp(60px,8vw,100px) 5vw' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '3px', color: LIME, fontWeight: 800, marginBottom: 16 }}>WHAT ACCEPTANCE ACTUALLY MEANS</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 48, maxWidth: 600 }}>
            Not a finish line.<br/><span style={{ color: CORAL }}>A daily practice.</span>
          </h2>
          <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
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
      <section style={{ padding: 'clamp(60px,8vw,100px) 5vw', maxWidth: 800, margin: '0 auto' }}>
        <NewsletterSignup variant="banner" />
      </section>

      {/* RESOURCE HUB GRID */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 5vw', background: FOREST, borderTop: `1px solid ${LIME}22` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: LIME, marginBottom: 12 }}>EXPLORE THE HUB</div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 'clamp(24px,4vw,40px)', marginBottom: 8, color: CREAM }}>Everything You Need. All in One Place.</h2>
          <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.55)', marginBottom: 40, maxWidth: 560, lineHeight: 1.7 }}>WeBearish is built to be the most comprehensive autism acceptance resource on the internet. Start anywhere.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
            {[
              { label: 'Glossary', desc: '72 terms explained', href: '/glossary', emoji: '📖' },
              { label: 'Diagnosis Guide', desc: 'Evaluation to acceptance', href: '/diagnosis', emoji: '🔍' },
              { label: 'IEP Center', desc: 'Know your rights', href: '/iep', emoji: '📋' },
              { label: 'Therapies', desc: 'ABA, OT, speech + more', href: '/therapies', emoji: '🧩' },
              { label: 'Research', desc: 'What the studies say', href: '/research', emoji: '📊' },
              { label: 'By Age', desc: 'Toddler through adult', href: '/ages', emoji: '📅' },
              { label: 'Autistic Voices', desc: 'First-person essays', href: '/voices', emoji: '💬' },
              { label: 'State Resources', desc: 'All 50 states', href: '/resources/by-state', emoji: '🗺️' },
              { label: 'Tools + Apps', desc: 'AAC, sensory, planning', href: '/tools', emoji: '🛠️' },
              { label: 'Crisis Resources', desc: 'When you need help now', href: '/safety/crisis', emoji: '🆘' },
              { label: 'Autism Calendar', desc: '51 awareness events', href: '/calendar', emoji: '📆' },
              { label: 'Conditions Hub', desc: 'Co-occurring conditions', href: '/conditions', emoji: '🧠' },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{ display: 'block', background: 'rgba(250,250,248,0.03)', border: `1px solid ${LIME}18`, padding: '18px 20px', textDecoration: 'none', transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{item.emoji}</div>
                <div style={{ fontWeight: 800, fontSize: 15, color: CREAM, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: 'rgba(250,250,248,0.45)' }}>{item.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
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
