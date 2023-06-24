import { allDataInterFace, getDetailsProps, numerologyProps } from "@/types";

export default async function fetchAllData() {
  const res = await fetch(
    `https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all`,
    { next: { revalidate: 6000 } }
  );
  if (!res.ok) throw new Error("Error while fetching all data");
  return res.json();
}
export async function getDetails(scrip_cd: number) {
  const res = await fetch(
    `https://api.bseindia.com/BseIndiaAPI/api/PriceBand/w?scripcode=${scrip_cd}`
  );
  if (!res.ok) throw new Error("Error while fetching mini data");
  const result: getDetailsProps = await res.json();
  return <span>{result.PBpcUC}</span>;
}
export async function getNumerologyData(allDataName: string[]) {
  const res = await fetch(`https://phinzi.com/convert?name=${allDataName}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Error while fetching numerology data");
  const result: numerologyProps = await res.json();
  //   // const requests = allDataName.map((url) => fetch(url));
  //   // const responses = await fetch.all(requests);
  //   // const responseData = responses.map((response) => response.data);
  //  const result=await Promise.all(allDataName.map(url=>fetch(url))).then(res=>{
  //   Promise.all(res.map(r=>r.json()))
  //  })
  console.log(result);
  // return (
  //   <table id="table-to-xls" className="table border-black full_table">
  //     <thead
  //       style={{
  //         background: "linear-gradient(270deg,#20bf55,#01baef)",
  //         position: "sticky",
  //         top: 0,
  //         color: "#fff",
  //       }}
  //     >
  //       <tr>
  //         <th className="border-black">Letters</th>
  //         <th className="border-black">Company name</th>
  //         <th className="border-black">T</th>
  //         <th className="border-black">V</th>
  //         <th className="border-black">C</th>
  //       </tr>
  //     </thead>
  //     <tbody className="border-black" key={result.name_g1_block}>
  //       <tr className="border-black">
  //         <td className="border-black">{result.tot_letters}</td>
  //         <td
  //           className="border-black"
  //           style={{
  //             paddingTop: 10,
  //             paddingBottom: 10,
  //             paddingLeft: 25,
  //             paddingRight: 25,
  //             backgroundColor: "#F4F4F4",
  //           }}
  //         >
  //           <table
  //             className="border-black"
  //             dangerouslySetInnerHTML={{ __html: result.name_g2_block }}
  //           />
  //         </td>
  //         <td className="border-black">{result.g2tot}</td>
  //         <td className="border-black">{result.g2vtot}</td>
  //         <td className="border-black">{result.g2nettot}</td>
  //       </tr>
  //       <tr>
  //         <td></td>
  //         <td
  //           className="border-black"
  //           style={{
  //             paddingTop: 10,
  //             paddingBottom: 10,
  //             paddingLeft: 25,
  //             paddingRight: 25,
  //             backgroundColor: "#F4F4F4",
  //           }}
  //         >
  //           <table
  //             className="border-black"
  //             dangerouslySetInnerHTML={{ __html: result.name_g3_block }}
  //             style={{ borderCollapse: "collapse" }}
  //           />
  //         </td>
  //         <td className="border-black">{result.g3tot}</td>
  //         <td className="border-black">{result.g3vtot}</td>
  //         <td className="border-black">{result.g3nettot}</td>
  //       </tr>
  //       <tr>&nbsp;</tr>
  //     </tbody>
  //   </table>
  // );
}
