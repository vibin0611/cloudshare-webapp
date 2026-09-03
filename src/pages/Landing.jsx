import { CTASection } from "../components/landing/CTASection";
import { FeatureSection } from "../components/landing/FeatureSection";
import { FooterSectio } from "../components/landing/FooterSectio";
import HeroSection from "../components/landing/HeroSection";
import { PricingSection } from "../components/landing/PricingSection";
import { Testimonials } from "../components/landing/Testimonials";

const Landing=()=>{
    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            {/*Hero section*/}
            <HeroSection/>
            {/*Feature section*/}
            <FeatureSection/>
            {/*Pricing section*/}
            <PricingSection/>
            {/*Testimonials section*/}
            <Testimonials/>
            {/*CTA section*/}
            <CTASection/>
            {/*Footer Section*/}
            <FooterSectio/>

        </div>
    )
}
export default Landing;