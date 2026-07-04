"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Crown,
  FileEdit,
  Heart,
  Lightbulb,
  Mail,
  MessageCircle,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserSearch,
  Users,
} from "lucide-react";
import Highlight from "@/components/Highlight";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { serviceIcons } from "@/lib/icons";
import {
  clients,
  founderBio,
  heroSlides,
  services,
  siteConfig,
  team,
  values,
  whyChooseUs,
  workingProcess,
} from "@/lib/site-data";

const whyChooseUsIcons = [Users, UserSearch, Target, FileEdit, MessageCircle, Search];
const processIcons = [Search, BarChart3, ClipboardList, Rocket];
const teamTagIcons: Record<string, typeof Crown> = { Founder: Crown, Leadership: Star };
const teamValueIcons = [ShieldCheck, Lightbulb, Heart, Award];

const pipeline = [
  { name: "A. Sharma", stage: "Sourced" },
  { name: "R. Iyer", stage: "Interviewed" },
  { name: "M. Khan", stage: "Offered" },
  { name: "P. Das", stage: "Hired" },
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];
  const words = slide.title.split(" ");
  const lastWord = words.pop();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-white px-4 py-1.5 text-xs font-semibold text-brand-primary shadow-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
        </span>
        India&apos;s Trusted HR Partner Since {siteConfig.foundedYear}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">
            {words.join(" ")}{" "}
            <span className="relative inline-block text-brand-coral">
              {lastWord}
              <Sparkles
                size={20}
                className="absolute -right-6 -top-4 text-brand-primary"
              />
            </span>
          </h1>
          <p className="mt-5 max-w-md text-brand-slate">{slide.body}</p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/contact"
          className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
        >
          Place a Job Order
        </Link>
        <Link
          href="/careers"
          className="flex items-center gap-2 rounded-full border border-brand-ink/15 bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary active:translate-y-0"
        >
          Apply Now
        </Link>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/15 bg-white text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((i) => (i + 1) % heroSlides.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/15 bg-white text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary"
          >
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="flex items-center gap-3 text-sm text-brand-slate">
          <div className="flex text-brand-coral">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span>ISO 9001:2015 Certified · {siteConfig.stats[0].value} placed</span>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-brand-ink/10 pt-6">
        {[siteConfig.stats[0], siteConfig.stats[1], siteConfig.stats[3]].map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl font-bold text-brand-ink">{stat.value}</p>
            <p className="text-xs text-brand-slate">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-lavender via-white to-brand-lavender">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(15,140,140,0.16) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="animate-float absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
        <div
          className="animate-float absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand-coral/15 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <HeroCarousel />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute inset-0 -z-10 rotate-3 rounded-[2.5rem] bg-brand-lavender-deep transition-transform duration-500 group-hover:rotate-0" />

            <div className="group -rotate-2 overflow-hidden rounded-2xl shadow-xl shadow-brand-primary/10 ring-1 ring-black/5 transition-transform duration-500 hover:rotate-0">
              <Image
                src="/images/hero-collaboration.jpg"
                alt="Pinnacle HR recruiters reviewing candidates"
                width={500}
                height={600}
                priority
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="animate-float absolute -top-5 right-4 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-xs font-bold text-brand-ink shadow-lg ring-4 ring-brand-lavender">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary">
                <Award size={15} />
              </span>
              {siteConfig.stats[1].value} Years
            </div>

            <div className="animate-float absolute -top-6 -left-10 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-ink shadow-lg sm:flex">
              <BadgeCheck size={16} className="text-brand-primary" />
              {siteConfig.stats[0].value} Placed
            </div>
            <div
              className="animate-float absolute -bottom-6 -right-10 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-ink shadow-lg sm:flex"
              style={{ animationDelay: "1.1s" }}
            >
              <ShieldCheck size={16} className="text-brand-coral" />
              Verified Talent
            </div>

            <div className="absolute bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-semibold text-brand-ink">
                <span>Shortlisted Candidates</span>
                <span className="rounded-full bg-brand-lavender px-2 py-0.5 text-brand-primary">Live</span>
              </div>
              <div className="mt-2 flex -space-x-2">
                {pipeline.map((c) => (
                  <span
                    key={c.name}
                    title={c.name}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-brand-primary/15 text-[10px] font-bold text-brand-primary"
                  >
                    {c.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Pinnacle HR */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-lavender blur-3xl" />
        <div className="mx-auto grid max-w-[1320px] items-center gap-16 px-6 md:grid-cols-[1fr_1.2fr]">
          <Reveal className="relative">
            <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2rem] bg-brand-primary/10" />
            <div className="absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-brand-coral/15 blur-2xl" />

            <div className="-rotate-1 overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:rotate-0">
              <Image
                src="/images/about-team.jpg"
                alt="Pinnacle HR team at work"
                width={600}
                height={480}
                className="h-72 w-full object-cover md:h-96"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary">
                <Building2 size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-ink">
                  Est. {siteConfig.foundedYear}
                </p>
                <p className="text-xs text-brand-slate">
                  {siteConfig.stats[1].value} Years of Excellence
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-lavender px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              <Sparkles size={14} />
              About Us
            </span>
            <h2 className="mt-4 text-3xl font-bold text-brand-ink">
              About <Highlight>Pinnacle HR</Highlight>
            </h2>
            <p className="mt-4 text-brand-slate">{siteConfig.description}</p>
            <p className="mt-3 text-brand-slate">
              Founded in {siteConfig.foundedYear} by {siteConfig.founder}, we&apos;ve placed{" "}
              {siteConfig.stats[0].value} candidates from executive level to top
              professionals, with branches across {siteConfig.branches.join(", ")}.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {siteConfig.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 rounded-xl bg-brand-lavender px-3 py-2.5 text-sm font-medium text-brand-ink"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-brand-primary" />
                  <span>
                    {stat.value === "✓" ? stat.label : `${stat.value} ${stat.label}`}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about/who-we-are"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 px-5 py-2.5 text-sm font-semibold text-brand-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary hover:text-white hover:shadow-md"
            >
              View More
              <ChevronRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Our Services */}
      <section className="relative overflow-hidden bg-brand-lavender py-20">
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand-coral/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              <Sparkles size={14} />
              What We Do
            </span>
            <h2 className="mt-4 text-3xl font-bold text-brand-ink">
              Our <Highlight>Services</Highlight>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-slate">
              A one-stop shop for every stage of the hiring journey — from sourcing
              talent to keeping your workforce compliant.
            </p>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.slug];
              const href = service.externalUrl ?? `/services/${service.slug}`;
              const external = Boolean(service.externalUrl);
              const tint =
                i % 2 === 0
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "bg-brand-coral/10 text-brand-coral";
              return (
                <StaggerItem
                  key={service.slug}
                  className="group relative overflow-hidden rounded-2xl border border-brand-lavender-deep bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-primary/40 hover:shadow-xl"
                >
                  <Link
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="block"
                  >
                    <span className="absolute right-4 top-2 text-4xl font-black text-brand-ink/5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tint}`}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 font-semibold text-brand-ink">{service.title}</h3>
                    <p className="mt-2 text-sm text-brand-slate">{service.summary}</p>
                    <span className="mt-4 flex translate-x-[-6px] items-center gap-1 text-sm font-semibold text-brand-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      Learn More
                      <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
          <Reveal className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
            >
              Explore More
            </Link>
          </Reveal>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-lavender blur-3xl" />
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-lavender px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              <Sparkles size={14} />
              How We Work
            </span>
            <h2 className="mt-4 text-3xl font-bold text-brand-ink">
              Learn More About Our <Highlight>Working Process</Highlight>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-slate">
              A simple, proven four-step approach that takes you from open
              requirement to confirmed hire.
            </p>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden border-t-2 border-dashed border-brand-lavender-deep lg:block" />
            <StaggerGroup className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {workingProcess.map((step, i) => {
                const Icon = processIcons[i];
                return (
                  <StaggerItem
                    key={step.step}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-ink bg-white text-brand-primary shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-brand-primary group-hover:shadow-lg">
                      <Icon size={26} />
                      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-coral text-xs font-bold text-white ring-4 ring-white">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-5 font-semibold text-brand-ink">{step.title}</h3>
                    <p className="mt-2 max-w-[220px] text-sm text-brand-slate">{step.body}</p>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Feature Cards / Why Choose Us */}
      <section className="relative overflow-hidden bg-brand-ink py-20 text-white">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-brand-coral/15 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              <Sparkles size={14} />
              Why Choose Us
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold sm:text-3xl">
              We help you hire the best, and it&apos;s the best that are trailed.{" "}
              <Highlight>Unheeding the effort</Highlight>, we make sure of our success, at
              all times.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => {
              const Icon = whyChooseUsIcons[i];
              const tint =
                i % 2 === 0
                  ? "bg-brand-primary/20 text-brand-primary"
                  : "bg-brand-coral/20 text-brand-coral";
              return (
                <StaggerItem
                  key={item.title}
                  className="group relative flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/10"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tint}`}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{item.body}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="absolute right-5 top-5 text-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Our Team */}
      <section className="relative overflow-hidden bg-brand-lavender py-20">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
        <div
          className="absolute left-0 top-24 h-40 w-40 opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(15,140,140,0.35) 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div
          className="absolute bottom-10 right-10 h-40 w-40 opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(122,31,31,0.3) 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              <Users size={14} />
              Leadership
            </span>
            <h2 className="mt-4 text-4xl font-bold text-brand-ink">
              Our{" "}
              <span className="relative text-brand-primary">
                Team
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-brand-primary/40" />
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-slate">
              The people steering Pinnacle HR&apos;s mission of connecting the right
              talent with the right opportunity.
            </p>
          </Reveal>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            {(() => {
              const member = team[0];
              const TagIcon = teamTagIcons[member.tag] ?? Star;
              return (
                <Reveal className="relative">
                  <div className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-brand-primary/10 sm:h-96">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={420}
                      height={480}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative z-10 mx-4 -mt-14 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5 sm:mx-8 sm:-mr-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white">
                      <TagIcon size={18} />
                    </span>
                    <span className="mt-3 inline-block rounded-full bg-brand-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-primary">
                      {member.tag}
                    </span>
                    <p className="mt-2 text-lg font-bold text-brand-ink">{member.name}</p>
                    <p className="text-sm font-semibold text-brand-primary">{member.title}</p>
                    <p className="mt-2 text-sm text-brand-slate">{member.bio}</p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 px-4 py-2 text-xs font-semibold text-brand-primary transition-all duration-200 hover:bg-brand-primary hover:text-white"
                    >
                      <Mail size={14} />
                      Get in Touch
                    </Link>
                  </div>
                </Reveal>
              );
            })()}

            <Reveal
              delay={0.15}
              className="flex flex-col items-center gap-4 py-6 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-brand-primary/30 text-brand-primary">
                <Users size={26} />
              </span>
              <Quote size={28} className="text-brand-primary/30" />
              <p className="max-w-[200px] text-sm font-medium text-brand-ink">
                People are our greatest asset — together, we build careers and
                possibilities.
              </p>
            </Reveal>

            {(() => {
              const member = team[1];
              const TagIcon = teamTagIcons[member.tag] ?? Star;
              return (
                <Reveal delay={0.2} className="relative">
                  <div className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-brand-coral/10 sm:h-96">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={420}
                      height={480}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative z-10 mx-4 -mt-14 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5 sm:mx-8 sm:-ml-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-coral text-white">
                      <TagIcon size={18} />
                    </span>
                    <span className="mt-3 inline-block rounded-full bg-brand-coral/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-coral">
                      {member.tag}
                    </span>
                    <p className="mt-2 text-lg font-bold text-brand-ink">{member.name}</p>
                    <p className="text-sm font-semibold text-brand-primary">{member.title}</p>
                    <p className="mt-2 text-sm text-brand-slate">{member.bio}</p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 px-4 py-2 text-xs font-semibold text-brand-primary transition-all duration-200 hover:bg-brand-primary hover:text-white"
                    >
                      <Mail size={14} />
                      Get in Touch
                    </Link>
                  </div>
                </Reveal>
              );
            })()}
          </div>

          <Reveal delay={0.2} className="mt-16">
            <div className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-4 sm:p-8">
              {[values[0], values[1], values[2], values[4]].map((value, i) => {
                const Icon = teamValueIcons[i];
                return (
                  <div key={value.title} className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-brand-ink">{value.title}</p>
                      <p className="text-xs text-brand-slate">{value.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* About the Founder */}
      <section className="mx-auto max-w-[1320px] px-6 py-20">
        <Reveal className="rounded-2xl border border-brand-lavender-deep bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
              <Award size={26} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
                Our Story
              </p>
              <h2 className="mt-1 text-2xl font-bold text-brand-ink">About the Founder</h2>
              <p className="mt-3 text-brand-slate">{founderBio}</p>
              <Link
                href="/about/who-we-are"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline"
              >
                View More
                <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Our Clients */}
      <section className="relative overflow-hidden bg-brand-lavender py-20">
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-brand-coral/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              <Building2 size={14} />
              Our Clients
            </span>
            <h2 className="mt-4 text-3xl font-bold text-brand-ink">
              Some of the Biggest Names Have Lent Us Their <Highlight>Trust</Highlight>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-slate">
              {clients.length}+ organizations across steel, metals, and manufacturing rely
              on Pinnacle HR to build their teams.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-lavender to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-lavender to-transparent" />
          <div className="group overflow-hidden">
            <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="flex items-center gap-3 rounded-2xl border border-brand-lavender-deep bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-md"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      i % 2 === 0
                        ? "bg-brand-primary/10 text-brand-primary"
                        : "bg-brand-coral/10 text-brand-coral"
                    }`}
                  >
                    <Building2 size={18} />
                  </span>
                  <span className="whitespace-nowrap text-base font-bold text-brand-ink">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume CTA Banner */}
      <section className="bg-brand-ink py-14 text-white">
        <Reveal className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-6 px-6 text-center sm:text-left">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Need A Best Resume For Jobs in Any <Highlight>Industry</Highlight>...
          </h2>
          <a
            href={`mailto:${siteConfig.emails.career}?subject=${encodeURIComponent("Resume Submission")}`}
            className="inline-block rounded-full bg-brand-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-md active:translate-y-0"
          >
            Create Resume
          </a>
        </Reveal>
      </section>

      {/* Final CTA Banner */}
      <section className="relative overflow-hidden bg-brand-primary">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 skew-x-[-12deg] translate-x-16 bg-brand-primary-dark/60 md:block" />
        <Reveal className="relative mx-auto max-w-[1320px] px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Wait? Hire <Highlight>Skilled Talent</Highlight>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Whether you&apos;re building a team or looking for your next
            career move, Pinnacle HR makes the basics right.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-lavender hover:shadow-md active:translate-y-0"
          >
            Talk to Us
          </Link>
        </Reveal>
        <div className="relative overflow-hidden bg-brand-coral py-3">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap text-sm font-semibold text-white">
            {[...services, ...services].map((s, i) => (
              <span key={`${s.slug}-${i}`} className="flex items-center gap-2">
                {s.title} <span className="text-white/60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
