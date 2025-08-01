import { useImperativeHandle, useState } from "react";
import "./index.css";
import { renderDates } from "./utils";
import { monthNames } from ".";
import React from "react";

interface CalendarProps {
  defaultValue?: Date;
  onChange: (date: Date) => void;
}

// 第一步：定义要暴露的 API 接口
export interface CalendarRef {
  getDate: () => Date; // 获取当前日期的方法
  setDate: (date: Date) => void; // 设置日期的方法
}

// 第二步：组件函数签名必须符合 ForwardRefRenderFunction
const InternalCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  CalendarProps
> = ({ defaultValue, onChange }, ref) => {
  const [date, setDate] = useState(defaultValue || new Date());

  const handlePrevMonth = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(prevMonth);
  };

  const handleNextMonth = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(prevMonth);
  };

  // 第三步：使用 useImperativeHandle 暴露方法
  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date; // 返回组件内部的 date 状态
      },
      setDate(date: Date) {
        setDate(date); // 修改组件内部的 date 状态
        onChange(date);
      },
    };
  });

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
};
// 第四步：用 React.forwardRef 包装
const Calendar = React.forwardRef(InternalCalendar);
export default Calendar;
