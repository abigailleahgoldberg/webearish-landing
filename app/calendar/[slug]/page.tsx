import type { Metadata } from 'next';
import Link from 'next/link';
import { calendarEvents } from '../../data/autism-calendar';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return calendarEvents.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = calendarEvents.find(e => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.name} | WeBearish Autism Calendar`,
    description: event.description.slice(0, 155),
    alternates: { canonical: `https://webearish.com/calendar/${slug}` },
  };
}

export default async function CalendarEventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = calendarEvents.find(e => e.slug === slug);
  if (!event) notFound();

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/calendar" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Back to Calendar
        </Link>

        <div style={{ marginTop: 32, marginBottom: 40 }}>
          <div style={{ fontSize: 11, color: 'var(--lime)', fontWeight: 700, letterSpacing: '2px', marginBottom: 10 }}>
            {event.dayRange}
          </div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 24, lineHeight: 1.1 }}>
            {event.name}
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(250,250,248,0.7)', lineHeight: 1.75, marginBottom: 0 }}>
            {event.description}
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.15)', paddingTop: 40, marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 16 }}>History</h2>
          <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.65)', lineHeight: 1.75 }}>{event.history}</p>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.2)', padding: '28px 28px', marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>How to Participate</h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {event.howToObserve.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0, fontSize: 14, marginTop: 2 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.75)', lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {event.tags && event.tags.length > 0 && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
            {event.tags.map(tag => (
              <span key={tag} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', padding: '4px 12px', background: 'rgba(184,232,135,0.1)', color: 'var(--lime)', border: '1px solid rgba(184,232,135,0.2)' }}>
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        )}

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 900, marginBottom: 16, color: 'rgba(250,250,248,0.5)' }}>EXPLORE MORE</h3>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/glossary" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autism Glossary →</Link>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
            <Link href="/acceptance" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Acceptance vs Awareness →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
