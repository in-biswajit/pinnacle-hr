"use client";

import {
  Backpack,
  ClipboardCheck,
  FileText,
  GraduationCap,
  MessageSquare,
  Presentation,
  School,
  UserCheck,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import ServicesSubNav from "@/components/ServicesSubNav";
import ServiceCTA from "@/components/ServiceCTA";
import { serviceDetails } from "@/lib/site-data";

const stepIcons = [Presentation, ClipboardCheck, FileText, MessageSquare, UserCheck, UserCheck, GraduationCap];
const recruitForIcons = [GraduationCap, Backpack, School, GraduationCap];
const { intro, steps, recruitFor } = serviceDetails.campusHiring;

export default function CampusHiringContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-bold">Campus Hiring</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <ServicesSubNav />
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
            <h2 className="text-2xl font-bold text-brand-ink">Our Process</h2>
          </Reveal>
          <StaggerGroup className="mt-10 flex flex-wrap justify-center gap-4">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <StaggerItem
                  key={step.title}
                  className="flex w-40 flex-col items-center gap-3 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-primary shadow-sm">
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-brand-primary">Step {i + 1}</p>
                    <p className="text-sm font-semibold text-brand-ink">{step.title}</p>
                    <p className="mt-1 text-xs text-brand-slate">{step.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold text-brand-ink">What We Recruit For</h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {recruitFor.map((item, i) => {
            const Icon = recruitForIcons[i];
            return (
              <StaggerItem
                key={item}
                className="flex flex-col items-center gap-3 rounded-2xl border border-brand-lavender-deep bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-semibold text-brand-ink">{item}</span>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <ServiceCTA
        title="Bringing a campus drive to your institute?"
        body="Get in touch with our campus relations team to schedule a visit."
      />
    </div>
  );
}
