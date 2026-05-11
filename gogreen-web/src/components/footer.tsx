import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { site } from "@/lib/site";
import { Linkedin, ArrowUpRight, Mail, Phone, MapPin } from "@/components/icons";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Solar EPC", href: "/services/solar-epc" },
      { label: "Battery Storage", href: "/services/battery-storage" },
      { label: "Decommissioning", href: "/services/decommissioning" },
      { label: "Removal & Reinstallation", href: "/services/removal-reinstallation" },
      { label: "Roofing", href: "/services/roofing" },
      { label: "Electrical & O&M", href: "/services/additional" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "Virginia", href: "/areas/virginia" },
      { label: "Maryland", href: "/areas/maryland" },
      { label: "Washington, D.C.", href: "/areas/washington-dc" },
      { label: "Pennsylvania", href: "/areas/pennsylvania" },
      { label: "West Virginia", href: "/areas/west-virginia" },
      { label: "Delaware", href: "/areas/delaware" },
      { label: "New Jersey", href: "/areas/new-jersey" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why GoGreen", href: "/why-gogreen" },
      { label: "Insights", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Free Assessment", href: "/get-assessment" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-white pt-24 pb-10 mt-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <Container size="wide">
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Logo variant="light" />
              <p className="mt-6 text-[15px] leading-relaxed text-white/60 max-w-md text-pretty">
                Engineering-driven solar EPC and installation. We engineer, build,
                and integrate every system, across the Mid-Atlantic, with
                precision and a field-first approach.
              </p>

              <div className="mt-8 flex flex-col gap-3 text-sm text-white/70">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors w-fit"
                >
                  <Phone className="size-4 text-accent" /> {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors w-fit"
                >
                  <Mail className="size-4 text-accent" /> {site.email}
                </a>
                <div className="inline-flex items-start gap-2.5">
                  <MapPin className="size-4 text-accent mt-0.5 shrink-0" />
                  <span>
                    {site.address.street}, {site.address.city},{" "}
                    {site.address.state} {site.address.zip}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 hover:bg-white hover:text-ink transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
              {cols.map((col) => (
                <div key={col.title}>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 font-medium">
                    {col.title}
                  </div>
                  <ul className="mt-5 flex flex-col gap-3">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-[14px] text-white/75 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                        >
                          {l.label}
                          <ArrowUpRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-white/45">
            <div>
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>NABCEP PVIP · Master Electrician · Class A Contractor · OSHA Compliant</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
