import { useState } from "react";

const UseState = () => {
  const [num, setNum] = useState<number>(0);

  const [count, setCount] = useState<number>(() => {
    const num1 = 10;
    const num2 = 20;
    return num1 + num2;
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl mb-4">useState hook practice</h1>
      <div className="space-x-4 ">
        <button
          className="px-4 py-2 bg-slate-400 rounded-lg"
          onClick={() => setNum(num + 1)}
        >
          {num}
        </button>
        {/* onClick的参数是一个函数，而下面这是函数调用 */}
        {/* <p onClick={setNum(num + 1)}>{num}</p> */}

        <button
          className="px-4 py-2 bg-slate-400 rounded-lg"
          onClick={() => setCount((pre) => pre + 10)}
        >
          {count}
        </button>
      </div>
    </div>
  );
};

export default UseState;
