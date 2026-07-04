"use client";

import { Crown, Handshake, Target, UserSearch, Users } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import ServicesSubNav from "@/components/ServicesSubNav";
import ServiceCTA from "@/components/ServiceCTA";
import { serviceDetails } from "@/lib/site-data";

const icons = [Users, Handshake, Crown, UserSearch, Target];
const { intro, subServices } = serviceDetails.recruitment;

export default function RecruitmentContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-bold">Recruitment</h1>
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
            <h2 className="text-2xl font-bold text-brand-ink">Our Recruitment Services</h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map((item, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-3 font-semibold text-brand-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-brand-slate">{item.body}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <ServiceCTA
        title="Ready to build your team?"
        body="Tell us the role and we'll match you with the right talent."
        label="Place a Job Order"
      />
    </div>
  );
}
