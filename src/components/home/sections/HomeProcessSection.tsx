import { PROCESS_STEPS } from "@/data/home-content";

export default function HomeProcessSection() {
  return (
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
          {PROCESS_STEPS.map((s) => (
            <div key={s.n} className={`process-step reveal ${s.delay}`}>
              <div className="step-dot">{s.n}</div>
              <div className="step-content">
                <span
                  className="step-icon process-icon"
                  aria-hidden="true"
                  style={{ WebkitMaskImage: `url(${s.icon})`, maskImage: `url(${s.icon})` }}
                />
                <h3 className="ar-text">{s.titleAr}</h3>
                <h3 className="en-text">{s.titleEn}</h3>
                <p className="ar-text">{s.bodyAr}</p>
                <p className="en-text">{s.bodyEn}</p>
                <span className="step-tag">{`STEP 0${s.n}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
