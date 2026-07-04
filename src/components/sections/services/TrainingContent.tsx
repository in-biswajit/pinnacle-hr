"use client";

import Link from "next/link";
import { ArrowRight, Rocket, Target } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import ServicesSubNav from "@/components/ServicesSubNav";
import ServiceCTA from "@/components/ServiceCTA";
import { serviceDetails } from "@/lib/site-data";

const { vision, mission, focusAreas, aboutTraining, programs } = serviceDetails.training;

export default function TrainingContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-bold">Training Programs</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <ServicesSubNav />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          <StaggerItem className="rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
              <Rocket size={22} />
            </span>
            <h2 className="mt-4 text-lg font-semibold text-brand-ink">Vision</h2>
            <p className="mt-2 text-sm text-brand-slate">{vision}</p>
          </StaggerItem>
          <StaggerItem className="rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
              <Target size={22} />
            </span>
            <h2 className="mt-4 text-lg font-semibold text-brand-ink">Mission</h2>
            <p className="mt-2 text-sm text-brand-slate">{mission}</p>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold text-brand-ink">Focus Areas</h2>
          </Reveal>
          <StaggerGroup className="mt-8 flex flex-wrap justify-center gap-3">
            {focusAreas.map((area) => (
              <StaggerItem
                key={area}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-ink shadow-sm"
              >
                {area}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold text-brand-ink">About Pinnacle Training</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-slate">{aboutTraining}</p>
        </Reveal>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold text-brand-ink">Our Programs</h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <StaggerItem key={program.code}>
                <Link
                  href={program.href}
                  className="block h-full rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-sm font-bold text-brand-primary">
                    {program.code === "Corporate Training" ? "CT" : program.code}
                  </span>
                  <h3 className="mt-3 font-semibold text-brand-ink">{program.title}</h3>
                  <p className="mt-1 text-sm text-brand-slate">{program.body}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    Learn More
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <ServiceCTA
        title="Ready to upskill your team?"
        body="Ask us about running one of our programs at your organization."
      />
    </div>
  );
}
