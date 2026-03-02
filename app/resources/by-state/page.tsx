import type { Metadata } from 'next';
import StateIndexPageClient from './ByStateClient';

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function StateIndexPage() {
  return <StateIndexPageClient />;
}
