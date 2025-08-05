import { Dayjs } from "dayjs";
import { useContext } from "react";
import LocalContext from "./LocalContext";
import allLocals from "./local";
import styles from "./index.module.scss";

interface HeaderProps {
  curMonth: Dayjs;
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}
// 这个组件重点关注参数
function Header(props: HeaderProps) {
  const { curMonth, prevMonthHandler, nextMonthHandler, todayHandler } = props;

  const localContext = useContext(LocalContext);
  const CalendarContext = allLocals[localContext.local];

  return (
    <div className={styles["calendar-header"]}>
      <div className={styles["calendar-header-left"]}>
        <div
          className={styles["calendar-header-icon"]}
          onClick={prevMonthHandler}
        >
          &lt;
        </div>

        <div className={styles["calendar-header-value"]}>
          {
            // 返回格式化后的日期
            curMonth.format(CalendarContext.formatYearMonth)
          }
        </div>

        <div
          className={styles["calendar-header-icon"]}
          onClick={nextMonthHandler}
        >
          &gt;
        </div>

        <button
          className={styles["calendar-header-btn"]}
          onClick={todayHandler}
        >
          {CalendarContext.today}
        </button>
      </div>
    </div>
  );
}

export default Header;
