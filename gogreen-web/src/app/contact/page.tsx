import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, Linkedin } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact, Talk to Our Engineering Team",
  description:
    "Reach the GoGreen Solutions team. Address, phone, email, and a structured inquiry form. Engineering-led response within 48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title={
          <>
            Talk to <span className="italic text-accent">our team.</span>
          </>
        }
        description="Send us your scope, drawings, or just an idea. Our engineering team responds within 48 hours, often sooner."
      />

      <section className="py-12 lg:py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start flex flex-col gap-8">
              <div className="rounded-2xl border border-line bg-white p-6">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-2 font-mono">Headquarters</div>
                <div className="mt-3 text-[15px] leading-relaxed">
                  {site.address.street}<br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </div>
                <div className="mt-5 flex flex-col gap-3 text-[14px]">
                  <a href={site.phoneHref} className="inline-flex items-center gap-2.5 text-ink hover:text-accent transition-colors">
                    <Phone className="size-4 text-accent" /> {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 text-ink hover:text-accent transition-colors">
                    <Mail className="size-4 text-accent" /> {site.email}
                  </a>
                  <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-ink hover:text-accent transition-colors">
                    <Linkedin className="size-4 text-accent" /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-2 font-mono">Hours</div>
                <div className="mt-3 text-[14px] text-muted leading-relaxed">
                  Mon – Fri · 8:00am – 6:00pm ET<br />
                  Sat · By appointment<br />
                  Critical-issue response 7 days
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-ink text-white p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/50 font-mono">Service SLA</div>
                  <div className="mt-3 font-display text-[34px] tracking-tight">48-hour response</div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-white/70">
                    Initial response within 48 hours. Faster for emergencies. Includes remote diagnostics and on-site scheduling.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ContactForm />

              <div className="mt-10 rounded-2xl overflow-hidden border border-line aspect-[16/9] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.1618267146328!2d-77.36954709999999!3d38.9659727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63763e788f171%3A0x580e09e3413e7b1e!2sGoGreen%20Solutions%20INC!5e0!3m2!1sen!2sin!4v1778497811231!5m2!1sen!2sin"
                  className="absolute inset-0 size-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GoGreen Solutions INC"
                ></iframe>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-[12.5px] text-muted">
                <MapPin className="size-3.5 text-accent" />
                {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
