import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import CsrContent from "@/components/sections/about/CsrContent";

export const metadata: Metadata = {
  title: `CSR | ${siteConfig.name}`,
  description: `${siteConfig.name}'s corporate social responsibility initiatives.`,
};

export default function CsrPage() {
  return <CsrContent />;
}
