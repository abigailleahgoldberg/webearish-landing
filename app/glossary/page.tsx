'use client';
import { useState } from 'react';
import Link from 'next/link';
import { glossaryTerms } from '../data/glossary';

export default function GlossaryPage() {
  const [search, setSearch] = useState('');
  const filtered = glossaryTerms.filter(t =>
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.definition.toLowerCase().includes(search.toLowerCase())
  );
  const letters = Array.from(new Set(filtered.map(t => t.term[0].toUpperCase()))).sort();

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ marginBottom: 40 }}>
          <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM GLOSSARY</span>
          <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-2px', margin: '12px 0 16px' }}>
            Autism Terms Explained
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.55)', maxWidth: 620, lineHeight: 1.7 }}>
            {glossaryTerms.length} terms. Plain language. No jargon. Each term explains what it is, why it matters, and what people commonly get wrong.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ width: '100%', maxWidth: 480, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--cream)', fontSize: 15, padding: '12px 16px', marginBottom: 40, outline: 'none', fontFamily: 'inherit' }}
        />

        {search === '' && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {letters.map(l => (
              <a key={l} href={`#letter-${l}`} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(184,232,135,0.08)', color: 'var(--lime)', fontWeight: 900, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(184,232,135,0.15)' }}>
                {l}
              </a>
            ))}
          </div>
        )}

        {letters.map(letter => {
          const terms = filtered.filter(t => t.term[0].toUpperCase() === letter);
          if (terms.length === 0) return null;
          return (
            <div key={letter} id={`letter-${letter}`} style={{ marginBottom: 48 }}>
              {search === '' && (
                <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--lime)', letterSpacing: '2px', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(184,232,135,0.1)' }}>
                  {letter}
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {terms.map(term => (
                  <Link key={term.slug} href={`/glossary/${term.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.08)', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, transition: 'border-color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.3)')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.08)')}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--cream)', marginBottom: 4 }}>{term.term}</div>
                        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.5)', lineHeight: 1.5 }}>
                          {term.definition.slice(0, 110)}...
                        </div>
                      </div>
                      <span style={{ color: 'var(--lime)', fontWeight: 900, fontSize: 14, flexShrink: 0 }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'rgba(250,250,248,0.4)' }}>
            No terms found for &ldquo;{search}&rdquo;
          </div>
        )}
      </div>
    </div>
  );
}
