import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import React from "react";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden font-poppins">
      <HeroSection />
      <PlansSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
