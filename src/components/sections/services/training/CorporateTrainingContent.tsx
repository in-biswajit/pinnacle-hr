"use client";

import { Building2 } from "lucide-react";
import SimpleTrainingProgram from "./SimpleTrainingProgram";
import { corporateTrainingDetails } from "@/lib/site-data";

export default function CorporateTrainingContent() {
  return (
    <SimpleTrainingProgram
      title="Corporate Training"
      icon={Building2}
      intro={corporateTrainingDetails.intro}
      topics={corporateTrainingDetails.topics}
      whoCanJoin={corporateTrainingDetails.whoCanJoin}
      ctaTitle="Want to train your team?"
      ctaBody="Tell us your organization's goals and we'll design a program around them."
    />
  );
}
