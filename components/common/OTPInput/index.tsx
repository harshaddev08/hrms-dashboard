"use client";
import React, { useRef, useState, KeyboardEvent, ClipboardEvent } from "react";
import { cn } from "@/utils/cn";

/**
 * Props for the OTPInput component
 * @interface IOTPInputProps
 * @property {number} numberOfInputs - Number of OTP input boxes to display
 * @property {string} [value] - Initial/controlled value of the OTP
 * @property {(otp: string) => void} [onChange] - Callback fired when OTP value changes
 * @property {(otp: string) => void} [onComplete] - Callback fired when all inputs are filled
 * @property {boolean} [error] - Whether to show error state styling
 * @property {boolean} [disabled] - Whether the inputs are disabled
 */
interface IOTPInputProps {
  numberOfInputs: number;
  value?: string;
  onChange?: (otp: string) => void;
  onComplete?: (otp: string) => void;
  error?: boolean;
  disabled?: boolean;
}

export const OTPInput = ({
  numberOfInputs,
  value = "",
  onChange,
  onComplete,
  error = false,
  disabled = false,
}: IOTPInputProps) => {
  const [otp, setOtp] = useState<string[]>(
    value
      .split("")
      .slice(0, numberOfInputs)
      .concat(Array(Math.max(0, numberOfInputs - value.length)).fill(""))
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle input change
  const handleChange = (index: number, inputValue: string) => {
    // Only allow numbers
    const sanitizedValue = inputValue.replace(/[^0-9]/g, "");

    if (sanitizedValue.length > 1) {
      // Handle paste or multiple characters
      handlePaste(sanitizedValue, index);
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = sanitizedValue;
    setOtp(newOtp);

    // Call onChange callback
    const otpString = newOtp.join("");
    onChange?.(otpString);

    // Move to next input if value is entered
    if (sanitizedValue && index < numberOfInputs - 1) {
      setTimeout(() => inputRefs.current[index + 1]?.focus(), 0);
    }

    // Call onComplete if all inputs are filled
    if (
      newOtp.every((digit) => digit !== "") &&
      newOtp.length === numberOfInputs
    ) {
      onComplete?.(otpString);
    }
  };

  // Handle paste event
  const handlePasteEvent = (
    e: ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");
    handlePaste(pastedData, index);
  };

  // Handle paste logic
  const handlePaste = (pastedData: string, startIndex: number) => {
    const sanitizedData = pastedData.replace(/[^0-9]/g, "");
    const newOtp = [...otp];

    for (
      let i = 0;
      i < sanitizedData.length && startIndex + i < numberOfInputs;
      i++
    ) {
      newOtp[startIndex + i] = sanitizedData[i];
    }

    setOtp(newOtp);

    // Call onChange callback
    const otpString = newOtp.join("");
    onChange?.(otpString);

    // Focus on the next empty input or the last filled input
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === "");
    const focusIndex =
      nextEmptyIndex === -1 ? numberOfInputs - 1 : nextEmptyIndex;
    setTimeout(() => inputRefs.current[focusIndex]?.focus(), 0);

    // Call onComplete if all inputs are filled
    if (
      newOtp.every((digit) => digit !== "") &&
      newOtp.length === numberOfInputs
    ) {
      onComplete?.(otpString);
    }
  };

  // Handle keydown events
  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // Move to previous input if current is empty
        inputRefs.current[index - 1]?.focus();
      } else {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        onChange?.(newOtp.join(""));
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < numberOfInputs - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle focus to select all text
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <div className="flex gap-3">
      {otp.map((digit, index) => {
        const isInputDisabled =
          disabled || (index > 0 && otp[index - 1] === "");

        return (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={(e) => handlePasteEvent(e, index)}
            onFocus={handleFocus}
            disabled={isInputDisabled}
            aria-label={`OTP digit ${index + 1}`}
            className={cn(
              "w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-semibold border rounded-lg outline-none transition-all duration-200 bg-white",
              error
                ? "border-error-500 focus:border-error-500 focus:ring-2 focus:ring-error-100"
                : "border-primary-500 focus:border-primary-600 focus:ring-2 focus:ring-primary-100",
              isInputDisabled && "cursor-not-allowed border-gray-20",
              digit ? "text-dark-500" : "text-gray-400"
            )}
          />
        );
      })}
    </div>
  );
};
