import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import ScrollToTop from "@/components/ScrollTop";

import { rings } from "@/config";
import { cn } from "@/lib/utils";
import { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { productId } = useParams();

  // Format the price above to USD using the locale, style, and currency.
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Fragment>
      <ScrollToTop />
      <MaxWidthWrapper className="mt-6 mb-12">
        <Link
          to="/rings"
          className="flex justify-start items-center gap-2 text-black text-base font-light w-12 group mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            className=" group-hover:stroke-[#897358] duration-500 group-hover:translate-x-[-5px]"
          >
            <path
              d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM2.5 5.25H1V6.75H2.5V5.25Z"
              fill="black"
            />
          </svg>
          <span className="group-hover:text-[#897358] duration-500">Back</span>
        </Link>
        <div className="w-full flex flex-col md:flex-row justify-start items-stretch gap-11">
          {activeIndex === 0 ? (
            <img src={rings[+productId!.slice(1)].gold.imgs[1]} alt="" />
          ) : (
            <img src={rings[+productId!.slice(1)].silver.imgs[1]} alt="" />
          )}
          <div className="flex flex-col justify-between items-start">
            <h1 className="text-[#161616] text-[27px] font-display uppercase mb-3">
              Figure Ring
            </h1>
            {activeIndex === 0 ? (
              <p className="text-2xl font-normal font-optimaNova capitalize leading-7 tracking-widest">
                {USDollar.format(rings[+productId!.slice(1)].gold.price)}
              </p>
            ) : (
              <p className="text-2xl font-normal font-optimaNova capitalize leading-7 tracking-widest">
                {USDollar.format(rings[+productId!.slice(1)].silver.price)}
              </p>
            )}
            <h2 className="text-[#999494] text-lg font-display uppercase tracking-[3px] mt-6 mb-3">
              PRODUCT DETAILS
            </h2>
            <table className="w-full xl:w-4/5">
              <tbody className="text-[17px] font-light font-optimaNova capitalize leading-7 tracking-wider">
                <tr className="bg-[#F6F3EB]">
                  <td className=" pl-10 py-1">Length</td>
                  <td>~2.4 cm/0.8 inches</td>
                </tr>
                <tr className="">
                  <td className="pl-10 py-3">Gemstone</td>
                  <td>Alpa System</td>
                </tr>
                <tr className="bg-[#F6F3EB]">
                  <td className="pl-10 py-1">Metal</td>
                  {activeIndex === 0 ? (
                    <td className="">Yellow gold</td>
                  ) : (
                    <td className="">936 Silver</td>
                  )}
                </tr>
              </tbody>
            </table>
            {activeIndex === 0 ? (
              <h3 className="text-[#707070] text-[17px] font-light font-optimaNova capitalize leading-7 tracking-wider mb-2 mt-5 text-center md:text-left mx-auto md:mx-0">
                Yellow gold
              </h3>
            ) : (
              <h3 className="text-[#707070] text-[17px] font-light font-optimaNova capitalize leading-7 tracking-wider mb-2 mt-5 text-center md:text-left mx-auto md:mx-0">
                Sterling Silver
              </h3>
            )}
            {activeIndex === 0 ? (
              <p className="text-[17px] font-light font-optimaNova capitalize leading-7 tracking-wider w-full xl:w-4/5 text-center md:text-left">
                {rings[+productId!.slice(1)].gold.description}
              </p>
            ) : (
              <p className="text-[17px] font-light font-optimaNova capitalize leading-7 tracking-wider w-full xl:w-4/5 text-center md:text-left">
                {rings[+productId!.slice(1)].silver.description}
              </p>
            )}
            <div className="flex gap-2 mt-3 mx-auto md:mt-1 md:mx-0">
              <button
                onClick={() => setActiveIndex(0)}
                className={cn(
                  "w-4 h-4 rounded-full shadow bg-gradient-to-b from-[#fbe5b1] to-[#c8b484]",
                  { "outline outline-offset-2 outline-1": activeIndex === 0 }
                )}
              ></button>
              <button
                onClick={() => setActiveIndex(1)}
                className={cn(
                  "w-4 h-4 rounded-full shadow bg-gradient-to-b from-zinc-300 to-zinc-400",
                  { "outline outline-offset-2 outline-1": activeIndex === 1 }
                )}
              ></button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <h4 className="text-black text-[32px] font-display uppercase mb-5">
          YOU MAY ALSO Like
        </h4>
        <div className="flex justify-center md:justify-between items-start flex-wrap gap-4">
          {rings.slice(0, 4).map((ring) => (
            <ProductCard key={ring.id} product={ring} />
          ))}
        </div>
      </MaxWidthWrapper>
    </Fragment>
  );
};

export default ProductDetail;
