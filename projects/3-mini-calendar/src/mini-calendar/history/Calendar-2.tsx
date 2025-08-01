import { useState } from "react";
import "./index.css";
import { monthNames } from "../mini-calendar/index";
import { renderDates } from "../mini-calendar/utils";

interface CalendarProps {
  defaultValue?: Date;
  onChange: (date: Date) => void;
}

// 第二版的Calendar组件，实现了非受控模式：
// 传入 defaultValue 来定义初始日期，
// 传入 onChange 来将Calendar中选取的值，传递出去
function Calendar({ defaultValue, onChange }: CalendarProps) {
  const [date, setDate] = useState(defaultValue || new Date());

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
        {renderDates(date, setDate, onChange)}
      </div>
    </div>
  );
}

export default Calendar;
