import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import NavBar from "@/components/NavBar";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <>
      <Banner />
      <NavBar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
    </>
  );
}
