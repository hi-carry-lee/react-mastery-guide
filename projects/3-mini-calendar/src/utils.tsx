// getDate：计算每个月有多少天
export const daysOfMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

// getDay：指定日期是星期几
// 这里获取每月的1日是星期几
export const firstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export const renderDates = (date: Date) => {
  const days = [];

  const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
  const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="empty"></div>);
  }

  for (let i = 1; i <= daysCount; i++) {
    days.push(
      <div key={i} className="day">
        {i}
      </div>
    );
  }

  return days;
};
