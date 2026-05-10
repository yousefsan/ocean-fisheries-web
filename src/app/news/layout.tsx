import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المدونة | مصنع المحيط للأسماك",
  description: "المدونة الخاصة بمصنع المحيط للأسماك — Ocean Fisheries blog.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
