import { CustomCalender, Typography } from "@/components/common";
import { CalenderIcon, MoreVerticalIcon } from "@/components/icons";
import moment from "moment";

interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
}

interface IScheduleEventsProps {
  date: string;
  events: ScheduleEvent[];
}

const ScheduleEvents = ({ date, events }: IScheduleEventsProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <Typography variant="body1">
          {moment(date).format("dddd, DD MMMM YYYY")}
        </Typography>
        <MoreVerticalIcon />
      </div>
      <div className="flex flex-col gap-5">
        {events.map((event, index) => (
          <div key={index} className="flex items-center">
            <Typography variant="h7" weight="bold">
              {event.time}
            </Typography>
            <div className="h-0.5 w-12 gradient-color-primary -rotate-90" />
            <div className="flex flex-col">
              <Typography variant="body2">{event.title}</Typography>
              <Typography variant="body1" weight="bold">
                {event.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const eventsDetails = [
  {
    date: "2025-12-22",
    events: [
      {
        time: "09:30",
        title: "UI/UX Designer",
        description: "Practical Task Review",
      },
      {
        time: "09:30",
        title: "Frontend Developer",
        description: "Practical Task Review",
      },
    ],
  },

  {
    date: "2025-12-23",
    events: [
      {
        time: "09:30",
        title: "MERN Developer",
        description: "Practical Task Review",
      },
      {
        time: "12:30",
        title: "MERN Developer",
        description: "Practical Task Review",
      },
      {
        time: "12:30",
        title: "MERN Developer",
        description: "Practical Task Review",
      },
    ],
  },
];

export const MySchedule = () => {
  return (
    <div className="col-span-3 border border-gray-20 rounded-lg px-5 py-5">
      <div className="flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <Typography variant="h6" weight="bold">
            My Schedule
          </Typography>
          <div className="flex justify-center items-center h-12.5 w-12.5 rounded-lg bg-primary-10 text-primary-500">
            <CalenderIcon />
          </div>
        </div>
        <div className="border-b border-gray-10 pb-5">
          <CustomCalender
            selectRange={true}
            value={[new Date(2025, 11, 20), new Date(2025, 11, 25)]}
          />
        </div>
        {eventsDetails.map((item, index) => (
          <ScheduleEvents key={index} date={item.date} events={item.events} />
        ))}
      </div>
    </div>
  );
};
