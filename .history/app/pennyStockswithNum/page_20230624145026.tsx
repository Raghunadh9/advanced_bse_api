import fetchAllData, { getNumerologyData } from "@/lib";
import { allDataArrayInterFace } from "@/types";

const PennyStockwithNum = async () => {
  const allData: allDataArrayInterFace = await fetchAllData();
  const allDataName: string[] = allData.Table.sort((a, b) =>
    a.ltradert > b.ltradert ? 1 : -1
  )
    .filter((i) => i.ltradert > 0 && i.ltradert < 5)
    .map((i) => i.LONG_NAME);
  {
    getNumerologyData(allDataName);
  }

  return <div></div>;
};

export default PennyStockwithNum;
