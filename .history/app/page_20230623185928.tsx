import fetchAllData from "@/lib";
import { allDataInterFace } from "@/types";

const HomePage = async () => {
  const allData: allDataInterFace[] = await fetchAllData();
  // console.log(allData);
  return <div></div>;
};

export default HomePage;
