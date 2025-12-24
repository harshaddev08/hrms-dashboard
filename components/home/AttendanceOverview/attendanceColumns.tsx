import { IAttendanceOverview } from "@/types/home.type";
import { cn } from "@/utils/cn";
import { ColumnDef, Getter } from "@tanstack/react-table";
import Image from "next/image";

const EmployeeNameCell = ({ getValue }: { getValue: Getter<string> }) => {
  const name = getValue();

  return (
    <div className="flex gap-2.5 items-center">
      <Image
        src="/images/profile.png"
        alt="profile"
        width={32}
        height={32}
        className="rounded-full"
      />
      <span>{name}</span>
    </div>
  );
};

const StatusCell = ({ getValue }: { getValue: Getter<string> }) => {
  const status = getValue();

  return (
    <span
      className={cn(
        "px-2 py-1 rounded",
        status === "On Time"
          ? "bg-success-10 text-success-500"
          : "bg-danger-10 text-danger-500"
      )}
    >
      {status}
    </span>
  );
};

export const attendanceColumns: ColumnDef<IAttendanceOverview>[] = [
  {
    accessorKey: "name",
    header: "Employee Name",
    cell: ({ getValue }) => EmployeeNameCell({ getValue }),
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "checkInTime",
    header: "Check In Time",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => StatusCell({ getValue }),
  },
];
