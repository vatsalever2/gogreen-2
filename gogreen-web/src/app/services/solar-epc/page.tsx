import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageData } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Solar EPC, Engineering, Procurement, Construction",
  description:
    "Full-scope solar EPC for commercial, distributed generation and residential. From planning and design through procurement, installation and commissioning.",
};

const data: ServicePageData = {
  slug: "solar-epc",
  eyebrow: "Solar EPC",
  title: (
    <>
      Solar <span className="italic text-accent">EPC</span>, engineered and built end to end.
    </>
  ),
  description:
    "We engineer, procure, install and commission solar systems for commercial, distributed generation and residential projects across the Mid-Atlantic, with strong in-house electrical and field execution teams aligning design intent with reality.",
  heroImage: "/images/working-1.jpg",
  metricBar: [
    { value: "5 kW – 1.5 MW+", label: "Project range" },
    { value: "54+ MW", label: "Installed to date" },
    { value: "25-yr", label: "Workmanship warranty" },
    { value: "7 states", label: "Mid-Atlantic" },
  ],
  overview: [
    { title: "Engineering", body: "PV system design, structural and electrical engineering, BOS specification, and stamped drawings ready for AHJ review." },
    { title: "Procurement", body: "Module, inverter, racking, BOS and electrical procurement with vetted manufacturers, Tesla, SolarEdge, Enphase, SMA and more." },
    { title: "Construction", body: "Site prep, racking, module install, in-house electrical, AHJ inspections, utility coordination and final commissioning." },
    { title: "Commissioning", body: "Performance testing, monitoring setup, documentation, customer handover and warranty registration." },
  ],
  scope: {
    title: "Full EPC scope under one roof.",
    items: [
      "PV system design (residential to MW-scale)",
      "Structural & electrical engineering",
      "Stamped drawings & permitting packages",
      "AHJ submissions & inspections",
      "Procurement & logistics",
      "Site prep & racking installation",
      "In-house electrical (no subcontractor handoffs)",
      "Module installation & wiring",
      "Combiner, recombiner & inverter integration",
      "Interconnection & utility coordination",
      "Commissioning & performance testing",
      "Monitoring setup & system handover",
    ],
  },
  details: {
    title: "How a typical project flows.",
    body: "We follow a phased delivery model, kickoff, design, procurement, install, commissioning. Each phase has clear deliverables and a single point of accountability.",
    items: [
      { label: "Kickoff & site assessment", desc: "Site walk, utility analysis, structural assessment, preliminary single-line and PV layout." },
      { label: "Engineering & permitting", desc: "Structural and electrical engineering, AHJ submission, utility interconnection application." },
      { label: "Procurement", desc: "Module, inverter, racking and BOS procurement aligned with engineering specifications." },
      { label: "Construction", desc: "Mobilization, racking, modules, electrical, inverter set, conduit runs and combiner installs." },
      { label: "Commissioning", desc: "ITO testing, AHJ inspections, utility witness test, monitoring activation, handover." },
      { label: "Aftercare", desc: "Warranty support, monitoring alerts, O&M plans, future expansion roadmap." },
    ],
  },
  clients: [
    "Commercial building owners",
    "Real estate developers",
    "Asset owners & funds",
    "EPCs & GCs (sub-EPC scope)",
    "Industrial facilities",
    "Distribution centers",
    "Residential homeowners",
    "Solar developers",
  ],
  faq: [
    { q: "Are you a full EPC or just an installation contractor?", a: "Full EPC. We engineer, procure, install and commission with in-house electrical and field teams. We can also operate as a sub-EPC under a developer or larger EPC's contract." },
    { q: "What size projects do you handle?", a: "Residential systems from 5–25 kW and commercial systems from 100 kW to 1.5 MW+ per site. Phased projects across multiple sites are common." },
    { q: "Do you handle engineering, permits and utility coordination?", a: "Yes, structural, electrical, stamped drawings, AHJ submissions, utility interconnection applications and witness tests are all part of our standard scope." },
    { q: "How do you ensure long-term system performance?", a: "Engineering review at every stage, manufacturer-aligned material selection, in-house QA on installation, full commissioning, and a 25-year workmanship warranty." },
    { q: "What is your typical timeline from start to commissioning?", a: "Residential: 30–60 days post-permit. Commercial: 4–9 months depending on scope, AHJ and utility timelines. We provide a detailed schedule at kickoff." },
  ],
  related: [
    { title: "Battery Storage / BESS", href: "/services/battery-storage", body: "Resilience, peak-shaving and backup paired with PV." },
    { title: "Removal & Reinstallation", href: "/services/removal-reinstallation", body: "Re-roof, re-install and upgrade aging systems." },
    { title: "Roofing", href: "/services/roofing", body: "Commercial & residential roof replacements." },
    { title: "Electrical & O&M", href: "/services/additional", body: "Lifecycle support and electrical upgrades." },
  ],
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
