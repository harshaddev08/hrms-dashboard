"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

import { ArrowLeftLongIcon, ArrowRightLongIcon } from "@/components/icons";

const Calendar = dynamic(() => import("react-calendar"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] animate-pulse bg-gray-10 rounded-lg" />
  ),
});

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type CustomCalenderProps = {
  onChange?: (value: Value) => void;
  value?: Value;
  selectRange?: boolean;
};

export const CustomCalender = ({
  onChange,
  value: valueProp,
  selectRange,
}: CustomCalenderProps) => {
  const [date, setDate] = useState<Value>(valueProp || new Date());
  const [prevValue, setPrevValue] = useState<Value | undefined>(valueProp);

  // Sync internal state if value prop changes (React recommended pattern)
  if (valueProp !== prevValue) {
    setPrevValue(valueProp);
    setDate(valueProp || new Date());
  }

  const handleDateChange = (val: Value) => {
    setDate(val);
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <div className="">
      <Calendar
        nextLabel={<ArrowRightLongIcon />}
        prevLabel={<ArrowLeftLongIcon />}
        onChange={handleDateChange}
        value={date}
        selectRange={selectRange}
        className="w-full border-none"
        prev2Label={null}
        next2Label={null}
        locale="en-US"
        formatShortWeekday={(locale, date) =>
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()]
        }
      />
    </div>
  );
};
