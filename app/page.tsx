import CompanyProfile from "@/components/pages/home/CompanyProfile";
import HeroSection from "@/components/pages/home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyProfile />
    </main>
  );
}
