import { Fragment } from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import productsHero1 from "@/assets/products/productsHero1.jpg";
import productsHero2 from "@/assets/products/productsHero2.jpg";
import ProductCard from "@/components/ProductCard";
import { rings } from "@/config";
import ScrollToTop from "@/components/ScrollTop";

const Products = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <MaxWidthWrapper className="mt-14 mb-11">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-24 w-full">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-3">
            <h1 className="font-display text-primary text-[32px]">RINGS</h1>
            <p className="font-optimaNova text-wrap text-center text-[18px] md:text-left">
              Artisanal in every sense of the word, with no two the same, our
              diamond engagement rings are crafted with the same exacting
              precision and devotion as the celebrated Graff stones that have
              gone on to make history.
            </p>
          </div>
          <div className="flex justify-center md:justify-end gap-4 w-full">
            <img
              src={productsHero1}
              alt=""
              className="w-[175px] md:w-[262px] h-auto 2xl:w-[350px] 2xl:h-[450px] object-cover "
            />
            <img
              src={productsHero2}
              alt=""
              className="w-[175px] md:w-[262px] h-auto 2xl:w-[350px] 2xl:h-[450px] object-cover "
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="flex justify-center md:justify-between items-start flex-wrap gap-4">
          {rings.map((ring) => (
            <ProductCard key={ring.id} product={ring} />
          ))}
        </div>
      </MaxWidthWrapper>
    </Fragment>
  );
};

export default Products;
