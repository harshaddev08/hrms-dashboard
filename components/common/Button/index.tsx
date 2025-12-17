import { cn } from "@/utils/cn";
import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "xs" | "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, size = "md", loading = false, disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          // 🔹 Base styles
          "inline-flex items-center justify-center font-medium bg-primary-500 text-white-500",
          "w-full gap-[10px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",

          // 🔹 Size variants
          {
            // lg
            "h-14 p-5 rounded-[10px] text-lg": size === "lg",
            // md
            "h-12.5 p-5 rounded-[10px] text-base": size === "md",
            // sm
            "h-10 p-2.5 rounded-[10px] text-sm": size === "sm",
            // xs
            "h-8 p-2 rounded-[8px] text-xs": size === "xs",

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
