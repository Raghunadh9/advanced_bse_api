import fetchAllData from "@/lib";

const HomePage = async () => {
  const allData: {}[] = await fetchAllData();
  console.log(allData);
  return <div>HomePage</div>;
};

export default HomePage;
