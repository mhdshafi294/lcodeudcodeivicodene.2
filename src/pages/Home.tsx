import Categories from "../components/home/Categories";
import Explore1 from "../components/home/Explore1";
import Hero from "../components/home/Hero";
import Discover from "../components/home/Discover";
import Collections from "../components/home/Collections";
import Gallery from "../components/home/Gallery";
import Explore2 from "../components/home/Explore2";
import { Fragment } from "react";
// import Elegance from "./Elegance";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <div className="w-full flex justify-center items-center mt-9 mb-11">
        <hr className=" w-full max-w-[1280px] mx-3 border-[#E7DDCD]" />
      </div>
      <Categories />
      <Gallery />
      <Explore1 />
      <Discover />
      <Collections />
      <Explore2 />
    </Fragment>
  );
};

export default Home;
