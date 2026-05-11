import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { Check, Clock, Shield, Layers, Phone, Mail } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Assessment, 48-Hour Response",
  description:
    "Free, engineering-led project assessment. Send your scope and we'll respond within 48 hours with a clear path forward.",
};

const assurances = [
  { icon: Clock, label: "48-hour engineering response", body: "From initial submission to first conversation." },
  { icon: Shield, label: "No commitment required", body: "Get our read on your project, scope and feasibility." },
  { icon: Layers, label: "Engineering-led conversation", body: "Talk to people who've drawn and built solar systems." },
];

export default function GetAssessmentPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Free Assessment" }]}
        eyebrow="Free assessment"
        title={
          <>
            Send us your scope. We&apos;ll <span className="italic text-accent">respond.</span>
          </>
        }
        description="Free, engineering-led assessment for any commercial, distributed generation, or residential project. No commitment, no sales pressure, just a clear read on your project from people who build."
      />

      <section className="pb-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-line bg-surface p-8 lg:p-10">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                  What you get
                </div>
                <ul className="mt-6 flex flex-col gap-5">
                  {assurances.map((a) => {
                    const Icon = a.icon;
                    return (
                      <li key={a.label} className="flex gap-4">
                        <div className="size-10 shrink-0 rounded-xl border border-line bg-white inline-flex items-center justify-center text-accent">
                          <Icon className="size-4.5" />
                        </div>
                        <div>
                          <div className="font-medium tracking-tight">{a.label}</div>
                          <div className="mt-1 text-[14px] text-muted leading-relaxed">{a.body}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-10 pt-8 border-t border-line">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                    Or reach us directly
                  </div>
                  <div className="mt-4 flex flex-col gap-3 text-[14.5px]">
                    <a href={site.phoneHref} className="inline-flex items-center gap-2.5 text-ink hover:text-accent transition-colors">
                      <Phone className="size-4 text-accent" /> {site.phone}
                    </a>
                    <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 text-ink hover:text-accent transition-colors">
                      <Mail className="size-4 text-accent" /> {site.email}
                    </a>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-line flex flex-col gap-2 text-[13px] text-muted">
                  {[
                    "5,000+ projects completed",
                    "54+ MW installed",
                    "25-year workmanship warranty",
                    "Multi-state Master Electrician on staff",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2.5">
                      <span className="size-4 rounded-full bg-accent-tint text-accent inline-flex items-center justify-center">
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
