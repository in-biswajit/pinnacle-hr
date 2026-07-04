import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import CampusHiringContent from "@/components/sections/services/CampusHiringContent";

export const metadata: Metadata = {
  title: `Campus Hiring | ${siteConfig.name}`,
  description: `${siteConfig.name}'s campus recruitment process, from pre-placement talks to offer letters.`,
};

export default function CampusHiringPage() {
  return <CampusHiringContent />;
}
