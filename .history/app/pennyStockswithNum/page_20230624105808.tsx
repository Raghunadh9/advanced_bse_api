import fetchAllData from "@/lib";
import { allDataArrayInterFace } from "@/types";

const PennyStockwithNum = async () => {
  const allData: allDataArrayInterFace = await fetchAllData();

  return <div>PennyStockwithNum</div>;
};

export default PennyStockwithNum;
