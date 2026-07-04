"use client";

import {
  Banknote,
  BookOpenCheck,
  Store,
  TrendingUp,
  UserCheck,
  Wallet,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import TrainingSubNav from "@/components/TrainingSubNav";
import ServiceCTA from "@/components/ServiceCTA";
import { frmDetails } from "@/lib/site-data";

const {
  whatIs,
  aboutPartner,
  whoCanJoin,
  courseContent,
  courseTopics,
  learningExperience,
  earnWhileYouLearn,
  firstJob,
  growthPath,
} = frmDetails;

export default function FrmContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Training Programs
            </p>
            <h1 className="mt-2 text-4xl font-bold">FRM — Fashion Retail Management</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <TrainingSubNav />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="flex items-start gap-4 rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
            <Store size={22} />
          </span>
          <div>
            <h2 className="text-lg font-semibold text-brand-ink">What is FRM?</h2>
            <p className="mt-2 text-brand-slate">{whatIs}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-brand-lavender py-16">
        <Reveal className="mx-auto max-w-[1320px] px-6">
          <h2 className="text-xl font-bold text-brand-ink">About Shoppers Stop</h2>
          <p className="mt-3 max-w-3xl text-brand-slate">{aboutPartner}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal>
          <h2 className="text-xl font-bold text-brand-ink">Who Can Join</h2>
        </Reveal>
        <StaggerGroup className="mt-6 space-y-3">
          {whoCanJoin.map((point) => (
            <StaggerItem
              key={point}
              className="flex items-start gap-3 rounded-xl border border-brand-lavender-deep bg-white p-4"
            >
              <UserCheck size={18} className="mt-0.5 shrink-0 text-brand-primary" />
              <span className="text-sm text-brand-slate">{point}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <h2 className="text-xl font-bold text-brand-ink">Course Content</h2>
            <p className="mt-3 max-w-3xl text-brand-slate">{courseContent}</p>
          </Reveal>
          <StaggerGroup className="mt-6 flex flex-wrap gap-3">
            {courseTopics.map((topic) => (
              <StaggerItem
                key={topic}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-ink shadow-sm"
              >
                {topic}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="flex items-start gap-4 rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
            <BookOpenCheck size={22} />
          </span>
          <div>
            <h2 className="text-lg font-semibold text-brand-ink">
              In the Classroom and Beyond
            </h2>
            <p className="mt-2 text-brand-slate">{learningExperience}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-2xl bg-white p-7 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                <Wallet size={20} />
              </span>
              <h3 className="mt-3 font-semibold text-brand-ink">Earn While You Learn</h3>
              <p className="mt-2 text-sm text-brand-slate">{earnWhileYouLearn}</p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl bg-white p-7 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                <Banknote size={20} />
              </span>
              <h3 className="mt-3 font-semibold text-brand-ink">First Job</h3>
              <p className="mt-2 text-sm text-brand-slate">{firstJob}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="flex items-start gap-4 rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
            <TrendingUp size={22} />
          </span>
          <div>
            <h2 className="text-lg font-semibold text-brand-ink">Growth Path</h2>
            <p className="mt-2 text-brand-slate">{growthPath}</p>
          </div>
        </Reveal>
      </section>

      <ServiceCTA
        title="Ready to start your retail career?"
        body="Apply for the FRM program or ask us about the next batch."
      />
    </div>
  );
}
