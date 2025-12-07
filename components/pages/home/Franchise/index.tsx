"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type Props = {};

function Franchise({}: Props) {
  return (
    <section id="franchise" className="py-12 md:py-16 bg-bg-section">
      <div className="container mx-auto flex  flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10">
        {/* video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="order-2 lg:order-1 border-4 border-primary relative  w-full lg:w-[420px] xl:w-[480px] h-auto min-h-[450px]  rounded-2xl overflow-hidden "
        ></motion.div>

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
              إدارة الفرانشايز{" "}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray text-center lg:text-right leading-relaxed"
            >
              تعرف على فرص الامتياز التجاري، ومنح العلامة التجارية.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-2.5 max-w-[450px]"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="https://franchise.gita.sa/">
                <Button variant="default" size="lg" className="w-full">
                  إذهب إلى موقعنا{" "}
                  <ArrowUpRight className="w-4 h-4 -rotate-90" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="https://franchise.gita.sa/">
                <Button variant="outline" size="lg" className="w-full">
                  الدليل الإرشادي{" "}
                  <ArrowUpRight className="w-4 h-4 -rotate-90" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Franchise;
