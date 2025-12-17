import {
  ArrowDownIcon,
  Button,
  NotificationIcon,
  SearchInput,
  Typography,
  UserProfileButton,
} from "@/components";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex justify-between items-center h-20">
      <div className="flex w-full flex-col">
        <Typography variant="h6" weight="bold">
          Hello Robert 👋🏻
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          Good Morning
        </Typography>
      </div>
      <div className="flex justify-end w-full gap-5 items-center">
        <SearchInput containerClassName="h-12 min-w-64" />

        <Button className="bg-gray-10 w-12.5 h-12.5 p-0">
          <NotificationIcon />
        </Button>

        <UserProfileButton />
      </div>
    </div>
  );
};
