import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Fragment } from "react";

import storyRing1 from "@/assets/ourStory/storyRing1.jpg";
import storyRing2 from "@/assets/ourStory/storyRing2.jpg";
import storyErrings from "@/assets/ourStory/storyErrings.png";
import ourStoryModel from "@/assets/ourStory/ourStoryModel.jpg";
import Button from "@/components/Button";

const OurStory = () => {
  return (
    <Fragment>
      <div className="h-[600px] bg-[url('@/assets/ourStory/storyHero.jpg')] bg-right-bottom bg-cover">
        <MaxWidthWrapper className="h-full flex flex-col md:flex-row items-center pt-16 md:pt-0">
          <p className="md:w-2/5 text-white md:text-2xl font-light font-optimaNova capitalize leading-[33px] tracking-widest text-center md:text-left">
            The company later offered its own line of diamond jewelry, that was
            inspired by ‘senses’ which was translated onto inter-wined and
            connected pieces to symbolize lifelong relationships and
            friendships.
          </p>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="my-24 mb-36 flex flex-col md:flex-row justify-between items-center w-full gap-11">
        <img src={storyRing1} alt="" className="w-[536px]" />
        <p className="text-[#434141] md:w-1/2 md:h-[194px] text-2xl font-light capitalize leading-[39px] tracking-wide text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non.
          Luctus sit libero urna viverra sed non dui elementum quam. Enim ipsum
          amet sed ultrices amet adipiscing. Eget a molestie parturient erat
          fringilla.
        </p>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="my-24 flex flex-col md:flex-row justify-between items-center w-full gap-11">
        <div>
          <h1 className="text-4xl font-display uppercase mb-8 text-center md:text-left">
            Jewelry tells eternal stories
          </h1>
          <div className="flex justify-start items-center gap-6 w-full text-center md:text-left">
            <div className="md:w-2/5">
              <h2 className="text-2xl font-display uppercase mb-3">Gold</h2>
              <p className="text-[#434141] md:text-xl font-light capitalize leading-[33px] tracking-tight">
                Lorem ipsum dolor sit amet consectetur. Dolor et volutpat
              </p>
            </div>
            <div className="md:w-2/5">
              <h2 className="text-2xl font-display uppercase mb-3">Silver</h2>
              <p className="text-[#434141] md:text-xl font-light capitalize leading-[33px] tracking-tight">
                Lorem ipsum dolor sit amet consectetur. Dolor et volutpat
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col md:flex-row justify-center items-center">
          <img src={storyRing2} alt="" className="w-[250px]" />
        </div>
      </MaxWidthWrapper>
      <div className="bg-[#1E1E1E] py-[185px] my-24">
        <MaxWidthWrapper className="flex flex-col md:flex-row justify-between items-center gap-5">
          <img src={storyErrings} alt="" className="md:w-2/5" />
          <div className="flex flex-col justify-start items-center md:items-start gap-5 md:w-2/5">
            <p className="text-white text-xl font-semibold capitalize leading-[33px] text-center md:text-left">
              Comfort
            </p>
            <h1 className="text-white text-4xl font-['Chronicle Display'] uppercase text-center md:text-left">
              ANITA’S Best Collections
            </h1>
            <p className="text-white text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur. Sed commodo pellentesque
              arcu tristique et morbi.
            </p>
            <Button
              className="bg-transparent py-4 px-8 text-white border-white mt-8"
              label="Descubre la colección"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="my-24 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/5">
          <h1 className=" text-[#20462F] text-[32px] font-display leading-[105px] text-center md:text-left">
            100% Gold
          </h1>
          <p className=" text-[#434141] text-base font-medium font-['Plus Jakarta Sans'] leading-10 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non.
            Luctus sit libero urna viverra sed non dui elementum Dolor et
            volutpat in non. Luctus sit libero urna viverra .
          </p>
        </div>
        <img src={ourStoryModel} alt="" className="h-[752px] object-cover" />
      </MaxWidthWrapper>
    </Fragment>
  );
};

export default OurStory;
