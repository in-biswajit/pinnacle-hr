import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import HigherEducationContent from "@/components/sections/services/HigherEducationContent";

export const metadata: Metadata = {
  title: `Higher Education | ${siteConfig.name}`,
  description: `Full-time MBA and PGDM programs run with academic partners by ${siteConfig.name}.`,
};

export default function HigherEducationPage() {
  return <HigherEducationContent />;
}
