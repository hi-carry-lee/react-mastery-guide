import { useEffect, useReducer } from "react";

interface Action {
  type: "add";
  payload: number;
}

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "add":
      return state + action.payload;
  }
}

// 采用 useReducer 解决闭包陷阱
const TrapFixOne = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      // 但是这里的值一直还是0，同样因为闭包陷阱
      console.log("TrapFix two component: ", count);
      // 它是 dispatch 一个 action，不直接引用 state，所以不会触发闭包陷阱
      dispatch({ type: "add", payload: 1 });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <span>解决方案2：{count}</span>
    </div>
  );
};

export default TrapFixOne;
