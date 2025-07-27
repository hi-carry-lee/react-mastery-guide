import { useContext } from "react";
import { TestContext } from "./test-provider";

/**
1. 将钩子函数和Provider分开写，
2. 因为 react-refresh/only-export-components 规则要求：
    一个文件要么只导出React组件，要么只导出非组件内容。
    你的文件同时导出了组件（TestProvider）和hook（useTest），这可能会影响Fast Refresh的性能。
 */
function useTest() {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error("useTest must be used within a TestProvider");
  }
  return context;
}

export { useTest };
