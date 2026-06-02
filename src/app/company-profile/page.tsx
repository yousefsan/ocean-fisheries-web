import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "الملف التعريفي | مصنع المحيط للأسماك",
  description: "الملف التعريفي للشركة — قريباً",
};

export default function CompanyProfileComingSoonPage() {
  return (
    <main className={styles.main}>
      <Link
        href="/"
        className={styles.homeLink}
        aria-label="الصفحة الرئيسية / Main"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3.2 3 10.5v10.3c0 .55.45 1 1 1h5.5v-6.5h5V22H20c.55 0 1-.45 1-1V10.5l-9-7.3Zm7 16.8h-3.5v-6.5h-7V20H5v-8.6l7-5.7 7 5.7V20Z"
          />
        </svg>
        <span className={`${styles.homeText} ar-text`}>الرئيسية</span>
        <span className={`${styles.homeText} en-text`}>Home</span>
      </Link>
      <h1 className={styles.title}>
        <span className="ar-text">قريباً...</span>
        <span className="en-text">Soon...</span>
      </h1>
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
