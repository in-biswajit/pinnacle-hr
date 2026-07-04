"use client";

import {
  BookOpenCheck,
  CheckCircle2,
  Fingerprint,
  Handshake,
  IdCard,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import ServicesSubNav from "@/components/ServicesSubNav";
import ServiceCTA from "@/components/ServiceCTA";
import { serviceDetails } from "@/lib/site-data";

const verificationIcons = [MapPin, IdCard, BookOpenCheck, ShieldCheck, Handshake];
const { intro, whyPinnacle, strengths, verificationTypes } = serviceDetails.backgroundVerification;

export default function BackgroundVerificationContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-bold">Background Verification</h1>
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
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <h2 className="text-xl font-bold text-brand-ink">Why Pinnacle</h2>
              <ul className="mt-5 space-y-3">
                {whyPinnacle.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <Fingerprint size={18} className="mt-0.5 shrink-0 text-brand-primary" />
                    <span className="text-sm text-brand-slate">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="text-xl font-bold text-brand-ink">Pinnacle&apos;s Strengths</h2>
              <ul className="mt-5 space-y-3">
                {strengths.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-coral" />
                    <span className="text-sm text-brand-slate">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold text-brand-ink">Verification Types</h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {verificationTypes.map((type, i) => {
            const Icon = verificationIcons[i];
            return (
              <StaggerItem
                key={type.title}
                className="rounded-2xl border border-brand-lavender-deep bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                  <Icon size={20} />
                </span>
                <h3 className="mt-3 font-semibold text-brand-ink">{type.title}</h3>
                <p className="mt-1 text-sm text-brand-slate">{type.body}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <ServiceCTA
        title="Hire with confidence."
        body="Let us verify your candidates before they walk through your door."
      />
    </div>
  );
}
