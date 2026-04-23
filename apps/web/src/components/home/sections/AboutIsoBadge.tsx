export default function AboutIsoBadge() {
  return (
    <aside className="about-iso-badge" aria-label="ISO — international certification">
      <span className="about-iso-badge__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <div className="about-iso-badge__body">
        <span className="about-iso-badge__title">ISO</span>
        <span className="about-iso-badge__sub ar-text">معتمدون دولياً</span>
        <span className="about-iso-badge__sub en-text">Internationally certified</span>
      </div>
    </aside>
  );
}
