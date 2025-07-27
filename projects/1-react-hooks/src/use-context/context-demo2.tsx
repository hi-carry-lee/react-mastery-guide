import { useTest } from "./use-test";

const ContextDemo2 = () => {
  const { count } = useTest();
  return (
    <div className="text-lg">
      Context Demo2, count from Context:{" "}
      <span className="text-2xl font-bold p-2 rounded-lg bg-orange-400">
        {count}
      </span>
    </div>
  );
};

export default ContextDemo2;
