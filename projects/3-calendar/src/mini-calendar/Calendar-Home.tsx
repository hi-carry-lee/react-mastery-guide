import { useEffect, useRef, useState } from "react";
import MiniCalendar, { type CalendarRef } from "./Mini-Calendar";
import styles from "./index.module.css";

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
    <div className={styles.container}>
      {/* <Calendar defaultDate={new Date()} /> */}
      <MiniCalendar
        ref={calendarRef}
        defaultValue={new Date("2024-8-15")}
        onChange={setMyDate}
      />
    </div>
  );
};

export default CalendarHome;
