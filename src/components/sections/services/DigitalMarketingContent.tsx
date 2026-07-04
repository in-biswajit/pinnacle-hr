"use client";

import { CircleDollarSign, Megaphone, Search } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import ServicesSubNav from "@/components/ServicesSubNav";
import ServiceCTA from "@/components/ServiceCTA";
import { serviceDetails } from "@/lib/site-data";

const icons = [Search, Megaphone, CircleDollarSign];
const { intro, cards } = serviceDetails.digitalMarketing;

export default function DigitalMarketingContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-bold">Digital Marketing</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <ServicesSubNav />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
            PinTek Digital
          </p>
          <p className="mt-3 max-w-3xl text-brand-slate">{intro}</p>
        </Reveal>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <StaggerGroup className="grid gap-6 sm:grid-cols-3">
            {cards.map((card, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem
                  key={card.title}
                  className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-3 font-semibold text-brand-ink">{card.title}</h3>
                  <p className="mt-1 text-sm text-brand-slate">{card.body}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <ServiceCTA
        title="Ready to grow your online presence?"
        body="Talk to us about SEO, social media, or performance marketing for your business."
      />
    </div>
  );
}
