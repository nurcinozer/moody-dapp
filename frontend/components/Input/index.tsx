import React, { InputHTMLAttributes, useMemo, useState } from "react";

type FormInputSize = "medium" | "large";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  $size?: FormInputSize;
  innerRef?: React.Ref<HTMLInputElement>;
}

export const FormInput: React.FC<FormInputProps> = ({
  $size = "medium",
  placeholder,
  type,
  innerRef,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const className = useMemo(() => {
    const base =
      "w-full text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-blue-jeans";
    const sizeClass = $size === "large" ? "h-16" : "h-10";
    const focusClass = focused ? "ring-2 ring-indigo-200" : "";
    const typeClass =
      type === "file"
        ? "cursor-pointer h-full"
        : "bg-white rounded-full border border-gray-300 dark:border-gray-500 focus:border-can-can focus:ring-2 focus:ring-can-can text-blue-jeans";
    return `${base} ${sizeClass} ${focusClass} ${typeClass}`;
  }, [$size, focused, type]);

  return (
    <input
      className={className}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      type={type}
      ref={innerRef}
      {...rest}
    />
  );
};
