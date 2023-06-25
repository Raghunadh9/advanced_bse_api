import fetchAllData, { getDetails } from "@/lib";
import { allDataArrayInterFace } from "@/types";

const HomePage = async () => {
  const allData: allDataArrayInterFace = await fetchAllData();
  const isDataEmpty =
    !Array.isArray(allData.Table) || allData.Table.length < 1 || !allData.Table;
  return (
    <div>
      <center>
        <div className="">
          <div className="">You are filtereing only Percentage.</div>
          <br />

          <div className="">You Got {allData.Table.length} Data Length</div>
        </div>
      </center>
      <table className="mt-4 table w-full p-4">
        <thead
          style={{
            background: "linear-gradient(270deg,#20bf55,#01baef)",
            position: "sticky",
            top: 0,
            color: "#fff",
          }}
        >
          <tr>
            {" "}
            <th className="border border-black ">S.no</th>
            <th className="border border-black ">Name</th>
            <th className="border border-black ">Company Name</th>
            <th className="border border-black ">LTP</th>
            <th className="border border-black ">Now %</th>
            <th className="border border-black ">Tr.v</th>
            <th className="border border-black ">Z</th>
            <th className="border border-black ">M.C</th>
            <th className="border border-black ">N</th>
            <th className="border border-black ">C.I</th>
            <th className="border border-black ">SC</th>
            <th className="border border-black ">Volume</th>
            <th className="border border-black ">Max U.C</th>
          </tr>
        </thead>
        {!isDataEmpty ? (
          allData?.Table
            // .sort((a, b) => (a.trd_vol < b.trd_vol ? 1 : -1))

            .map((i, index) => {
              return (
                <tbody key={index}>
                  <tr className="border border-black ">
                    <td className="border border-black "> {index + 1}</td>
                    <td className="underline text-blue-500">
                      <a
                        href={i.NSUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {i.scripname}
                      </a>
                    </td>
                    <td className="border border-black p-2 ">
                      {i.LONG_NAME.split(" - ")[0]
                        .replaceAll("Ltd", "limited")
                        .replaceAll("LTD", "limited")
                        .replaceAll(".", " ")
                        .replaceAll("-$", " ")
                        .replaceAll("{", "")
                        .replaceAll("}", "")
                        .replaceAll("(", "")
                        .replaceAll(")", "")
                        .replaceAll("&", "and")}
                    </td>
                    <td className="border border-black ">{i.ltradert}</td>

                    <td className="border border-black p-2">
                      {i.change_percent}
                    </td>
                    <td>T.R</td>
                    <td className="border border-black p-2 underline text-blue-500">
                      {" "}
                      <a
                        href={`https://www.google.com/search?q=zauba+${i.LONG_NAME.split(
                          " - "
                        )[0]
                          .replaceAll("Ltd", "limited")
                          .replaceAll("LTD", "limited")
                          .replaceAll(".", " ")
                          .replaceAll("-$", " ")
                          .replaceAll("{", "")
                          .replaceAll("}", "")
                          .replaceAll("(", "")
                          .replaceAll(")", "")
                          .replaceAll("&", "and")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Z
                      </a>
                    </td>

                    <td className="border border-black p-2 underline text-blue-500">
                      {" "}
                      <a
                        href={`https://www.google.com/search?q=moneycontrol+${i.LONG_NAME.split(
                          " - "
                        )[0]
                          .replaceAll("Ltd", "limited")
                          .replaceAll("LTD", "limited")
                          .replaceAll(".", " ")
                          .replaceAll("-$", " ")
                          .replaceAll("{", "")
                          .replaceAll("}", "")
                          .replaceAll("(", "")
                          .replaceAll(")", "")
                          .replaceAll("&", "and")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        M.C
                      </a>
                    </td>
                    <td className="border border-black p-2 underline text-blue-500">
                      <a
                        href={`https://advancedastra.onrender.com/${i.LONG_NAME.split(
                          " - "
                        )[0]
                          .replaceAll("Ltd", "limited")
                          .replaceAll("LTD", "limited")
                          .replaceAll(".", " ")
                          .replaceAll("-$", " ")
                          .replaceAll("{", "")
                          .replaceAll("}", "")
                          .replaceAll("(", "")
                          .replaceAll(")", "")
                          .replaceAll("&", "and")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        N
                      </a>
                    </td>
                    <td className="border border-black p-2 underline text-blue-500">
                      <a
                        href={`https://chartink.com/stocks/${i.scrip_cd}.html`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        C.I
                      </a>
                    </td>
                    <td className="border border-black p-2 underline text-blue-500">
                      <a
                        href={`https://www.screener.in/company/${i.scrip_cd}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SC
                      </a>
                    </td>
                    <td className="border border-black p-2">{i.trd_vol}</td>
                    <td className="border  border-black p-2 font-bold">
                      {getDetails(i.scrip_cd)} {" %"}
                    </td>
                  </tr>
                </tbody>
              );
            })
        ) : (
          <div>Failed to load data</div>
        )}
      </table>
    </div>
  );
};

export default HomePage;
