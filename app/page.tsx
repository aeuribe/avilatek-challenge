import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import Integrations from "@/components/sections/Integrations/Integrations";
import Metrics from "@/components/sections/Metrics/Metrics";
import Features from "@/components/sections/Features/Features";
import Testimonial from "@/components/sections/Testimonial/Testimonial";
import PrimaryCTA from "@/components/sections/PrimaryCTA/PrimaryCTA";
import SecondaryCTA from "@/components/sections/SecondaryCTA/SecondaryCTA";
import FAQSection from "@/components/sections/FAQ/FAQSection";
import Footer from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Integrations/>
      <Metrics/>
      <Features/>
      <Testimonial/>
      <PrimaryCTA/>
      <FAQSection/>
      <SecondaryCTA/>
      <Footer/>
    </div>
  );
}
