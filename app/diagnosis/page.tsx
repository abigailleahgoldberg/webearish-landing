import type { Metadata } from 'next';
import DiagnosisHubClient from './PageClient';

export const metadata: Metadata = {
  title: "Autism Diagnosis Guide for Parents & Adults | WeBearish",
  description: "A complete guide to autism diagnosis: early signs, evaluation process, DSM-5 criteria, and what to do after diagnosis. For parents and adults seeking answers.",
  alternates: { canonical: "https://webearish.com/diagnosis" },
};

export default function DiagnosisHub() {
  return <DiagnosisHubClient />;
}
