"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Handshake,
  Heart,
  Rocket,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import AboutSubNav from "@/components/AboutSubNav";
import { mission, values, vision } from "@/lib/site-data";

const valueIcons = [Award, Sparkles, Handshake, Heart, Trophy, Target];

export default function MissionVisionValuesContent() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              About Us
            </p>
            <h1 className="mt-2 text-4xl font-bold">Mission, Vision & Values</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <AboutSubNav />
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm sm:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
            <Rocket size={22} />
          </span>
          <h2 className="mt-4 text-lg font-semibold text-brand-ink">Vision</h2>
          <p className="mt-2 text-brand-slate">{vision}</p>
        </Reveal>
      </section>

      {/* Mission (bullets) */}
      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-primary shadow-sm">
              <Target size={22} />
            </span>
            <h2 className="mt-4 text-lg font-semibold text-brand-ink">Mission</h2>
          </Reveal>
          <StaggerGroup className="mt-6 grid gap-3 sm:grid-cols-2">
            {mission.map((point) => (
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

      {/* Values (6 cards) */}
      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold text-brand-ink">Our Core Values</h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => {
            const Icon = valueIcons[i];
            return (
              <StaggerItem
                key={value.title}
                className="rounded-2xl border border-brand-lavender-deep bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                  <Icon size={20} />
                </span>
                <h3 className="mt-3 font-semibold text-brand-ink">{value.title}</h3>
                <p className="mt-1 text-sm text-brand-slate">{value.body}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* CTA */}
      <section className="bg-brand-lavender py-20 text-center">
        <Reveal className="mx-auto max-w-[1320px] px-6">
          <h2 className="text-2xl font-bold text-brand-ink sm:text-3xl">
            Want to know more about how we work?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-slate">
            Explore our services or get in touch to discuss your hiring needs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
            >
              Our Services
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-brand-ink/15 bg-white px-7 py-3 text-sm font-semibold text-brand-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary active:translate-y-0"
            >
              Talk to Us
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
