import { useReducer } from "react";
import { changeColor } from "../util/createRandomColor";

const initialState = {
  color: "#c4a6ed"
};

const reducer = (state, action) => {
  switch (action) {
    case "change":
      return { color: changeColor() };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const ReducerBox = (props) => {
  const { ev = false } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      style={{ width: "20vw", backgroundColor: state.color }}
      onClick={() => dispatch(ev ? "change" : "none")}
    ></div>
  );
};
