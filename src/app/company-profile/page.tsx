import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "الملف التعريفي | مصنع المحيط للأسماك",
  description: "الملف التعريفي للشركة — قريباً",
};

export default function CompanyProfileComingSoonPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>قريباً...</h1>
      <div className={styles.smile} aria-hidden>
        <svg viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 28 40 Q 120 102 212 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </main>
  );
}
