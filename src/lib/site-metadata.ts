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
        width: 1024,
        height: 713,
        alt: "مصنع المحيط للأسماك — Ocean Fisheries",
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
};
