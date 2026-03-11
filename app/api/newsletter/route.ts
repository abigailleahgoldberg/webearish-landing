import { NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const LIST_ID = 3; // WeBearish newsletter list — update if different

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'invalid email' }, { status: 400 });
    }

    // Add contact to Brevo
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY || '',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [LIST_ID],
        updateEnabled: true, // re-subscribe if they exist
        attributes: {
          SOURCE: 'webearish.com',
          SIGNED_UP: new Date().toISOString().split('T')[0],
        },
      }),
    });

    // 200 = created, 204 = already exists (both are success)
    if (res.ok || res.status === 204) {
      return NextResponse.json({ ok: true });
    }

    // Brevo returns 400 if contact already in list — treat as success
    if (res.status === 400) {
      const body = await res.json().catch(() => ({}));
      if (body?.code === 'duplicate_parameter') {
        return NextResponse.json({ ok: true });
      }
    }

    console.error('[newsletter] Brevo error:', res.status, await res.text().catch(() => ''));
    return NextResponse.json({ error: 'service_error' }, { status: 500 });

  } catch (err) {
    console.error('[newsletter] unexpected error:', err);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
