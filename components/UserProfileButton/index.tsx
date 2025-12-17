import Image from "next/image";
import { Typography, ArrowDownIcon } from "@/components";

export const UserProfileButton = () => {
  return (
    <div className="flex justify-between gap-2.5 min-w-48 items-center border border-gray-200 rounded-lg px-1">
      <div className="flex gap-1.5">
        <Image
          src={"/images/profile.png"}
          alt="profile"
          height={40}
          width={40}
          priority
          className="rounded-lg object-contain"
        />
        <div className="flex flex-col">
          <Typography variant="body1" weight="bold" as={"span"}>
            Robert Allen
          </Typography>
          <Typography variant="body2" className="text-gray-500" as={"p"}>
            HR Manager
          </Typography>
        </div>
      </div>
      <button>
        <ArrowDownIcon />
      </button>
    </div>
  );
};
