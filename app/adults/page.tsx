import type { Metadata } from 'next';
import AdultsPageClient from './PageClient';

export const metadata: Metadata = {
  title: "Autism Resources for Adults | WeBearish",
  description: "Resources for autistic adults: late diagnosis, employment rights, housing, relationships, and autistic burnout.",
  alternates: { canonical: "https://webearish.com/adults" },
};

export default function AdultsPage() {
  return <AdultsPageClient />;
}
