"use client";
import { motion } from "framer-motion";
import React from "react";

// images

import qrCodeGoogleImage from "@/public/images/qrCodeGoogleImage.jpg";
import qrCodeAppleImage from "@/public/images/qrCodeAppleImage.jpg";
import appleStoreImage from "@/public/images/AppleStoe.png";
import googlePlayImage from "@/public/images/googlePlay.png";
import mobileAppImage from "@/public/images/mobileApp.png";
import Image from "next/image";
import Link from "next/link";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center  mt-8">
        {/* Left QR code - Google Play */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/80 col-span-1 h-fit rounded-xl w-full flex items-center flex-col justify-start p-5 pt-5"
        >
          <div className="w-[200px] h-[200px] py-2.5">
            <Image
              src={qrCodeGoogleImage}
              alt="qr-code-google"
              width={300}
              height={300}
              className="object-contain max-w-[200px] max-h-[200px]"
            />
          </div>
          <h4 className="text-24 font-medium my-4">لتحميل التطبيق</h4>
          <Link
            href="https://play.google.com/store/apps/details?id=com.eficta.flights"
            target="_blank"
            className="w-full cursor-pointer hover:scale-105 transition-all duration-300 max-w-[250px]"
          >
            <Image
              src={googlePlayImage}
              alt="google-play"
              width={600}
              height={600}
              className="object-contain w-full "
            />
          </Link>
        </motion.div>

        {/* Center - Phone mockups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:block col-span-1 w-full overflow-hidden relative h-[420px] shrink-0"
        >
          <Image
            src={mobileAppImage}
            alt="mobile-app"
            fill
            className="object-contain w-full h-full"
          />
        </motion.div>

        {/* Right QR code - Apple Store */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-1 bg-white/80 h-fit rounded-xl w-full flex items-center flex-col justify-start p-5 "
        >
          <div className="w-[200px] h-[200px] py-2.5">
            <Image
              src={qrCodeAppleImage}
              alt="qr-code-apple"
              width={300}
              height={300}
              className="object-contain max-w-[200px] max-h-[200px]"
            />
          </div>
          <h4 className="text-24 font-medium my-4">لتحميل التطبيق</h4>
          <Link
            href="http://apps.apple.com/sa/app/gita-ota/id6741498793"
            target="_blank"
            className="w-full cursor-pointer hover:scale-105 transition-all duration-300 max-w-[250px]"
          >
            <Image
              src={appleStoreImage}
              alt="apple-store"
              width={600}
              height={600}
              className="object-contain w-full"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default App;
