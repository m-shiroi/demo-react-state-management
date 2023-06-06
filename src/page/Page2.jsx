import { Link } from "react-router-dom";
import { ContextBox } from "../components/contextBox";
import { ReducerBox } from "../components/reducerBox";
import { StateBox } from "../components/stateBox";

export const Page2 = () => {
  return (
    <>
      <h1>Your Original Flag</h1>

      <div style={{ display: "flex" }}>
        <StateBox />
        <ReducerBox />
        <ContextBox />
      </div>

      <Link to="/">Home</Link>
    </>
  );
};
