"use client";

import { ButtonComponentProps } from "@/types";

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <button onClick={props.clickHandler} className={props.classStyles}>
      ButtonComponent
    </button>
  );
};

export default ButtonComponent;
