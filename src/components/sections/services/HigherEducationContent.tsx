"use client";

import { Award, CheckCircle2, GraduationCap } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import ServicesSubNav from "@/components/ServicesSubNav";
import ServiceCTA from "@/components/ServiceCTA";
import { serviceDetails } from "@/lib/site-data";

const { intro, eligibility, highlights } = serviceDetails.higherEducation;

export default function HigherEducationContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-bold">Higher Education</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <ServicesSubNav />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="flex items-start gap-4 rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
            <GraduationCap size={22} />
          </span>
          <p className="text-brand-slate">{intro}</p>
        </Reveal>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <h2 className="text-xl font-bold text-brand-ink">Eligibility Criteria</h2>
          </Reveal>
          <StaggerGroup className="mt-6 space-y-3">
            {eligibility.map((point) => (
              <StaggerItem
                key={point}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-primary" />
                <span className="text-sm text-brand-slate">{point}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal>
          <h2 className="text-xl font-bold text-brand-ink">Program Highlights</h2>
        </Reveal>
        <StaggerGroup className="mt-6 grid gap-5 sm:grid-cols-3">
          {highlights.map((point) => (
            <StaggerItem
              key={point}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-lavender-deep bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                <Award size={20} />
              </span>
              <p className="text-sm font-medium text-brand-ink">{point}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <ServiceCTA
        title="Interested in our MBA or PGDM program?"
        body="Reach out for admission counselling and program details."
      />
    </div>
  );
}
