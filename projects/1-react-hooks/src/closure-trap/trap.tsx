import { useEffect, useState } from "react";

const Trap = () => {
  const [count, setCount] = useState(0);

  // hook的闭包陷阱：UI上的 count 值一直都是0
  // 因为 setInterval 的函数闭包了 count 值，而它闭包的时候，这个 count 值是0
  // 每隔1秒执行的时候，count 值都是0，所以 UI 上的 count 值一直都是0
  useEffect(() => {
    setInterval(() => {
      console.log("Trap component: ", count);
      setCount(count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <span>闭包陷阱：{count}</span>
    </div>
  );
};

export default Trap;
