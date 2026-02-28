import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Autism Traits Reflection Guide — WeBearish",
  description: "A 25-question self-reflection guide exploring autistic traits. For educational purposes only — not a medical diagnosis.",
};

export default function QuizPage() {
  return <QuizClient />;
}
