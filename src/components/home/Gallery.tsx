import gallary0 from "@/assets/gallary0.jpg";
import gallary1 from "@/assets/gallary1.jpg";

import MaxWidthWrapper from "../MaxWidthWrapper";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <MaxWidthWrapper className="flex flex-row-reverse justify-between items-center my-20 gap-6 md:gap-28">
      <div className="flex-grow flex flex-col justify-start items-center gap-5">
        <img src={gallary0} alt="" className="w-full" />
        <p className="w-full text-center text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize leading-7 tracking-wide font-body text-xs md:text-base">
          Capture her heart this Mother’s Day with the gift of Graff – the
          perfect symbol of your love and appreciation. Discover diamond
          bangles, rings, elegant pendants and earrings
        </p>
        <Link
          to={"/rings"}
          className="px-[30px] h-12 border border-[#051F10] text-center text-[#051F10] text-xs font-light font-body leading-[33px] tracking-wide flex justify-center items-center duration-500 hover:border-[#897358] hover:text-white hover: hover:bg-[#897358] uppercase"
        >
          Shop Now
        </Link>
      </div>
      <div className="flex-grow flex flex-col justify-start items-center gap-5">
        <img src={gallary1} alt="" className="w-full" />
        <p className="w-full text-center text-zinc-600 font-light font-['Optima nova LT Pro'] leading-7 tracking-wide font-body text-xs md:text-base">
          Capture her heart this Mother’s Day with the gift of Graff – the
          perfect symbol of your love and appreciation. Discover diamond
          bangles, rings, elegant pendants and earrings
        </p>
        <Link
          to={"/rings"}
          className="px-[30px] h-12 border border-[#051F10] text-center text-[#051F10] text-xs font-light font-body leading-[33px] tracking-wide flex justify-center items-center duration-500 hover:border-[#897358] hover:text-white hover: hover:bg-[#897358] uppercase"
        >
          Shop Now
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Gallery;
