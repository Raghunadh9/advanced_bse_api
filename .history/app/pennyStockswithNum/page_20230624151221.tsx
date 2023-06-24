import fetchAllData, { getNumerologyData } from "@/lib";
import { allDataArrayInterFace } from "@/types";

const PennyStockwithNum = async () => {
  const allData: allDataArrayInterFace = await fetchAllData();
  return (
    <div className="">
      {allData.Table.map((i, index) =>
        getNumerologyData(
          "https://phinzi.com/convert?name=" +
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
              .replace("1", "a")
              // .replace("2", "b")
              .replace("3", "c")
              .replace("4", "d")
              .replace("5", "e")
              .replace("6", "cc")
              .replace("7", "nb")
              .replace("8", "dd")
              .replace("9", "ccc")
        )
      )}
    </div>
  );
};

export default PennyStockwithNum;
