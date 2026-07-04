"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CalendarDays, Users } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import AboutSubNav from "@/components/AboutSubNav";
import { founderBio, siteConfig } from "@/lib/site-data";

const milestoneStats = [
  { icon: Users, value: siteConfig.stats[0].value, label: "Candidates Placed" },
  { icon: Building2, value: "5", label: "Branch Offices" },
  { icon: CalendarDays, value: `${siteConfig.foundedYear}`, label: "Founded" },
];

export default function WhoWeAreContent() {
  return (
    <div>
      {/* Page Header/Banner */}
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              About Us
            </p>
            <h1 className="mt-2 text-4xl font-bold">Who We Are</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <AboutSubNav />
          </Reveal>
        </div>
      </section>

      {/* About Pinnacle HR */}
      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
              About Pinnacle HR
            </p>
            <p className="mt-3 text-brand-slate">
              {siteConfig.description} Founded in {siteConfig.foundedYear} by{" "}
              {siteConfig.founder}, we&apos;ve grown from a one-person operation
              in Bhubaneswar into a professionally managed HR consulting firm
              with branches across {siteConfig.branches.join(", ")}, placing{" "}
              {siteConfig.stats[0].value} candidates along the way.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/about-team.jpg"
              alt="Pinnacle HR team collaborating"
              width={600}
              height={480}
              className="h-72 w-full object-cover md:h-80"
            />
          </Reveal>
        </div>
      </section>

      {/* About the Founder */}
      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal className="mx-auto flex h-56 w-56 items-center justify-center rounded-2xl bg-brand-primary/10 shadow-sm">
              <span className="flex h-28 w-28 items-center justify-center rounded-full bg-brand-primary/15 text-4xl font-bold text-brand-primary">
                SKD
              </span>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
                Our Story
              </p>
              <h2 className="mt-1 text-2xl font-bold text-brand-ink">About the Founder</h2>
              <p className="mt-3 text-brand-slate">{founderBio}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Milestone Stats Bar */}
      <section className="bg-brand-ink py-12 text-white">
        <StaggerGroup className="mx-auto grid max-w-[1320px] grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          {milestoneStats.map((stat) => (
            <StaggerItem key={stat.label} className="flex items-center justify-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-coral">
                <stat.icon size={22} />
              </span>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold text-brand-ink sm:text-3xl">
            Ready to work with Pinnacle HR?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-slate">
            Whether you&apos;re hiring or looking for your next opportunity, we&apos;re
            ready to help.
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
