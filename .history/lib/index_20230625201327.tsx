import { allDataInterFace, getDetailsProps, numerologyProps } from "@/types";

export default async function fetchAllData() {
  const res = await fetch(
    `https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all`
  );
  if (!res.ok) throw new Error("Error while fetching all data");
  return res?.json();
}
export async function getDetails(scrip_cd: number) {
  try {
    const res = await fetch(
      `https://api.bseindia.com/BseIndiaAPI/api/PriceBand/w?scripcode=${scrip_cd}`
    );
    const result: getDetailsProps = await res?.json();
    return result.PBpcUC;
  } catch (error) {
    console.log(error);
  }
}
