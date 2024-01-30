import MaxWidthWrapper from "../../MaxWidthWrapper";
import { Collection_items } from "../../../config";

const Collections = () => {
  return (
    <MaxWidthWrapper className="my-20">
      <h3 className="text-[#20462F] leading-10 text-3xl font-display capitalize tracking-wide text-center">
        The House of Ludivine
      </h3>
      <h6 className="text-zinc-600 font-light font-['Optima nova LT Pro'] font-body text-sm mt-2 text-center uppercase mb-5 tracking-widest">
        FEATURED
      </h6>
      <div className="w-full flex justify-between items-start">
        {Collection_items.map((item) => (
          <div key={item.label} className="w-[300px] group">
            <img
              src={item.image}
              alt={item.label}
              className="object-cover w-full"
            />
            <h6 className="text-lg font-display uppercase mt-2 mb-2 text-center font-extralight text-[#333] group-hover:text-[#c0a482] duration-500">
              {item.label}
            </h6>
            <p className="text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize tracking-wide font-body text-sm leading-7 w-full mt-0 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Collections;
