import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { Shield, Clock, Layers, Award, Bolt, Building } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why GoGreen, 25-Year Warranty, 48-Hour SLA, In-House Scope",
  description:
    "Why developers, asset owners and homeowners pick GoGreen. 25-year workmanship warranty, 48-hour service SLA, full in-house engineering and electrical scope.",
};

const pillars = [
  {
    icon: Shield,
    title: "25-year workmanship warranty",
    body:
      "Workmanship-backed installation aligned with manufacturer warranties. Covers proper installation of modules, racking systems and electrical components. All equipment (modules, inverters, batteries) covered under their respective manufacturer warranties.",
    points: [
      "Workmanship guaranteed for 25 years",
      "Module, inverter, battery OEM warranties honored",
      "Installed to code and manufacturer specifications",
      "Documented warranty registration at handover",
    ],
  },
  {
    icon: Clock,
    title: "48-hour service response SLA",
    body:
      "Initial response within 48 hours on any service request, system issue, or support inquiry. Includes remote diagnostics and scheduling of on-site service if required. For critical issues, we prioritize rapid coordination to minimize downtime.",
    points: [
      "Initial response within 48 hours",
      "Remote diagnostics and triage",
      "On-site scheduling when needed",
      "Critical-issue prioritization",
    ],
  },
  {
    icon: Layers,
    title: "Engineering-first approach",
    body:
      "Most projects don't suffer from poor design, they suffer from inconsistent installation. We engineer with field execution in mind, then install with engineering accountability.",
    points: [
      "Stamped engineering on every project",
      "Constructibility review before BOM lock",
      "Engineering presence on critical jobs",
      "Field feedback loops back into design",
    ],
  },
  {
    icon: Bolt,
    title: "Full in-house electrical & installation",
    body:
      "We do not subcontract electrical or installation scopes on the projects we deliver. Our Master Electrician-led team owns the work, the inspection, and the result.",
    points: [
      "Master Electrician on staff (multi-state)",
      "In-house installation crews",
      "No coordination handoffs",
      "Single line of accountability",
    ],
  },
  {
    icon: Building,
    title: "Proven at MW scale and residential",
    body:
      "Up to 1.5 MW+ commercial systems and residential systems delivered with the same engineering rigor. The standards don't shift based on project size.",
    points: [
      "Up to 1.5 MW+ per site",
      "Residential 5–25 kW",
      "Phased multi-site delivery",
      "Solar + storage paired execution",
    ],
  },
  {
    icon: Award,
    title: "Credentials at the leadership level",
    body:
      "NABCEP PVIP, Master Electrician licenses across multiple states, Class A Contractor, and OEM-specific certifications across Tesla, Franklin, EG4, Sol-Ark, SolarEdge, Enphase and SMA.",
    points: [
      "NABCEP PVIP",
      "Multi-state Master Electrician",
      "Class A Contractor License",
      "Battery & inverter OEM certified",
    ],
  },
];

export default function WhyGoGreenPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Why GoGreen" }]}
        eyebrow="Standards"
        title={
          <>
            Why developers, asset owners and homeowners{" "}
            <span className="italic text-accent">choose us.</span>
          </>
        }
        description="The standards we hold ourselves to are visible in the field, in the workmanship, the documentation, the response times, and the long-term reliability of every system we touch."
      />

      <section className="py-12 lg:py-16">
        <Container size="wide">
          <div className="relative aspect-[16/8] rounded-3xl overflow-hidden border border-line">
            <Image
              src="/images/working-1.jpg"
              alt="Field execution"
              fill
              className="object-cover"
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="wide">
          <div className="flex flex-col gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-1 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="lg:col-span-5">
                    <div className="size-12 rounded-xl border border-line inline-flex items-center justify-center text-accent">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 font-display text-[28px] sm:text-[34px] leading-[1.05] tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-[15.5px] leading-relaxed text-muted text-pretty">{p.body}</p>
                  </div>
                  <div className="lg:col-span-6">
                    <ul className="grid grid-cols-1 gap-2">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-center justify-between text-[14.5px] py-3 border-b border-line"
                        >
                          <span className="font-medium tracking-tight">{pt}</span>
                          <span className="text-accent text-[12px] font-mono uppercase tracking-[0.16em]">Standard</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Credentials
              </div>
              <h2 className="mt-4 font-display text-[34px] sm:text-[44px] leading-[1.05] tracking-tight">
                Certified across <span className="italic text-accent">every</span> system we install.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted max-w-md text-pretty">
                We hold credentials valid in every state we operate in, and OEM
                certifications across the brands we install, so warranty and
                support stay intact.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
              {site.certifications.map((c, i) => (
                <div key={c} className="bg-white p-5 flex items-center gap-3">
                  <span className="text-[10px] font-mono text-muted-2 tracking-[0.18em] w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] font-medium tracking-tight">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
