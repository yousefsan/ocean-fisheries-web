import { SERVICE_CARDS } from "@/data/home-content";

export default function HomeServicesSection() {
  return (
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
          {SERVICE_CARDS.map((card) => (
            <div key={card.num} className={`service-card ${card.revealClass}`}>
              <div className="service-num">{card.num}</div>
              <span className="service-icon" aria-hidden="true">
                <span
                  className="emoji-icon"
                  style={{ WebkitMaskImage: card.iconMask, maskImage: card.iconMask }}
                />
              </span>
              <h3 className="ar-text">{card.titleAr}</h3>
              <h3 className="en-text">{card.titleEn}</h3>
              <p className="ar-text">{card.bodyAr}</p>
              <p className="en-text">{card.bodyEn}</p>
              <span className="service-tag ar-text">{card.tagAr}</span>
              <span className="service-tag en-text">{card.tagEn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
