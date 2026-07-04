import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import TrainingContent from "@/components/sections/services/TrainingContent";

export const metadata: Metadata = {
  title: `Training Programs | ${siteConfig.name}`,
  description: `FRM, HRM, CSM, AFM, SCM, and corporate training programs from ${siteConfig.name}.`,
};

export default function TrainingPage() {
  return <TrainingContent />;
}
