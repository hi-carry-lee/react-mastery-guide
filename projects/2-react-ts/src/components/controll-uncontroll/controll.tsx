import { useState, type ChangeEvent } from "react";

const Controll = () => {
  console.log("Controll Component Rendering!");
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value.toUpperCase());
  };

  return (
    <div>
      <h2>Controll</h2>
      <p>每次用户输入，都会出发组件re-render</p>
      <div>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="controll element, get user input by onchange"
        />
      </div>

      <div>
        <input
          value={name}
          onChange={onChangeName}
          type="text"
          placeholder="input lowercase, output uppercase"
        />
      </div>
    </div>
  );
};

export default Controll;
