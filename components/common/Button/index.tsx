import { cn } from "@/utils/cn";
import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          // 🔹 Base styles
          "inline-flex items-center justify-center font-medium transition-colors",
          "w-full h-[56px] gap-[10px] px-[20px] py-[20px] rounded-[10px] opacity-100",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",

          // 🔹 Size overrides (optional – can override fixed design if needed)
          {
            "text-sm": size === "sm",
            "text-base": size === "md",
            "text-lg": size === "lg",

            // 🔹 Variants
            "bg-primary-600 text-white-500 hover:bg-primary-700":
              variant === "primary",
            "bg-secondary-600 text-white-500 hover:bg-secondary-700":
              variant === "secondary",
            "border border-gray-500 text-dark-500 hover:bg-gray-100":
              variant === "outline",
            "bg-tertiary-600 text-white-500 hover:bg-tertiary-700 focus:ring-tertiary-600":
              variant === "danger",

            // 🔹 Disabled / Loading
            "opacity-60 cursor-not-allowed": disabled || loading,
          },

          className
        )}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";
