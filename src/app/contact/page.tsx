import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} — offices in ${siteConfig.branches.join(", ")}.`,
};

export default function ContactPage() {
  return <ContactContent />;
}
