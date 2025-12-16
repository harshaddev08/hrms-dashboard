"use client";
import { EyeDisableIcon, EyeIcon } from "@/components/icons";
import React, { FC, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: FC<InputProps> = ({ label, type, id, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const generatedId = React.useId();
  const inputId = id || generatedId;

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex gap-4 border border-primary-500 px-4 py-2 rounded-lg">
      <div className="flex w-full flex-col gap-2 ">
        {label && (
          <label
            htmlFor={inputId}
            className="font-light text-xs text-primary-500"
          >
            {label}
          </label>
        )}

        <input
          id={inputId}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          className="flex flex-1 w-full outline-none border-0 font-light text-base placeholder:text-gray-500"
          {...props}
        />
      </div>
      {type === "password" && (
        <button type="button" onClick={handleTogglePassword}>
          {showPassword ? (
            <EyeIcon width={24} height={24} />
          ) : (
            <EyeDisableIcon width={24} height={24} />
          )}
        </button>
      )}
    </div>
  );
};
