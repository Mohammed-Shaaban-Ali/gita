"use client";

import React from "react";
import { motion } from "framer-motion";
import aboutusImage from "@/public/images/aboutus.png";
import airplaneCircleIcon from "@/public/icons/airplaneCircle.svg";
import airplaneIcon from "@/public/icons/airplane.svg";
import { OrbitingCircles } from "./orbiting-circles";
import Image from "next/image";

import Ourvision from "@/public/icons/Ourvision.svg";
import Ourvalues from "@/public/icons/Ourvalues.svg";
import Ourmessage from "@/public/icons/Ourmessage.svg";

type Props = {};

const visionText =
  'أن تكون "الذهبية العالمية GITA" الخيار الوطني والإقليمي الأول في قطاع السفر والسياحة، والوجهة الموثوقة للعملاء والشركاء عبر منظومة تقدم قيمة عالية وتجربة سفر متميزة.';

const missionText =
  'تلتزم "الذهبية العالمية GITA" بتقديم حلول سفر وسياحة عالية الجودة ترتكز على الدقة والاحترافية، عبر توفير خيارات متنوعة وخدمات موثوقة تسهل رحلات العملاء وتمنحهم تجربة مريحة وآمنة، وتعمل على توظيف التقنيات الحديثة وتطوير خدمات مبتكرة ترتقي بجودة الحياة، وتدعم مستهدفات رؤية السعودية 2030 في تعزيز السياحة وتمكين التحوّل الرقمي ورفع كفاءة واستدامة قطاع السفر.';

const values = [
  {
    title: "الاحترافية والموثوقية",
    description:
      "تُدار جميع العمليات وفق أعلى معايير الجودة والشفافية لضمان تقديم خدمة متناسقة وموثوقة.",
  },
  {
    title: "رضا العملاء",
    description:
      "يُحرص على تلبية احتياجات العملاء وتوقعاتهم مع تقديم تجربة سفر مصممة لتجاوز مستوى الرضا المتوقع.",
  },
  {
    title: "الابتكار التقني",
    description:
      "تعتمد أنظمة وتقنيات حديثة في إدارة الحجوزات، والتقارير، وخدمة العملاء، بما يضمن تحسين الكفاءة التشغيلية ورفع جودة الأداء.",
  },
  {
    title: "المرونة والتخصيص",
    description:
      "تُقدّم حلول سفر مخصصة تلائم نوع العميل واحتياجاته المختلفة بطريقة مرنة وديناميكية.",
  },
  {
    title: "التجربة الملهمة",
    description:
      "يُعمل على جعل كل خدمة تجربة ذات قيمة، قادرة على إلهام العميل وتحقيق طموحاته.",
  },
  {
    title: "الخبرة والمعرفة",
    description:
      "يُعتمد على فريق عمل متمرس يمتلك الخبرة والمعرفة اللازمة لتقديم التوصيات والحلول الأكثر ملاءمة وفاعلية.",
  },
];

const items = [
  {
    icon: Ourvision,
    title: "رؤيتنا",
    description: visionText,
  },
  {
    icon: Ourmessage,
    title: "رسالتنا",
    description: missionText,
  },
  {
    icon: Ourvalues,
    title: "قيمنا",
    description: "",
    values: values,
  },
];
function AboutUs({}: Props) {
  return (
    <section id="about" className="py-12 md:py-16 bg-bg-section">
      <div className="container flex items-center flex-col lg:flex-row justify-between lg:gap-10 gap-24  ">
        <div className="w-full max-w-[720px] ">
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
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 mt-8">
            {items.map((item, index) => (
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
                className={`flex gap-2 bg-white/80 rounded-xl p-3 pb-4 flex-col ${
                  index === 2
                    ? "sm:col-span-5 col-span-1"
                    : index === 1
                    ? "sm:col-span-3 col-span-1"
                    : "sm:col-span-2 col-span-1"
                }`}
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
                  className="bg-[#E9F5EE] rounded-full w-14 h-14 flex items-center justify-center"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </motion.div>
                <h4 className="text-18 font-semibold px-1">{item.title}</h4>
                {item.values ? (
                  <ul className="mt-1 list-inside space-y-2.5">
                    {item.values.map((value, valueIndex) => (
                      <motion.li
                        key={valueIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + index * 0.1 + valueIndex * 0.05,
                        }}
                        className="text-14 text-black leading-tight flex items-start gap-2"
                      >
                        <span className="text-18 text-black leading-tight inline-block w-2 h-2 mt-1">
                          •
                        </span>
                        <div>
                          <span className="font-semibold">{value.title}:</span>{" "}
                          {value.description}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.1,
                    }}
                    className="text-14 text-black line-clamp-5 mt-1"
                  >
                    {item.description}
                  </motion.p>
                )}
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
