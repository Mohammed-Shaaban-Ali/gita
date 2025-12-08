"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
type Props = {};

function Franchise({}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      // Unmute video when entering fullscreen
      if (videoRef.current && document.fullscreenElement) {
        videoRef.current.muted = false;
      }
      // Mute video when exiting fullscreen
      if (videoRef.current && !document.fullscreenElement) {
        videoRef.current.muted = true;
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  const toggleFullscreen = async () => {
    const element = containerRef.current;
    if (!element) return;

    try {
      if (!document.fullscreenElement) {
        await element.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error);
    }
  };

  return (
    <section id="franchise" className="py-12 md:py-16 bg-bg-section">
      <div className="container mx-auto flex  flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10">
        {/* video video link "/pdfs/Franchise.mp4" */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="order-2 lg:order-1 border-4 border-primary relative  w-full lg:w-[420px] xl:w-[480px] h-auto rounded-2xl overflow-hidden cursor-pointer group"
          onClick={toggleFullscreen}
        >
          <video
            ref={videoRef}
            src="/pdfs/Franchise.mp4"
            autoPlay
            muted
            loop
            controls={isFullscreen}
            className="w-full h-full object-cover"
          >
            <source src="/pdfs/Franchise.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen();
            }}
            className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Toggle fullscreen"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
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
