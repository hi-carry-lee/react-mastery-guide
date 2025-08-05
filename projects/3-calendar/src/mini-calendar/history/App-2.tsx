import { useEffect, useState } from "react";
import Calendar from "./Calendar-2";

function App() {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    alert("you choose: " + date?.toLocaleDateString());
  }, [date]);

  return (
    <div className="container">
      {/* <Calendar defaultDate={new Date()} /> */}
      <Calendar
        defaultValue={new Date("2023-3-1")}
        onChange={setDate}
      ></Calendar>
      <Calendar
        defaultValue={new Date("2023-8-15")}
        onChange={setDate}
      ></Calendar>
    </div>
  );
}

export default App;
