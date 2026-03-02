import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'data', 'newsletter.json');

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email || !email.includes('@')) return NextResponse.json({ error: 'invalid' }, { status: 400 });
  const raw = await fs.readFile(FILE, 'utf8').catch(() => '[]');
  const list: string[] = JSON.parse(raw);
  if (!list.includes(email)) {
    list.push(email);
    await fs.writeFile(FILE, JSON.stringify(list, null, 2));
  }
  return NextResponse.json({ ok: true });
}
