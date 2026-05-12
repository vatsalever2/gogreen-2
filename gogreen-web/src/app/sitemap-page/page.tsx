import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { site } from "@/lib/site";
import { articles } from "@/lib/articles";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sitemap, All Pages",
  description:
    "Complete site index for GoGreen Solutions. Browse every section: services, service areas, company, insights and contact.",
};

const sections = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Why GoGreen", href: "/why-gogreen" },
      { label: "Contact", href: "/contact" },
      { label: "Free Assessment", href: "/get-assessment" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Solar EPC", href: "/services/solar-epc" },
      { label: "Battery Storage / BESS", href: "/services/battery-storage" },
      { label: "Decommissioning", href: "/services/decommissioning" },
      { label: "Removal & Reinstallation", href: "/services/removal-reinstallation" },
      { label: "Roofing", href: "/services/roofing" },
      { label: "Electrical & O&M", href: "/services/additional" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "All Areas", href: "/areas" },
      ...site.states.map((s) => ({ label: s.name, href: `/areas/${s.slug}` })),
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Sitemap" }]}
        eyebrow="Site Index"
        title={
          <>
            Every page, in <span className="italic text-accent">one place.</span>
          </>
        }
        description="A complete index of the GoGreen Solutions website. Use it to navigate to any section directly."
      />

      <section className="py-12 lg:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-[20px] tracking-tight mb-5">
                  {section.title}
                </h2>
                <ul className="flex flex-col gap-px bg-line border border-line rounded-2xl overflow-hidden">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-3 bg-white px-5 py-3.5 text-[14.5px] tracking-tight hover:bg-surface transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="size-3.5 text-muted-2 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="font-display text-[20px] tracking-tight mb-5">Insights</h2>
              <ul className="flex flex-col gap-px bg-line border border-line rounded-2xl overflow-hidden">
                <li>
                  <Link
                    href="/blog"
                    className="group flex items-center justify-between gap-3 bg-white px-5 py-3.5 text-[14.5px] tracking-tight hover:bg-surface transition-colors"
                  >
                    <span>All Articles</span>
                    <ArrowUpRight className="size-3.5 text-muted-2 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
                {articles.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/blog/${a.slug}`}
                      className="group flex items-center justify-between gap-3 bg-white px-5 py-3.5 text-[14.5px] tracking-tight hover:bg-surface transition-colors"
                    >
                      <span className="line-clamp-1">{a.title}</span>
                      <ArrowUpRight className="size-3.5 shrink-0 text-muted-2 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
