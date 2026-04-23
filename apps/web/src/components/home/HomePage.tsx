"use client";

import AppHeader from "@/components/AppHeader";
import { useHomeAnimations } from "@/hooks/use-home-animations";
import HomeAboutSection from "./sections/HomeAboutSection";
import HomeClientsSection from "./sections/HomeClientsSection";
import HomeCtaSection from "./sections/HomeCtaSection";
import HomeFooter from "./sections/HomeFooter";
import HomeHeroSection from "./sections/HomeHeroSection";
import HomeProcessSection from "./sections/HomeProcessSection";
import HomeServicesSection from "./sections/HomeServicesSection";
import HomeWhySection from "./sections/HomeWhySection";

export default function HomePage() {
  useHomeAnimations();

  return (
    <>
      <AppHeader />
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeServicesSection />
      <HomeWhySection />
      <HomeProcessSection />
      <HomeClientsSection />
      <HomeCtaSection />
      <HomeFooter />
    </>
  );
}
