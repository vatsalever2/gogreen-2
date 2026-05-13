import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how GoGreen Solutions collects, uses, and protects your personal information when you visit our website or contact us about solar EPC services.",
  robots: { index: true, follow: true },
};

const lastUpdated = "May 13, 2025";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Effective date: ${lastUpdated}`}
      />

      <Container size="narrow" className="py-16 sm:py-20 lg:py-24">
        <div className="prose prose-zinc max-w-none text-[15px] leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-medium [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1.5 [&_a]:text-accent [&_a]:underline-offset-4 [&_a:hover]:underline">

          <p>
            GoGreen Solutions INC ("<strong>GoGreen Solutions</strong>," "we," "us," or "our") respects
            your privacy and is committed to protecting the personal information you share with us.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit <a href="https://www.gogreensolutions.co">www.gogreensolutions.co</a> (the
            "Site") or contact us about our solar EPC, battery storage, and related services.
          </p>
          <p>
            By using the Site, you agree to the terms of this Privacy Policy. If you do not agree,
            please do not use the Site.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>Information You Provide Directly</h3>
          <ul>
            <li>
              <strong>Contact &amp; Inquiry Forms:</strong> Name, email address, phone number, company
              or organization name, project scope, state, and any additional details you submit via
              our contact or assessment forms.
            </li>
            <li>
              <strong>Email &amp; Phone Communications:</strong> Records of correspondence when you
              contact us directly by email or telephone.
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Log Data:</strong> IP address, browser type and version, operating system,
              referring URL, pages visited, and timestamps.
            </li>
            <li>
              <strong>Cookies &amp; Similar Technologies:</strong> We use essential cookies to
              operate the Site. We do not currently use advertising or third-party tracking cookies.
            </li>
            <li>
              <strong>Analytics:</strong> We may use anonymized, aggregate analytics (such as
              Vercel Analytics) to understand Site usage and improve our content.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide quotes or project assessments.</li>
            <li>Schedule site visits or follow-up calls.</li>
            <li>Send service-related communications you have requested.</li>
            <li>Improve and maintain the Site and our services.</li>
            <li>Comply with applicable legal obligations.</li>
            <li>Detect and prevent fraud or abuse.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal information to third parties
            for their marketing purposes.
          </p>

          <h2>3. How We Share Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Trusted vendors who assist us in operating the
              Site and delivering services (e.g., email delivery, hosting, analytics), each bound by
              confidentiality obligations.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, subpoena, or other legal
              process, or to protect the rights, property, or safety of GoGreen Solutions, our
              customers, or others.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale
              of assets, with appropriate notice to you.
            </li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to fulfill the purposes outlined
            in this Policy, or as required by law. Inquiry data is typically retained for up to
            three (3) years after the last communication, after which it is securely deleted or
            anonymized.
          </p>

          <h2>5. Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect
            your information from unauthorized access, alteration, disclosure, or destruction.
            However, no internet transmission or electronic storage method is 100% secure. We cannot
            guarantee absolute security.
          </p>

          <h2>6. Your Rights &amp; Choices</h2>
          <p>
            Depending on your state of residence, you may have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your information, subject to legal retention requirements.</li>
            <li>Opt out of any future marketing communications at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond within 30 days.
          </p>

          <h2>7. Cookies</h2>
          <p>
            You can control cookie settings through your browser preferences. Disabling cookies may
            limit certain Site functionality. We do not respond to Do Not Track (DNT) browser signals
            at this time.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            The Site is intended for business and adult audiences. We do not knowingly collect
            personal information from children under the age of 13. If you believe we have
            inadvertently collected such information, please contact us immediately.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. We are not responsible for the
            privacy practices or content of those sites and encourage you to review their privacy
            policies before providing any information.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Effective date" at the top of
            this page reflects the date of the most recent revision. Continued use of the Site after
            any update constitutes your acceptance of the revised Policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact:
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
