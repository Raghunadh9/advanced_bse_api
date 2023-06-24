import { allDataInterFace } from "@/types";

export default async function fetchAllData() {
  const res = await fetch(
    `https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all`,
    { next: { revalidate: 6000 } }
  );
  if (!res.ok) throw new Error("Error while fetching all data");

  return res.json();
}
