import { useEffect } from "react";
import { useClerk, useUser } from "@clerk/react";
import { useNavigate } from "react-router-dom";

import {
  features,
  pricingPlans,
  testimonials,
} from "../assets/data";

import HeroSection from "../components/landing/HeroSection";
import { FeatureSection } from "../components/landing/FeatureSection";
import { PricingSection } from "../components/landing/PricingSection";
import { Testimonials } from "../components/landing/Testimonials";
import CTASection from "../components/landing/CTASection";
import { FooterSection } from "../components/landing/FooterSection";

const Landing = () => {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      // Already signed in → Dashboard
      navigate("/dashboard", { replace: true });
    } else {
      // Not signed in → Open Clerk Sign In
      openSignIn();
    }
  }, [isLoaded, isSignedIn, navigate, openSignIn]);

  // Don't show landing page while checking authentication
  return (
    <div className="bg-gray-50">
      <HeroSection
        openSignIn={openSignIn}
        openSignUp={openSignUp}
      />

      <FeatureSection features={features} />

      <PricingSection pricingPlans={pricingPlans} openSignUp={openSignUp}/>

      <Testimonials testimonials={testimonials} />

      <CTASection openSignUp={openSignUp}/>

      <FooterSection />
    </div>
  );
};

export default Landing;