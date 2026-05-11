import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageData } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Removal & Reinstallation (R&R), Re-roof and Reinstall Solar Systems",
  description:
    "Complete removal & reinstallation (R&R) for commercial and residential solar, for roof replacement, system upgrades and performance improvements. End-to-end with our roofing partners.",
};

const data: ServicePageData = {
  slug: "removal-reinstallation",
  eyebrow: "Removal & Reinstallation · R&R",
  title: "Removal & Reinstallation",
  tagline: (
    <>
      Re-roof. Re-install. <span className="italic text-accent">Recommission.</span>
    </>
  ),
  description:
    "When a roof needs replacement or a system needs upgrading, R&R is rarely simple. We coordinate removal, roofing, reinstall, and recommissioning as one continuous engagement.",
  heroImage: "/images/working-2.jpg",
  metricBar: [
    { value: "Single-source", label: "Coordination" },
    { value: "Roofing in-house", label: "Or with partners" },
    { value: "Code-compliant", label: "Reinstall" },
    { value: "Min downtime", label: "Phased delivery" },
  ],
  overview: [
    { title: "Pre-R&R audit", body: "Roof condition, system condition, code compliance gaps, and a detailed phasing plan with the homeowner / facility owner." },
    { title: "Coordinated removal", body: "Module-by-module removal with labeling, ballast and racking off-site staging, and clear roof access for the roofing crew." },
    { title: "Roof + reinstall", body: "Roofing scope handled in-house or with our certified partners. Reinstall happens immediately after roof completion." },
    { title: "Recommissioning", body: "Wiring inspection, inverter check, performance test, monitoring re-activation and full AHJ/utility recommissioning." },
  ],
  scope: {
    title: "R&R scope.",
    items: [
      "System & roof condition audit",
      "Phased removal & staging plan",
      "Module labeling & inventory",
      "Inverter, combiner & BOS removal",
      "Racking removal & roof prep",
      "In-house or partner roofing scope",
      "Code-compliant reinstall layout",
      "New flashing & racking",
      "Module reinstallation & wiring",
      "Inverter & BOS reinstallation",
      "AHJ recommissioning",
      "Monitoring re-activation",
    ],
  },
  details: {
    title: "Why R&R matters.",
    body: "R&R is where most projects go sideways, uncoordinated trades, code compliance gaps, performance regressions. We engineer the handoff so this doesn't happen.",
    items: [
      { label: "Roof replacement", desc: "Asphalt shingle, TPO, EPDM and metal roofs handled, with new flashing details engineered for the reinstalled array." },
      { label: "Performance upgrade", desc: "Replace aging inverters, restring the array, add optimizers or move to microinverters during the reinstall." },
      { label: "Layout optimization", desc: "Reinstall with an updated layout, better setbacks, improved tilt, better wind/snow performance, cleaner conduit runs." },
      { label: "Storm or damage repair", desc: "Reinstall after roof damage events. Coordination with insurance carriers and adjusters." },
      { label: "Asset transition", desc: "R&R as part of a building sale or lease change, keeping the system productive under new ownership." },
    ],
  },
  clients: [
    "Commercial building owners",
    "Industrial facility operators",
    "Roofing contractors",
    "Insurance carriers",
    "Asset owners",
    "HOAs & PMs",
    "Residential homeowners",
    "Solar developers",
  ],
  faq: [
    { q: "Should I replace my roof before installing solar?", a: "Almost always, yes, if your roof is within ~10 years of end of life. R&R is more expensive than getting it right the first time." },
    { q: "How long does a typical R&R take?", a: "Residential: 2–6 weeks (mostly waiting on roofing). Commercial: 2–4 months depending on roof scope, weather, and AHJ recommissioning." },
    { q: "Do you coordinate with my roofer?", a: "Yes, we routinely coordinate with third-party roofers, or we can perform the roofing in-house through our roofing division." },
    { q: "Will my system perform the same after R&R?", a: "Performance should match or exceed pre-R&R, since we test and re-commission. We often find opportunities to improve performance during the reinstall." },
  ],
  related: [
    { title: "Decommissioning", href: "/services/decommissioning", body: "DCom-only when a reinstall isn't required." },
    { title: "Roofing", href: "/services/roofing", body: "In-house roofing services." },
    { title: "Electrical & O&M", href: "/services/additional", body: "Electrical upgrades and lifecycle support." },
    { title: "Solar EPC", href: "/services/solar-epc", body: "When a full new system is the right answer." },
  ],
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
