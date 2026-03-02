import type { Metadata } from 'next';
import ParentsPageClient from './PageClient';

export const metadata: Metadata = {
  title: "Autism Parent Resources | WeBearish",
  description: "Resources for parents of autistic children: self-care, respite care, financial planning, support groups, and navigating the systems.",
  alternates: { canonical: "https://webearish.com/parents" },
};

export default function ParentsPage() {
  return <ParentsPageClient />;
}
