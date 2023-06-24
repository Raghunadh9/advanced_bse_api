"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { allDataInterFace, numerologyProps } from "@/types";

const FilterLtpNum = () => {
  let [data, setData] = useState<[] | allDataInterFace[]>([]);
  const [finalNumerData, setFinalNumerData] = useState<[] | numerologyProps[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const convertToNum = async (urlArray: string[]) => {
    try {
      setLoading(true);
      const requests = urlArray.map((url) => axios.get(url));
      const responses = await axios.all(requests);
      const responseData: numerologyProps[] = responses.map(
        (response) => response.data
      );
      setFinalNumerData(responseData);
      setLoading(false);
    } catch (error) {
      throw new Error("Error while converting");
    }
  };

  useEffect(() => {
    let url =
      "https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all";
    axios
      .get(url)
      .then((res) => setData(res.data.Table))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, [finalNumerData]);

  return (
    <div>
      <center>
        <button
          onClick={() =>
            convertToNum(
              data
                .sort((a, b) => (a.ltradert > b.ltradert ? 1 : -1))
                .filter((i) => i.ltradert > 0 && i.ltradert < 5)
                .map(
                  (i) =>
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
                      .replace("2", "b")
                      .replace("3", "c")
                      .replace("4", "d")
                      .replace("5", "e")
                      .replace("6", "cc")
                      .replace("7", "nb")
                      .replace("8", "dd")
                      .replace("9", "ccc")
                )
            )
          }
        >
          Convert to Numerology
        </button>
      </center>
      {loading ? (
        "Loading..."
      ) : (
        <div className="">
          <table id="table-to-xls" className="table border-black full_table">
            <thead
              style={{
                background: "linear-gradient(270deg,#20bf55,#01baef)",
                position: "sticky",
                top: 0,
                color: "#fff",
              }}
            >
              <tr>
                <th className="border-black">Letters</th>
                <th className="border-black">Company name</th>
                <th className="border-black">T</th>
                <th className="border-black">V</th>
                <th className="border-black">C</th>
              </tr>
            </thead>

            {finalNumerData.map((i, index) => {
              return (
                <tbody className="border-black" key={index}>
                  <tr className="border-black">
                    <td className="border-black">{i.tot_letters}</td>
                    <td
                      className="border-black"
                      style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 25,
                        paddingRight: 25,
                        backgroundColor: "#F4F4F4",
                      }}
                    >
                      <table
                        className="border-black"
                        dangerouslySetInnerHTML={{ __html: i.name_g2_block }}
                      />
                    </td>
                    <td className="border-black">{i.g2tot}</td>
                    <td className="border-black">{i.g2vtot}</td>
                    <td className="border-black">{i.g2nettot}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td
                      className="border-black"
                      style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 25,
                        paddingRight: 25,
                        backgroundColor: "#F4F4F4",
                      }}
                    >
                      <table
                        className="border-black"
                        dangerouslySetInnerHTML={{ __html: i.name_g3_block }}
                        style={{ borderCollapse: "collapse" }}
                      />
                    </td>
                    <td className="border-black">{i.g3tot}</td>
                    <td className="border-black">{i.g3vtot}</td>
                    <td className="border-black">{i.g3nettot}</td>
                  </tr>
                  <tr>&nbsp;</tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default FilterLtpNum;
// import React from "react";

// const Page = () => {
//   return <div>Page</div>;
// };

// export default Page;
