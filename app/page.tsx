import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'WeBearish — Autism Acceptance Movement',
  description: 'WeBearish is an autism acceptance movement built by parents, for families. 1 in 36 children are autistic. Every single one deserves to be accepted exactly as they are.',
  openGraph: {
    title: 'WeBearish — Autism Acceptance Movement',
    description: 'Not awareness. Acceptance. WeBearish exists for every autistic child who deserves to be seen.',
    images: [{ url: '/og-webearish.png', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
