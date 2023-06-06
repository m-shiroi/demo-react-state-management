import { createContext, useState } from "react";

export const ColorContext = createContext({});

export const ColorProvider = (props) => {
  const { children } = props;
  const [color, setColor] = useState("#7dbae5");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
