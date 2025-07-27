import { useEffect, useState } from "react";
import MemoBbb from "./MemoBbb";
import Bbb from "./Bbb";

function MemoTest() {
  const [, setNum] = useState(1);
  const [count, setCount] = useState(2);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCount(Math.random());
    }, 2000);
  }, []);

  // 1. Bbb组件会不断的re-render，因为它是子组件，会随着父组件的 Render 而Render
  // 2. MemoBbb组件使用 memo 包裹，会缓存组件的渲染结果，只有当 props 发生变化时，才会重新渲染
  // 3. 2秒后，count 发生变化，MemoBbb组件才会重新渲染
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl mb-4">Memo Test</h1>
      <Bbb count={2}></Bbb>
      <MemoBbb count={count}></MemoBbb>
    </div>
  );
}

export default MemoTest;
