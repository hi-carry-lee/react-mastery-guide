import { useState } from "react";
import "./index.css";
import { monthNames } from ".";
import { renderDates } from "./utils";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(prevMonth);
  };

  const handleNextMonth = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(prevMonth);
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDates(date)}
      </div>
    </div>
  );
}

export default Calendar;
