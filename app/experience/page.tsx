"use client";

import dynamic from "next/dynamic";
import PageWrapper from "@/components/PageWrapper";

const ExperienceCards = dynamic(
  () => import("@/components/ExperienceCards"),
  { ssr: false }
);

export default function ExperiencePage() {
  return (
    <PageWrapper title="Experience">
      <ExperienceCards />
    </PageWrapper>
  );
}
