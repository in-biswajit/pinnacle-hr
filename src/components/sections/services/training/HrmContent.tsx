"use client";

import { Award, Handshake, Users } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import Accordion from "@/components/Accordion";
import TrainingSubNav from "@/components/TrainingSubNav";
import ServiceCTA from "@/components/ServiceCTA";
import { hrmDetails } from "@/lib/site-data";

const { intro, areasCovered, areaDetails, rolesTable, personalityDevelopment, placementCell } =
  hrmDetails;

export default function HrmContent() {
  return (
    <div>
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              Training Programs
            </p>
            <h1 className="mt-2 text-4xl font-bold">HRM — Human Resource Management</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <TrainingSubNav />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="flex items-start gap-4 rounded-2xl border border-brand-lavender-deep bg-white p-7 shadow-sm">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-primary">
            <Users size={22} />
          </span>
          <div>
            <h2 className="text-lg font-semibold text-brand-ink">Operation Workouts</h2>
            <p className="mt-2 text-brand-slate">{intro}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold text-brand-ink">Areas Covered</h2>
          </Reveal>
          <StaggerGroup className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {areasCovered.map((area) => (
              <StaggerItem
                key={area}
                className="rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-brand-ink shadow-sm"
              >
                {area}
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1} className="mt-10">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-brand-primary">
              A Closer Look
            </h3>
            <div className="mx-auto mt-4 max-w-3xl">
              <Accordion items={areaDetails} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold text-brand-ink">Teacher & Student Roles</h2>
        </Reveal>
        <div className="mt-10 overflow-hidden rounded-2xl border border-brand-lavender-deep shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-lavender text-brand-ink">
              <tr>
                <th className="px-6 py-4 font-semibold">Phase</th>
                <th className="px-6 py-4 font-semibold">Teacher Role</th>
                <th className="px-6 py-4 font-semibold">Student Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-lavender-deep">
              {rolesTable.map((row) => (
                <tr key={row.phase} className="bg-white">
                  <td className="px-6 py-4 font-medium text-brand-ink">{row.phase}</td>
                  <td className="px-6 py-4 text-brand-slate">{row.teacher}</td>
                  <td className="px-6 py-4 text-brand-slate">{row.student}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-brand-lavender py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-2xl bg-white p-7 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                <Award size={20} />
              </span>
              <h3 className="mt-3 font-semibold text-brand-ink">Personality Development</h3>
              <p className="mt-2 text-sm text-brand-slate">{personalityDevelopment}</p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl bg-white p-7 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-primary">
                <Handshake size={20} />
              </span>
              <h3 className="mt-3 font-semibold text-brand-ink">Placement Cell & Support</h3>
              <p className="mt-2 text-sm text-brand-slate">{placementCell}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready to build your HR career?"
        body="Ask us about the next HRM batch and placement support."
      />
    </div>
  );
}
