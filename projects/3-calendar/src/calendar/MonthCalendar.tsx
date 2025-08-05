import { Dayjs } from "dayjs";
import { type CalendarProps } from ".";
import LocalContext from "./LocalContext";
import { useContext } from "react";
import allLocals from "./local";
import cs from "classnames";
import styles from "./index.module.scss";

interface MonthCalendarProps extends CalendarProps {
  selectHandler?: (date: Dayjs) => void;
  curMonth: Dayjs;
}

function getAllDays(date: Dayjs) {
  // the first day of this month 参数date是一个日期，获取这个日期月份的第一天的日期对象；
  const startDate = date.startOf("month");
  // 月份第一天是周几
  const day = startDate.day();

  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
    6 * 7
  );

  // 计算当前日期所处的周中，当前日期之前日期
  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      // 因为当前日期是1号，之前日期是上个月，所以肯定不是当前月
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

function MonthCalendar(props: MonthCalendarProps) {
  const localContext = useContext(LocalContext);

  const { value, curMonth, dateRender, dateInnerContent, selectHandler } =
    props;

  const CalendarLocale = allLocals[localContext.local];

  const weekList: (keyof typeof CalendarLocale.week)[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const allDays = getAllDays(curMonth);

  function renderDays(days: Array<{ date: Dayjs; currentMonth: boolean }>) {
    const rows = [];
    // 从上到下6行
    for (let i = 0; i < 6; i++) {
      const cols = [];
      // 从左到右7列
      for (let j = 0; j < 7; j++) {
        // i行j列
        const item = days[i * 7 + j];
        cols[j] = (
          <div
            className={cs(
              styles["calendar-month-body-cell"],
              item.currentMonth && styles["calendar-month-body-cell-current"]
            )}
            onClick={() => selectHandler?.(item.date)}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className={styles["calendar-month-body-cell-date"]}>
                <div
                  className={cs(
                    styles["calendar-month-body-cell-date-value"],
                    value?.format("YYYY-MM-DD") ===
                      item.date.format("YYYY-MM-DD")
                      ? styles["calendar-month-body-cell-date-selected"]
                      : ""
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
      rows.push(cols);
    }
    return rows.map((row) => (
      <div className={styles["calendar-month-body-row"]}>{row}</div>
    ));
  }

  return (
    <div className={styles["calendar-month"]}>
      <div className={styles["calendar-month-week-list"]}>
        {
          // 日历上方的周日到周六
          weekList.map((week) => (
            <div className={styles["calendar-month-week-list-item"]} key={week}>
              {CalendarLocale.week[week]}
            </div>
          ))
        }
      </div>
      {/* 具体的日期 */}
      <div className={styles["calendar-month-body"]}>{renderDays(allDays)}</div>
    </div>
  );
}

export default MonthCalendar;
