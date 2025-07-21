import UseEffect from "./use-effect/use-effect";
import UseState from "./use-state/use-state";

const App = () => {
  return (
    <div className="p-4 flex flex-col justify-center gap-16">
      <UseState />
      <UseEffect />
    </div>
  );
};

export default App;
