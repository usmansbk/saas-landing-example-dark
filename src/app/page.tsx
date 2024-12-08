import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <Banner />
      <NavBar />
      <Hero />
      <LogoTicker />
      <Features />
    </>
  );
}
