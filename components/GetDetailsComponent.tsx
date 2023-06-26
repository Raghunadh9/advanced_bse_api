"use client";
import React, { useContext, useEffect, useState } from "react";

import { getDetails } from "@/lib";
type scipcodeProps = {
  scipcode: number;
};
const GetDetailsComponent = (props: scipcodeProps) => {
  const [className, setClassName] = useState<any>("");

  useEffect(() => {
    async function fetchDetails() {
      try {
        const result: any = await getDetails(props.scipcode);
        setClassName(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  });
  return (
    <div>
      <td className={`font-bold ${className === "5" ? "text-red-400" : ""}`}>
        {className}
        {" %"}
      </td>
    </div>
  );
};

export default GetDetailsComponent;
