import Debugger from "./components/Debugger";
import TestOne from "./components/One";
import Two from "./components/Two";

function App() {
  return (
    <div>
      <TestOne
        name="John"
        content={<h1>This is Content for TestOne Component</h1>}
      />
      <Two content={null} />
      <Two content={<button>Button</button>} />
      <Two content={12} />
      <Debugger />
    </div>
  );
}

export default App;
