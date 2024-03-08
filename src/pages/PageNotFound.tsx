import ourStoryModel from "@/assets/notFound.jpg";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <MaxWidthWrapper className="flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col md:flex-row justify-start items-center gap-12 w-3/5">
        <img src={ourStoryModel} alt="" className="w-full md:w-[60%]" />
        <div className="flex flex-col justify-center items-center gap-6 w-2/5">
          <h1 className="text-black text-4xl font-['Chronicle Display'] uppercase text-center md:text-left">
            404 ERROR
          </h1>
          <p className="text-[#707070] text-center md:text-left">
            This page not found
          </p>
          <Link
            to={"/"}
            className="px-[45px] w-fit py-3 border border-[#707070] text-center text-[#707070] text-sm font-light font-body leading-[33px] tracking-wide flex justify-center items-center duration-500 hover:border-[#897358] hover:text-white hover: hover:bg-[#897358] uppercase text-nowrap"
          >
            HOME PAGE
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PageNotFound;
