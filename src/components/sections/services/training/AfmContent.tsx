"use client";

import { Wallet } from "lucide-react";
import SimpleTrainingProgram from "./SimpleTrainingProgram";
import { afmDetails } from "@/lib/site-data";

export default function AfmContent() {
  return (
    <SimpleTrainingProgram
      title="AFM — Accounts & Finance Management"
      icon={Wallet}
      intro={afmDetails.intro}
      topics={afmDetails.topics}
      whoCanJoin={afmDetails.whoCanJoin}
      ctaTitle="Ready to build your finance career?"
      ctaBody="Ask us about the next AFM batch."
    />
  );
}
