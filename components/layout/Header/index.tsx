import {
  IconButton,
  NotificationIcon,
  SearchInput,
  Typography,
  UserProfileButton,
} from "@/components";

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

        <IconButton icon={<NotificationIcon />} />

        <UserProfileButton />
      </div>
    </div>
  );
};
