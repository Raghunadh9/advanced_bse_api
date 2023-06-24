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
export async function getNumerologyData(urlArray: string[]): Promise<void> {
  try {
    const requests = urlArray.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const responseData = await Promise.all(
      responses.map((response) => response.json())
    );
    console.log(responseData);
  } catch (error) {
    throw new Error("Error while converting");
  }
}
