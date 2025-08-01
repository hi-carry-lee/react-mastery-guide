import { useEffect, useRef, useState } from "react";
import Calendar, { type CalendarRef } from "./Calendar";

const CalendarHome = () => {
  const calendarRef = useRef<CalendarRef>(null);
  const [myDate, setMyDate] = useState<Date>();

  console.log("App component, myDate is: ", myDate);

  useEffect(() => {
    console.log(calendarRef.current?.getDate().toLocaleDateString());

    setTimeout(() => {
      calendarRef.current?.setDate(new Date(2024, 3, 1));
    }, 3000);
  }, []);

  return (
    <div className="container">
      {/* <Calendar defaultDate={new Date()} /> */}
      <Calendar
        ref={calendarRef}
        defaultValue={new Date("2024-8-15")}
        onChange={setMyDate}
      />
    </div>
  );
};

export default CalendarHome;
