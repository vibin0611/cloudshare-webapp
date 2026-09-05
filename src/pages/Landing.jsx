import { features, pricingPlans } from "../assets/data";
import { FeatureSection } from "../components/landing/FeatureSection";
import HeroSection from "../components/landing/HeroSection";
import { PricingSection } from "../components/landing/PricingSection";
import { Testimonials } from "../components/landing/Testimonials";
const Landing=()=>{
    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            {/*Hero section*/}
            <HeroSection/>
            <FeatureSection features={features}/>
            <PricingSection pricingPlans={pricingPlans}/>
            <Testimonials/>
        </div>
    )
}
export default Landing;