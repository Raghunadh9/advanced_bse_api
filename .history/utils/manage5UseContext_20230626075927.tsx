import React, { createContext } from "react";
interface MyContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}
const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
