import type { Metadata } from "next";

export const SITE_URL = "https://www.oceanfactory.com.sa";

export const SITE_DESCRIPTION =
  "جودة من قلب المحيط إلى مائدتك — Quality From the Heart of the Ocean To Your Table";

export const SITE_TITLE = "مصنع المحيط للأسماك | Ocean Fisheries";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | مصنع المحيط للأسماك",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-share.jpg",
        width: 1200,
        height: 630,
        alt: "مصنع المحيط للأسماك — Ocean Fisheries Factory",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-share.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
