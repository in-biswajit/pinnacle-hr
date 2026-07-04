import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import ServicesContent from "@/components/sections/ServicesContent";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description: `Explore recruitment, staffing, training, and compliance services offered by ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return <ServicesContent />;
}
