import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import CorporateTrainingContent from "@/components/sections/services/training/CorporateTrainingContent";

export const metadata: Metadata = {
  title: `Corporate Training | ${siteConfig.name}`,
  description: "Custom corporate training programs from Pinnacle HR.",
};

export default function CorporateTrainingPage() {
  return <CorporateTrainingContent />;
}
