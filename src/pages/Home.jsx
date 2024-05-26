import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Products data={data} />
      {/* FAQ */}
      <Accordian />
      <Toaster/>
    </div>
  );
};

export default Home;
