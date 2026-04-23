"use client";

import Image from "next/image";

const ITEMS = [
  {
    key: "fish",
    imageSrc: "/product-images/fish.png",
    altAr: "فيليه أسماك طازجة معروضة على الثلج — مناسبة لمعالجة وتصنيع الأسماك",
    altEn: "Fresh fish fillets on ice — suited to fish processing and manufacturing",
    arTitle: "الأسماك",
    enTitle: "Fish",
    arSub: "تشكيلة واسعة من الأصناف المحلية والمستوردة",
    enSub: "Wide range of local and imported varieties",
  },
  {
    key: "mollusks",
    imageSrc: "/product-images/mollusks-v2.png",
    altAr: "محار طازج على الصدف",
    altEn: "Fresh mussels on the half-shell",
    arTitle: "الرخويات",
    enTitle: "Mollusks",
    arSub: "محار، سبيط، أخطبوط وأصناف مشابهة بجودة منتقاة",
    enSub: "Oysters, squid, octopus, and selected varieties",
  },
  {
    key: "crustaceans",
    imageSrc: "/product-images/crustaceans.png",
    altAr: "جمبري مطبوخ مرتّب على خلفية زرقاء فاتحة",
    altEn: "Cooked shrimp arranged on a light blue background",
    arTitle: "القشريات",
    enTitle: "Crustaceans",
    arSub: "جمبري وسرطان بحري ومعالجة وفق معايير السلامة الغذائية",
    enSub: "Shrimp, crab, and processing to the highest food safety standards",
  },
] as const;

export default function AboutProductAccordion() {
  return (
    <div className="product-accordion" role="list" aria-label="Product categories preview">
      {ITEMS.map((item) => (
        <div key={item.key} className="p-acc-card" role="listitem" tabIndex={0}>
          <Image
            src={item.imageSrc}
            alt=""
            fill
            className="p-acc-img"
            sizes="(max-width: 900px) 100vw, 34vw"
            priority={item.key === "fish"}
          />
          <div className="p-acc-overlay">
            <h3 className="p-acc-title ar-text">{item.arTitle}</h3>
            <h3 className="p-acc-title en-text">{item.enTitle}</h3>
            <p className="p-acc-desc ar-text">{item.arSub}</p>
            <p className="p-acc-desc en-text">{item.enSub}</p>
          </div>
          <span className="sr-only ar-text">{item.altAr}</span>
          <span className="sr-only en-text">{item.altEn}</span>
        </div>
      ))}
    </div>
  );
}
