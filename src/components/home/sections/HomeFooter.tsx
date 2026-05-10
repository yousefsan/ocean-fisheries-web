import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/home/site";

export default function HomeFooter() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="fb-logo">
            <span className="nav-logo-plate nav-logo-plate--footer">
              <Image className="nav-mark nav-mark--footer" src="/footer-logo.jpg" alt="Ocean Fisheries" width={44} height={44} />
            </span>
            <div className="fb-name">
              <span className="ar-text">مصنع المحيط للأسماك</span>
              <span className="en-text">Ocean Fisheries Factory</span>
            </div>
          </div>
          <p className="ar-text">
            شركة سعودية رائدة في صناعة ومعالجة وتوزيع المنتجات البحرية. نجمع بين الخبرة الراسخة والتقنية الحديثة لتقديم
            أجود المنتجات لمائدتك.
          </p>
          <p className="en-text">
            We are a leading Saudi company in manufacturing, processing, and distributing seafood products. We combine
            deep-rooted expertise with modern technology to deliver the finest products to your table.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="ar-text">روابط سريعة</h4>
          <h4 className="en-text">Quick Links</h4>
          <ul>
            <li>
              <a href="#about">
                <span className="ar-text">من نحن</span>
                <span className="en-text">About Us</span>
              </a>
            </li>
            <li>
              <a href="#services">
                <span className="ar-text">خدماتنا</span>
                <span className="en-text">Services</span>
              </a>
            </li>
            <li>
              <a href="#why">
                <span className="ar-text">لماذا نحن</span>
                <span className="en-text">Why Us</span>
              </a>
            </li>
            <li>
              <a href="#process">
                <span className="ar-text">كيف نعمل</span>
                <span className="en-text">Process</span>
              </a>
            </li>
            <li>
              <Link href="/news">
                <span className="ar-text">المدونة</span>
                <span className="en-text">Blog</span>
              </Link>
            </li>
            <li>
              <a href="#cta">
                <span className="ar-text">تواصل معنا</span>
                <span className="en-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="ar-text">خدماتنا</h4>
          <h4 className="en-text">Services</h4>
          <ul>
            <li>
              <a href="#">
                <span className="ar-text">تصنيع الأسماك</span>
                <span className="en-text">Fish Manufacturing</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ar-text">التخزين المبرد</span>
                <span className="en-text">Cold Storage</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ar-text">التوزيع</span>
                <span className="en-text">Distribution</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ar-text">ضبط الجودة</span>
                <span className="en-text">Quality Control</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ar-text">الاستيراد والتصدير</span>
                <span className="en-text">Import &amp; Export</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="ar-text">تواصل معنا</h4>
          <h4 className="en-text">Contact</h4>
          <ul>
            <li>
              <a href={SITE.mapsHref} target="_blank" rel="noreferrer">
                <span className="ar-text">📍 المملكة العربية السعودية — جدة</span>
                <span className="en-text">📍 Saudi Arabia — Jeddah</span>
              </a>
              <div className="footer-mini-map" aria-label="Google Map preview">
                <iframe
                  title="Google Map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?output=embed&q=Jeddah%20Saudi%20Arabia"
                />
                <a
                  className="footer-mini-map-link"
                  href={SITE.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open in Google Maps"
                >
                  <span className="sr-only">Open in Google Maps</span>
                </a>
              </div>
              <div className="footer-hours">
                <span className="ar-text">⏰ السبت – الخميس، ٨ص – ٦م</span>
                <span className="en-text">⏰ Sat – Thu, 8AM – 6PM</span>
              </div>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>✉️ {SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="ar-text">
          © ٢٠٢٥ <span className="ocean-mark">مصنع المحيط للأسماك</span>. جميع الحقوق محفوظة.
        </span>
        <span className="en-text">
          © 2025 <span className="ocean-mark">Ocean Fisheries Factory</span>. All rights reserved.
        </span>
        <span className="ar-text">مصنوع بـ 🐟 في المملكة العربية السعودية</span>
        <span className="en-text">Made with 🐟 in Saudi Arabia</span>
      </div>
    </footer>
  );
}
