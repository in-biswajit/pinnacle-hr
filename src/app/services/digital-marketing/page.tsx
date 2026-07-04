import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import DigitalMarketingContent from "@/components/sections/services/DigitalMarketingContent";

export const metadata: Metadata = {
  title: `Digital Marketing | ${siteConfig.name}`,
  description: `SEO, SMO, and Pay Per Performance marketing from PinTek Digital, ${siteConfig.name}'s digital marketing arm.`,
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingContent />;
}
