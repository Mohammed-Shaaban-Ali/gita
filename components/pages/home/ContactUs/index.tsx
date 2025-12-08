"use client";

import { motion } from "framer-motion";
import Form from "./Form";
type Props = {};

function ContactUs({}: Props) {
  return (
    <section id="contact" className="py-12 md:py-16 ">
      <div className="container flex  flex-col   gap-10 w-full ">
        <div className="flex flex-col gap-2 sm:gap-1 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-32 font-semibold text-center lg:text-right"
          >
            تواصل معنا{" "}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-20 text-gray text-center lg:text-right leading-snug"
          >
            يمكنك التواصل معنا في أي وقت تريد ، فريق الدعم الفني الخاص بنا
            متواجد لأجلك على مدار 24 س
          </motion.p>
        </div>

        {/* form */}
        <Form />
      </div>
    </section>
  );
}

export default ContactUs;
