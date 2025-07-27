import { memo } from "react";

interface BbbProps {
  count: number;
}

function Bbb(props: BbbProps) {
  console.log("memo bbb render");

  return (
    <h2 className="text-2xl font-bold p-2 rounded-lg bg-orange-400">
      {props.count}
    </h2>
  );
}

export default memo(Bbb);
