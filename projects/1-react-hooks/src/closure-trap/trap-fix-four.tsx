import { useEffect, useRef, useState } from "react";

const TrapFixFour = () => {
  const [count, setCount] = useState(0);

  // 每次渲染时，addCount 函数都会重新创建，新的 addCount 函数会捕获最新的 count 值
  const addCount = () => {
    console.log("TrapFix four component: ", count);
    setCount(count + 1);
  };
  const ref = useRef(addCount);

  //在每次渲染时都会执行，确保了 ref.current 始终指向最新的 addCount 函数
  ref.current = addCount;

  useEffect(() => {
    // 调用 ref.current() 时，实际调用的是最新的 addCount 函数，这个函数包含最新的 count 值
    const timerId = setInterval(() => ref.current(), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <span>解决方案4：{count}</span>
    </div>
  );
};

export default TrapFixFour;
