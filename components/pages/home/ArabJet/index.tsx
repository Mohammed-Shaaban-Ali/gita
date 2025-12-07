"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ArabJet({}: Props) {
  return (
    <section className="py-12 md:py-16 bg-bg-section">
      <div className="container flex  flex-col   gap-10 w-full ">
        <div className="flex flex-col gap-2 sm:gap-1 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-32 font-semibold text-center lg:text-right"
          >
            التسجيل في عرب جِت
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-20 text-gray text-center lg:text-right leading-snug"
          >
            سجل الآن مع اقوى نظام حجوزات وطيران B2B Arabjet{" "}
          </motion.p>
        </div>

        {/* form */}
        <div className="max-w-[670px] w-full h-[470px] bg-white/80 rounded-xl mx-auto"></div>
      </div>
    </section>
  );
}

export default ArabJet;
