"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone")}\n\n${form.get("message")}`
    );
    window.location.href = `mailto:${siteConfig.emails.corporate}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-brand-lavender p-6 text-brand-ink">
        Thanks for reaching out! Your email client should have opened with
        your message — send it across and we&apos;ll get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-brand-lavender-deep px-3 py-2 text-sm focus:border-brand-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-brand-lavender-deep px-3 py-2 text-sm focus:border-brand-primary focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-brand-lavender-deep px-3 py-2 text-sm focus:border-brand-primary focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-brand-lavender-deep px-3 py-2 text-sm focus:border-brand-primary focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
      >
        Send Message
      </button>
    </form>
  );
}
