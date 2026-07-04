import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import FrmContent from "@/components/sections/services/training/FrmContent";

export const metadata: Metadata = {
  title: `FRM — Fashion Retail Management | ${siteConfig.name}`,
  description: "Fashion Retail Management training delivered in partnership with Shoppers Stop Ltd.",
};

export default function FrmPage() {
  return <FrmContent />;
}
