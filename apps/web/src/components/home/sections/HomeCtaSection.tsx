import { useLanguage } from "@/components/LanguageProvider";
import { useContactForm } from "@/hooks/use-contact-form";
import { SITE } from "@/lib/home/site";

export default function HomeCtaSection() {
  const { lang } = useLanguage();
  const { sending, status, submit } = useContactForm();

  return (
    <section id="cta">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <h2 className="section-title reveal">
          <span className="ar-text">
            هل أنت مستعد للحصول <span className="cta-word-light">على</span>
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
          <a href={SITE.whatsappHref} className="btn-white btn-wa" target="_blank" rel="noreferrer">
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
            href={`mailto:${SITE.email}`}
            className="btn-outline"
            style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
          >
            <span>✉️</span>
            <span className="ar-text">راسلنا بالبريد</span>
            <span className="en-text">Email Us</span>
          </a>
        </div>

        <form className="contact-form reveal reveal-delay-3" action={submit}>
          <div className="contact-form-grid">
            <input name="name" placeholder={lang === "ar" ? "الاسم" : "Name"} required />
            <input name="email" placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email"} required type="email" />
            <textarea name="message" placeholder={lang === "ar" ? "رسالتك" : "Your message"} required />
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
  );
}
