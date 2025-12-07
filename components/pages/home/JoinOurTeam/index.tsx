"use client";
import { motion } from "framer-motion";
import JoinOurTeamImage from "@/public/images/JoinOurTeam.jpg";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
type Props = {};

function JoinOurTeam({}: Props) {
  return (
    <section id="careers" className="py-12 md:py-16 bg-bg-section">
      <div className="container mx-auto flex items-stretch flex-col lg:flex-row justify-between gap-8 lg:gap-10">
        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="order-2 lg:order-1 relative bg-green w-full lg:w-[420px] xl:w-[480px] h-auto min-h-[300px]  rounded-2xl overflow-hidden "
        >
          <Image
            src={JoinOurTeamImage}
            alt="JoinOurTeam"
            fill
            className="object-cover"
          />

          <div className="w-full  absolute bottom-3 px-4    ">
            <Button variant="default" size="lg" className="w-full h-full">
              عرض جميع الوظائف
              <ArrowUpRight className="w-4 h-4 -rotate-90" />
            </Button>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2 w-full lg:max-w-[700px] flex flex-col">
          {/* titles & description */}
          <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center lg:text-right"
            >
              انضم لفريقنا{" "}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray text-center lg:text-right leading-relaxed"
            >
              ما تضيع وقت و فرص أكتر ، شو مستني انضم لفريقنا الآن{" "}
            </motion.p>
          </div>

          {/* items */}
          <div className="flex flex-col gap-4  ">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="min-w-12 sm:min-w-14 h-12 sm:h-14  bg-[#E6F3F166] rounded-md flex items-center justify-center text-lg sm:text-xl md:text-[24px] font-bold text-green">
                  {index + 1}
                </div>
                <div className="w-full sm:flex-1 h-12 sm:h-14  px-3 sm:px-4 py-3 sm:py-0 bg-white rounded-md border border-gray-300 flex items-start sm:items-center justify-between gap-3 sm:gap-5">
                  <div className="flex flex-col gap-0 min-w-0">
                    <h4 className="text-xs sm:text-sm md:text-[14px] font-medium truncate">
                      مسمى العرض الوظيفي / الاعلان{" "}
                    </h4>
                    <p className="text-[10px] sm:text-xs md:text-[12px] text-gray-500">
                      متبقى يومين للتقديم{" "}
                    </p>
                  </div>

                  {/* icons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div
                      className=" h-9 px-2 text-green bg-[#E6F3F166] hover:bg-[#E6F3F1] transition-all duration-300
                     cursor-pointer rounded-md flex items-center gap-1 justify-center text-14"
                    >
                      التقديم الان
                      <ArrowUpRight className="w-4 h-4 -rotate-90" />{" "}
                    </div>
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

export default JoinOurTeam;
