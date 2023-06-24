import fetchAllData from "@/lib";
import { allDataInterFace } from "@/types";

const HomePage = async () => {
  const allData: allDataInterFace[] = await fetchAllData();
  console.log(typeof allData);
  return (
    <div>
      <table className="mt-4 table w-full">
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
            <th className="border border-black ">Z</th>
            <th className="border border-black ">M.C</th>
            <th className="border border-black ">N</th>
            <th className="border border-black ">C.I</th>
            <th className="border border-black ">SC</th>
            <th className="border border-black ">Volume</th>
            <th className="border border-black ">Details</th>
          </tr>
        </thead>
        {/* {allData
          // .sort((a, b) => (a.trd_vol < b.trd_vol ? 1 : -1))

          .map((i, index) => {
            return (
              <tbody key={index}>
                <tr className="border border-black ">
                  <td className="border border-black "> {index + 1}</td>
                  <td className="underline text-blue-500">
                    <a href={i.NSUrl} target="_blank" rel="noopener noreferrer">
                      {i.scripname}
                    </a>
                  </td>
                  <td className="border border-black p-2 ">
                    {i.LONG_NAME.split("-")[0]}
                  </td>
                  <td className="border border-black ">{i.ltradert}</td>

                  <td className="border border-black p-2">
                    {i.change_percent}
                  </td>
                  <td className="border border-black p-2 underline text-blue-500">
                    {" "}
                    <a
                      href={`https://www.google.com/search?q=zauba+${
                        i.LONG_NAME.split(" - ")[0]
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Z
                    </a>
                  </td>

                  <td className="border border-black p-2 underline text-blue-500">
                    {" "}
                    <a
                      href={`https://www.google.com/search?q=moneycontrol+${
                        i.LONG_NAME.split(" - ")[0]
                      }`}
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
                  <td className="border  border-black p-2 cursor-pointer">
                    <button
                    // size="sm"
                    // onClick={() => detailHandler(i.scrip_cd)}
                    >
                      <a className="px-3 py-1 relative rounded group  text-white font-medium inline-block">
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span className="relative">D</span>
                      </a>
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })} */}
      </table>
    </div>
  );
};

export default HomePage;
