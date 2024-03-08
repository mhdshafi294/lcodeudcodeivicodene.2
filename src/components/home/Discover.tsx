import explore2Full from "@/assets/explore2.jpg";

import MaxWidthWrapper from "../MaxWidthWrapper";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <MaxWidthWrapper className="flex flex-col-reverse md:flex-row md:justify-between items-center mt-10">
      <div className="flex justify-between items-center">
        <div className="w-full md:w-4/5 flex flex-col justify-center items-center md:items-start gap-8 md:gap-6">
          <h3 className="mt-8 text-green-900 text-[32px] font-display uppercase">
            LUDIVINE
          </h3>
          <p className="w-full md:w-11/12 text-center md:text-left text-zinc-600 font-light font-['Optima nova LT Pro']  leading-7 tracking-wide">
            Beautifully embodying transformation, the Graff Butterfly collection
            comprises precious talismans, reminding the wearer of their
            strength, freedom and opportunity to fly.
          </p>
          <Link
            to={"/rings"}
            className="px-[30px] h-12 border border-[#051F10] text-center text-[#051F10] text-xs font-light font-body leading-[33px] tracking-wide flex justify-center items-center duration-500 hover:border-[#897358] hover:text-white hover: hover:bg-[#897358] uppercase"
          >
            Discover
          </Link>
        </div>
      </div>
      <img
        src={explore2Full}
        alt=""
        className="w-[331px] lg:h-[937px] md:w-[331px] lg:w-[663px] md:h-auto object-cover "
      />
    </MaxWidthWrapper>
  );
};

export default Discover;
