"use client";
import {
  AttendanceChart,
  AttendanceOverview,
  DashboardCountCards,
  MySchedule,
} from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-9 gap-5">
        <div className="col-span-6">
          <DashboardCountCards />

          <div className="mt-5 h-[534px]">
            <AttendanceChart />
          </div>
        </div>
        <MySchedule />
      </div>
      <AttendanceOverview />
    </div>
  );
}
