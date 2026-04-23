import { WHY_CARDS } from "@/data/home-content";

export default function HomeWhySection() {
  return (
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
          <p className="section-desc ar-text">نجمع بين الخبرة والتقنية والالتزام لنقدم لك تجربة فريدة</p>
          <p className="section-desc en-text">
            We combine expertise, technology, and commitment to deliver more than a product — we deliver a complete trust
            experience.
          </p>
        </div>

        <div className="why-grid" style={{ marginTop: "3rem" }}>
          {WHY_CARDS.map((c, i) => (
            <div key={i} className={`why-card reveal ${c.delay}`}>
              <div className="why-card-icon" />
              <div>
                <h3 className="ar-text">{c.titleAr}</h3>
                <h3 className="en-text">{c.titleEn}</h3>
                <p className="ar-text">{c.bodyAr}</p>
                <p className="en-text">{c.bodyEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
