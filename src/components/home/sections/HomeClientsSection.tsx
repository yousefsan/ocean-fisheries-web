import { CLIENT_SECTORS } from "@/data/home-content";

export default function HomeClientsSection() {
  return (
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
          {CLIENT_SECTORS.map((c, i) => (
            <div key={i} className={`client-card reveal ${c.delay}`}>
              <span
                className="c-icon client-icon"
                aria-hidden="true"
                style={{ WebkitMaskImage: `url(${c.iconSrc})`, maskImage: `url(${c.iconSrc})` }}
              />
              <span className="ar-text">{c.titleAr}</span>
              <span className="en-text">{c.titleEn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
