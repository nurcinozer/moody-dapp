import React, { SelectHTMLAttributes, useMemo, useState } from "react";

type FormSelectSize = "medium" | "large";

export interface FormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  $size?: FormSelectSize;
  options: { value: string; label: string }[];
}

export const FormSelect: React.FC<FormSelectProps> = ({
  $size = "medium",
  placeholder,
  options,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const className = useMemo(() => {
    const base =
      "w-full bg-white rounded-full border border-gray-300 dark:border-gray-500 focus:border-can-can focus:ring-2 focus:ring-can-can text-base outline-none text-blue-jeans py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";
    const sizeClass = $size === "large" ? "h-16" : "h-10";
    const focusClass = focused ? "ring-2 ring-indigo-200" : "";
    return `${base} ${sizeClass} ${focusClass}`;
  }, [$size, focused]);

  return (
    <select
      className={className}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...rest}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
