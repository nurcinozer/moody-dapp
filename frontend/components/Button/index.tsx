import { useMemo } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonSize = "large" | "small";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "small",
  variant = "primary",
  onClick,
}) => {
  const className = useMemo(() => {
    const base =
      "inline-flex items-center border-0 focus:outline-none rounded-full mt-4 md:mt-0 text-base";
    const sizeClass =
      size === "large" ? "text-lg py-2 px-8" : "text-sm py-2 px-3";
    const variantClass =
      variant === "primary"
        ? "text-blue-jeans bg-can-can"
        : "text-can-can bg-transparent border border-can-can hover:bg-can-can hover:text-blue-jeans";
    return `${base} ${sizeClass} ${variantClass}`;
  }, [size, variant]);

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
