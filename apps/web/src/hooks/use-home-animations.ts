import { useEffect } from "react";

function useHeroLandingHash() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const targetHash = "#hero";
    if (window.location.hash === targetHash) return;

    try {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${targetHash}`);
    } catch {
      /* ignore */
    }

    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ block: "start" });
    else window.scrollTo({ top: 0, left: 0 });
  }, []);
}

function useRevealAndHeroStats() {
  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    };

    const revealInViewport = () => {
      const vh = window.innerHeight || 0;
      document.querySelectorAll(".reveal").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom > 0 && r.top < vh) el.classList.add("visible");
      });
    };

    let revealObserver: IntersectionObserver | null = null;
    try {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.1 }
      );
      document.querySelectorAll(".reveal").forEach((el) => revealObserver!.observe(el));
    } catch {
      revealAll();
    }

    requestAnimationFrame(() => {
      revealInViewport();
    });

    const fallbackTimer = window.setTimeout(revealAll, 8000);

    const animateCounters = () => {
      document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
        const raw = el.textContent ?? "";
        const targetStr = raw.replace(/[^0-9]/g, "");
        if (!targetStr) return;
        const prefix = (raw.match(/^[^0-9]*/) ?? [""])[0];
        const suffix = (raw.match(/[^0-9]*$/) ?? [""])[0];
        const target = Number.parseInt(targetStr, 10);
        let count = 0;
        const increment = Math.ceil(target / 40);
        const timer = window.setInterval(() => {
          count = Math.min(count + increment, target);
          el.textContent = `${prefix}${count}${suffix}`;
          if (count >= target) window.clearInterval(timer);
        }, 50);
      });
    };

    const statsEl = document.querySelector(".hero-stats");
    let heroObserver: IntersectionObserver | null = null;
    try {
      heroObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            animateCounters();
            heroObserver?.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      if (statsEl) heroObserver.observe(statsEl);
    } catch {
      animateCounters();
    }

    return () => {
      window.clearTimeout(fallbackTimer);
      revealObserver?.disconnect();
      heroObserver?.disconnect();
    };
  }, []);
}

/** Scroll reveal + hero stat counters; hero hash normalization */
export function useHomeAnimations() {
  useHeroLandingHash();
  useRevealAndHeroStats();
}
