import { HERO_IMGS } from "../../../config";

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center mb-20">
      <div className="w-full h-[589px]">
        <img
          src={HERO_IMGS[1].value}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="w-full text-center text-[#41594b] text-5xl leading-10 font-display font-extralight mt-20 capitalize">
        elegant luxury
      </h2>
      {/* Need to fix the body font */}
      <p className="mt-10 text-xl capitalize w-[1000px] font-body text-center text-zinc-600 text-[22px] font-light font-['Optima nova LT Pro'] capitalize tracking-wide  font-body leading-7">
        Capture her heart this Mother’s Day with the gift of Graff – the perfect
        symbol of your love and appreciation. Discover diamond bangles, rings,
        elegant pendants and earrings that celebrate the incomparable beauty of
        diamonds.
      </p>
    </div>
  );
};

export default Hero;
