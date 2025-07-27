import ContextDemo1 from "./context-demo1";
import ContextDemo2 from "./context-demo2";
import { TestProvider } from "./test-provider";

const ContextHome = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl mb-4">Context Practice</h1>
      <TestProvider>
        <ContextDemo1 />
        <ContextDemo2 />
      </TestProvider>
    </div>
  );
};

export default ContextHome;
