"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type TransitionEvent,
} from "react";
import type { ServiceCard } from "@/data/home-content";

type Props = {
  card: ServiceCard & { flipBackImage: string };
};

function shouldUseTapFlip(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches
  );
}

const VIEW_PAUSE_MS = 2000;
const VIEW_PAUSE_REDUCED_MS = 2000;

export default function ServiceFlipCard({ card }: Props) {
  const backSrc = card.flipBackImage;
  /** Visible slide index (bottom layer). Top layer shows the next slide and fades in over it. */
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [galleryFade, setGalleryFade] = useState(false);
  const [tapFlip, setTapFlip] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const galleryTimeoutsRef = useRef<number[]>([]);

  const slides = useMemo((): string[] => {
    if (card.flipBackGallery?.length) return card.flipBackGallery;
    if (card.flipBackImage2) return [card.flipBackImage, card.flipBackImage2];
    return [card.flipBackImage];
  }, [card.flipBackGallery, card.flipBackImage, card.flipBackImage2]);

  const slidesSerialized = slides.join("|");
  const multiBackPhotos = slides.length > 1;

  const clearGalleryTimeouts = useCallback(() => {
    for (const t of galleryTimeoutsRef.current) {
      window.clearTimeout(t);
    }
    galleryTimeoutsRef.current = [];
  }, []);

  const slidesLen = slides.length;

  const scheduleGalleryFadeIn = useCallback(() => {
    clearGalleryTimeouts();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pauseMs = reduceMotion ? VIEW_PAUSE_REDUCED_MS : VIEW_PAUSE_MS;
    const tid = window.setTimeout(() => {
      setGalleryFade(true);
    }, pauseMs);
    galleryTimeoutsRef.current.push(tid);
  }, [clearGalleryTimeouts]);

  useEffect(() => {
    setGalleryIdx(0);
    setGalleryFade(false);
  }, [card.num, slidesSerialized]);

  useEffect(() => {
    if (slidesLen <= 1) return;
    clearGalleryTimeouts();
    scheduleGalleryFadeIn();
    return clearGalleryTimeouts;
  }, [card.num, slidesSerialized, slidesLen, clearGalleryTimeouts, scheduleGalleryFadeIn]);

  const onOverlayTransitionEnd = useCallback(
    (e: TransitionEvent<HTMLImageElement>) => {
      if (e.target !== e.currentTarget) return;
      if (e.propertyName !== "opacity") return;
      if (!galleryFade) return;

      setGalleryIdx((i) => (i + 1) % slidesLen);
      setGalleryFade(false);
      scheduleGalleryFadeIn();
    },
    [galleryFade, slidesLen, scheduleGalleryFadeIn],
  );

  useLayoutEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const noHover = window.matchMedia("(hover: none)");
    const apply = () => setTapFlip(coarse.matches || noHover.matches);
    apply();
    coarse.addEventListener("change", apply);
    noHover.addEventListener("change", apply);
    return () => {
      coarse.removeEventListener("change", apply);
      noHover.removeEventListener("change", apply);
    };
  }, []);

  const toggleFlip = useCallback(() => {
    if (!shouldUseTapFlip()) return;
    setFlipped((v) => !v);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!shouldUseTapFlip()) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((v) => !v);
    }
  }, []);

  const outerClass = [
    "service-card-flip-outer",
    tapFlip ? "service-card-flip-outer--tap-flip" : "",
    flipped ? "service-card-flip-outer--flipped" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`service-card-flip-reveal ${card.revealClass}`}>
      <div
        className={outerClass}
        data-tap-flip={tapFlip ? "" : undefined}
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
        role={tapFlip ? "button" : undefined}
        tabIndex={tapFlip ? 0 : undefined}
        aria-pressed={tapFlip ? flipped : undefined}
        aria-label={
          tapFlip ? `${card.titleAr} — ${card.titleEn}. ${flipped ? "عرض التفاصيل" : "عرض الصورة"}` : undefined
        }
      >
        <div className="service-card-flip-scene">
        <div className="service-card-flip-inner">
          <div className="service-card-face service-card-face--front">
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
            {tapFlip ? (
              <>
                <p className="service-card-flip-hint service-card-flip-hint--touch ar-text">
                  {multiBackPhotos
                    ? "اضغط البطاقة لعرض الصور (تتبدّل تلقائياً)، واضغط مرة أخرى للعودة"
                    : "اضغط البطاقة لعرض الصورة، واضغط مرة أخرى للعودة"}
                </p>
                <p className="service-card-flip-hint service-card-flip-hint--touch en-text">
                  {multiBackPhotos
                    ? "Tap the card to see the photos (they rotate); tap again to go back"
                    : "Tap the card to see the photo; tap again to go back"}
                </p>
              </>
            ) : (
              <>
                <p className="service-card-flip-hint service-card-flip-hint--hover ar-text">
                  {multiBackPhotos
                    ? "مرّر المؤشر فوق البطاقة لعرض الصور"
                    : "مرّر المؤشر فوق البطاقة لعرض الصورة"}
                </p>
                <p className="service-card-flip-hint service-card-flip-hint--hover en-text">
                  {multiBackPhotos
                    ? "Hover the card to see the photos (they crossfade automatically)"
                    : "Hover the card to see the photo"}
                </p>
              </>
            )}
          </div>
          <div className="service-card-face service-card-face--back">
            {slides.length > 1 ? (
              <div className="service-card-flip-back-slides" aria-hidden>
                <img
                  src={slides[galleryIdx % slides.length]}
                  alt=""
                  decoding="async"
                  loading="eager"
                  fetchPriority="low"
                  className="service-card-flip-back-native service-card-flip-back-native--under"
                />
                <img
                  src={slides[(galleryIdx + 1) % slides.length]}
                  alt=""
                  decoding="async"
                  loading="eager"
                  fetchPriority="low"
                  onTransitionEnd={onOverlayTransitionEnd}
                  className={
                    galleryFade
                      ? "service-card-flip-back-native service-card-flip-back-native--over service-card-flip-back-native--over-fading"
                      : "service-card-flip-back-native service-card-flip-back-native--over"
                  }
                />
              </div>
            ) : (
              <Image
                src={backSrc}
                alt={`${card.titleAr} — ${card.titleEn}`}
                fill
                className="service-card-flip-back-img"
                sizes="(max-width: 1100px) 100vw, 33vw"
              />
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
