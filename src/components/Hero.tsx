import { HERO_IMGS } from "../config";

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center mb-8">
      <div className="w-full h-[589px] mt-6">
        <img
          src={HERO_IMGS[0].value}
          alt="hero"
          className="object-fill w-full h-full"
        />
      </div>
      <h2 className="w-full text-center text-[#20462F] text-[41px] font-display mt-16 uppercase">
        Ludivine
      </h2>
      {/* Need to fix the body font */}
      <p className="mt-10 text-center text-black text-2xl capitalize w-[1000px] optimaNova">
        Capture her heart this Mother’s Day with the gift of Graff – the perfect
        symbol of your love and appreciation. Discover diamond bangles, rings,
        elegant pendants and earrings that celebrate the incomparable beauty of
        diamonds.
      </p>
    </div>
  );
};

export default Hero;
