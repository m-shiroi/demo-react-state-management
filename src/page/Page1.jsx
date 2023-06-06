import { Link } from "react-router-dom";
import { ContextBox } from "../components/contextBox";
import { ReducerBox } from "../components/reducerBox";
import { StateBox } from "../components/stateBox";

export const Page1 = () => {
  return (
    <>
      <h1>Create Original Flag</h1>

      <div style={{ display: "flex" }}>
        <StateBox ev={true} />
        <ReducerBox ev={true} />
        <ContextBox ev={true} />
      </div>

      <Link to="/page2">Take a look</Link>
    </>
  );
};
