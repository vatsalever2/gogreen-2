import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { CtaSection } from "@/components/cta-section";
import { ArrowUpRight, Check, MapPin } from "@/components/icons";

export type StatePageData = {
  code: string;
  name: string;
  slug: string;
  priority: boolean;
  hero: { title: string; description: string };
  context: string;
  cities: string[];
  projectTypes: { title: string; body: string }[];
  certifications: string[];
};

export function StatePageTemplate({ data }: { data: StatePageData }) {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Service Areas", href: "/areas" },
          { label: data.name },
        ]}
        eyebrow={`${data.code} · Service Area`}
        title={
          <>
            {data.hero.title}
          </>
        }
        description={data.hero.description}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/get-assessment" size="lg" withArrow>
            Free assessment in {data.code}
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary">
            Talk to local team
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-12 lg:py-16">
        <Container size="wide">
          <div className="relative aspect-[16/8] rounded-3xl overflow-hidden border border-line">
            <Image
              src="/images/project-1.jpg"
              alt={`Solar project in ${data.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority
            />
            <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-ink/80 backdrop-blur px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white font-mono">
              <span className="size-1.5 rounded-full bg-accent" />
              Active in {data.name}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Local context
              </div>
              <h2 className="mt-4 font-display text-[28px] sm:text-[44px] leading-[1.05] tracking-tight">
                Engineering, electrical and installation, with crews on the ground in {data.name}.
              </h2>
            </div>
            <div className="lg:col-span-7 text-[16px] leading-relaxed text-muted text-pretty space-y-5">
              <p>{data.context}</p>
              <p>
                We hold the credentials, licenses and OEM certifications required
                for {data.name}, and our 48-hour service response SLA covers
                clients across the state.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {data.cities.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[12.5px] text-ink-2"
                  >
                    <MapPin className="size-3.5 text-accent" /> {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <Container size="wide">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
            Project types
          </div>
          <h2 className="mt-4 font-display text-[28px] sm:text-[48px] leading-[1.05] tracking-tight max-w-2xl">
            What we deliver in <span className="italic text-accent">{data.name}.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {data.projectTypes.map((p, i) => (
              <div key={p.title} className="bg-white p-7 lg:p-8">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-2 font-mono">
                  0{i + 1}
                </div>
                <h3 className="mt-5 font-display text-[22px] tracking-tight leading-tight">{p.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Certifications valid in {data.code}
              </div>
              <h2 className="mt-4 font-display text-[28px] sm:text-[44px] leading-[1.05] tracking-tight">
                Local credentials.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {data.certifications.map((c) => (
                  <li key={c} className="flex items-center gap-3 py-3 border-b border-line">
                    <span className="size-5 rounded-full bg-accent-tint text-accent flex items-center justify-center shrink-0">
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-[14.5px] tracking-tight font-medium">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/services/solar-epc"
                  className="inline-flex items-center gap-2 text-[14px] font-medium border-b border-accent pb-1 hover:gap-3 transition-all"
                >
                  See EPC capabilities
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="/why-gogreen"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-muted hover:text-ink hover:gap-3 transition-all"
                >
                  Our standards
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
