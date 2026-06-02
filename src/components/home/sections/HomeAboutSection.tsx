import AboutProductAccordion from "@/components/AboutProductAccordion";
import { ABOUT_PILLARS } from "@/data/home-content";
import { ABOUT_SECTION_VIDEO_SRC } from "@/lib/home/site";
import AboutCertBadges from "./AboutCertBadges";

const aboutBgVideoProps = {
  autoPlay: true,
  muted: true,
  loop: true,
  playsInline: true,
  poster: "/product-images/fish.png",
  disablePictureInPicture: true,
  disableRemotePlayback: true,
  "aria-hidden": true as const,
};

export default function HomeAboutSection() {
  return (
    <section id="about">
      <video
        className="about-section-video about-section-video--fullbleed"
        {...aboutBgVideoProps}
        preload="auto"
      >
        <source src={ABOUT_SECTION_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="about-section-video-overlay about-section-video-overlay--fullbleed" aria-hidden />
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap reveal">
            <div className="about-ocean-card about-ocean-card--accordion">
              <AboutCertBadges />
              <AboutProductAccordion />
            </div>
          </div>
          <div className="reveal reveal-delay-2 about-text-stack">
            <div className="section-badge">
              <span className="ar-text">من نحن</span>
              <span className="en-text">About Us</span>
            </div>
            <div className="about-text-hero-bg">
              <div className="about-text-hero-bg__media" aria-hidden>
                <video
                  className="about-section-video about-section-video--hero"
                  {...aboutBgVideoProps}
                  preload="metadata"
                >
                  <source src={ABOUT_SECTION_VIDEO_SRC} type="video/mp4" />
                </video>
                <div className="about-section-video-overlay about-section-video-overlay--hero" aria-hidden />
              </div>
              <div className="about-text-hero-bg__content">
                <h2 className="section-title">
                  <span className="ar-text">
                    نبني <span className="accent">ثقتك</span> مع كل منتج
                  </span>
                  <span className="en-text">
                    Building <span className="accent">Trust</span> With Every Product
                  </span>
                </h2>
                <p className="section-desc ar-text">
                  شركة سعودية رائدة في صناعة ومعالجة وتوزيع المنتجات البحرية. نجمع بين الخبرة الراسخة والتقنية الحديثة لتقديم
                  أجود المنتجات لمائدتك.
                </p>
                <p className="section-desc en-text">
                  We are a leading Saudi company in manufacturing, processing, and distributing seafood products. We combine
                  deep-rooted expertise with modern technology to deliver the finest products to your table.
                </p>
              </div>
            </div>
            <div className="about-list">
              {ABOUT_PILLARS.map((p) => (
                <div key={p.titleEn} className="about-item">
                  <div className="about-icon" aria-hidden="true">
                    <span
                      className="about-icon-mask"
                      style={{ WebkitMaskImage: `url(${p.iconSrc})`, maskImage: `url(${p.iconSrc})` }}
                    />
                  </div>
                  <div>
                    <h4 className="ar-text">{p.titleAr}</h4>
                    <h4 className="en-text">{p.titleEn}</h4>
                    <p className="ar-text">{p.bodyAr}</p>
                    <p className="en-text">{p.bodyEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
