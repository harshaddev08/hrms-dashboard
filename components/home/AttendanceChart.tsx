"use client";

import {
  BarElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Typography } from "../common";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#1F2937", // Gray-800
        font: {
          size: 14,
        },
      },
    },
    y: {
      stacked: true,
      min: 0,
      max: 100,
      border: {
        display: false,
      },
      grid: {
        color: "#F3F4F6", // Gray-100
        borderDash: [5, 5], // Dashed lines
      },
      ticks: {
        stepSize: 20,
        color: "#6B7280", // Gray-500
        callback: (value: number | string) => value + "%",
        padding: 10,
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 10, // Fully rounded corners
      borderWidth: 4, // Gaps
      borderColor: "transparent", // Transparent border to create gap
      borderSkipped: false, // Round all corners
    },
  },
};

const labels = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];

const data = {
  labels,
  datasets: [
    {
      label: "Absent",
      data: [10, 20, 25, 10, 10, 25, 15],
      backgroundColor: "#EF4444", // Red-500
      barThickness: 16,
    },
    {
      label: "Late",
      data: [30, 20, 30, 30, 15, 30, 35],
      backgroundColor: "#FBBF24", // Amber-400
      barThickness: 16,
    },
    {
      label: "Present",
      data: [60, 60, 45, 60, 75, 45, 50],
      backgroundColor: "#6D28D9", // Violet-600 (modified to match image better, maybe #7C3AED for brighter)
      barThickness: 16,
    },
  ],
};

const orderedData = {
  ...data,
  datasets: [
    {
      label: "Present",
      data: [60, 60, 48, 60, 75, 45, 48],
      backgroundColor: "#7C3AED", // Violet-600
      barThickness: 16,
    },
    {
      label: "Late",
      data: [30, 20, 27, 30, 15, 30, 37],
      backgroundColor: "#FBBF24", // Amber-400
      barThickness: 16,
    },
    {
      label: "Absent",
      data: [10, 20, 25, 10, 10, 25, 15],
      backgroundColor: "#F472B6", // Pink-400
      barThickness: 16,
    },
  ],
};

export const AttendanceChart = () => {
  return (
    <div className="w-full h-full p-6 bg-white rounded-lg border border-gray-20 flex flex-col">
      <div className="flex justify-between items-center mb-8 shrink-0">
        <Typography variant="h6" weight="bold">
          Attendance Overview
        </Typography>
        <div className="relative">
          <select className="appearance-none pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white hover:border-gray-300 outline-none cursor-pointer focus:ring-2 focus:ring-violet-100">
            <option>Today</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 min-h-0">
        <Bar options={options} data={orderedData} />
      </div>
    </div>
  );
};
