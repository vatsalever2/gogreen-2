import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gogreensolutions.co"),
  title: {
    default: "GoGreen Solutions, Engineering-Driven Solar EPC | Mid-Atlantic",
    template: "%s | GoGreen Solutions",
  },
  description:
    "Commercial, distributed and residential solar EPC, BESS, decommissioning and R&R across VA, MD, DC, PA, WV, DE. 5,000+ projects. 54+ MW installed. 25-year workmanship warranty.",
  keywords: [
    "Solar EPC",
    "Commercial Solar",
    "BESS",
    "Decommissioning",
    "Removal & Reinstallation",
    "Mid-Atlantic Solar",
    "Virginia Solar",
    "Maryland Solar",
    "DC Solar",
    "NABCEP",
  ],
  authors: [{ name: "GoGreen Solutions INC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gogreensolutions.co",
    title: "GoGreen Solutions, Engineering-Driven Solar EPC",
    description:
      "Engineering-driven Solar EPC delivering commercial, DG and residential projects across the Mid-Atlantic with precision, safety and field-first execution.",
    siteName: "GoGreen Solutions",
    images: [
      {
        url: "/images/working-1.jpg",
        width: 1200,
        height: 630,
        alt: "GoGreen Solutions — Engineering-Driven Solar EPC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoGreen Solutions, Engineering-Driven Solar EPC",
    description:
      "Commercial, DG and residential solar EPC across the Mid-Atlantic. 5,000+ projects. 54+ MW installed.",
    images: ["/images/working-1.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jbMono.variable} ${display.variable}`}
    >
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="index" href="/sitemap-page" title="Site Index" />
        <link rel="search" href="/sitemap-page" title="Search Site Index" />
        <link rel="contents" href="/sitemap-page" title="Table of Contents" />
        <link rel="help" href="/contact" title="Contact GoGreen Solutions" />
      </head>
      <body className="bg-bg text-ink antialiased min-h-dvh flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-full focus:bg-accent focus:text-white focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <SmoothScroll />
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
