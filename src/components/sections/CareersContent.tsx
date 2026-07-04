"use client";

import Image from "next/image";
import { ArrowRight, Send } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { hiringCategoryIcons } from "@/lib/icons";
import { hiringCategories, siteConfig } from "@/lib/site-data";

export default function CareersContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Careers
            </p>
            <h1 className="mt-2 text-4xl font-bold">We&apos;re Always Hiring Talent</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Openings with our client companies change regularly across these
              categories. Send us your resume and we&apos;ll reach out when a
              matching role opens up.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/careers-interview.jpg"
              alt="A candidate interview in progress"
              width={600}
              height={480}
              className="h-72 w-full object-cover md:h-80"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <StaggerGroup className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {hiringCategories.map((category) => {
            const Icon = hiringCategoryIcons[category];
            return (
              <StaggerItem
                key={category}
                className="flex flex-col items-center gap-3 rounded-2xl border border-brand-lavender-deep bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-semibold text-brand-ink">{category}</span>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal
          delay={0.1}
          className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-brand-lavender-deep bg-brand-lavender p-8 text-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-primary shadow-sm">
            <Send size={20} />
          </span>
          <h2 className="text-xl font-semibold text-brand-ink">Send Us Your Resume</h2>
          <p className="max-w-md text-sm text-brand-slate">
            Don&apos;t see your category listed? We still want to hear from
            you — we&apos;ll reach out when a matching opening comes up.
          </p>
          <a
            href={`mailto:${siteConfig.emails.career}?subject=${encodeURIComponent("Resume Submission")}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
          >
            Apply Now
            <ArrowRight size={16} />
          </a>
          <p className="text-xs text-brand-slate">{siteConfig.emails.career}</p>
        </Reveal>
      </section>

      <section className="bg-brand-lavender py-16">
        <Reveal className="mx-auto max-w-[1320px] px-6 text-center">
          <h2 className="text-2xl font-bold text-brand-ink">Hiring for your company?</h2>
          <p className="mt-3 text-brand-slate">
            Place a job order with us and get access to our vetted candidate
            network within days.
          </p>
          <a
            href={`mailto:${siteConfig.emails.corporate}?subject=${encodeURIComponent("Place a Job Order")}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
          >
            Place a Job Order
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>
    </div>
  );
}
