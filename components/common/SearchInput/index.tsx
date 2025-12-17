import { SearchIcon } from "@/components";
import { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export const SearchInput = ({
  containerClassName,
  className,
  ...props
}: SearchInputProps) => {
  return (
    <div
      className={`flex gap-2.5 items-center  rounded-lg border border-gray-10 px-4 py-3.5 ${
        containerClassName ?? ""
      }`}
    >
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        className={`outline-none bg-transparent w-full ${className ?? ""}`}
        {...props}
      />
    </div>
  );
};
