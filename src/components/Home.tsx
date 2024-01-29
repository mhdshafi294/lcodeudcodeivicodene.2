import Category from "./Category";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="w-full flex justify-center items-center mt-9 mb-11">
        <hr className=" w-full max-w-[1280px] mx-3 border-[#E7DDCD]" />
      </div>
      <Category />
    </div>
  );
};

export default Home;
