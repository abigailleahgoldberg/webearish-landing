'use client';
import Link from 'next/link';
import { calendarEvents } from '../data/autism-calendar';


const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export default function CalendarPageClient() {
  const byMonth: Record<number, typeof calendarEvents> = {};
  calendarEvents.forEach(e => {
    if (!byMonth[e.month]) byMonth[e.month] = [];
    byMonth[e.month].push(e);
  });

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM CALENDAR</span>
          <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, letterSpacing: '-2px', margin: '12px 0 16px' }}>
            Awareness Events & Acceptance Dates
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(250,250,248,0.6)', maxWidth: 680, lineHeight: 1.7 }}>
            Every autism and disability awareness date, acceptance month, and advocacy anniversary. Each event links to history, context, and how to participate.
          </p>
        </div>

        {Object.keys(byMonth).sort((a,b) => Number(a)-Number(b)).map(m => {
          const month = Number(m);
          const events = byMonth[month];
          return (
            <div key={month} style={{ marginBottom: 56 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid rgba(184,232,135,0.15)' }}>
                <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: '2px', color: 'var(--lime)' }}>
                  {MONTHS[month - 1].toUpperCase()}
                </span>
                <span style={{ fontSize: 13, color: 'rgba(250,250,248,0.3)' }}>{events.length} event{events.length !== 1 ? 's' : ''}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                {events.map(event => (
                  <Link key={event.slug} href={`/calendar/${event.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)', padding: '20px 20px', transition: 'border-color 0.2s', cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.35)')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.1)')}>
                      <div style={{ fontSize: 11, color: 'var(--lime)', fontWeight: 700, letterSpacing: '1px', marginBottom: 8 }}>{event.dayRange}</div>
                      <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--cream)', marginBottom: 10, lineHeight: 1.4 }}>{event.name}</div>
                      <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.5)', lineHeight: 1.6, margin: 0 }}>
                        {event.description.slice(0, 120)}...
                      </p>
                      <div style={{ marginTop: 14, fontSize: 12, color: 'var(--lime)', fontWeight: 700 }}>Learn more →</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
