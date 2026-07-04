import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import WhoWeAreContent from "@/components/sections/about/WhoWeAreContent";

export const metadata: Metadata = {
  title: `Who We Are | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.legalName} and our founder.`,
};

export default function WhoWeArePage() {
  return <WhoWeAreContent />;
}
