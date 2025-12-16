"use client";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "../icons";
import { Typography } from "../common";

export const RedirectBackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 pb-7 cursor-pointer"
    >
      <ArrowLeftIcon />
      <Typography variant="body1" className="text-dark-500">
        Back
      </Typography>
    </button>
  );
};
