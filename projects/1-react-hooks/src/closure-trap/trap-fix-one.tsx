import { useEffect, useState } from "react";

// 采用函数式更新解决闭包陷阱
const TrapFixOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // 但是这里的值一直还是0，同样因为闭包陷阱
      console.log("TrapFix one component: ", count);
      // 使用 cur 参数，可以获取到最新的 count 值，所以UI上的值会不断增加
      // 但是UI上的值，每次不是加1，而是加2，因为 StrictMode 在开发环境会执行两次
      setCount((cur) => cur + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <span>解决方案1：{count}</span>
    </div>
  );
};

export default TrapFixOne;
