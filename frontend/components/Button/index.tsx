import { useMemo } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonSize = "large" | "small";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "small",
  variant = "primary",
  onClick,
  disabled,
}) => {
  const className = useMemo(() => {
    const base =
      "inline-flex items-center justify-center text-center border-0 focus:outline-none rounded-full mt-4 md:mt-0 text-base h-12";
    const sizeClass =
      size === "large" ? "text-lg py-2 px-8" : "text-sm py-2 px-3";
    const variantClass =
      variant === "primary"
        ? "text-blue-jeans bg-can-can"
        : "text-can-can bg-transparent border border-can-can hover:bg-can-can hover:text-blue-jeans";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
    return `${base} ${sizeClass} ${variantClass} ${disabledClass}`;
  }, [size, variant, disabled]);

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
