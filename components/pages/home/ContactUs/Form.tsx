import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/shared/CustomInput";
import { CheckCircle2, X } from "lucide-react";

// تعريف schema باستخدام Zod
const formSchema = z.object({
  fullName: z.string().min(2, "الاسم يجب أن يكون حرفين على الأقل"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  subject: z.string().min(2, "الموضوع يجب أن يكون حرفين على الأقل"),
  message: z.string().min(2, "الرسالة يجب أن يكون حرفين على الأقل"),
});

type FormData = z.infer<typeof formSchema>;
type Props = {};

function Form({}: Props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const SendObject = {
      name: data.fullName,
      email: data.email,
      phone: "null",
      subject: data.subject,
      message: data.message,
    };
    try {
      setError(null);
      const response = await fetch("https://roles.gita.sa/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SendObject),
      });

      if (!response.ok) {
        throw new Error("فشل إرسال النموذج. يرجى المحاولة مرة أخرى.");
      }

      // إعادة تعيين النموذج بعد النجاح
      reset({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });

      // إظهار رسالة النجاح
      setShowSuccess(true);

      // إخفاء الرسالة بعد 5 ثوانٍ
      setTimeout(() => {
        setShowSuccess(false);
        reset({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "حدث خطأ. يرجى المحاولة مرة أخرى."
      );
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-[670px] w-full bg-white/80 rounded-2xl shadow-lg mx-auto p-8 "
      >
        <div className="flex flex-col gap-5">
          {/* حقل الاسم */}
          <CustomInput
            label="الاسم"
            name="fullName"
            placeholder="ادخل الاسم كامل"
            type="text"
            register={register}
            errors={errors}
          />

          {/* حقل البريد الإلكتروني */}
          <CustomInput
            label="البريد الإلكتروني"
            name="email"
            placeholder="ادخل البريد الإلكتروني"
            type="email"
            register={register}
            errors={errors}
          />
          {/* حقل الموضوع */}
          <CustomInput
            label="الموضوع"
            name="subject"
            placeholder="ادخل الموضوع"
            type="text"
            register={register}
            errors={errors}
          />
          {/* حقل الرسالة */}
          <CustomInput
            label="الرسالة"
            name="message"
            placeholder="ادخل الرسالة"
            type="textarea"
            register={register}
            errors={errors}
          />

          {/* رسالة الخطأ */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-right"
            >
              {error}
            </motion.div>
          )}

          {/* زر الإرسال */}
          <Button onClick={handleFormSubmit} disabled={isSubmitting} size="lg">
            {isSubmitting ? "جاري الإرسال..." : "إرسال"}
          </Button>
        </div>
      </motion.div>

      {/* رسالة النجاح مع أنيميشن */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => {
              setShowSuccess(false);
              reset({
                fullName: "",
                email: "",
                subject: "",
                message: "",
              });
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setShowSuccess(false);
                  reset({
                    fullName: "",
                    email: "",
                    subject: "",
                    message: "",
                  });
                }}
                className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
                className="flex justify-center mb-4"
              >
                <div className="bg-green-100 rounded-full p-4">
                  <CheckCircle2 className="text-green-600" size={48} />
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-center text-gray-800 mb-2"
              >
                تم الإرسال بنجاح!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center text-gray-600 text-lg"
              >
                شكراً لك! سنتواصل معك قريباً.
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="mt-6 h-1 bg-green-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Form;
