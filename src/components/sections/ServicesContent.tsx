"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { serviceIcons } from "@/lib/icons";
import { services, siteConfig } from "@/lib/site-data";

export default function ServicesContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-bold">Everything You Need Under One Roof</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              From sourcing candidates to verifying their credentials and
              keeping your business compliant, our services cover the full
              hiring lifecycle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {siteConfig.stats.map((stat) => (
                <span
                  key={stat.label}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                >
                  {stat.value} <span className="font-normal text-white/60">{stat.label}</span>
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/services-graduation.jpg"
              alt="Campus hiring and higher education support from Pinnacle HR"
              width={600}
              height={480}
              className="h-72 w-full object-cover md:h-80"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <StaggerGroup className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug];
            return (
              <StaggerItem
                key={service.slug}
                className="rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
                  <Icon size={22} />
                </span>
                <h2 className="mt-4 text-xl font-semibold text-brand-ink">{service.title}</h2>
                <p className="mt-2 text-sm text-brand-slate">{service.summary}</p>
                <ul className="mt-4 space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm text-brand-ink">
                      <span className="mt-0.5 text-brand-coral">●</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                {service.externalUrl ? (
                  <a
                    href={service.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline"
                  >
                    Visit LegaSource
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                )}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="bg-brand-lavender py-16 text-center">
        <Reveal className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold text-brand-ink">
            Need a service tailored to your business?
          </h2>
          <p className="mt-3 text-brand-slate">
            Tell us your hiring or compliance requirement and our team will
            get back to you within a business day.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
          >
            Place a Job Order
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
