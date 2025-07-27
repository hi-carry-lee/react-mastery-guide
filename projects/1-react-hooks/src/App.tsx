import UseEffect from "./use-effect/use-effect";
import ContextHome from "./use-context/context-home";
import UseReducer from "./use-reducer/use-reducer";
import UseState from "./use-state/use-state";
import MemoTest from "./memo/MemoTest";
import ClosureTrap from "./closure-trap/closure-trap";

const App = () => {
  return (
    <div className="p-4 flex flex-col justify-center gap-16">
      <UseState />
      <UseEffect />
      <UseReducer />
      <ContextHome />
      <MemoTest />
      <ClosureTrap />
    </div>
  );
};

export default App;
