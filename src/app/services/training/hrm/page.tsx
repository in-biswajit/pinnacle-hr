import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import HrmContent from "@/components/sections/services/training/HrmContent";

export const metadata: Metadata = {
  title: `HRM — Human Resource Management | ${siteConfig.name}`,
  description: "Human Resource Management training covering the full range of core HR skills.",
};

export default function HrmPage() {
  return <HrmContent />;
}
