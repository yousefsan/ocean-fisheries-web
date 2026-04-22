import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أخبار ومقالات | مصنع المحيط للأسماك",
  description: "أخبار ومقالات مصنع المحيط للأسماك — Ocean Fisheries news and articles.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
