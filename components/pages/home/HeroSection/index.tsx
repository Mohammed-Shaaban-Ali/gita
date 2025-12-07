import Image from "next/image";
import heroImage from "@/public/images/heroImage.png";
import Whatsapp from "./Whatsapp";
import Navbar from "@/components/shared/Navbar";
import HeroContent from "./HeroContent";

type Props = {};

function HeroSection({}: Props) {
  return (
    <section id="home" className="relative ">
      <Image
        src={heroImage}
        alt="heroImage"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover z-[-1]"
      />
      <section className="">
        {/* navbar */}
        <Navbar />
        {/* whatsapp  */}
        <Whatsapp />
        {/* hero content */}
        <HeroContent />
      </section>
    </section>
  );
}

export default HeroSection;
