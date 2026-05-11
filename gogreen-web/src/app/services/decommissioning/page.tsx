import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageData } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Solar Decommissioning (DCom), Safe, Documented Removal",
  description:
    "Professional solar decommissioning for commercial and residential systems. Safe disconnection, dismantling, labeling, and documentation, designed for clean reinstall or repurpose.",
};

const data: ServicePageData = {
  slug: "decommissioning",
  eyebrow: "Decommissioning · DCom",
  title: (
    <>
      Decommissioning, <span className="italic text-accent">done right.</span>
    </>
  ),
  description:
    "When a system needs to come down, for a roof replacement, an upgrade, or end-of-life, we disconnect, dismantle and document with the same discipline we use to build.",
  heroImage: "/images/working-3.jpg",
  metricBar: [
    { value: "Residential → MW", label: "Project scale" },
    { value: "OSHA", label: "Compliant crews" },
    { value: "Full BOM", label: "Documentation" },
    { value: "Reusable", label: "Where possible" },
  ],
  overview: [
    { title: "Site assessment", body: "Pre-DCom audit of structure, electrical, equipment condition and disposal pathways." },
    { title: "Safe disconnection", body: "Lockout/tagout, isolation, controlled discharge, and hazard mitigation aligned with OSHA standards." },
    { title: "Labeling & inventory", body: "Module-by-module labeling, BOM capture, photographic documentation for downstream reuse or repurpose." },
    { title: "Site restoration", body: "Roof penetrations sealed, racking removed cleanly, and the site returned to a working state." },
  ],
  scope: {
    title: "DCom scope.",
    items: [
      "Pre-DCom site assessment & audit",
      "Lockout / tagout procedures",
      "Module-level disconnection",
      "Inverter, combiner & BOS removal",
      "Racking and ballast disassembly",
      "Wiring removal & cable management",
      "Module labeling & inventory tracking",
      "Photographic documentation",
      "Roof penetration sealing",
      "Equipment inventory for reuse",
      "Disposal & recycling coordination",
      "AHJ notification & closeout",
    ],
  },
  details: {
    title: "When DCom makes sense.",
    body: "Decommissioning isn't always end-of-life, sometimes it's a step in a larger lifecycle plan. We help you choose the right path.",
    items: [
      { label: "Roof replacement", desc: "Temporary removal where the roof underneath has reached end of life. Pairs with our R&R service for reinstallation." },
      { label: "System upgrade", desc: "Full-system replacement with newer modules, higher-efficiency inverters or expanded capacity." },
      { label: "End-of-life", desc: "Permanent removal at end of system life, with proper disposal, recycling pathways and AHJ closeout." },
      { label: "Asset transition", desc: "Removal as part of a property sale, lease change, or repurposing of the underlying site." },
      { label: "Storm or damage events", desc: "Emergency decommissioning where safety or insurance requires controlled removal." },
    ],
  },
  clients: [
    "Commercial property owners",
    "Industrial site operators",
    "Asset managers",
    "Insurance carriers",
    "Real estate transitions",
    "Roofing contractors",
    "Homeowners",
    "Solar developers",
  ],
  faq: [
    { q: "Can you DCom and reinstall the same system?", a: "Yes, that's typically a Removal & Reinstallation (R&R) engagement, where we handle both the DCom and the reinstall together with full continuity." },
    { q: "How long does a typical DCom take?", a: "Residential systems: 1–3 days. Commercial systems: 1–4 weeks depending on scale, access and weather windows." },
    { q: "What happens to the equipment?", a: "Modules are catalogued for potential reuse or routed to recycling partners. Inverters, racking and BOS are evaluated case by case." },
    { q: "Do you handle the AHJ side?", a: "Yes, AHJ notification, closeout filings and any utility coordination required to formally retire the system." },
  ],
  related: [
    { title: "Removal & Reinstallation", href: "/services/removal-reinstallation", body: "End-to-end roof + system upgrades." },
    { title: "Solar EPC", href: "/services/solar-epc", body: "Plan replacement systems with engineering rigor." },
    { title: "Roofing", href: "/services/roofing", body: "In-house roofing services." },
    { title: "Electrical & O&M", href: "/services/additional", body: "Electrical upgrades and lifecycle support." },
  ],
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
