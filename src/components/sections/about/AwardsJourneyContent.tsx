"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Handshake,
  Rocket,
  Sparkles,
  Star,
  Target,
  Trophy,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import AboutSubNav from "@/components/AboutSubNav";
import { awards, testimonials, timeline } from "@/lib/site-data";

const timelineIcons = [Rocket, Building2, Trophy, Handshake, Target, BookOpen, Sparkles];

export default function AwardsJourneyContent() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              About Us
            </p>
            <h1 className="mt-2 text-4xl font-bold">Awards & Journey</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <AboutSubNav />
          </Reveal>
        </div>
      </section>

      {/* Our Journey (timeline) */}
      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-brand-ink">Our Journey</h2>
        </Reveal>
        <StaggerGroup className="mt-10 space-y-8 border-l-2 border-brand-primary/25 pl-8">
          {timeline.map((item, i) => {
            const Icon = timelineIcons[i];
            return (
              <StaggerItem key={item.year} className="relative">
                <span className="absolute -left-[2.65rem] flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white">
                  <Icon size={15} />
                </span>
                <p className="text-sm font-semibold text-brand-primary">{item.year}</p>
                <p className="mt-1 text-brand-ink">{item.body}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* Awards & Recognitions */}
      <section className="bg-brand-lavender py-16">
        <Reveal className="mx-auto max-w-[1320px] px-6 text-center">
          <h2 className="text-2xl font-bold text-brand-ink">Awards & Recognition</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {awards.map((award) => (
              <span
                key={award}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-ink shadow-sm"
              >
                <Trophy size={15} className="text-brand-coral" />
                {award}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold text-brand-ink">What Our Clients Say</h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem
              key={t.name}
              className="rounded-2xl border border-brand-lavender-deep bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex text-brand-coral">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-3 text-sm text-brand-slate">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-bold text-brand-primary">
                  {t.name[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">{t.name}</p>
                  <p className="text-xs text-brand-slate">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* CTA */}
      <section className="bg-brand-lavender py-20 text-center">
        <Reveal className="mx-auto max-w-[1320px] px-6">
          <h2 className="text-2xl font-bold text-brand-ink sm:text-3xl">
            Want to be our next success story?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-slate">
            Let&apos;s talk about your hiring needs or your next career move.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
          >
            Talk to Us
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
