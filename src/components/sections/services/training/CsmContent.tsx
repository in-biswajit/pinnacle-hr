"use client";

import { CheckCircle2, GraduationCap, Target, TrendingUp } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import TrainingSubNav from "@/components/TrainingSubNav";
import ServiceCTA from "@/components/ServiceCTA";
import { csmDetails } from "@/lib/site-data";

const { intro, programTopics, approach, results, whoCanJoin } = csmDetails;

export default function CsmContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Training Programs
            </p>
            <h1 className="mt-2 text-4xl font-bold">CSM — Sales & Marketing</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <TrainingSubNav />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal>
          <p className="max-w-3xl text-brand-slate">{intro}</p>
        </Reveal>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold text-brand-ink">Program Topics</h2>
          </Reveal>
          <StaggerGroup className="mt-8 flex flex-wrap justify-center gap-3">
            {programTopics.map((topic) => (
              <StaggerItem
                key={topic}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-ink shadow-sm"
              >
                {topic}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
              <Target size={20} />
            </span>
            <h3 className="mt-3 font-semibold text-brand-ink">Our Approach</h3>
            <p className="mt-2 text-sm text-brand-slate">{approach}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
              <TrendingUp size={20} />
            </span>
            <h3 className="mt-3 font-semibold text-brand-ink">Results</h3>
            <p className="mt-2 text-sm text-brand-slate">{results}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold text-brand-ink">Who Can Join</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <StaggerGroup>
              <Reveal>
                <h3 className="flex items-center gap-2 font-semibold text-brand-ink">
                  <GraduationCap size={18} className="text-brand-primary" />
                  Profile of a Trainee
                </h3>
              </Reveal>
              <div className="mt-4 space-y-3">
                {whoCanJoin.profile.map((point) => (
                  <StaggerItem
                    key={point}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-primary" />
                    <span className="text-sm text-brand-slate">{point}</span>
                  </StaggerItem>
                ))}
              </div>
            </StaggerGroup>
            <StaggerGroup>
              <Reveal>
                <h3 className="flex items-center gap-2 font-semibold text-brand-ink">
                  <CheckCircle2 size={18} className="text-brand-primary" />
                  Essential Qualifications
                </h3>
              </Reveal>
              <div className="mt-4 space-y-3">
                {whoCanJoin.qualifications.map((point) => (
                  <StaggerItem
                    key={point}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-coral" />
                    <span className="text-sm text-brand-slate">{point}</span>
                  </StaggerItem>
                ))}
              </div>
            </StaggerGroup>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Looking to sharpen your sales team?"
        body="Ask us about running a CSM program for your organization."
      />
    </div>
  );
}
