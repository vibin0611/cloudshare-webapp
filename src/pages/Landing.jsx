import { useClerk } from "@clerk/react";

import { features, pricingPlans, testimonials } from "../assets/data";

import HeroSection from "../components/landing/HeroSection";
import { FeatureSection } from "../components/landing/FeatureSection";
import { PricingSection } from "../components/landing/PricingSection";
import { Testimonials } from "../components/landing/Testimonials";
import CTASection from "../components/landing/CTASection";
import { FooterSection } from "../components/landing/FooterSection";
const Landing = () => {
  const { openSignIn, openSignUp } = useClerk();

  return (
    <div className="bg-gray-50">

      <HeroSection
        openSignIn={openSignIn}
        openSignUp={openSignUp}
      />

      <FeatureSection features={features} />

      <PricingSection pricingPlans={pricingPlans} />

      <Testimonials testimonials={testimonials} />
      
      <CTASection/>
       
       <FooterSection/>
    </div>
  );
};

export default Landing;