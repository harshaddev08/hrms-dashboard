import { Button, Table, Typography } from "@/components";
import { IAttendanceOverview } from "@/types/home.type";
import { attendanceColumns } from "./attendanceColumns";

export const AttendanceOverview = () => {
  const data: IAttendanceOverview[] = [
    {
      id: 1,
      name: "Harshad Rathod",
      designation: "Software Engineer",
      type: "Full Time",
      checkInTime: "09:00 AM",
      status: "On Time",
    },
    {
      id: 2,
      name: "Amit Patel",
      designation: "Software Engineer",
      type: "Full Time",
      checkInTime: "09:00 AM",
      status: "Late",
    },
    {
      id: 3,
      name: "Neha",
      designation: "Software Engineer",
      type: "Full Time",
      checkInTime: "09:00 AM",
      status: "On Time",
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-5 border border-gray-20 rounded-lg">
      <div className="flex justify-between items-center">
        <Typography variant="h6" weight="bold">
          Attendance Overview
        </Typography>
        <Button
          size="sm"
          className="w-20 bg-white-500 text-dark-500 border border-gray-20 rounded-lg"
        >
          View All
        </Button>
      </div>
      <Table data={data} columns={attendanceColumns} />
    </div>
  );
};
