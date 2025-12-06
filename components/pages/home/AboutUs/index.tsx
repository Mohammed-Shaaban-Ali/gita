"use client";

import React from "react";
import { motion } from "framer-motion";
import aboutusImage from "@/public/images/aboutus.png";
import airplaneCircleIcon from "@/public/icons/airplaneCircle.svg";
import airplaneIcon from "@/public/icons/airplane.svg";
import { OrbitingCircles } from "./orbiting-circles";
import Image from "next/image";
type Props = {};

function AboutUs({}: Props) {
  return (
    <section className="py-12 md:py-16 bg-[#E9F1F152]">
      <div className="container flex items-center flex-col lg:flex-row justify-between lg:gap-10 gap-24  ">
        <div className="w-full max-w-[800px] lg:max-w-[600px]">
          {/* titles & description */}
          <div className="flex flex-col gap-2 sm:gap-1 ">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-32 font-semibold text-center lg:text-right"
            >
              من نحن{" "}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-20 text-gray text-center lg:text-right leading-snug"
            >
              تطبيق الذهبية العالمية للسياحة و السفر، حيث يمكنك أن تولد مثل هذا
              النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
              يولدها التطبيق.
            </motion.p>
          </div>

          {/* items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
                className="flex gap-2 bg-white rounded-xl p-3 pb-4 flex-col"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                  }}
                  className="bg-[#E9F5EE] rounded-full w-14 h-14"
                ></motion.div>
                <h4 className="text-18 font-semibold px-1">رؤيتنا</h4>
                <ul className="mt-1 list-inside space-y-2.5">
                  {[
                    "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.",
                    "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.",
                    "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.",
                  ].map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.1 + itemIndex * 0.05,
                      }}
                      className="text-14 text-black leading-tight flex items-start gap-2"
                    >
                      <span className="text-18 text-black leading-tight inline-block w-2 h-2">
                        •
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="hidden sm:block relative bg-green sm:w-[420px] sm:h-[420px] w-full h-full rounded-full"
        >
          <div>
            <Image
              src={airplaneIcon}
              alt="airplaneIcon"
              width={160}
              height={160}
              className="object-contain absolute -top-4 left-6 z-10 -rotate-2"
            />
          </div>
          <div>
            <Image
              src={aboutusImage}
              alt="aboutus"
              width={420}
              height={420}
              className="object-contain absolute top-0 left-0"
            />
          </div>
          {/* Middle orbit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <OrbitingCircles iconSize={112} radius={210} duration={70}>
              <ColoredCircle />
              <BorderedLogo src={airplaneCircleIcon} alt="airplaneCircle" />
            </OrbitingCircles>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
const BorderedLogo = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="flex items-center justify-center aspect-square rounded-full">
      <Image
        src={src}
        alt={alt}
        width={48}
        height={48}
        className="object-contain w-10 h-10"
      />
    </div>
  );
};

const ColoredCircle = () => {
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-[#C19617] rounded-full"></div>
  );
};
