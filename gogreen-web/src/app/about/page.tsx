import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About, Founder, Story & Team",
  description:
    "Founded by Madhan Kumar Nagella, Master Electrician and NABCEP PVIP. GoGreen Solutions bridges the gap between solar engineering and field execution.",
};

const milestones = [
  { year: "2020", title: "GoGreen founded", body: "Madhan Kumar Nagella founds GoGreen with a clear vision, close the gap between solar engineering and field execution." },
  { year: "2021", title: "Multi-state EPC platform", body: "Licensed and active across VA, MD, DC. In-house electrical and installation teams established." },
  { year: "2022", title: "First MW-scale projects", body: "First 1 MW+ commercial DG projects delivered with phased commissioning across multiple sites." },
  { year: "2023", title: "Roofing division added", body: "In-house roofing capability added to support seamless R&R and solar-integrated roof scope." },
  { year: "2024", title: "BESS expansion", body: "Tesla Powerwall, Franklin, EG4 and Sol-Ark certifications. Storage becomes a primary line of business." },
  { year: "2025", title: "55+ MW supported", body: "5,000+ projects supported across 7 Mid-Atlantic states. DCom and R&R formalized as standalone capabilities." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        eyebrow="About GoGreen"
        title={
          <>
            Built to bridge the gap between{" "}
            <span className="italic text-accent">engineering and execution.</span>
          </>
        }
        description="GoGreen Solutions is an engineering-driven solar EPC and installation company operating across the Mid-Atlantic. Founded in 2020. 25–35 strong. Field-first by design."
      />

      <section className="py-12 lg:py-16">
        <Container size="wide">
          <div className="relative aspect-[16/8] rounded-3xl overflow-hidden border border-line">
            <Image
              src="/images/team.jpg"
              alt="GoGreen team on site"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Founder
              </div>
              <h2 className="mt-4 font-display text-[28px] sm:text-[44px] leading-[1.05] tracking-tight">
                Madhan Kumar Nagella
              </h2>
              <div className="mt-3 text-[14px] text-muted">
                Founder & CEO · Master Electrician · NABCEP PVIP · 15+ years
              </div>
              <div className="mt-6 relative aspect-[4/5] rounded-2xl overflow-hidden border border-line">
                <Image
                  src="/images/founder-madan.jpg"
                  alt="Madhan Kumar Nagella, Founder & CEO of GoGreen Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="prose-content space-y-6 text-[16.5px] leading-relaxed text-muted text-pretty">
                <p>
                  Madhan brings 15+ years of experience across solar design,
                  engineering, and field execution. As a licensed Master
                  Electrician and NABCEP PV Installation Professional (PVIP), he
                  leads projects with a systems-first approach, bridging the gap
                  between engineering intent and real-world installation.
                </p>
                <p>
                  GoGreen was founded in {site.founded} with a clear vision: close
                  the gap between engineering and execution in the solar
                  industry. After years in the field, Madhan recognized that many
                  projects suffered not from poor design, but from inconsistent
                  installation standards and lack of accountability.
                </p>
                <p>
                  GoGreen was built to solve that, bringing an
                  engineering-first mindset to every phase of construction. Unlike
                  contractors that separate design and execution, GoGreen
                  engineers, builds, and integrates every system. The company
                  operates across the Mid-Atlantic as a trusted EPC and
                  installation partner, delivering projects with consistency,
                  technical depth, and a field-first approach.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
                {[
                  { v: "2020", l: "Founded" },
                  { v: "25–35", l: "Team size" },
                  { v: "55+ MW", l: "Supported to date" },
                  { v: "7 states", l: "Mid-Atlantic" },
                ].map((s) => (
                  <div key={s.l} className="bg-white p-6">
                    <div className="font-display text-[28px] leading-none tabular">{s.v}</div>
                    <div className="mt-2 text-[12px] uppercase tracking-[0.14em] text-muted font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-7">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Milestones
              </div>
              <h2 className="mt-4 font-display text-[28px] sm:text-[48px] leading-[1.05] tracking-tight">
                A track record measured in <span className="italic text-accent">megawatts.</span>
              </h2>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-line" aria-hidden />
            <div className="flex flex-col gap-10">
              {milestones.map((m) => (
                <div key={m.year} className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-3 sm:col-span-2 font-display text-[28px] sm:text-[34px] leading-none tabular tracking-tight">
                    {m.year}
                  </div>
                  <div className="col-span-1 flex items-center justify-center pt-3">
                    <div className="size-3 rounded-full bg-accent ring-4 ring-surface" />
                  </div>
                  <div className="col-span-12 sm:col-span-9">
                    <h3 className="font-display text-[22px] leading-tight tracking-tight">{m.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted text-pretty max-w-2xl">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Credentials
              </div>
              <h2 className="mt-4 font-display text-[28px] sm:text-[44px] leading-[1.05] tracking-tight">
                Certifications & licenses.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted max-w-md text-pretty">
                Decisions made by people who hold the credentials, swing the
                wrench, and read the prints.
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
