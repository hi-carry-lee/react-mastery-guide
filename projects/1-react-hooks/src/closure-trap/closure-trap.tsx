import Trap from "./trap";
import TrapFixOne from "./trap-fix-one";
import TrapFixTwo from "./trap-fix-two";
import TrapFixThree from "./trap-fix-three";
import TrapFixFour from "./trap-fix-four";

function ClosureTrap() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl mb-4">Closure Trap</h1>
      <Trap />
      <TrapFixOne />
      <TrapFixTwo />
      <TrapFixThree />
      <TrapFixFour />
    </div>
  );
}

export default ClosureTrap;
