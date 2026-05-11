import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageData } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Battery Storage & BESS, Commercial and Residential",
  description:
    "Designed and installed battery energy storage systems for resilience, backup, and energy optimization. Tesla Powerwall, Franklin, EG4 and Sol-Ark certified.",
};

const data: ServicePageData = {
  slug: "battery-storage",
  eyebrow: "Battery Storage / BESS",
  title: (
    <>
      Battery storage built for <span className="italic text-accent">resilience.</span>
    </>
  ),
  description:
    "We design and install battery energy storage systems for commercial and residential applications, enhancing reliability, providing backup power, and optimizing how energy is consumed.",
  heroImage: "/images/setup.jpg",
  metricBar: [
    { value: "10–500+ kWh", label: "Typical capacity" },
    { value: "DC & AC", label: "Coupled designs" },
    { value: "5+ OEMs", label: "Certified partners" },
    { value: "48-hr", label: "Service SLA" },
  ],
  overview: [
    { title: "System sizing", body: "Load analysis, peak demand profiling, and right-sized battery capacity for your goals, backup, peak shaving, or self-consumption." },
    { title: "Inverter integration", body: "Hybrid, AC-coupled or DC-coupled architectures matched to your existing PV system or new build." },
    { title: "Code compliance", body: "NEC, NFPA 855, AHJ-specific siting, ventilation and signage, engineered into the design from day one." },
    { title: "Commissioning & monitoring", body: "Performance verification, EMS configuration, monitoring activation and operator training." },
  ],
  scope: {
    title: "Battery storage scope.",
    items: [
      "Load profile & sizing analysis",
      "Hybrid / AC-coupled / DC-coupled design",
      "Tesla Powerwall, Franklin, EG4, Sol-Ark, Enphase",
      "NEC & NFPA 855 compliance review",
      "Site siting & ventilation engineering",
      "EMS / energy management configuration",
      "Inverter integration with existing PV",
      "Backup transfer switch & critical load panels",
      "AHJ permitting & inspections",
      "Utility interconnection coordination",
      "Commissioning & performance testing",
      "Monitoring setup & operator training",
    ],
  },
  details: {
    title: "Use cases we engineer for.",
    body: "Storage looks different for every site. We design around the actual operating profile and the outcome you're trying to drive.",
    items: [
      { label: "Resilience / backup power", desc: "Whole-site or critical-load backup with automatic transfer during grid events." },
      { label: "Peak demand shaving", desc: "Targeted discharge during peak windows to reduce demand charges and TOU exposure." },
      { label: "Self-consumption", desc: "Time-shifting solar generation to match consumption, especially valuable on TOU rates." },
      { label: "Solar pairing", desc: "DC-coupled or AC-coupled designs paired with new or existing PV systems." },
      { label: "Microgrid readiness", desc: "Architectures that support future expansion into multi-asset microgrid configurations." },
    ],
  },
  clients: [
    "Commercial facilities",
    "Critical-load operators",
    "Multi-tenant buildings",
    "Industrial sites",
    "Residential homes",
    "Off-grid / remote sites",
    "Solar + storage retrofits",
    "Future microgrid sites",
  ],
  faq: [
    { q: "Can you add storage to my existing solar system?", a: "Yes, AC-coupled batteries integrate cleanly with most existing inverters. We assess inverter compatibility, panel space and electrical service capacity first." },
    { q: "Do you offer backup-only systems (no PV)?", a: "Yes. Battery-only backup is common for sites with reliability concerns or where solar isn't viable." },
    { q: "Which battery brands do you install?", a: "We're certified across Tesla Powerwall, Franklin, EG4 and Sol-Ark, plus Enphase IQ Batteries. Selection depends on your goals, sizing, and site." },
    { q: "Are systems code-compliant for NFPA 855?", a: "Every battery design is reviewed against NEC and NFPA 855, siting, ventilation, signage and clearances are engineered in, not retrofitted." },
  ],
  related: [
    { title: "Solar EPC", href: "/services/solar-epc", body: "Pair storage with new PV from day one." },
    { title: "Electrical & O&M", href: "/services/additional", body: "Service upgrades, panel replacements and lifecycle support." },
    { title: "Why GoGreen", href: "/why-gogreen", body: "25-year workmanship, 48-hour SLA, NABCEP credentials." },
  ],
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
