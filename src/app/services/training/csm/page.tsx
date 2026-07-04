import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import CsmContent from "@/components/sections/services/training/CsmContent";

export const metadata: Metadata = {
  title: `CSM — Sales & Marketing | ${siteConfig.name}`,
  description: "Sales & Marketing training programs from Pinnacle HR.",
};

export default function CsmPage() {
  return <CsmContent />;
}
