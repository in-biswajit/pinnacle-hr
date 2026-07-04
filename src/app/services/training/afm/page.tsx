import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import AfmContent from "@/components/sections/services/training/AfmContent";

export const metadata: Metadata = {
  title: `AFM — Accounts & Finance Management | ${siteConfig.name}`,
  description: "Accounts & Finance Management training from Pinnacle HR.",
};

export default function AfmPage() {
  return <AfmContent />;
}
