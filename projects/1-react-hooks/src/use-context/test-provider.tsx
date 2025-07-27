import { createContext, useState, type ReactNode } from "react";

// 定义Context的类型
interface TestContextType {
  count: number;
  setCount?: (count: number) => void; // 可选，如果需要暴露setter
}
// TS中需要为 createContext 添加类型参数
const TestContext = createContext<TestContextType>({ count: 0 });

// TS中需要为 children添加类型
function TestProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <TestContext.Provider value={{ count, setCount }}>
      {children}
    </TestContext.Provider>
  );
}

export { TestProvider, TestContext };
