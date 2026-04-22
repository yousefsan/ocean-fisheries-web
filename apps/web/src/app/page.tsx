"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { lang } = useLanguage();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const productsMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const targetHash = "#hero";
    if (window.location.hash === targetHash) return;

    // Ensure refresh always lands on the hero section (not a previously visited hash).
    try {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${targetHash}`);
    } catch {
      // ignore
    }

    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ block: "start" });
    else window.scrollTo({ top: 0, left: 0 });
  }, []);

  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    };

    const revealInViewport = () => {
      const vh = window.innerHeight || 0;
      document.querySelectorAll(".reveal").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom > 0 && r.top < vh) el.classList.add("visible");
      });
    };

    let revealObserver: IntersectionObserver | null = null;
    try {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.1 }
      );
      document.querySelectorAll(".reveal").forEach((el) => revealObserver!.observe(el));
    } catch {
      revealAll();
    }

    requestAnimationFrame(() => {
      revealInViewport();
    });

    const fallbackTimer = window.setTimeout(revealAll, 8000);

    const animateCounters = () => {
      document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
        const raw = el.textContent ?? "";
        const targetStr = raw.replace(/[^0-9]/g, "");
        if (!targetStr) return;
        const prefix = (raw.match(/^[^0-9]*/) ?? [""])[0];
        const suffix = (raw.match(/[^0-9]*$/) ?? [""])[0];
        const target = Number.parseInt(targetStr, 10);
        let count = 0;
        const increment = Math.ceil(target / 40);
        const timer = window.setInterval(() => {
          count = Math.min(count + increment, target);
          el.textContent = `${prefix}${count}${suffix}`;
          if (count >= target) window.clearInterval(timer);
        }, 50);
      });
    };

    const statsEl = document.querySelector(".hero-stats");
    let heroObserver: IntersectionObserver | null = null;
    try {
      heroObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            animateCounters();
            heroObserver?.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      if (statsEl) heroObserver.observe(statsEl);
    } catch {
      animateCounters();
    }

    return () => {
      window.clearTimeout(fallbackTimer);
      revealObserver?.disconnect();
      heroObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!productsMenuOpen) return;
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node | null;
      if (!t) return;
      if (productsMenuRef.current?.contains(t)) return;
      setProductsMenuOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProductsMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [productsMenuOpen]);

  async function submitContact(formData: FormData) {
    setSending(true);
    setStatus("idle");
    try {
      const payload = {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? "") || undefined,
        message: String(formData.get("message") ?? ""),
      };

      const subject = encodeURIComponent("رسالة من موقع مصنع المحيط للأسماك");
      const body = encodeURIComponent(
        [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          payload.phone ? `Phone: ${payload.phone}` : "",
          "",
          payload.message,
        ]
          .filter(Boolean)
          .join("\n")
      );
      window.location.href = `mailto:info@oceanfisheries.sa?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <AppHeader />

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
                Delivering premium seafood products with authentic Saudi standards, from catch to packaging and
                distribution across the Kingdom.
              </span>
            </p>
            <div className="hero-ctas">
              <div className="products-menu" ref={productsMenuRef}>
                <button
                  type="button"
                  className="btn-primary"
                  aria-haspopup="menu"
                  aria-expanded={productsMenuOpen}
                  onClick={() => setProductsMenuOpen((v) => !v)}
                >
                  <span className="ar-text">استكشف منتجاتنا ←</span>
                  <span className="en-text">Explore Products →</span>
                </button>
                {productsMenuOpen && (
                  <div className="products-dropdown" role="menu">
                    <a href="/company-profile.pdf" target="_blank" rel="noreferrer" role="menuitem">
                      <span className="ar-text">فتح ملف المنتجات (PDF)</span>
                      <span className="en-text">Open Product Profile (PDF)</span>
                    </a>
                    <a href="/company-profile.pdf" download role="menuitem">
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
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 130'%3E%3Ccircle cx='80' cy='65' r='60' fill='%231BADD9'/%3E%3Ccircle cx='80' cy='65' r='56' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'/%3E%3Ccircle cx='62' cy='50' r='12' fill='none' stroke='white' stroke-width='3'/%3E%3Ccircle cx='62' cy='50' r='4' fill='white'/%3E%3Cellipse cx='148' cy='70' rx='20' ry='28' fill='none' stroke='%231BADD9' stroke-width='3'/%3E%3C/svg%3E"
                  alt="Ocean Fisheries"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap reveal">
              <div className="about-ocean-card">
                <div className="about-ocean-inner">
                  <p className="ar-text">
                    نلتزم بأعلى معايير الجودة في كل مرحلة
                    <br />
                    من مراحل الإنتاج والمعالجة
                  </p>
                  <p className="en-text">
                    We uphold the highest quality standards
                    <br />
                    at every stage of production and processing
                  </p>
                </div>
              </div>
              <div className="about-float-badge">
                <strong>ISO</strong>
                <span className="ar-text">معتمدون دولياً</span>
                <span className="en-text">Certified</span>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="section-badge">
                <span className="ar-text">من نحن</span>
                <span className="en-text">About Us</span>
              </div>
              <h2 className="section-title">
                <span className="ar-text">
                  نبني <span className="accent">ثقتك</span> مع كل منتج
                </span>
                <span className="en-text">
                  Building <span className="accent">Trust</span> With Every Product
                </span>
              </h2>
              <p className="section-desc ar-text">
                شركة سعودية رائدة في صناعة ومعالجة وتوزيع المنتجات البحرية. نجمع بين الخبرة الراسخة والتقنية الحديثة
                لتقديم أجود المنتجات لمائدتك.
              </p>
              <p className="section-desc en-text">
                We are a leading Saudi company in manufacturing, processing, and distributing seafood products. We combine
                deep-rooted expertise with modern technology to deliver the finest products to your table.
              </p>
              <div className="about-list">
                <div className="about-item">
                  <div className="about-icon" aria-hidden="true">
                    <span
                      className="about-icon-mask"
                      style={{ WebkitMaskImage: "url(/about-icons/vision.png)", maskImage: "url(/about-icons/vision.png)" }}
                    />
                  </div>
                  <div>
                    <h4 className="ar-text">رؤيتنا</h4>
                    <h4 className="en-text">Our Vision</h4>
                    <p className="ar-text">أن نكون المرجع الأول في صناعة الأسماك بالمملكة العربية السعودية.</p>
                    <p className="en-text">To be the premier reference in the seafood industry across Saudi Arabia.</p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-icon" aria-hidden="true">
                    <span
                      className="about-icon-mask"
                      style={{ WebkitMaskImage: "url(/about-icons/mission.png)", maskImage: "url(/about-icons/mission.png)" }}
                    />
                  </div>
                  <div>
                    <h4 className="ar-text">مهمتنا</h4>
                    <h4 className="en-text">Our Mission</h4>
                    <p className="ar-text">
                      تقديم منتجات بحرية طازجة وعالية الجودة بأسعار منافسة تلبي احتياجات السوق المحلي.
                    </p>
                    <p className="en-text">
                      Delivering fresh, high-quality seafood at competitive prices that meet local market needs.
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-icon" aria-hidden="true">
                    <span
                      className="about-icon-mask"
                      style={{ WebkitMaskImage: "url(/about-icons/values.png)", maskImage: "url(/about-icons/values.png)" }}
                    />
                  </div>
                  <div>
                    <h4 className="ar-text">قيمنا</h4>
                    <h4 className="en-text">Our Values</h4>
                    <p className="ar-text">الجودة، الأمانة، الاستدامة، وخدمة العميل في صميم كل ما نفعل.</p>
                    <p className="en-text">
                      Quality, integrity, sustainability, and customer service at the heart of everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 1rem" }} className="reveal">
            <div className="section-badge">
              <span className="ar-text">خدماتنا</span>
              <span className="en-text">Our Services</span>
            </div>
            <h2 className="section-title">
              <span className="ar-text">
                ما نقدمه <span className="accent">لعملائنا</span>
              </span>
              <span className="en-text">
                What We Offer <span className="accent">Our Clients</span>
              </span>
            </h2>
            <p className="section-desc ar-text" style={{ margin: "0 auto" }}>
              من الصيد إلى التسليم — خدمات متكاملة تضمن وصول أفضل المنتجات البحرية إليك.
            </p>
            <p className="section-desc en-text" style={{ margin: "0 auto" }}>
              From catch to delivery — comprehensive services ensuring the finest seafood reaches you.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal reveal-delay-1">
              <div className="service-num">01</div>
              <span className="service-icon" aria-hidden="true">
                <span
                  className="emoji-icon"
                  style={{ WebkitMaskImage: "url(/twemoji/1f3ed.svg)", maskImage: "url(/twemoji/1f3ed.svg)" }}
                />
              </span>
              <h3 className="ar-text">تصنيع ومعالجة الجمبري والأسماك</h3>
              <h3 className="en-text">Shrimp &amp; Fish Manufacturing &amp; Processing</h3>
              <p className="ar-text">
                نمتلك خط إنتاج متكامل يضمن معالجة الجمبري والأسماك وفق أعلى معايير النظافة والجودة الغذائية المعتمدة محلياً
                ودولياً.
              </p>
              <p className="en-text">
                Our fully integrated production line ensures shrimp and fish processing meets the highest hygiene and food
                quality standards, certified locally and internationally.
              </p>
              <span className="service-tag ar-text">إنتاج متكامل</span>
              <span className="service-tag en-text">Integrated Production</span>
            </div>

            <div className="service-card reveal reveal-delay-2">
              <div className="service-num">02</div>
              <span className="service-icon" aria-hidden="true">
                <span
                  className="emoji-icon"
                  style={{
                    WebkitMaskImage: "url(/service-icons/cold-freeze.png)",
                    maskImage: "url(/service-icons/cold-freeze.png)",
                  }}
                />
              </span>
              <h3 className="ar-text">التخزين المبرد والتجميد</h3>
              <h3 className="en-text">Cold Storage &amp; Freezing</h3>
              <p className="ar-text">
                مرافق تبريد وتجميد متطورة تحافظ على نضارة المنتجات البحرية وطازجيتها من لحظة الصيد حتى وصولها لعملائنا.
              </p>
              <p className="en-text">
                Advanced cold storage and freezing facilities preserve the freshness of seafood products from catch to
                customer delivery.
              </p>
              <span className="service-tag ar-text">سلسلة تبريد متكاملة</span>
              <span className="service-tag en-text">Full Cold Chain</span>
            </div>

            <div className="service-card reveal reveal-delay-3">
              <div className="service-num">03</div>
              <span className="service-icon" aria-hidden="true">
                <span
                  className="emoji-icon"
                  style={{ WebkitMaskImage: "url(/twemoji/1f69a.svg)", maskImage: "url(/twemoji/1f69a.svg)" }}
                />
              </span>
              <h3 className="ar-text">التغليف والتوزيع</h3>
              <h3 className="en-text">Packaging &amp; Distribution</h3>
              <p className="ar-text">
                خدمات تغليف احترافية مصممة للحفاظ على جودة المنتج، مع شبكة توزيع تغطي جميع مناطق المملكة العربية السعودية.
              </p>
              <p className="en-text">
                Professional packaging services designed to preserve product quality, backed by a distribution network
                covering all regions of Saudi Arabia.
              </p>
              <span className="service-tag ar-text">توزيع وطني</span>
              <span className="service-tag en-text">National Distribution</span>
            </div>

            <div className="service-card reveal reveal-delay-1">
              <div className="service-num">04</div>
              <span className="service-icon" aria-hidden="true">
                <span
                  className="emoji-icon"
                  style={{
                    WebkitMaskImage: "url(/service-icons/quality-safety.png)",
                    maskImage: "url(/service-icons/quality-safety.png)",
                  }}
                />
              </span>
              <h3 className="ar-text">مراقبة الجودة والسلامة</h3>
              <h3 className="en-text">Quality Control &amp; Safety</h3>
              <p className="ar-text">
                فريق متخصص لضبط الجودة يُجري اختبارات دقيقة على كل دفعة إنتاج لضمان سلامة المستهلك والامتثال للمعايير
                الدولية.
              </p>
              <p className="en-text">
                A dedicated quality control team conducts precise tests on every production batch to ensure consumer
                safety and international standards compliance.
              </p>
              <span className="service-tag ar-text">معايير دولية</span>
              <span className="service-tag en-text">International Standards</span>
            </div>

            <div className="service-card reveal reveal-delay-2">
              <div className="service-num">05</div>
              <span className="service-icon" aria-hidden="true">
                <span
                  className="emoji-icon"
                  style={{
                    WebkitMaskImage: "url(/service-icons/import-export.png)",
                    maskImage: "url(/service-icons/import-export.png)",
                  }}
                />
              </span>
              <h3 className="ar-text">الاستيراد والتصدير</h3>
              <h3 className="en-text">Import &amp; Export</h3>
              <p className="ar-text">
                نمتلك خبرة واسعة في استيراد الأسماك والمأكولات البحرية من أفضل المصادر العالمية، مع القدرة على التصدير
                للأسواق الإقليمية.
              </p>
              <p className="en-text">
                Extensive experience importing fish and seafood from the world&apos;s best sources, with regional export
                capabilities.
              </p>
              <span className="service-tag ar-text">تجارة دولية</span>
              <span className="service-tag en-text">Global Trade</span>
            </div>

            <div className="service-card reveal reveal-delay-3">
              <div className="service-num">06</div>
              <span className="service-icon" aria-hidden="true">
                <span
                  className="emoji-icon"
                  style={{ WebkitMaskImage: "url(/twemoji/1f4bc.svg)", maskImage: "url(/twemoji/1f4bc.svg)" }}
                />
              </span>
              <h3 className="ar-text">خدمات B2B المتخصصة</h3>
              <h3 className="en-text">Specialized B2B Services</h3>
              <p className="ar-text">
                حلول مخصصة للمطاعم والفنادق وشركات الأغذية والتجزئة — بما يشمل التوريد المنتظم والتغليف الخاص بالعلامة
                التجارية.
              </p>
              <p className="en-text">
                Custom solutions for restaurants, hotels, food companies, and retailers — including regular supply and
                private label packaging.
              </p>
              <span className="service-tag ar-text">حلول مخصصة</span>
              <span className="service-tag en-text">Custom Solutions</span>
            </div>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 560 }} className="reveal">
            <div className="section-badge">
              <span className="ar-text">لماذا نحن</span>
              <span className="en-text">Why Choose Us</span>
            </div>
            <h2 className="section-title">
              <span className="ar-text">
                ما يجعلنا <span className="accent">الخيار الأول</span>
              </span>
              <span className="en-text">
                What Makes Us <span className="accent">The First Choice</span>
              </span>
            </h2>
            <p className="section-desc ar-text">
              نجمع بين الخبرة والتقنية والالتزام لنقدم لك تجربة فريدة
            </p>
            <p className="section-desc en-text">
              We combine expertise, technology, and commitment to deliver more than a product — we deliver a complete
              trust experience.
            </p>
          </div>

          <div className="why-grid" style={{ marginTop: "3rem" }}>
            {[
              {
                icon: "",
                arT: "جودة لا تُضاهى",
                enT: "Unmatched Quality",
                arD: "كل منتج يمر بمراحل فحص دقيقة لضمان أعلى مستويات الجودة والطازجية.",
                enD: "Every product undergoes rigorous inspection stages to guarantee the highest levels of quality and freshness.",
                delay: "reveal-delay-1",
              },
              {
                icon: "",
                arT: "سرعة التوريد",
                enT: "Rapid Supply Chain",
                arD: "شبكة لوجستية متطورة تضمن وصول المنتجات في الوقت المحدد وبأفضل حالة ممكنة.",
                enD: "An advanced logistics network ensures products arrive on time and in peak condition.",
                delay: "reveal-delay-2",
              },
              {
                icon: "",
                arT: "الاستدامة البيئية",
                enT: "Environmental Sustainability",
                arD: "ملتزمون بالحفاظ على النظم البيئية البحرية من خلال التعامل مع صيادين محليين وشركات الاستزراع المحلية.",
                enD: "We are committed to protecting marine ecosystems by working with local fishers and local aquaculture companies.",
                delay: "reveal-delay-3",
              },
              {
                icon: "",
                arT: "شهادات معتمدة",
                enT: "Certified Standards",
                arD: "حاصلون على شهادات الجودة الدولية وموافقة هيئة الغذاء والدواء السعودية.",
                enD: "Certified with international quality standards and approved by the Saudi Food and Drug Authority.",
                delay: "reveal-delay-4",
              },
              {
                icon: "",
                arT: "أسعار تنافسية",
                enT: "Competitive Pricing",
                arD: "نقدم أفضل قيمة مقابل السعر دون المساومة على الجودة.",
                enD: "We deliver the best value for money without compromising on quality.",
                delay: "reveal-delay-1",
              },
              {
                icon: "",
                arT: "خدمة عملاء متميزة",
                enT: "Outstanding Customer Service",
                arD: "فريق دعم متخصص متاح لمساعدتك في كل ما تحتاجه قبل وبعد الشراء.",
                enD: "A dedicated support team available to assist you with everything you need, before and after purchase.",
                delay: "reveal-delay-2",
              },
            ].map((c, i) => (
              <div key={i} className={`why-card reveal ${c.delay}`}>
                <div className="why-card-icon">{c.icon}</div>
                <div>
                  <h3 className="ar-text">{c.arT}</h3>
                  <h3 className="en-text">{c.enT}</h3>
                  <p className="ar-text">{c.arD}</p>
                  <p className="en-text">{c.enD}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 1rem" }} className="reveal">
            <div className="section-badge">
              <span className="ar-text">كيف نعمل</span>
              <span className="en-text">How We Work</span>
            </div>
            <h2 className="section-title">
              <span className="ar-text">
                رحلة منتجنا <span className="accent">من البحر إليك</span>
              </span>
              <span className="en-text">
                Our Product&apos;s Journey <span className="accent">From Sea to You</span>
              </span>
            </h2>
          </div>

          <div className="process-timeline">
            {[
              {
                n: 1,
                icon: "/process-icons/step-2.png",
                arT: "الاستقبال والفرز",
                enT: "Reception & Sorting",
                arD: "يتم استقبال الأسماك الطازجة مباشرة من قوارب الصيد أو الموردين المعتمدين، ثم فرزها وتصنيفها حسب النوع والحجم والجودة.",
                enD: "Fresh fish are received directly from fishing boats or certified suppliers, then sorted and classified by type, size, and quality.",
                delay: "",
              },
              {
                n: 2,
                icon: "/process-icons/step-1.png",
                arT: "فحص الجودة والمعالجة",
                enT: "Quality Inspection & Processing",
                arD: "تخضع جميع المنتجات لاختبارات جودة صارمة قبل عمليات التنظيف والتشريح والتعبئة الأولية في بيئة معقمة.",
                enD: "All products undergo strict quality tests before cleaning, filleting, and initial packaging in a sterile environment.",
                delay: "reveal-delay-1",
              },
              {
                n: 3,
                icon: "/process-icons/step-4.png",
                arT: "التجميد والتخزين",
                enT: "Freezing & Storage",
                arD: "يتم التجميد السريع للمنتجات بتقنية IQF للحفاظ على القيمة الغذائية والطازجية، ثم تخزينها في غرف تبريد بدرجات حرارة مناسبة.",
                enD: "Products are flash-frozen using IQF technology to preserve nutritional value and freshness, then stored in cold rooms at suitable temperatures.",
                delay: "reveal-delay-2",
              },
              {
                n: 4,
                icon: "/process-icons/step-3.png",
                arT: "التغليف والتسليم",
                enT: "Packaging & Delivery",
                arD: "تُعبّأ المنتجات بتغليف احترافي يحمل كل بيانات المنتج، ثم تُوزَّع عبر شبكتنا اللوجستية المبردة لضمان وصولها بأفضل حالة.",
                enD: "Products are packaged with professional labeling carrying all product data, then distributed via our refrigerated logistics network to ensure optimal delivery.",
                delay: "reveal-delay-3",
              },
            ].map((s) => (
              <div key={s.n} className={`process-step reveal ${s.delay}`}>
                <div className="step-dot">{s.n}</div>
                <div className="step-content">
                  <span
                    className="step-icon process-icon"
                    aria-hidden="true"
                    style={{ WebkitMaskImage: `url(${s.icon})`, maskImage: `url(${s.icon})` }}
                  />
                  <h3 className="ar-text">{s.arT}</h3>
                  <h3 className="en-text">{s.enT}</h3>
                  <p className="ar-text">{s.arD}</p>
                  <p className="en-text">{s.enD}</p>
                  <span className="step-tag">{`STEP 0${s.n}`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clients">
        <div className="container">
          <div className="clients-desc reveal">
            <div className="section-badge">
              <span className="ar-text">عملاؤنا</span>
              <span className="en-text">Our Clients</span>
            </div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              <span className="ar-text">
                نخدم <span className="accent">قطاعات متعددة</span>
              </span>
              <span className="en-text">
                Serving <span className="accent">Multiple Sectors</span>
              </span>
            </h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "0 auto" }}>
              <span className="ar-text">شركاء نجاحنا من مطاعم وفنادق وسلاسل تجزئة وشركات تصنيع غذائي.</span>
              <span className="en-text">
                Our success partners include restaurants, hotels, retail chains, and food manufacturing companies.
              </span>
            </p>
          </div>

          <div className="clients-grid">
            {[
              ["/client-icons/restaurants.png", "المطاعم والمطابخ", "Restaurants & Kitchens", "reveal-delay-1"],
              ["/client-icons/hotels.png", "الفنادق والمنتجعات", "Hotels & Resorts", "reveal-delay-2"],
              ["/client-icons/retail.png", "سلاسل التجزئة", "Retail Chains", "reveal-delay-3"],
              ["/client-icons/manufacturers.png", "شركات التصنيع الغذائي", "Food Manufacturers", "reveal-delay-4"],
              ["/client-icons/aviation-port.png", "خدمات الطيران والموانئ", "Aviation & Port Services", "reveal-delay-1"],
              ["/client-icons/hospitals.png", "المستشفيات والمجمعات الصحية", "Hospitals & Health Complexes", "reveal-delay-2"],
              ["/client-icons/education.png", "مراكز التعليم والمطاعم المؤسسية", "Education & Institutional Catering", "reveal-delay-3"],
              ["/client-icons/catering.png", "شركات التموين والإعاشة", "Catering & Food Service Companies", "reveal-delay-4"],
              ["/client-icons/exporters.png", "المصدّرون الإقليميون", "Regional Exporters", "reveal-delay-1"],
            ].map(([iconSrc, arT, enT, delay], i) => (
              <div key={i} className={`client-card reveal ${delay}`}>
                <span
                  className="c-icon client-icon"
                  aria-hidden="true"
                  style={{ WebkitMaskImage: `url(${iconSrc})`, maskImage: `url(${iconSrc})` }}
                />
                <span className="ar-text">{arT}</span>
                <span className="en-text">{enT}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h2 className="section-title reveal">
            <span className="ar-text">
              هل أنت مستعد للحصول{" "}
              <span className="cta-word-light">على</span>
              <br />
              <span className="accent">
                أفضل منتجاتنا البحرية
                <span className="cta-qmark" aria-hidden="true">
                  ؟
                </span>
              </span>
            </span>
            <span className="en-text">
              Ready to Get the
              <br />
              <span className="accent">
                Best of Our Seafood
                <span className="cta-qmark" aria-hidden="true">
                  ?
                </span>
              </span>
            </span>
          </h2>
          <p className="reveal reveal-delay-1">
            <span className="ar-text">تواصل معنا اليوم وسيقوم فريقنا بتقديم عرض سعر مخصص يناسب احتياجاتك.</span>
            <span className="en-text">
              Contact us today and our team will provide a customized quote tailored to your needs.
            </span>
          </p>

          <div className="cta-btns reveal reveal-delay-2">
            <a href="https://wa.me/966540300514" className="btn-white btn-wa" target="_blank" rel="noreferrer">
              <span className="wa-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" role="img" focusable="false">
                  <path
                    fill="currentColor"
                    d="M16 3C9.373 3 4 8.373 4 15c0 2.368.69 4.576 1.882 6.44L4 29l7.75-1.817A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.8a9.77 9.77 0 0 1-4.98-1.37l-.357-.21-4.6 1.079 1.05-4.46-.233-.365A9.75 9.75 0 1 1 16 24.8zm5.66-7.28c-.31-.155-1.83-.9-2.11-1.005-.28-.105-.485-.155-.69.155-.205.31-.795 1.005-.975 1.21-.18.205-.36.232-.67.077-.31-.155-1.308-.482-2.49-1.54-.92-.82-1.54-1.835-1.72-2.145-.18-.31-.02-.477.135-.632.14-.14.31-.36.465-.54.155-.18.205-.31.31-.515.105-.205.052-.385-.025-.54-.077-.155-.69-1.665-.945-2.28-.25-.6-.505-.52-.69-.53l-.59-.01c-.205 0-.54.077-.825.385-.285.31-1.085 1.06-1.085 2.585 0 1.525 1.11 3 1.265 3.205.155.205 2.185 3.335 5.29 4.675.74.32 1.317.51 1.767.652.742.236 1.417.203 1.95.123.595-.09 1.83-.745 2.09-1.465.26-.72.26-1.335.18-1.465-.08-.13-.28-.205-.59-.36z"
                  />
                </svg>
              </span>
              <span className="ar-text">واتساب</span>
              <span className="en-text">WhatsApp</span>
            </a>
            <a
              href="mailto:info@oceanfisheries.sa"
              className="btn-outline"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
            >
              <span>✉️</span>
              <span className="ar-text">راسلنا بالبريد</span>
              <span className="en-text">Email Us</span>
            </a>
        </div>

          <form
            className="contact-form reveal reveal-delay-3"
            action={async (fd) => {
              await submitContact(fd);
            }}
          >
            <div className="contact-form-grid">
              <input name="name" placeholder={lang === "ar" ? "الاسم" : "Name"} required />
              <input name="email" placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email"} required type="email" />
              <textarea
                name="message"
                placeholder={lang === "ar" ? "رسالتك" : "Your message"}
                required
              />
            </div>
            <div className="form-actions">
              <button className="btn-primary" type="submit" disabled={sending}>
                <span className="ar-text">{sending ? "جاري الإرسال..." : "إرسال الرسالة"}</span>
                <span className="en-text">{sending ? "Sending..." : "Send Message"}</span>
              </button>
            </div>
            {status === "success" && (
              <div className="form-success">
                <span className="ar-text">تم استلام رسالتك بنجاح.</span>
                <span className="en-text">Your message has been received.</span>
              </div>
            )}
            {status === "error" && (
              <div className="form-error">
                <span className="ar-text">تعذر إرسال الرسالة. حاول مرة أخرى.</span>
                <span className="en-text">Could not send. Please try again.</span>
              </div>
            )}
            <div className="form-note">
              <span className="ar-text">سيتم إرسال الرسالة إلى فريق المبيعات، وسنرد عليك بأقرب وقت.</span>
              <span className="en-text">This goes to sales; we&apos;ll reply as soon as possible.</span>
            </div>
          </form>

        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="fb-logo">
              <span className="nav-logo-plate nav-logo-plate--footer">
                <img className="nav-mark nav-mark--footer" src="/footer-logo.jpg" alt="Ocean Fisheries" />
              </span>
              <div className="fb-name">
                <span className="ar-text">مصنع المحيط للأسماك</span>
                <span className="en-text">Ocean Fisheries Factory</span>
              </div>
            </div>
            <p className="ar-text">
              شركة سعودية رائدة في صناعة ومعالجة وتوزيع المنتجات البحرية. نجمع بين الخبرة الراسخة والتقنية الحديثة
              لتقديم أجود المنتجات لمائدتك.
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
                  <span className="ar-text">أخبار ومقالات</span>
                  <span className="en-text">News &amp; Articles</span>
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
                <a href="https://maps.app.goo.gl/QKviLX3WecyLv95H7?g_st=ic" target="_blank" rel="noreferrer">
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
                    href="https://maps.app.goo.gl/QKviLX3WecyLv95H7?g_st=ic"
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
                <a href="mailto:info@oceanfisheries.sa">✉️ info@oceanfisheries.sa</a>
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
    </>
  );
}
