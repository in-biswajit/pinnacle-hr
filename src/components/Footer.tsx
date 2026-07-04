import Link from "next/link";
import Image from "next/image";
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

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white/70">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex items-center rounded-xl bg-white px-3 py-2">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={200}
              height={111}
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed">{siteConfig.description}</p>
          <div className="mt-5 flex gap-3">
            {socialIcons.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-brand-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Main Menu
          </h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-coral">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Branches
          </h3>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.branches.map((branch) => (
              <li key={branch}>{branch}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Contact Info
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>{siteConfig.headOffice.address}</li>
            {siteConfig.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone}`} className="hover:text-brand-coral">
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.emails.career}`} className="hover:text-brand-coral">
                {siteConfig.emails.career}
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
