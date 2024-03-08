import { HERO_IMGS } from "../../config";
// import { useIndex } from "../../../config/useIndex";

const Hero = () => {
  // const { HERO_IMGS } = useIndex();

  console.log("HERO_IMGS", HERO_IMGS);
  return (
    <div className="w-full flex flex-col justify-start items-center mb-20">
      <div className="w-full h-[720px] sm:h-[589px]">
        <img
          src={HERO_IMGS[1].value}
          alt={"item.label"}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="w-full text-center text-[#41594b] text-3xl leading-10 font-display font-extralight md:mt-8 mt-8 capitalize">
        elegant luxury
      </h2>
      {/* Need to fix the body font */}
      <p className="w-4/5 md:w-3/5 text-center text-zinc-600 font-light font-['Optima nova LT Pro'] leading-7 tracking-wide font-body mt-8">
        Capture her heart this Mother’s Day with the gift of Graff – the perfect
        symbol of your love and appreciation. Discover diamond bangles, rings,
        elegant pendants and earrings that celebrate the incomparable beauty of
        diamonds.
      </p>
    </div>
  );
};

export default Hero;
