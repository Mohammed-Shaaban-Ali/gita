"use client";

import Image from "next/image";
import heroImage from "@/public/images/heroImage.png";
import Whatsapp from "./Whatsapp";
import Navbar from "@/components/shared/Navbar";
import { motion } from "framer-motion";

type Props = {};

function HeroSection({}: Props) {
  return (
    <section id="home" className="relative ">
      <Image
        src={heroImage}
        alt="heroImage"
        fill
        className="object-cover z-[-1]"
      />
      <section className="">
        {/* navbar */}
        <Navbar />
        {/* whatsapp  */}
        <Whatsapp />
        {/* hero content */}
        <section className="font-cairo flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 py-8 sm:py-12 md:py-0 md:h-[500px] text-white container px-4 sm:px-0">
          <div className="max-w-[630px] flex flex-col gap-4 sm:gap-5 md:gap-6 text-center md:text-right w-full md:w-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-40 font-extrabold"
            >
              السفر صار جيتا{" "}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-20 font-medium leading-loose"
            >
              منصة موحدة تجمع كل خدمات السفر في مكان واحد، بأسلوب أسرع وأسهل
              وأكثر تنظيمًا
            </motion.h2>
          </div>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="w-full  sm:max-w-[350px] md:min-w-[390px] h-[300px] sm:h-[350px] md:min-h-[390px] max-h-[390px] max-w-[390px]  bg-green-light/10 rounded-2xl md:rounded-3xl"
          ></motion.div>
        </section>
      </section>
    </section>
  );
}

export default HeroSection;
