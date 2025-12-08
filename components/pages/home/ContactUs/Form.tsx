import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/shared/CustomInput";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // محاكاة إرسال البيانات
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Data:", data);
    alert("تم إرسال النموذج بنجاح!");
    reset();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };
  return (
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
        {/* زر الإرسال */}
        <Button onClick={handleFormSubmit} disabled={isSubmitting} size="lg">
          {" "}
          {isSubmitting ? "جاري الإرسال..." : "إرسال"}
        </Button>
      </div>
    </motion.div>
  );
}

export default Form;
