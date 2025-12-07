import HeroSection from "@/components/pages/home/HeroSection";
import CompanyProfile from "@/components/pages/home/CompanyProfile";
// import App from "@/components/pages/home/App";
// import AboutUs from "@/components/pages/home/AboutUs";
// import ArabJet from "@/components/pages/home/ArabJet";
// import Location from "@/components/pages/home/Location";
// import JoinOurTeam from "@/components/pages/home/JoinOurTeam";
// import ContactUs from "@/components/pages/home/ContactUs";
// import Franchise from "@/components/pages/home/Franchise";
// import Footer from "@/components/shared/Footer";

import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("@/components/pages/home/AboutUs"));
const App = dynamic(() => import("@/components/pages/home/App"));
const ArabJet = dynamic(() => import("@/components/pages/home/ArabJet"));
const Location = dynamic(() => import("@/components/pages/home/Location"));
const JoinOurTeam = dynamic(
  () => import("@/components/pages/home/JoinOurTeam")
);
const ContactUs = dynamic(() => import("@/components/pages/home/ContactUs"));
const Franchise = dynamic(() => import("@/components/pages/home/Franchise"));
const Footer = dynamic(() => import("@/components/shared/Footer"));

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyProfile />
      <AboutUs />
      <App />
      <ArabJet />
      <Location />
      <JoinOurTeam />
      <ContactUs />
      <Franchise />
      <Footer />
    </main>
  );
}
