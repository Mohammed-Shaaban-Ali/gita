"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import locationIcon from "@/public/icons/location.svg";
type Props = {};

const locations = [
  {
    id: 1,
    name: "فرع المدينة المنوّرة  - حي الإسكان - طريق القصيم",
    link: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3421.5239632861603!2d41.03605948486308!3d30.955857181559992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDU3JzIxLjEiTiA0McKwMDInMDEuOSJF!5e0!3m2!1sar!2seg!4v1765101279118!5m2!1sar!2seg",
  },
  {
    id: 2,
    name: "فرع الرياض - حي نمار - طريق ديراب",
    link: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3421.5239632861603!2d41.03605948486308!3d30.955857181559992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDU3JzIxLjEiTiA0McKwMDInMDEuOSJF!5e0!3m2!1sar!2seg!4v1765101279118!5m2!1sar!2seg",
  },
  {
    id: 3,
    name: "فرع عرعر - حي الناصرية",
    link: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3421.5239632861603!2d41.03605948486308!3d30.955857181559992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDU3JzIxLjEiTiA0McKwMDInMDEuOSJF!5e0!3m2!1sar!2seg!4v1765101279118!5m2!1sar!2seg",
  },
];

function Location({}: Props) {
  const [activeLocation, setActiveLocation] = useState<number>(0);
  const [shouldLoadMap, setShouldLoadMap] = useState<boolean>(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const activeLocationData = locations[activeLocation];

  // Lazy load map when container comes into view or when user clicks a location
  useEffect(() => {
    if (shouldLoadMap) return; // Already loaded

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadMap(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1, // Load when 10% of the container is visible
        rootMargin: "50px", // Start loading 50px before it comes into view
      }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadMap]);

  // Load map immediately when user clicks on a location
  const handleLocationClick = (index: number) => {
    setActiveLocation(index);
    setShouldLoadMap(true);
  };

  return (
    <section id="branches" className="py-12 md:py-16 ">
      <div className="container mx-auto flex items-stretch flex-col lg:flex-row justify-between gap-8 lg:gap-10">
        <div className="w-full lg:max-w-[700px] flex flex-col">
          {/* titles & description */}
          <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center lg:text-right"
            >
              مواقع فروعنا{" "}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray text-center lg:text-right leading-relaxed"
            >
              تعريف على مواقع فروع شركتنا ، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </motion.p>
          </div>

          {/* items */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-5 flex-1">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
                onClick={() => handleLocationClick(index)}
                className={`flex bg-green-light rounded-lg p-3 sm:p-4 min-h-[64px] sm:min-h-[80px] items-center gap-2 sm:gap-2.5 cursor-pointer transition-all ${
                  activeLocation === index
                    ? "ring-2 ring-green shadow-lg"
                    : "hover:bg-green-light/80"
                }`}
              >
                <Image
                  src={locationIcon}
                  alt="location"
                  width={40}
                  height={40}
                  className="object-contain w-8 h-8 sm:w-10 sm:h-10 shrink-0"
                />
                <div className="w-px h-2/3 bg-gray/50 shrink-0"></div>
                <h4 className="text-20 font-medium font-cairo ">
                  {location.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* map */}
        <motion.div
          ref={mapContainerRef}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative bg-green w-full lg:w-[420px] xl:w-[480px] h-[300px] sm:h-[400px] lg:h-[420px] xl:h-[480px] rounded-lg overflow-hidden shrink-0"
        >
          {shouldLoadMap && activeLocationData && (
            <iframe
              title="map-location"
              src={activeLocationData.link}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0"
            />
          )}
          {!shouldLoadMap && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-lg">جاري تحميل الخريطة...</div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Location;
