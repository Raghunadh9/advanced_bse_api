// MyProvider.tsx
import React, { useState } from "react";
import MyContext from "./manage5UseContext";

const MyProvider: React.FC = ({ children }) => {
  const [value, setValue] = useState("");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
