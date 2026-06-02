"use client";

import AppHeader from "@/components/AppHeader";

export default function NewsPage() {
  return (
    <>
      <AppHeader />
      <main className="news-page">
        <div className="news-inner">
          <header className="news-hero reveal visible">
            <div className="section-badge news-badge">
              <span className="ar-text">المدونة</span>
              <span className="en-text">Blog</span>
            </div>
            <h1 className="section-title">
              <span className="ar-text">آخر الأخبار والمقالات</span>
              <span className="en-text">Latest news &amp; articles</span>
            </h1>
            <p className="section-desc news-intro">
              <span className="ar-text">
                نُعدّ لكم محتوى يغطي أخبار المصنع، الجودة، والقطاع. الصفحة قيد الإعداد — تابعونا قريباً.
              </span>
              <span className="en-text">
                We are preparing updates on the factory, quality, and the industry. This section is in the works — check
                back soon.
              </span>
            </p>
          </header>

          <div className="news-list">
            <div className="news-card news-coming-soon reveal visible">
              <p className="news-coming-label ar-text">قريباً</p>
              <p className="news-coming-label en-text">Coming soon</p>
              <p className="news-coming-desc ar-text">
                الأخبار والمقالات ستُعرض هنا فور جاهزيتها. شكراً لصبركم.
              </p>
              <p className="news-coming-desc en-text">
                News and articles will appear here as soon as they are ready. Thank you for your patience.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
