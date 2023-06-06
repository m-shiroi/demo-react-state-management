import { useState } from "react";
import { changeColor } from "../util/createRandomColor";

export const StateBox = (props) => {
  const { ev = false } = props;
  const [color, setColor] = useState("#ec9ea5");

  const onClick = () => {
    if (!ev) return;
    setColor(changeColor());
  };

  return (
    <div
      style={{ width: "20vw", height: "30vw", backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
};
