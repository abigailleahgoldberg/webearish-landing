import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { randomUUID } from 'crypto';

const DATA_PATH = join(process.cwd(), 'data', 'parent-notes.json');

function load() {
  try { return JSON.parse(readFileSync(DATA_PATH, 'utf8')); } catch { return []; }
}

export async function GET() {
  return NextResponse.json({ notes: load() });
}

export async function POST(req: NextRequest) {
  try {
    const { note, from } = await req.json();
    if (!note?.trim()) return NextResponse.json({ ok: false, error: 'Note is required.' }, { status: 400 });
    if (note.trim().length > 600) return NextResponse.json({ ok: false, error: 'Please keep it under 600 characters.' }, { status: 400 });

    const notes = load();
    const record = {
      id: randomUUID(),
      note: note.trim(),
      from: (from?.trim() || '').slice(0, 60) || null,
      createdAt: new Date().toISOString(),
      approved: false,
    };
    notes.unshift(record);
    writeFileSync(DATA_PATH, JSON.stringify(notes, null, 2));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Server error.' }, { status: 500 });
  }
}
