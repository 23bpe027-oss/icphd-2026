import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://icphd2026.com";
const siteDescription =
  "The 4th International Conference on Petroleum, Hydrogen & Decarbonization (ICPHD 2026), December 11–13, 2026, at Pandit Deendayal Energy University (PDEU), Gandhinagar, Gujarat, India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ICPHD 2026",
    template: "%s | ICPHD 2026",
  },
  applicationName: "ICPHD 2026",
  description: siteDescription,
  keywords: [
    "ICPHD 2026",
    "International Conference on Petroleum Hydrogen and Decarbonization",
    "Petroleum Conference India",
    "Hydrogen Conference",
    "Decarbonization",
    "PDEU Gandhinagar",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ICPHD 2026",
    title: "ICPHD 2026",
    description: siteDescription,
    images: [
      {
        url: "/og-icphd-2026.jpg",
        width: 1200,
        height: 630,
        alt: "ICPHD 2026 — Petroleum, Hydrogen & Decarbonization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICPHD 2026",
    description: siteDescription,
    images: ["/og-icphd-2026.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "International Conference on Petroleum, Hydrogen & Decarbonization (ICPHD 2026)",
  alternateName: "ICPHD 2026",
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}/og-icphd-2026.jpg`,
  startDate: "2026-12-11T09:00:00+05:30",
  endDate: "2026-12-13T18:00:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Pandit Deendayal Energy University (PDEU)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Knowledge Corridor, Raisan",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      postalCode: "382426",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Pandit Deendayal Energy University",
    url: "https://www.pdeu.ac.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
