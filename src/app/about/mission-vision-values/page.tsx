import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import MissionVisionValuesContent from "@/components/sections/about/MissionVisionValuesContent";

export const metadata: Metadata = {
  title: `Mission, Vision & Values | ${siteConfig.name}`,
  description: `${siteConfig.name}'s mission, vision, and core values.`,
};

export default function MissionVisionValuesPage() {
  return <MissionVisionValuesContent />;
}
