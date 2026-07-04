"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { aboutLinks } from "@/lib/site-data";

export default function AboutSubNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2">
      {aboutLinks.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active
                ? "bg-brand-primary text-white"
                : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
