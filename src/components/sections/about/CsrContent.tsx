"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import AboutSubNav from "@/components/AboutSubNav";
import { csr, csrGallery, csrInitiatives } from "@/lib/site-data";

const initiativeIcons = [Users, Heart, Shield];

export default function CsrContent() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              About Us
            </p>
            <h1 className="mt-2 text-4xl font-bold">Corporate Social Responsibility</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <AboutSubNav />
          </Reveal>
        </div>
      </section>

      {/* CSR Philosophy / Tagline */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 text-center">
        <Reveal>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
            <Heart size={26} />
          </span>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-brand-primary">
            {csr.name}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-ink sm:text-3xl">{csr.tagline}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-slate">{csr.body}</p>
        </Reveal>
      </section>

      {/* CSR Initiatives (with photos) */}
      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold text-brand-ink">Our Initiatives</h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3">
            {csrInitiatives.map((initiative, i) => {
              const Icon = initiativeIcons[i];
              return (
                <StaggerItem
                  key={initiative.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    width={500}
                    height={350}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-3 font-semibold text-brand-ink">{initiative.title}</h3>
                    <p className="mt-1 text-sm text-brand-slate">{initiative.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold text-brand-ink">Impact Gallery</h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {csrGallery.map((photo) => (
            <StaggerItem
              key={photo.src}
              className="overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className="h-32 w-full object-cover sm:h-40"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* CTA */}
      <section className="bg-brand-lavender py-20 text-center">
        <Reveal className="mx-auto max-w-[1320px] px-6">
          <h2 className="text-2xl font-bold text-brand-ink sm:text-3xl">
            Want to partner with us on a cause?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-slate">
            Reach out to learn more about our CSR programs and how to get involved.
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
