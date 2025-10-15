import AmazingFeatures from "@/components/home/AmazingFeatures";
import ExperienceBoost from "@/components/home/ExperienceBoost";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import Trustedby from "@/components/home/Trustedby";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero/>
      <Trustedby/>
      <AmazingFeatures/>
      <HowItWorks/>
      <WhyChooseUs/>
      <Pricing/>
      <Testimonials/>
      <Faq/>
      <ExperienceBoost/>
    </>
  );
}
