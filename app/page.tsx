import App from "@/components/pages/home/App";
import AboutUs from "@/components/pages/home/AboutUs";
import ArabJet from "@/components/pages/home/ArabJet";
import CompanyProfile from "@/components/pages/home/CompanyProfile";
import HeroSection from "@/components/pages/home/HeroSection";
import Location from "@/components/pages/home/Location";
import JoinOurTeam from "@/components/pages/home/JoinOurTeam";
import ContactUs from "@/components/pages/home/ContactUs";
import Franchise from "@/components/pages/home/Franchise";
import Footer from "@/components/shared/Footer";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyProfile />
      <AboutUs />
      <App />
      <ArabJet />
      {/* <Location /> */}
      <JoinOurTeam />
      <ContactUs />
      <Franchise />
      <Footer />
    </main>
  );
}
