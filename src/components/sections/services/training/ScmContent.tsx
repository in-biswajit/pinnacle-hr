"use client";

import { Truck } from "lucide-react";
import SimpleTrainingProgram from "./SimpleTrainingProgram";
import { scmDetails } from "@/lib/site-data";

export default function ScmContent() {
  return (
    <SimpleTrainingProgram
      title="SCM — Supply Chain Management"
      icon={Truck}
      intro={scmDetails.intro}
      topics={scmDetails.topics}
      whoCanJoin={scmDetails.whoCanJoin}
      ctaTitle="Ready to build your operations career?"
      ctaBody="Ask us about the next SCM batch."
    />
  );
}
