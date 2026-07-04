"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Menu, X, Phone, Mail } from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";
import { navLinks, siteConfig } from "@/lib/site-data";

const socialIcons = [
  { href: siteConfig.social.facebook, icon: FacebookIcon, label: "Facebook" },
  { href: siteConfig.social.twitter, icon: TwitterIcon, label: "Twitter" },
  { href: siteConfig.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: siteConfig.social.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: siteConfig.social.youtube, icon: YoutubeIcon, label: "YouTube" },
];

function isActive(pathname: string, link: (typeof navLinks)[number]) {
  if (link.href === "/") return pathname === "/";
  if (link.children) {
    return link.children.some((c) => {
      const base = c.href.split("#")[0];
      return base.startsWith("/") && pathname.startsWith(base);
    });
  }
  return pathname.startsWith(link.href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="hidden border-b border-brand-lavender-deep bg-brand-ink text-white/80 md:block">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${siteConfig.phones[0]}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone size={12} />
              {siteConfig.phones[0]}
            </a>
            <a href={`mailto:${siteConfig.emails.career}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail size={12} />
              {siteConfig.emails.career}
            </a>
          </div>
          <div className="flex items-center gap-3">
            {socialIcons.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors hover:text-brand-coral"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center">
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={160}
            height={56}
            priority
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(pathname, link);
            return (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1 text-sm font-medium transition-colors ${
                    active
                      ? "text-brand-primary"
                      : "text-brand-slate hover:text-brand-primary"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-brand-primary transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>

                {link.children && (
                  <div className="invisible absolute left-0 top-full z-10 w-64 rounded-xl border border-brand-lavender-deep bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {link.children.map((child) =>
                      "external" in child && child.external ? (
                        <a
                          key={child.href}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-brand-slate transition-colors hover:bg-brand-lavender hover:text-brand-primary"
                        >
                          {child.label}
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            pathname === child.href
                              ? "bg-brand-lavender text-brand-primary"
                              : "text-brand-slate hover:bg-brand-lavender hover:text-brand-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phones[0]}`}
            className="flex items-center gap-2 rounded-full border border-brand-lavender-deep px-4 py-2 text-sm font-semibold text-brand-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary"
          >
            <Phone size={15} />
            {siteConfig.phones[0]}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
          >
            Get In Touch
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-brand-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-brand-lavender-deep md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-4 pt-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-full px-3 py-2 text-sm font-medium text-brand-slate transition-colors hover:bg-brand-lavender hover:text-brand-primary"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        type="button"
                        aria-label={`Toggle ${link.label} submenu`}
                        onClick={() =>
                          setMobileSubOpen((cur) => (cur === link.href ? null : link.href))
                        }
                        className="p-2 text-brand-slate"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileSubOpen === link.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {link.children && (
                    <AnimatePresence>
                      {mobileSubOpen === link.href && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4"
                        >
                          {link.children.map((child) =>
                            "external" in child && child.external ? (
                              <a
                                key={child.href}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between rounded-full px-3 py-2 text-sm text-brand-slate transition-colors hover:bg-brand-lavender hover:text-brand-primary"
                              >
                                {child.label}
                                <ExternalLink size={13} />
                              </a>
                            ) : (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-full px-3 py-2 text-sm text-brand-slate transition-colors hover:bg-brand-lavender hover:text-brand-primary"
                              >
                                {child.label}
                              </Link>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-brand-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
              >
                Get In Touch
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
