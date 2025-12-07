"use client";
import { motion } from "framer-motion";
import React from "react";

// images

import qrCodeImage from "@/public/images/qrcode.png";
import appleStoreImage from "@/public/images/AppleStoe.png";
import googlePlayImage from "@/public/images/googlePlay.png";
import mobileAppImage from "@/public/images/mobileApp.png";
import Image from "next/image";

type Props = {};

function App({}: Props) {
  return (
    <section id="app" className="py-12 md:py-16 container">
      {/* titles & description */}
      <div className="flex flex-col gap-2 sm:gap-1 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-32 font-semibold text-center lg:text-right"
        >
          تطبيق الذهبية العالمية للسياحة و السفر
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-20 text-gray text-center lg:text-right leading-snug"
        >
          قم بتحميل تطبيقنا و استمتع بأفضل العروض و الرحلات
        </motion.p>
      </div>

      {/* images */}
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-10 max-w-[1100px] mx-auto mt-8 
      "
      >
        {/* qr code */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className=" bg-white/80 h-fit rounded-xl w-full max-w-[450px] flex items-center flex-col justify-start p-5 pt-0 "
        >
          <div className="w-[260px] h-[260px] ">
            <Image
              src={qrCodeImage}
              alt="qr-code"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <h5 className="text-30 font-medium  -mt-2">لتحميل التطبيق</h5>
          <div className="flex items-center gap-5 w-full mt-4">
            <div className="w-full cursor-pointer hover:scale-105 transition-all duration-300">
              <Image
                src={googlePlayImage}
                alt="google-play"
                width={600}
                height={600}
                className="object-contain w-full"
              />
            </div>
            <div className="w-full  cursor-pointer hover:scale-105 transition-all duration-300">
              <Image
                src={appleStoreImage}
                alt="apple-store"
                width={600}
                height={600}
                className="object-contain w-full"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full overflow-hidden relative h-[440px]"
        >
          <Image
            src={mobileAppImage}
            alt="mobile-app"
            fill
            className="object-contain w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default App;
