import Debugger from "./components/Debugger";
import TestOne from "./components/react-ts-types/One";
import Two from "./components/react-ts-types/Two";
import Controll from "./components/controll-uncontroll/controll";
import Uncontroll from "./components/controll-uncontroll/uncontroll";

function App() {
  return (
    <div className="app">
      <TestOne
        name="John"
        content={<h1>This is Content for TestOne Component</h1>}
      />
      <Two content={null} />
      <Two content={<button>Button</button>} />
      <Two content={12} />
      <Debugger />
      <Controll />
      <Uncontroll />
    </div>
  );
}

export default App;
