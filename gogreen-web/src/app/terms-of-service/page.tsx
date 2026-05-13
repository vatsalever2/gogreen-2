import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service governing use of the GoGreen Solutions website and our solar EPC, battery storage, and related services.",
  robots: { index: true, follow: true },
};

const lastUpdated = "May 13, 2025";

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`Effective date: ${lastUpdated}`}
      />

      <Container size="narrow" className="py-16 sm:py-20 lg:py-24">
        <div className="prose prose-zinc max-w-none text-[15px] leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-medium [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1.5 [&_a]:text-accent [&_a]:underline-offset-4 [&_a:hover]:underline">

          <p>
            Please read these Terms of Service ("<strong>Terms</strong>") carefully before using
            the website located at <a href="https://www.gogreensolutions.co">www.gogreensolutions.co</a>{" "}
            (the "<strong>Site</strong>") operated by GoGreen Solutions INC
            ("<strong>GoGreen Solutions</strong>," "we," "us," or "our").
          </p>
          <p>
            By accessing or using the Site, you agree to be bound by these Terms. If you do not
            agree to all of these Terms, you may not access or use the Site.
          </p>

          <h2>1. Use of the Site</h2>
          <p>
            The Site is provided for informational purposes related to our solar EPC, battery
            storage, decommissioning, removal &amp; reinstallation, roofing, and electrical
            services. You agree to use the Site only for lawful purposes and in a manner that does
            not infringe the rights of others.
          </p>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Site for any fraudulent or unlawful purpose.</li>
            <li>Attempt to gain unauthorized access to any part of the Site or its infrastructure.</li>
            <li>Transmit any harmful, offensive, or disruptive content.</li>
            <li>Use automated tools to scrape, crawl, or harvest data from the Site without our
              express written consent.</li>
            <li>Impersonate GoGreen Solutions or any of its employees or representatives.</li>
          </ul>

          <h2>2. Intellectual Property</h2>
          <p>
            All content on the Site — including text, graphics, logos, images, photographs, and
            software — is the exclusive property of GoGreen Solutions INC or its content suppliers
            and is protected by applicable copyright, trademark, and intellectual property laws.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable license to access and view
            the Site for your personal, non-commercial informational purposes. No content may be
            reproduced, distributed, modified, or used for commercial purposes without our prior
            written consent.
          </p>

          <h2>3. Quotes, Estimates, and Project Information</h2>
          <p>
            Any project scopes, cost estimates, timelines, or technical specifications communicated
            via the Site's inquiry or assessment forms are <strong>preliminary and non-binding</strong>.
            A formal proposal or contract will be separately issued and must be signed by authorized
            representatives of both parties to be binding.
          </p>

          <h2>4. Disclaimers</h2>
          <p>
            THE SITE AND ITS CONTENT ARE PROVIDED ON AN "<strong>AS IS</strong>" AND
            "<strong>AS AVAILABLE</strong>" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE
            UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GOGREEN SOLUTIONS INC AND ITS
            OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR
            INABILITY TO USE THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED ONE HUNDRED DOLLARS ($100).
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. These links are provided for your
            convenience only. We do not control, endorse, or assume responsibility for the content
            or practices of any third-party sites. Accessing third-party links is at your own risk.
          </p>

          <h2>7. Privacy</h2>
          <p>
            Your use of the Site is also governed by our{" "}
            <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into these Terms by
            reference. Please review our Privacy Policy to understand our practices.
          </p>

          <h2>8. Geographic Scope</h2>
          <p>
            GoGreen Solutions operates primarily in Virginia, Maryland, Washington D.C., Pennsylvania,
            West Virginia, Delaware, and New Jersey. The Site is directed at users in these
            jurisdictions. We make no representation that the Site or our services are appropriate
            or available in other locations.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless GoGreen Solutions INC and its
            affiliates, officers, directors, employees, and agents from any claims, damages, losses,
            liabilities, and expenses (including reasonable attorneys' fees) arising from your use
            of the Site, violation of these Terms, or infringement of any third-party rights.
          </p>

          <h2>10. Governing Law &amp; Dispute Resolution</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the
            Commonwealth of Virginia, without regard to its conflict-of-law principles. Any dispute
            arising from these Terms or your use of the Site shall be resolved exclusively in the
            state or federal courts located in Fairfax County, Virginia, and you consent to the
            personal jurisdiction of such courts.
          </p>

          <h2>11. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Updated Terms will be posted to
            this page with a revised "Effective date." Your continued use of the Site after any
            modification constitutes your acceptance of the updated Terms. We encourage you to
            review these Terms periodically.
          </p>

          <h2>12. Severability</h2>
          <p>
            If any provision of these Terms is held to be unenforceable or invalid, that provision
            shall be modified to the minimum extent necessary to make it enforceable, and the
            remaining provisions shall continue in full force and effect.
          </p>

          <h2>13. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire agreement between
            you and GoGreen Solutions INC regarding your use of the Site and supersede all prior
            agreements and understandings.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            Questions about these Terms? Please contact us at:
          </p>
          <ul>
            <li><strong>GoGreen Solutions INC</strong></li>
            <li>{site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}</li>
            <li>
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              Phone: <a href={site.phoneHref}>{site.phone}</a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
