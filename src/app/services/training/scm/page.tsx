import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import ScmContent from "@/components/sections/services/training/ScmContent";

export const metadata: Metadata = {
  title: `SCM — Supply Chain Management | ${siteConfig.name}`,
  description: "Supply Chain Management training from Pinnacle HR.",
};

export default function ScmPage() {
  return <ScmContent />;
}
