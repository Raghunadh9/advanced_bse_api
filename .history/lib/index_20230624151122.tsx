import { allDataInterFace, getDetailsProps, numerologyProps } from "@/types";

export default async function fetchAllData() {
  const res = await fetch(
    `https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all`
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
export async function getNumerologyData(url: string) {
  // function removeNonAlphabeticChars(inputString: string) {
  //   var pattern = /[^a-zA-Z]/g; // Matches any character that is not a letter
  //   return inputString.replace(pattern, "");
  // }
  // removeNonAlphabeticChars(url);
  // const res = await fetch(url);
  // if (!res.ok) throw new Error("Error while fetching");
  // const result: numerologyProps = await res.json();
  // return <h1>{result.name_g1_block}</h1>;
  return <h1>{url}</h1>;
}
