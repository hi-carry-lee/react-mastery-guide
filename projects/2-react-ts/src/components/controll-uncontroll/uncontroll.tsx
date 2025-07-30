import { type ChangeEvent, useEffect, useRef } from "react";

const Uncontroll = () => {
  console.log("Uncontroll Component Rendering!");

  // 用户控制输入，通过 onChange 事件来获取输入值
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(
        "get user input by ref in 5 seconds: ",
        inputRef.current?.value
      );
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <h2>Uncontroll</h2>
      {/* 两个非受控input，都是依赖用户输入，才能获取到值 */}
      <input
        defaultValue={"guang"}
        onChange={onChange}
        placeholder="uncontroll element, get user input by onchange"
      />
      <input
        ref={inputRef}
        placeholder="uncontroll element, get user input by ref"
      />
    </div>
  );
};

export default Uncontroll;
