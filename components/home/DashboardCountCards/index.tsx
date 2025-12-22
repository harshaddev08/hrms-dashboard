import {
  Typography,
  ArrowUpRoundedIcon,
  UsersTwoIcon,
  CalendarCheckIcon,
  BriefcaseIcon,
  ListIcon,
  ArrowDownRoundedIcon,
} from "@/components";
import { cn } from "@/utils/cn";
import moment from "moment";

interface DashboardCountCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  updateDate: string;
  progress: number;
  direction: "up" | "down";
}

const DashboardCountCard = ({
  title,
  count,
  icon,
  updateDate,
  progress,
  direction,
}: DashboardCountCardProps) => {
  return (
    <div className="flex flex-col border border-gray-20 rounded-lg">
      <div className="flex flex-col gap-2.5 p-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-12.5 w-12.5 items-center justify-center bg-primary-5 text-primary-500 rounded-sm">
            {icon}
          </div>
          <Typography variant="body2">{title}</Typography>
        </div>
        <div className="flex items-center justify-between">
          <Typography variant="h4" weight="bold">
            {count}
          </Typography>
          <div
            className={cn(
              "flex items-center h-6 p-1.5 gap-1.5 rounded-sm",
              direction === "up"
                ? "bg-success-10 text-success-500"
                : "bg-danger-10 text-danger-500"
            )}
          >
            {direction === "up" ? (
              <ArrowUpRoundedIcon />
            ) : (
              <ArrowDownRoundedIcon />
            )}
            <Typography variant="label" as={"label"}>
              {progress}%
            </Typography>
          </div>
        </div>
      </div>
      <div className="py-2.5 px-4 border-t border-gray-20">
        <Typography variant="caption" className="text-gray-500">
          Update: {moment(updateDate).format("MMMM DD, YYYY")}
        </Typography>
      </div>
    </div>
  );
};

const countsData: DashboardCountCardProps[] = [
  {
    title: "Total Employee",
    count: 560,
    icon: <UsersTwoIcon />,
    progress: 12,
    direction: "up",
    updateDate: "2025-12-22",
  },
  {
    title: "Total Applicant",
    count: 1050,
    icon: <BriefcaseIcon />,
    progress: 8,
    direction: "down",
    updateDate: "2025-12-22",
  },
  {
    title: "Total Attendance",
    count: 470,
    icon: <CalendarCheckIcon />,
    progress: 5,
    direction: "up",
    updateDate: "2025-12-22",
  },
  {
    title: "Total Projects",
    count: 250,
    icon: <ListIcon />,
    progress: 17,
    direction: "up",
    updateDate: "2025-12-22",
  },
];

export const DashboardCountCards = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {countsData.map((item, index) => (
        <DashboardCountCard key={index} {...item} />
      ))}
    </div>
  );
};
