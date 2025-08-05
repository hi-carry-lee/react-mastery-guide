// getDate：当天是几号
// 这个函数通过将日设置为0，来计算一个月有多少天
export const daysOfMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

// getDay：指定日期是星期几
// 这里获取每月的1日是星期几
export const firstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export const renderDates = (
  date: Date,
  setDate: (date: Date) => void,
  onChange: (date: Date) => void,
  styles: Record<string, string>
) => {
  const days = [];

  const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
  const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

  const clickHandler = (i: number) => {
    const curDate = new Date(date.getFullYear(), date.getMonth(), i);
    setDate(curDate);
    onChange(curDate);
  };

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className={styles.empty}></div>);
  }

  for (let i = 1; i <= daysCount; i++) {
    if (i === date.getDate()) {
      days.push(
        <div
          key={i}
          className={`${styles.day} ${styles.selected}`}
          onClick={() => clickHandler(i)}
        >
          {i}
        </div>
      );
    } else {
      days.push(
        <div key={i} className={styles.day} onClick={() => clickHandler(i)}>
          {i}
        </div>
      );
    }
  }

  return days;
};
