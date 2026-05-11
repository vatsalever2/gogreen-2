import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageData } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Roofing — Commercial & Residential Roof Replacements",
  description:
    "Professional roofing services including asphalt shingle, TPO, EPDM, and metal roof replacements, fully integrated with our solar and R&R divisions.",
};

const data: ServicePageData = {
  slug: "roofing",
  eyebrow: "Commercial & Residential Roofing",
  title: (
    <>
      The foundation for a <span className="italic text-accent">25-year asset.</span>
    </>
  ),
  description:
    "A solar array is only as good as the roof beneath it. Our in-house roofing division handles full assessments, replacements, and solar-integrated roofing for long-term performance.",
  heroImage: "/images/working-2.jpg",
  metricBar: [
    { value: "In-house", label: "Roofing division" },
    { value: "Certified", label: "Master Craftsman" },
    { value: "Integrated", label: "Solar coordination" },
    { value: "Multi-material", label: "TPO, EPDM, Shingle" },
  ],
  overview: [
    { title: "Roof assessments", body: "Comprehensive evaluation of existing roof conditions, remaining lifecycle, and structural readiness for solar." },
    { title: "Commercial flat roofs", body: "TPO, EPDM, and modified bitumen replacements engineered for commercial solar integration." },
    { title: "Residential sloped roofs", body: "Asphalt shingle and standing seam metal roof replacements with CertainTeed Master Craftsman certification." },
    { title: "Solar-integrated roofing", body: "Seamless coordination between roofing and solar crews, eliminating handoff delays and warranty conflicts." },
  ],
  scope: {
    title: "Roofing scope.",
    items: [
      "Comprehensive roof assessments",
      "TPO and EPDM flat roof replacements",
      "Asphalt shingle replacements",
      "Standing seam metal roofing",
      "Structural decking repair",
      "Flashing and penetration sealing",
      "Solar array roof coordination",
      "R&R (Removal & Reinstallation) roofing",
      "Storm and damage repair",
      "Warranty coordination",
    ],
  },
  details: {
    title: "Why an integrated roofing partner matters.",
    body: "When roofing and solar are handled by separate contractors, the seam between the two is where timelines slip and warranties are voided. We eliminate that seam.",
    items: [
      { label: "Single point of accountability", desc: "One contractor holds the warranty for both the roof and the solar array penetrations." },
      { label: "Seamless R&R coordination", desc: "For Removal & Reinstallation projects, our roofing and solar crews work back-to-back, minimizing system downtime." },
      { label: "Code and spec compliance", desc: "Roofing materials and installation methods specifically chosen to meet solar racking engineering requirements." },
      { label: "Certified installers", desc: "CertainTeed Master Craftsman certification ensures top-tier residential asphalt shingle installations." },
    ],
  },
  clients: [
    "Commercial property owners",
    "Residential homeowners",
    "Industrial facilities",
    "HOAs & Property Managers",
    "Asset owners",
    "Real estate developers",
  ],
  faq: [
    { q: "Do you offer roofing services without solar?", a: "Yes, our roofing division operates independently and can handle standalone roof replacements." },
    { q: "What types of commercial roofs do you install?", a: "We specialize in TPO and EPDM single-ply membranes, as well as metal roofing systems commonly found on commercial and industrial buildings." },
    { q: "How long does a roof replacement take?", a: "Residential roofs typically take 1-3 days. Commercial projects vary based on size and complexity, but our integrated approach minimizes overall project duration." },
    { q: "Does a new roof affect my solar warranty?", a: "By using our integrated team, we ensure that both the new roof warranty and your existing or new solar warranties remain fully intact." },
  ],
  related: [
    { title: "Removal & Reinstallation", href: "/services/removal-reinstallation", body: "Coordinate roofing with solar R&R." },
    { title: "Solar EPC", href: "/services/solar-epc", body: "Full new-build solar systems." },
    { title: "Electrical & O&M", href: "/services/additional", body: "Lifecycle support and electrical upgrades." },
  ],
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
