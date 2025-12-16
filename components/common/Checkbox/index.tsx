"use client";

import React from "react";

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = ({
  label,
  id,
  className,
  ...props
}: ICheckboxProps) => {
  const generatedId = React.useId();
  const checkboxId = id ?? generatedId;
  const [isChecked, setIsChecked] = React.useState(props.checked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  // Sync with external checked prop changes
  React.useEffect(() => {
    if (props.checked !== undefined) {
      setIsChecked(props.checked);
    }
  }, [props.checked]);

  return (
    <div className={`inline-flex items-center gap-2.5 ${className || ""}`}>
      <label
        htmlFor={checkboxId}
        className="relative flex items-center justify-center w-6 h-6 cursor-pointer"
      >
        <input
          id={checkboxId}
          type="checkbox"
          className="sr-only"
          {...props}
          onChange={handleChange}
        />

        {/* Custom checkbox box */}
        <div
          className={`
            w-6 h-6 rounded border transition-all flex items-center justify-center
            ${
              isChecked
                ? "bg-primary-500 border-primary-500"
                : "border-gray-500 bg-white-500"
            }
          `}
        >
          {/* Checkmark icon */}
          <svg
            className={`w-4 h-4 text-white transition-opacity pointer-events-none ${
              isChecked ? "opacity-100" : "opacity-0"
            }`}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3334 4L6.00002 11.3333L2.66669 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </label>

      {label && (
        <label
          htmlFor={checkboxId}
          className="text-sm text-dark-500 cursor-pointer select-none"
        >
          {label}
        </label>
      )}
    </div>
  );
};
