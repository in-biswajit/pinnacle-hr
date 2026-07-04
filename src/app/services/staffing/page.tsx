import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import StaffingContent from "@/components/sections/services/StaffingContent";

export const metadata: Metadata = {
  title: `Staffing | ${siteConfig.name}`,
  description: `Temporary and permanent staffing solutions from ${siteConfig.name} across every major sector.`,
};

export default function StaffingPage() {
  return <StaffingContent />;
}
