import { useTest } from "./use-test";

const ContextDemo1 = () => {
  const { count, setCount } = useTest();
  return (
    <div className="space-x-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setCount?.(count + 1)}
      >
        +
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={() => setCount?.(count - 1)}
      >
        -
      </button>
    </div>
  );
};

export default ContextDemo1;
