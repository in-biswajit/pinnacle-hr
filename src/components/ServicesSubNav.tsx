"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { serviceLinks } from "@/lib/site-data";

export default function ServicesSubNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2">
      {serviceLinks.map((link) =>
        link.external ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            {link.label}
            <ExternalLink size={13} />
          </a>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              pathname === link.href
                ? "bg-brand-primary text-white"
                : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        )
      )}
    </div>
  );
}
