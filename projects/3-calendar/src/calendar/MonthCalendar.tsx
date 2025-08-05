import React, { useContext, useMemo, useCallback } from "react";
import { Dayjs } from "dayjs";
import { type CalendarProps } from ".";
import LocalContext from "./LocalContext";
import allLocals from "./local";
import cs from "classnames";
import styles from "./index.module.scss";
import type CalendarLocal from "./local/zh-CN";

/* ---------- 类型 ---------- */
interface MonthCalendarProps extends CalendarProps {
  selectHandler?: (date: Dayjs) => void;
  curMonth: Dayjs;
}

/* ---------- 工具函数 ---------- */
function getAllDays(date: Dayjs) {
  // 返回日期对象：date 这个日期对象在 month 中的第一天
  const startDate = date.startOf("month");
  // 这个 first day 是周几
  const day = startDate.day();

  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
    6 * 7
  );

  // 如果当前日期不是从周日开始，那么需要将它之前的日期计算出来，并添加到数组中
  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      // 因为当前日期是 1 号，之前日期是上个月，所以肯定不是当前月
      currentMonth: false,
    };
  }

  // 计算从当前日期开始，后续每一天的日期，以及是否是当前月
  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day");

    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month(),
    };
  }

  return daysInfo;
}

/* ---------- 常量 ---------- */
const weekList: (keyof typeof CalendarLocal.week)[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

/* ---------- 组件 ---------- */
const MonthCalendar: React.FC<MonthCalendarProps> = React.memo((props) => {
  const localContext = useContext(LocalContext);

  const { curMonth, value, dateRender, dateInnerContent, selectHandler } =
    props;

  const CalendarLocale = allLocals[localContext.local];

  /* 优化：仅在 curMonth 变化时重新计算 42 个日期 */
  const allDays = useMemo(() => getAllDays(curMonth), [curMonth]);

  /* 缓存点击事件，避免向下传递新引用 */
  const handleSelect = useCallback(
    (date: Dayjs) => {
      selectHandler?.(date);
    },
    [selectHandler]
  );

  /* 仅当 allDays / 选中值 / 渲染方法变化时重新生成 JSX */
  const dayCells = useMemo(() => {
    const rows: React.ReactNode[] = [];
    // 从上到下 6 行
    for (let i = 0; i < 6; i++) {
      const cols: React.ReactNode[] = [];
      // 从左到右 7 列
      for (let j = 0; j < 7; j++) {
        // i 行 j 列
        const item = allDays[i * 7 + j];
        const isSelected = value?.isSame(item.date, "date"); // isSame 比 format 性能更好

        cols.push(
          <div
            key={item.date.toString()}
            className={cs(
              styles["calendar-month-body-cell"],
              item.currentMonth && styles["calendar-month-body-cell-current"]
            )}
            onClick={() => handleSelect(item.date)}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className={styles["calendar-month-body-cell-date"]}>
                <div
                  className={cs(
                    styles["calendar-month-body-cell-date-value"],
                    isSelected &&
                      styles["calendar-month-body-cell-date-selected"]
                  )}
                >
                  {item.date.date()}
                </div>
                <div
                  className={styles["calendar-month-cell-body-date-content"]}
                >
                  {dateInnerContent?.(item.date)}
                </div>
              </div>
            )}
          </div>
        );
      }
      rows.push(
        <div className={styles["calendar-month-body-row"]} key={i}>
          {cols}
        </div>
      );
    }
    return rows;
  }, [allDays, value, dateRender, dateInnerContent, handleSelect]);

  return (
    <div className={styles["calendar-month"]}>
      {/* 日历上方的周日到周六 */}
      <div className={styles["calendar-month-week-list"]}>
        {weekList.map((week) => (
          <div className={styles["calendar-month-week-list-item"]} key={week}>
            {CalendarLocale.week[week]}
          </div>
        ))}
      </div>

      {/* 具体的日期 */}
      <div className={styles["calendar-month-body"]}>{dayCells}</div>
    </div>
  );
});

export default MonthCalendar;
