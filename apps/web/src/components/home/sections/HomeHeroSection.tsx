import Image from "next/image";
import { useProductsMenu } from "@/hooks/use-products-menu";
import { SITE } from "@/lib/home/site";
import { HERO_LOGO_DATA_URI } from "@/lib/home/hero-assets";

export default function HomeHeroSection() {
  const { open, setOpen, ref } = useProductsMenu();

  return (
    <section id="hero">
      <div className="bubbles">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
      </div>
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="ar-text">رائد صناعة الأسماك في المملكة 🇸🇦</span>
            <span className="en-text">Saudi Arabia&apos;s Seafood Industry Leader 🇸🇦</span>
          </div>
          <h1 className="hero-title">
            <span className="ar-text">
              جودة من <span className="accent">قلب المحيط</span>
              <br />
              إلى مائدتك
            </span>
            <span className="en-text">
              Quality From the <span className="accent">Heart of the Ocean</span> To Your Table
            </span>
          </h1>
          <p className="hero-subtitle">
            <span className="ar-text">
              نقدم منتجات بحرية عالية الجودة بمعايير سعودية أصيلة، بدءاً من الصيد وحتى التغليف والتوزيع.
            </span>
            <span className="en-text">
              Delivering premium seafood products with authentic Saudi standards, from catch to packaging and distribution
              across the Kingdom.
            </span>
          </p>
          <div className="hero-ctas">
            <div className="products-menu" ref={ref}>
              <button
                type="button"
                className="btn-primary"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span className="ar-text">استكشف منتجاتنا ←</span>
                <span className="en-text">Explore Products →</span>
              </button>
              {open && (
                <div className="products-dropdown" role="menu">
                  <a href={SITE.productPdf} target="_blank" rel="noreferrer" role="menuitem">
                    <span className="ar-text">فتح ملف المنتجات (PDF)</span>
                    <span className="en-text">Open Product Profile (PDF)</span>
                  </a>
                  <a href={SITE.productPdf} download role="menuitem">
                    <span className="ar-text">تحميل الملف</span>
                    <span className="en-text">Download</span>
                  </a>
                </div>
              )}
            </div>
            <a href="#cta" className="btn-outline">
              <span className="ar-text">تواصل معنا</span>
              <span className="en-text">Get in Touch</span>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <strong className="stat-num">+65</strong>
              <span className="stat-lbl ar-text">سنة خبرة</span>
              <span className="stat-lbl en-text">Years Experience</span>
            </div>
            <div className="stat-item">
              <strong className="stat-num">+50</strong>
              <span className="stat-lbl ar-text">نوعاً من المنتجات</span>
              <span className="stat-lbl en-text">Product Varieties</span>
            </div>
            <div className="stat-item">
              <strong className="stat-num">100%</strong>
              <span className="stat-lbl ar-text">معايير الجودة</span>
              <span className="stat-lbl en-text">Quality Certified</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-logo-wrap">
            <div className="hero-logo-circle">
              <Image
                src={HERO_LOGO_DATA_URI}
                alt="Ocean Fisheries"
                width={240}
                height={156}
                style={{ width: 240, height: "auto" }}
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
