import fetchAllData from "@/lib";
import { allDataInterFace } from "@/types";

const HomePage = async () => {
  const allData: allDataInterFace[] = await fetchAllData();
  console.log(allData);
  return <div>HomePage</div>;
};

export default HomePage;
