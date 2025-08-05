import { createContext } from "react";

export interface LocalContextType {
  local: string;
}

const LocalContext = createContext<LocalContextType>({
  local: "zh-CN",
});

export default LocalContext;
