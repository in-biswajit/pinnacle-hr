"use client";

import type { ComponentType } from "react";
import { CheckCircle2, UserCheck } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import TrainingSubNav from "@/components/TrainingSubNav";
import ServiceCTA from "@/components/ServiceCTA";

export default function SimpleTrainingProgram({
  title,
  icon: Icon,
  intro,
  topics,
  whoCanJoin,
  ctaTitle,
  ctaBody,
}: {
  title: string;
  icon: ComponentType<{ size?: number }>;
  intro: string;
  topics: string[];
  whoCanJoin: string[];
  ctaTitle: string;
  ctaBody: string;
}) {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Training Programs
            </p>
            <h1 className="mt-2 text-4xl font-bold">{title}</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <TrainingSubNav />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="flex items-start gap-4 rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
            <Icon size={22} />
          </span>
          <p className="text-brand-slate">{intro}</p>
        </Reveal>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold text-brand-ink">What You&apos;ll Learn</h2>
          </Reveal>
          <StaggerGroup className="mt-8 flex flex-wrap justify-center gap-3">
            {topics.map((topic) => (
              <StaggerItem
                key={topic}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-sm"
              >
                <CheckCircle2 size={15} className="text-brand-primary" />
                {topic}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal>
          <h2 className="text-xl font-bold text-brand-ink">Who Can Join</h2>
        </Reveal>
        <StaggerGroup className="mt-6 space-y-3">
          {whoCanJoin.map((point) => (
            <StaggerItem
              key={point}
              className="flex items-start gap-3 rounded-xl border border-brand-lavender-deep bg-white p-4"
            >
              <UserCheck size={18} className="mt-0.5 shrink-0 text-brand-primary" />
              <span className="text-sm text-brand-slate">{point}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <ServiceCTA title={ctaTitle} body={ctaBody} />
    </div>
  );
}
