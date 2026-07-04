"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { siteConfig } from "@/lib/site-data";
import ContactForm from "@/components/ContactForm";

export default function ContactContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <Reveal className="mx-auto max-w-[1320px] px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-bold">Let&apos;s Talk</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Whether you&apos;re hiring, job hunting, or have a question about
            our services, we&apos;d love to hear from you.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <StaggerGroup className="grid gap-6 sm:grid-cols-3">
          <StaggerItem>
            <a
              href={`tel:${siteConfig.phones[0]}`}
              className="flex items-center gap-4 rounded-2xl border border-brand-lavender-deep bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
                <Phone size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">Call Us</p>
                <p className="font-semibold text-brand-ink">{siteConfig.phones[0]}</p>
              </div>
            </a>
          </StaggerItem>
          <StaggerItem>
            <a
              href={`mailto:${siteConfig.emails.career}`}
              className="flex items-center gap-4 rounded-2xl border border-brand-lavender-deep bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">Email Us</p>
                <p className="font-semibold text-brand-ink">{siteConfig.emails.career}</p>
              </div>
            </a>
          </StaggerItem>
          <StaggerItem className="flex items-center gap-4 rounded-2xl border border-brand-lavender-deep bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
              <MapPin size={20} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">Head Office</p>
              <p className="font-semibold text-brand-ink">{siteConfig.headOffice.label}</p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-12 px-6 pb-20 md:grid-cols-2">
        <Reveal>
          <h2 className="text-xl font-semibold text-brand-ink">Send Us a Message</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-xl font-semibold text-brand-ink">Our Offices</h2>
          <div className="mt-4 rounded-2xl border border-brand-lavender-deep bg-white p-6 shadow-sm">
            <p className="font-semibold text-brand-ink">{siteConfig.headOffice.label}</p>
            <div className="mt-4 space-y-3 text-sm text-brand-slate">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-primary" />
                {siteConfig.headOffice.address}
              </p>
              {[...siteConfig.phones, siteConfig.landline].map((phone) => (
                <p key={phone} className="flex items-center gap-2">
                  <Phone size={16} className="shrink-0 text-brand-primary" />
                  <a href={`tel:${phone}`} className="hover:text-brand-primary">
                    {phone}
                  </a>
                </p>
              ))}
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand-primary" />
                <a
                  href={`mailto:${siteConfig.emails.career}`}
                  className="hover:text-brand-primary"
                >
                  {siteConfig.emails.career}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand-primary" />
                <a
                  href={`mailto:${siteConfig.emails.corporate}`}
                  className="hover:text-brand-primary"
                >
                  {siteConfig.emails.corporate}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-brand-primary" />
                {siteConfig.businessHours}
              </p>
            </div>
          </div>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-brand-ink">
            Other Branches
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {siteConfig.branches
              .filter((b) => b !== "Bhubaneswar")
              .map((branch) => (
                <span
                  key={branch}
                  className="rounded-full bg-brand-lavender px-4 py-1.5 text-sm text-brand-ink"
                >
                  {branch}
                </span>
              ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
