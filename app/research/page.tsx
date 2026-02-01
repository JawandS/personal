"use client";

import dynamic from "next/dynamic";
import PageWrapper from "@/components/PageWrapper";

const ResearchCards = dynamic(
  () => import("@/components/ResearchCards"),
  { ssr: false }
);

export default function ResearchPage() {
  return (
    <PageWrapper title="Research">
      <ResearchCards />
    </PageWrapper>
  );
}
