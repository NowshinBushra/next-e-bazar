import Banner from "@/components/hompage/Banner";
import HeroSection from "@/components/hompage/HeroSection";
import OurProducts from "@/components/hompage/OurProducts";
import Features from "./features/page";
import DisplayFeatures from "@/components/hompage/DisplayFeatures";

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <HeroSection></HeroSection>
    <OurProducts></OurProducts>
    <DisplayFeatures></DisplayFeatures>
    </>
  );
}
