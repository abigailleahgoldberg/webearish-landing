import type { Metadata } from 'next';
import AgesPageClient from './PageClient';

export const metadata: Metadata = {
  title: "Autism at Every Age: Guides for Parents and Autistic People | WeBearish",
  description: "Autism looks different across every stage of life. Guides for toddlers, school-age children, teens, and adults.",
  alternates: { canonical: "https://webearish.com/ages" },
};

export default function AgesPage() {
  return <AgesPageClient />;
}
