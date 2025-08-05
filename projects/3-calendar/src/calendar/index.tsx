import dayjs, { Dayjs } from "dayjs";
import MonthCalendar from "./MonthCalendar";
import styles from "./index.module.scss";
import Header from "./Header";
import { type CSSProperties, type ReactNode, useState } from "react";
import cs from "classnames";
import LocaleContext from "./LocalContext";
import { useControllableValue } from "ahooks";

// 为什么Calendar组件的参数类型里面有这么多属性？因为该组件希望做成支持受控和非受控两种方式
// 所谓受控就是外部通过props传递value过来，控制Calendar的日期显示
// 非受控就是没有传value，而是使用defaultValue
export interface CalendarProps {
  value?: Dayjs;
  defaultValue?: Dayjs;
  style?: CSSProperties; // 用来控制样式，具体是什么样式？应该是Calendar的外观？
  className?: string | string[]; // 既然有了style，为什么还有加上className?
  // 定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode;
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  // 国际化相关
  local?: string;
  onChange?: (date: Dayjs) => void;
}

function Calendar(props: CalendarProps) {
  const { style, className, local, onChange } = props;

  const [curValue, setCurValue] = useControllableValue<Dayjs>(props, {
    defaultValue: dayjs(),
  });

  const [curMonth, setCurMonth] = useState<Dayjs>(curValue);

  const classNames = cs(styles.calendar, className);

  function selectHandler(date: Dayjs) {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  function prevMonthHandler() {
    setCurMonth(curMonth.subtract(1, "month"));
  }

  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, "month"));
  }

  function todayHandler() {
    const date = dayjs(Date.now());

    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  return (
    <LocaleContext.Provider
      value={{
        local: local || navigator.language,
      }}
    >
      <div className={styles.container}>
        <div className={classNames} style={style}>
          <Header
            curMonth={curMonth}
            prevMonthHandler={prevMonthHandler}
            nextMonthHandler={nextMonthHandler}
            todayHandler={todayHandler}
          ></Header>
          <MonthCalendar
            {...props}
            value={curValue}
            curMonth={curMonth}
            selectHandler={selectHandler}
          />
        </div>
      </div>
    </LocaleContext.Provider>
  );
}

export default Calendar;
