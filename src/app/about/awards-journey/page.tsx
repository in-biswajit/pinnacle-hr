import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import AwardsJourneyContent from "@/components/sections/about/AwardsJourneyContent";

export const metadata: Metadata = {
  title: `Awards & Journey | ${siteConfig.name}`,
  description: `${siteConfig.name}'s milestones, timeline, and awards.`,
};

export default function AwardsJourneyPage() {
  return <AwardsJourneyContent />;
}
