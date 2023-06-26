import React, { useEffect, useState } from "react";
import { getDetails } from "@/lib";
type scipcode = {
  scipcode: string;
};
const getDetailsComponent = (props: scipcode) => {
  const [className, setClassName] = useState<string | undefined>("");
  useEffect(() => {
    async function fetchDetails() {
      try {
        const result = await getDetails();
        setClassName(result);
      } catch (error) {
        console.log(error);
      }
    }
  });
  return (
    <div>
      <td>hello</td>
    </div>
  );
};

export default getDetailsComponent;
