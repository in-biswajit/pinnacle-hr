import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import CareersContent from "@/components/sections/CareersContent";

export const metadata: Metadata = {
  title: `Careers | ${siteConfig.name}`,
  description: `View current openings and apply for a career with ${siteConfig.name}.`,
};

export default function CareersPage() {
  return <CareersContent />;
}
