"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";

export default function ServiceCTA({
  title,
  body,
  href = "/contact",
  label = "Talk to Us",
}: {
  title: string;
  body: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-brand-lavender py-20 text-center">
      <Reveal className="mx-auto max-w-[1320px] px-6">
        <h2 className="text-2xl font-bold text-brand-ink sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-slate">{body}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
        >
          {label}
          <ArrowRight size={16} />
        </Link>
      </Reveal>
    </section>
  );
}
