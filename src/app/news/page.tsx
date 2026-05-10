"use client";

import AppHeader from "@/components/AppHeader";

const articles = [
  {
    dateAr: "١٩ أبريل ٢٠٢٦",
    dateEn: "Apr 19, 2026",
    tagAr: "أخبار",
    tagEn: "News",
    titleAr: "إطلاق صفحة الأخبار والمقالات",
    titleEn: "Launching our news & articles page",
    excerptAr:
      "نعمل على تحديثكم بآخر أخبار المصنع، ومبادرات الجودة، ونصائح تهم قطاع المنتجات البحرية. تابعونا هنا باستمرار.",
    excerptEn:
      "We will share factory updates, quality initiatives, and seafood industry insights. Check back here regularly.",
  },
  {
    dateAr: "١٩ أبريل ٢٠٢٦",
    dateEn: "Apr 19, 2026",
    tagAr: "مقال",
    tagEn: "Article",
    titleAr: "أهمية سلسلة التبريد في الحفاظ على جودة الأسماك",
    titleEn: "Why the cold chain matters for fish quality",
    excerptAr:
      "التبريد السريع والتخزين الصحيح يحافظان على القيمة الغذائية والطازجية — وهما جزء أساسي من عملياتنا اليومية.",
    excerptEn:
      "Rapid chilling and proper storage protect nutritional value and freshness — core parts of our daily operations.",
  },
  {
    dateAr: "١٩ أبريل ٢٠٢٦",
    dateEn: "Apr 19, 2026",
    tagAr: "أخبار",
    tagEn: "News",
    titleAr: "شراكات مع موردين وصيادين محليين",
    titleEn: "Partnerships with local suppliers and fishers",
    excerptAr:
      "نوسّع شبكة التوريد بالتعامل مع جهات محلية موثوقة لدعم الاقتصاد وضمان تدفق منتجات بحرية مسؤولة.",
    excerptEn:
      "We grow our sourcing network through trusted local partners to support the economy and responsible seafood supply.",
  },
];

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
                تابعوا هنا نشراتنا حول المنتجات، الجودة، والقطاع. يمكنكم لاحقاً ربط هذه الصفحة بمنصة إدارة محتوى أو مدونة
                لإضافة مقالات جديدة بسهولة.
              </span>
              <span className="en-text">
                Follow our updates on products, quality, and the industry. This page can later be connected to a CMS or
                blog to publish new posts easily.
              </span>
            </p>
          </header>

          <div className="news-list">
            {articles.map((item, i) => (
              <article key={i} className="news-card reveal visible">
                <div className="news-card-meta">
                  <span className="news-tag ar-text">{item.tagAr}</span>
                  <span className="news-tag en-text">{item.tagEn}</span>
                  <time className="news-date ar-text">{item.dateAr}</time>
                  <time className="news-date en-text">{item.dateEn}</time>
                </div>
                <h2 className="news-card-title ar-text">{item.titleAr}</h2>
                <h2 className="news-card-title en-text">{item.titleEn}</h2>
                <p className="news-card-excerpt ar-text">{item.excerptAr}</p>
                <p className="news-card-excerpt en-text">{item.excerptEn}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
