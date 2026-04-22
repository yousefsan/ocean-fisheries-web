"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import headerLogo from "@/assets/header-logo.jpg";

function hashFromHref(href: string | null): string {
  if (!href) return "";
  const i = href.indexOf("#");
  return i >= 0 ? href.slice(i) : "";
}

export default function AppHeader() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const sectionHref = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);
  const newsActive = pathname === "/news";

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("nav a[data-section-link]"));
    const onScroll = () => {
      let current = "";
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 100) current = section.id;
      }
      for (const link of navLinks) {
        const active = hashFromHref(link.getAttribute("href")) === `#${current}`;
        link.style.color = active ? "white" : "";
        link.style.background = active ? "rgba(255,255,255,0.12)" : "";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, lang]);

  return (
    <div className="lang-bar">
      <Link href="/" className="logo-nav" style={{ textDecoration: "none", color: "inherit" }}>
        <span className="nav-logo-plate">
          <img
            className="nav-mark nav-mark--header-brand"
            src={headerLogo.src}
            width={headerLogo.width}
            height={headerLogo.height}
            alt="Ocean Fisheries Logo"
          />
        </span>
        <div className="brand">
          <span className="ar-text">مصنع المحيط للأسماك</span>
          <span className="en-text" style={{ fontFamily: "var(--font-en)", fontSize: "0.9rem" }}>
            Ocean Fisheries
          </span>
          <span>Ocean Fisheries Factory</span>
        </div>
      </Link>
      <nav>
        <Link href={sectionHref("about")} data-section-link="">
          <span className="ar-text">من نحن</span>
          <span className="en-text">About</span>
        </Link>
        <Link href={sectionHref("services")} data-section-link="">
          <span className="ar-text">خدماتنا</span>
          <span className="en-text">Services</span>
        </Link>
        <Link href={sectionHref("why")} data-section-link="">
          <span className="ar-text">لماذا نحن</span>
          <span className="en-text">Why Us</span>
        </Link>
        <Link href={sectionHref("process")} data-section-link="">
          <span className="ar-text">كيف نعمل</span>
          <span className="en-text">Process</span>
        </Link>
        <Link
          href="/news"
          style={
            newsActive
              ? { color: "white", background: "rgba(255,255,255,0.12)" }
              : undefined
          }
        >
          <span className="ar-text">أخبار ومقالات</span>
          <span className="en-text">News &amp; Articles</span>
        </Link>
        <Link href={sectionHref("cta")} data-section-link="">
          <span className="ar-text">تواصل معنا</span>
          <span className="en-text">Contact</span>
        </Link>
      </nav>
      <button type="button" className="lang-btn" onClick={() => setLang((v) => (v === "ar" ? "en" : "ar"))}>
        {lang === "ar" ? "EN / عربي" : "عربي"}
      </button>
    </div>
  );
}
