import Categories from "./Categories";
import Explore1 from "./Explore1";
import Hero from "./Hero";
import Discover from "./Discover";
import Collections from "./Collections";
import Gallery from "./Gallery";
import Explore2 from "./Explore2";
// import Elegance from "./Elegance";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="w-full flex justify-center items-center mt-9 mb-11">
        <hr className=" w-full max-w-[1280px] mx-3 border-[#E7DDCD]" />
      </div>
      <Categories />
      <Gallery />
      <Explore1 />
      <Discover />
      <Collections />
      {/* <Elegance /> */}
      <Explore2 />
    </div>
  );
};

export default Home;
