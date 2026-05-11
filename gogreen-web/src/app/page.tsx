import { Hero } from "@/components/hero";
import { MarqueeTrust } from "@/components/marquee-trust";
import { ServicesGrid } from "@/components/services-grid";
import { WhySection } from "@/components/why-section";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { FounderSnippet } from "@/components/founder-snippet";
import { MetricsBar } from "@/components/metrics-bar";
import { StatesSection } from "@/components/states-section";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeTrust />
      <ServicesGrid />
      <WhySection />
      <ProjectsShowcase />
      <MetricsBar />
      <FounderSnippet />
      <StatesSection />
      <Testimonials />
      <CtaSection />
    </>
  );
}
