import gallary1 from "@/assets/Rectangle-13.jpg";

import { Link } from "react-router-dom";

const Explore1 = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-8 mb-28 mt-24">
      <img src={gallary1} alt="" className="w-full h-[589px] object-cover" />
      <h5 className="font-display capitalize leading-10 text-3xl text-center font-extralight text-[#333] ">
        Incomparably Luxury
      </h5>
      <p className="w-4/5 text-center text-zinc-600 font-light font-['Optima nova LT Pro'] leading-7 tracking-wide font-body md:w-3/5">
        Capture her heart this Mother’s Day with the gift of Graff – the perfect
        symbol of your love and appreciation. Discover diamond bangles, rings,
        elegant pendants and earrings
      </p>
      <Link
        to={"/rings"}
        className="px-[30px] h-12 border border-[#051F10] text-center text-[#051F10] text-xs font-light font-body leading-[33px] tracking-wide flex justify-center items-center duration-500 hover:border-[#897358] hover:text-white hover: hover:bg-[#897358] capitalize"
      >
        Explore
      </Link>
    </div>
  );
};

export default Explore1;
