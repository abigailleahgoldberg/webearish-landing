import type { Metadata } from 'next';
import ConditionsPageClient from './PageClient';

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function ConditionsPage() {
  return <ConditionsPageClient />;
}
