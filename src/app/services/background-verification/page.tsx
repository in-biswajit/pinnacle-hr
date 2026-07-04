import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import BackgroundVerificationContent from "@/components/sections/services/BackgroundVerificationContent";

export const metadata: Metadata = {
  title: `Background Verification | ${siteConfig.name}`,
  description: `Thorough address, identity, education, and employment verification from ${siteConfig.name}.`,
};

export default function BackgroundVerificationPage() {
  return <BackgroundVerificationContent />;
}
