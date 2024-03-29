import { Link } from "react-router-dom";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Collection_items } from "@/config";

const Collections = () => {
  return (
    <MaxWidthWrapper className="my-20">
      <h3 className="text-[#20462F] leading-10 text-3xl font-display capitalize tracking-wide text-center">
        The House of Ludivine
      </h3>
      <h6 className="text-zinc-600 font-light font-['Optima nova LT Pro'] font-body text-sm mt-2 text-center uppercase mb-5 tracking-widest">
        FEATURED
      </h6>
      <div className="w-full grid md:grid-cols-4 gap-3 md:gap-8 grid-cols-2">
        {Collection_items.map((item) => (
          <Link
            to={item.href}
            key={item.label}
            className="group flex flex-col justify-start items-center mb-2 flashing"
          >
            <div className="w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.label}
                className="object-cover w-full aspect-square group-hover:scale-150  duration-700 ease-in-out"
              />
            </div>
            <h6 className=" md:text-lg font-display uppercase mt-2 mb-2 text-center font-extralight text-[#333] group-hover:text-[#c0a482] duration-500">
              {item.label}
            </h6>
            <p className="text-zinc-600 font-light font-['Optima nova LT Pro'] tracking-wide font-body md:text-sm leading-7 w-full mt-0 text-center text-xs">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Collections;
