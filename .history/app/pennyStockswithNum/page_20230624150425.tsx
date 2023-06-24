import fetchAllData, { getNumerologyData } from "@/lib";
import { allDataArrayInterFace } from "@/types";

const PennyStockwithNum = async () => {
  const allData: allDataArrayInterFace = await fetchAllData();
  return (
    <div className="">
      {allData.Table.map((i, index) =>
        getNumerologyData("https://phinzi.com/convert?name=" + i.LONG_NAME)
      )}
    </div>
  );
};

export default PennyStockwithNum;
