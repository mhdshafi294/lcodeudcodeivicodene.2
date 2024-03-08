import { cn } from "@/lib/utils";
import { useState } from "react";

import { rings } from "@/config";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: (typeof rings)[0];
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-[300px] 2xl:w-[350px] justify-center items-center gap-[10px] flex mb-9 group">
      {product.topSeller ? (
        <div className="w-[120px] h-8 p-2.5 flex justify-center items-center absolute start-0 top-6 bg-[#E8CB89] text-[#895E1B] text-[10px] font-display uppercase tracking-widest group-hover:w-[140px] duration-500">
          TOP seller
        </div>
      ) : null}
      <div className="w-full h-full flex flex-col items-start">
        <div className="h-[366px] 2xl:h-[420px] w-full bg-[#eae1d3] bg-opacity-20 overflow-hidden flex flex-col justify-center items-center">
          <div
            className="whitespace-nowrap duration-500 w-[222px] 2xl:w-[250px]"
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            <img
              src={product.gold.imgs[0]}
              alt=""
              className="inline-flex w-full"
            />
            <img
              src={product.silver.imgs[0]}
              alt=""
              className="inline-flex w-full"
            />
          </div>
        </div>
        <Link
          to={`/rings/${product.id}`}
          className="text-neutral-900 text-base font-display uppercase tracking-[3.14px] mt-5 group-hover:text-goldy duration-300"
        >
          {product.name}
        </Link>
        <Link
          to={`/rings/${product.id}`}
          className="text-zinc-600 text-base font-light font-optimaNova leading-8 tracking-[3.30px] hover:text-goldy duration-300"
        >
          Details
        </Link>
        <div className="flex gap-2 mt-1">
          <button
            onClick={() => setActiveIndex(0)}
            className={cn(
              "w-4 h-4 rounded-full shadow bg-gradient-to-b from-[#fbe5b1] to-[#c8b484] hover:opacity-80 duration-300",
              { "outline outline-offset-2 outline-1": activeIndex === 0 }
            )}
          ></button>
          <button
            onClick={() => setActiveIndex(1)}
            className={cn(
              "w-4 h-4 rounded-full shadow bg-gradient-to-b from-zinc-300 to-zinc-400 hover:opacity-80 duration-300",
              { "outline outline-offset-2 outline-1": activeIndex === 1 }
            )}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
