import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageData } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Electrical, O&M, Lifecycle Services",
  description:
    "Electrical service upgrades, panel replacements, system diagnostics, O&M, and commissioning support for long-term performance.",
};

const data: ServicePageData = {
  slug: "additional",
  eyebrow: "Electrical & O&M",
  title: (
    <>
      The trades that keep solar <span className="italic text-accent">running.</span>
    </>
  ),
  description:
    "Electrical upgrades, system diagnostics, preventive O&M, and commissioning support, the lifecycle scope that protects long-term performance.",
  heroImage: "/images/working-1.jpg",
  metricBar: [
    { value: "In-house", label: "Electrical scope" },
    { value: "OEM", label: "Certifications" },
    { value: "AHJ", label: "Coordination" },
    { value: "Full lifecycle", label: "O&M support" },
  ],
  overview: [
    { title: "Electrical services", body: "Service upgrades, panel replacements, feeder installations, system tie-ins, performed by licensed Master Electricians." },
    { title: "Diagnostics & repair", body: "System troubleshooting, performance optimization, inverter and combiner-level diagnostics, and warranty repair coordination." },
    { title: "Operations & maintenance", body: "Preventive inspections, cleaning, thermal scans, and on-call repair under structured O&M agreements." },
  ],
  scope: {
    title: "Lifecycle and supporting trades.",
    items: [
      "Service upgrades (200A → 400A and beyond)",
      "Panel replacements & sub-panels",
      "Feeder installations & system tie-ins",
      "EV charger installations",
      "System troubleshooting & diagnostics",
      "Performance optimization",
      "Inverter & BOS warranty support",
      "Preventive maintenance inspections",
      "Thermal & I-V curve scans",
      "Commissioning support for third-party EPCs",
    ],
  },
  details: {
    title: "Built for the long run.",
    body: "Solar systems aren't \"install and forget.\" These are the scopes that protect production, safety and asset value across decades.",
    items: [
      { label: "Electrical (Master Electrician)", desc: "Multi-state licensed Master Electrician on staff. Service work scoped, permitted and inspected end to end." },
      { label: "Diagnostics", desc: "Inverter logs, string-level analysis, thermal imaging and root-cause investigation. Repair plans with clear timelines." },
      { label: "O&M agreements", desc: "Structured preventive plans matched to system size, age and criticality. 48-hour SLA on service requests." },
      { label: "Commissioning support", desc: "We support other EPCs and developers with commissioning, AHJ inspections and utility witness tests as a contracted scope." },
      { label: "AHJ & utility coordination", desc: "Service upgrade permits, interconnection re-applications and utility coordination handled as standard." },
    ],
  },
  clients: [
    "Existing solar owners",
    "Commercial property owners",
    "EPCs needing field support",
    "Asset managers",
    "Building portfolios",
    "Industrial sites",
    "Residential homeowners",
    "Roofing partners",
  ],
  faq: [
    { q: "Do you provide O&M for systems you didn't install?", a: "Yes, we routinely take over O&M for systems originally installed by other contractors, including ones that need remediation work first." },
    { q: "Can you do electrical work without solar?", a: "Yes. Service upgrades, panel work, EV chargers and feeder installations are standard scopes outside any solar engagement." },
    { q: "What does a typical O&M agreement cover?", a: "Annual or bi-annual inspections, monitoring review, cleaning where needed, and prioritized response under our 48-hour SLA. Repair scope is typically time-and-materials." },
  ],
  related: [
    { title: "Solar EPC", href: "/services/solar-epc", body: "Full new-build solar systems." },
    { title: "Roofing", href: "/services/roofing", body: "Standalone and solar-integrated roofing." },
    { title: "Removal & Reinstallation", href: "/services/removal-reinstallation", body: "Re-roof and reinstall, end to end." },
  ],
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
