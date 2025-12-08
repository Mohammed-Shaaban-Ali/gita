import React from "react";

type Props = {};

const CustomInput = ({
  label,
  register,
  errors,
  name,
  placeholder,
  type,
}: {
  label: string;
  register: any;
  errors: any;
  name: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-lg font-semibold text-gray-800 text-right"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          {...register(name)}
          placeholder={placeholder}
          className={`bg-gray-50! h-32 w-full px-4 py-3 border rounded-md text-right focus:outline-none focus:ring-2 transition-all ${
            errors[name]
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-primary focus:border-primary"
          }`}
        />
      ) : (
        <input
          {...register(name)}
          type={type}
          id={name}
          placeholder={placeholder}
          className={`bg-gray-50! w-full px-4 py-3 border rounded-md text-right focus:outline-none focus:ring-2 transition-all ${
            errors[name]
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-primary focus:border-primary"
          }`}
        />
      )}
      {errors[name] && (
        <p className="text-red-500 text-sm text-right">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
