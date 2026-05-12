"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/button";
import { Menu, Close, ArrowUpRight, Phone } from "@/components/icons";
import { site } from "@/lib/site";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
};

const items: NavItem[] = [
  {
    label: "Services",
    children: [
      { label: "Solar EPC", href: "/services/solar-epc", description: "Engineering, procurement, construction" },
      { label: "Battery Storage / BESS", href: "/services/battery-storage", description: "Resilience and backup systems" },
      { label: "Decommissioning", href: "/services/decommissioning", description: "Safe disconnect and removal" },
      { label: "Removal & Reinstallation", href: "/services/removal-reinstallation", description: "Re-roof and re-install" },
      { label: "Roofing", href: "/services/roofing", description: "Commercial and residential roofs" },
      { label: "Electrical & O&M", href: "/services/additional", description: "Supporting trades and lifecycle" },
    ],
  },
  {
    label: "Service Areas",
    children: [
      { label: "Virginia", href: "/areas/virginia" },
      { label: "Maryland", href: "/areas/maryland" },
      { label: "Washington, D.C.", href: "/areas/washington-dc" },
      { label: "Pennsylvania", href: "/areas/pennsylvania" },
      { label: "West Virginia", href: "/areas/west-virginia" },
      { label: "Delaware", href: "/areas/delaware" },
      { label: "New Jersey", href: "/areas/new-jersey" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Why GoGreen", href: "/why-gogreen" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [pathname]);

  return (
    <>
      <div
        data-fixed-nav
        role="region"
        aria-label="Site information"
        className={cn(
          "fixed inset-x-0 top-0 z-[51] bg-ink text-white/75 text-[11.5px] transition-transform duration-300",
          !scrolled ? "-translate-y-full lg:translate-y-0" : "translate-y-0"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10 h-8 flex items-center justify-between">
          <span className="hidden sm:inline-flex items-center gap-2">
            <span className="size-1 rounded-full bg-accent" />
            NABCEP PVIP · Master Electrician · Class A Contractor · OSHA Compliant
          </span>
          <div className="flex items-center gap-4">
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="size-3" />
              {site.phone}
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-white/60">VA · MD · DC · PA · WV · DE · NJ</span>
          </div>
        </div>
      </div>

      <header
        data-fixed-nav
        className={cn(
          "fixed inset-x-0 z-50 bg-white border-b border-line transition-all duration-300",
          !scrolled ? "top-0 lg:top-8" : "top-8"
        )}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
          <div className="flex h-16 items-center justify-between gap-6">
            <Logo />

            <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpen(null)}>
              {items.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpen(item.label)}
                  >
                    <button
                      className={cn(
                        "px-3 h-9 rounded-full text-[13.5px] font-medium tracking-tight text-ink-2 hover:text-ink transition-colors flex items-center gap-1",
                        open === item.label && "text-ink",
                      )}
                    >
                      {item.label}
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {open === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                        >
                          <div className="min-w-[320px] rounded-2xl border border-line bg-white shadow-card p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="group block rounded-xl px-3 py-2.5 hover:bg-surface transition-colors"
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <div>
                                    <div className="text-[13.5px] font-medium text-ink">{child.label}</div>
                                    {child.description && (
                                      <div className="text-xs text-muted mt-0.5">{child.description}</div>
                                    )}
                                  </div>
                                  <ArrowUpRight className="size-3.5 text-muted-2 opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={cn(
                      "px-3 h-9 inline-flex items-center rounded-full text-[13.5px] font-medium tracking-tight text-ink-2 hover:text-ink transition-colors",
                      pathname === item.href && "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <ButtonLink href="/contact" variant="secondary" size="sm">
                Talk to our team
              </ButtonLink>
              <ButtonLink href="/get-assessment" size="sm" withArrow>
                Free assessment
              </ButtonLink>
            </div>

            <button
              className="lg:hidden inline-flex size-10 items-center justify-center rounded-full border border-line"
              onClick={() => setMobile(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[60] bg-white"
          >
            <div className="flex h-16 items-center justify-between px-6 border-b border-line">
              <Logo />
              <button
                className="inline-flex size-10 items-center justify-center rounded-full border border-line"
                onClick={() => setMobile(false)}
                aria-label="Close menu"
              >
                <Close className="size-5" />
              </button>
            </div>
            <div className="px-6 py-8 overflow-y-auto h-[calc(100dvh-4rem)]">
              <div className="flex flex-col gap-1">
                {items.map((item) =>
                  item.children ? (
                    <details key={item.label} className="group border-b border-line py-3">
                      <summary className="flex items-center justify-between cursor-pointer list-none text-[17px] font-medium tracking-tight">
                        {item.label}
                        <span className="text-xl text-muted group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <div className="mt-3 flex flex-col gap-1 pl-2">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="py-2 text-[15px] text-muted">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href!}
                      className="border-b border-line py-4 text-[17px] font-medium tracking-tight"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink href="/get-assessment" size="lg" withArrow>Free assessment</ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="lg">Talk to our team</ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
