import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/services-grid";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Services, Solar EPC, BESS, DCom, R&R",
  description:
    "Full-scope solar EPC, battery storage, decommissioning and removal & reinstallation. Engineering, procurement, installation and roofing, under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services" }]}
        eyebrow="Capabilities"
        title={
          <>
            Engineered, installed, and{" "}
            <span className="italic text-accent">supported</span> by one team.
          </>
        }
        description="Commercial, distributed generation and residential solar, plus the storage, electrical updates and roofing scopes that make full-system delivery possible."
      />
      <ServicesGrid />
      <CtaSection />
    </>
  );
}
