import { useContext } from "react";
import { ColorContext } from "../providers/colorProvider";
import { changeColor } from "../util/createRandomColor";

export const ContextBox = (props) => {
  const { ev = false } = props;
  const { color, setColor } = useContext(ColorContext);

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
