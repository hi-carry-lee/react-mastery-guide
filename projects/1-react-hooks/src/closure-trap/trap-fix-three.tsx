import { useEffect, useState } from "react";

// 使用 dependency 数组解决闭包陷阱，但是对于这里的定时任务不太合适
const TrapFixThree = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // 这种方案能解决log方法的闭包陷阱，因为每次都是新的函数，所以不会闭包count
      console.log("TrapFix three component: ", count);
      setCount((cur) => cur + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      <span>解决方案3：{count}</span>
    </div>
  );
};

export default TrapFixThree;
