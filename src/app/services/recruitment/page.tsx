import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import RecruitmentContent from "@/components/sections/services/RecruitmentContent";

export const metadata: Metadata = {
  title: `Recruitment | ${siteConfig.name}`,
  description: `Lateral hiring, manpower sourcing, executive search, and head-hunting from ${siteConfig.name}.`,
};

export default function RecruitmentPage() {
  return <RecruitmentContent />;
}
