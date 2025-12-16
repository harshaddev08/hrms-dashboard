import React from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h7"
  | "body1"
  | "body2"
  | "caption"
  | "label";

interface ITypographyProps {
  variant: TypographyVariant;
  weight?: "regular" | "bold";
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const typographyStyles: Record<
  TypographyVariant,
  { regular: string; bold: string }
> = {
  h1: {
    regular: "font-lexend font-light text-[80px] leading-[100%] tracking-[0%]",
    bold: "font-lexend font-semibold text-[80px] leading-[100%] tracking-[0%]",
  },
  h2: {
    regular: "font-lexend font-light text-[60px] leading-[100%] tracking-[0%]",
    bold: "font-lexend font-semibold text-[60px] leading-[100%] tracking-[0%]",
  },
  h3: {
    regular: "font-lexend font-light text-[40px] leading-[100%] tracking-[0%]",
    bold: "font-lexend font-semibold text-[40px] leading-[100%] tracking-[0%]",
  },
  h4: {
    regular: "font-lexend font-light text-[30px] leading-[40px] tracking-[0%]",
    bold: "font-lexend font-semibold text-[30px] leading-[40px] tracking-[0%]",
  },
  h5: {
    regular: "font-lexend font-light text-[24px] leading-[36px] tracking-[0%]",
    bold: "font-lexend font-semibold text-[24px] leading-[36px] tracking-[0%]",
  },
  h6: {
    regular: "font-lexend font-light text-[20px] leading-[30px] tracking-[0%]",
    bold: "font-lexend font-semibold text-[20px] leading-[30px] tracking-[0%]",
  },
  h7: {
    regular: "font-lexend font-light text-[18px] leading-[26px] tracking-[0%]",
    bold: "font-lexend font-semibold text-[18px] leading-[26px] tracking-[0%]",
  },
  body1: {
    regular: "font-lexend font-light text-[16px] leading-[24px] tracking-[0%]",
    bold: "font-lexend font-semibold text-[16px] leading-[24px] tracking-[0%]",
  },
  body2: {
    regular: "font-lexend font-light text-[14px] leading-[22px] tracking-[0%]",
    bold: "font-lexend font-semibold text-[14px] leading-[22px] tracking-[0%]",
  },
  caption: {
    regular: "font-lexend font-light text-[12px] leading-[18px] tracking-[0%]",
    bold: "font-lexend font-semibold text-[12px] leading-[18px] tracking-[0%]",
  },
  label: {
    regular: "font-lexend font-light text-[11px] leading-[16px] tracking-[0%]",
    bold: "font-lexend font-semibold text-[11px] leading-[16px] tracking-[0%]",
  },
};

export const Typography = ({
  variant,
  weight = "regular",
  children,
  className = "",
  as,
}: ITypographyProps) => {
  // Map variant to appropriate HTML element if 'as' is not provided
  const getDefaultElement = (): React.ElementType => {
    if (as) return as;

    // Map standard heading variants to their HTML elements
    if (variant === "h1") return "h1";
    if (variant === "h2") return "h2";
    if (variant === "h3") return "h3";
    if (variant === "h4") return "h4";
    if (variant === "h5") return "h5";
    if (variant === "h6") return "h6";

    // Map non-standard variants to appropriate HTML elements
    if (variant === "h7") return "h6"; // h7 doesn't exist, use h6
    if (variant === "label") return "label";

    // Default to p for body text and caption
    return "p";
  };

  const element = getDefaultElement();
  const styles = typographyStyles[variant][weight];

  return React.createElement(
    element,
    { className: `${styles} ${className}` },
    children
  );
};
