import { useEffect, useState } from "react";

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(1000);
    }, 3000);
  });
  return data;
}

const UseEffect = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(function () {
    queryData().then((data) => {
      setCount(data);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl mb-4">useEffect hook practice</h1>
      <p className="text-lg">
        In the beginning, the value is 0, 2 seconds later it will become 1000
      </p>
      <p className="bg-slate-400 p-2 rounded-lg">{count}</p>
    </div>
  );
};

export default UseEffect;
