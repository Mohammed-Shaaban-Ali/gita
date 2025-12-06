"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import companyProfileImage from "@/public/images/CompanyProfileImage.png";
import pdfIcon from "@/public/icons/pdf.svg";
import eyeIcon from "@/public/icons/Eye.svg";
import downloadIcon from "@/public/icons/file-download.svg";
type Props = {};

function CompanyProfile({}: Props) {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-1 lg:col-span-2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full relative order-2 lg:order-1"
        >
          <div className="w-3/5 h-full bg-green rounded-tl-[80px] sm:rounded-tl-[100px] lg:rounded-tl-[120px] rounded-tr-2xl lg:rounded-tr-3xl absolute top-0 right-0 z-0"></div>
          <div className="w-full h-[90%] rounded-tr-[120px] sm:rounded-tr-[150px] lg:rounded-tr-[180px] rounded-tl-2xl lg:rounded-tl-3xl rounded-b-2xl lg:rounded-b-3xl z-10 absolute bottom-0 right-0 overflow-hidden">
            <Image
              src={companyProfileImage}
              alt="companyProfile"
              fill
              className="w-full h-full object-cover object-center scale-x-[-1]"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="col-span-1 lg:col-span-3 w-full order-1 lg:order-2">
          {/* titles & description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-2 sm:gap-1"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-32 font-semibold text-center lg:text-right"
            >
              بروفايل شركتنا
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-20 text-gray text-center lg:text-right"
            >
              قم بتحميل بوفايلات الشركة الخاصة بنا لمعرفة المزيد عنا
            </motion.p>
          </motion.div>

          {/* items */}
          <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
            {Array.from({ length: 3 }).map((_, index) => (
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
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="min-w-12 sm:min-w-14 md:min-w-16 h-12 sm:h-14 md:h-16 bg-[#E6F3F166] rounded-md flex items-center justify-center text-lg sm:text-xl md:text-[24px] font-bold text-green">
                  {index + 1}
                </div>
                <div className="w-full sm:flex-1 h-auto sm:h-16 px-3 sm:px-4 py-3 sm:py-0 bg-white rounded-md border border-gray-300 flex items-start sm:items-center justify-between gap-3 sm:gap-5">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Image
                      src={pdfIcon}
                      alt="pdf"
                      width={24}
                      height={24}
                      className="min-w-6 h-6 shrink-0"
                    />
                    <div className="flex flex-col gap-0 min-w-0">
                      <h4 className="text-xs sm:text-sm md:text-[14px] font-medium truncate">
                        ملف بروفايل الشركة.pdf
                      </h4>
                      <p className="text-[10px] sm:text-xs md:text-[12px] text-gray-500">
                        1.3 ميجا
                      </p>
                    </div>
                  </div>

                  {/* icons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#E6F3F166] hover:bg-[#E6F3F1] transition-all duration-300 cursor-pointer rounded-md flex items-center justify-center"
                    >
                      <Image
                        src={eyeIcon}
                        alt="eye"
                        width={18}
                        height={18}
                        className="min-w-4 h-4 sm:min-w-5 sm:h-5"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#E6F3F166] hover:bg-[#E6F3F1] transition-all duration-300 cursor-pointer rounded-md flex items-center justify-center"
                    >
                      <Image
                        src={downloadIcon}
                        alt="download"
                        width={18}
                        height={18}
                        className="min-w-4 h-4 sm:min-w-5 sm:h-5"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyProfile;
