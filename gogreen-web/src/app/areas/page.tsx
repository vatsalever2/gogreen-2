import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { StatesSection } from "@/components/states-section";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Service Areas, Mid-Atlantic Solar EPC",
  description:
    "GoGreen Solutions operates across Virginia, Maryland, Washington D.C., Pennsylvania, West Virginia and Delaware, multi-state licensed EPC platform.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Service Areas" }]}
        eyebrow="Coverage"
        title={
          <>
            Active across the{" "}
            <span className="italic text-accent">Mid-Atlantic.</span>
          </>
        }
        description="Multi-state licensed EPC platform with in-house electrical and installation teams. We're certified in every state we operate in, and respond within 48 hours across the region."
      />
      <StatesSection />
      <CtaSection />
    </>
  );
}
