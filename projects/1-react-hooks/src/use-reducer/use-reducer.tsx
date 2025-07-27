import { useReducer } from "react";

interface Data {
  result: number;
}

interface Action {
  type: "add" | "minus";
  num: number;
}
function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      return {
        result: state.result + action.num,
      };
    case "minus":
      return {
        result: state.result - action.num,
      };
    default: {
      throw new Error("unknown action!");
    }
  }
}

function UseReducer() {
  const [res, dispatch] = useReducer(reducer, {
    result: 0,
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl mb-4">useReducer hook practice</h1>
      <div className="flex justify-center items-center gap-4">
        <div
          className="p-2 bg-green-500 rounded-lg  cursor-pointer"
          onClick={() => dispatch({ type: "add", num: 2 })}
        >
          加
        </div>

        <div className="p-2 size-12 flex justify-center items-center bg-slate-500 rounded-lg">
          {res.result}
        </div>
        <div
          className="p-2 bg-red-500 rounded-lg cursor-pointer"
          onClick={() => dispatch({ type: "minus", num: 1 })}
        >
          减
        </div>
      </div>
    </div>
  );
}

export default UseReducer;
