function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function AboutCertBadges() {
  return (
    <div className="about-cert-badges">
      <aside className="about-iso-badge" aria-label="ISO — international certification">
        <span className="about-iso-badge__icon" aria-hidden>
          <CheckIcon />
        </span>
        <div className="about-iso-badge__body">
          <span className="about-iso-badge__title">ISO</span>
          <span className="about-iso-badge__sub ar-text">معتمدون دولياً</span>
          <span className="about-iso-badge__sub en-text">Internationally certified</span>
        </div>
      </aside>
      <aside className="about-iso-badge" aria-label="HACCP — food safety certification">
        <span className="about-iso-badge__icon" aria-hidden>
          <CheckIcon />
        </span>
        <div className="about-iso-badge__body">
          <span className="about-iso-badge__title">HACCP</span>
          <span className="about-iso-badge__sub ar-text">سلامة غذائية معتمدة</span>
          <span className="about-iso-badge__sub en-text">Certified food safety</span>
        </div>
      </aside>
      <aside className="about-iso-badge" aria-label="SFDA — Saudi Food and Drug Authority">
        <span className="about-iso-badge__icon" aria-hidden>
          <CheckIcon />
        </span>
        <div className="about-iso-badge__body">
          <span className="about-iso-badge__title">SFDA</span>
          <span className="about-iso-badge__sub ar-text">هيئة الغذاء والدواء</span>
          <span className="about-iso-badge__sub en-text">Saudi Food &amp; Drug Auth.</span>
        </div>
      </aside>
    </div>
  );
}
