import fetchAllData, { getNumerologyData } from "@/lib";
import { allDataArrayInterFace } from "@/types";

const PennyStockwithNum = async () => {
  const allData: allDataArrayInterFace = await fetchAllData();
  const allDataName: string[] = allData.Table.sort((a, b) =>
    a.ltradert > b.ltradert ? 1 : -1
  )
    .filter((i) => i.ltradert > 0 && i.ltradert < 5)
    .map((i) =>
      i.LONG_NAME.split("-")[0]
        .split("_")[0]
        .replaceAll(" ", "%20")
        .replaceAll("'", " ")
        .replaceAll("LTD", "Limited")
        .replaceAll("Ltd", "Limited")
        .replaceAll("&", "and")
        .replaceAll(".", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll("1", "a")
        .replaceAll("2", "b")
        .replaceAll("3", "c")
        .replaceAll("4", "d")
        .replaceAll("5", "e")
        .replaceAll("6", "cc")
        .replaceAll("7", "nb")
        .replaceAll("8", "dd")
        .replaceAll("9", "ccc")
        .replaceAll("0", " ")
    );
  {
    getNumerologyData(allDataName);
  }

  return <div></div>;
};

export default PennyStockwithNum;
