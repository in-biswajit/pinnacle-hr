"use client";

import Image from "next/image";
import { Cpu } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import ServicesSubNav from "@/components/ServicesSubNav";
import ServiceCTA from "@/components/ServiceCTA";
import { industryIcons } from "@/lib/icons";
import { industries, serviceDetails } from "@/lib/site-data";

const { intro, specializations, image } = serviceDetails.staffing;

export default function StaffingContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-bold">Staffing</h1>
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
            <h2 className="text-2xl font-bold text-brand-ink">Sectors We Serve</h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => {
              const Icon = industryIcons[industry];
              return (
                <StaggerItem
                  key={industry}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <Icon size={22} />
                  </span>
                  <span className="text-sm font-semibold text-brand-ink">{industry}</span>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
          <Reveal className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={image}
              alt="Pinnacle HR staffing specialists at work"
              width={600}
              height={480}
              className="h-72 w-full object-cover md:h-80"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
              IT & Engineering Specializations
            </p>
            <StaggerGroup className="mt-4 space-y-3">
              {specializations.map((spec) => (
                <StaggerItem
                  key={spec}
                  className="flex items-center gap-3 rounded-xl border border-brand-lavender-deep bg-white p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                    <Cpu size={16} />
                  </span>
                  <span className="text-sm font-medium text-brand-ink">{spec}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      <ServiceCTA
        title="Need specialized staffing support?"
        body="Whether temporary or permanent, we'll match the right skills to your requirement."
        label="Place a Job Order"
      />
    </div>
  );
}
