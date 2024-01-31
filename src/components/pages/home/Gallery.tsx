import Button from "../../Button";
import MaxWidthWrapper from "../../MaxWidthWrapper";

const Gallery = () => {
  return (
    <MaxWidthWrapper className="flex flex-row-reverse justify-between items-center my-20 gap-6 md:gap-28">
      <div className="flex-grow flex flex-col justify-start items-center gap-5">
        <img src="/src/assets/gallary0.png" alt="" className="w-full" />
        <p className="w-full text-center text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize leading-7 tracking-wide font-body text-xs md:text-base">
          Capture her heart this Mother’s Day with the gift of Graff – the
          perfect symbol of your love and appreciation. Discover diamond
          bangles, rings, elegant pendants and earrings
        </p>
        <Button onClick={() => {}} label="Shop Now" className="text-xs" />
      </div>
      <div className="flex-grow flex flex-col justify-start items-center gap-5">
        <img src="/src/assets/gallary1.png" alt="" className="w-full" />
        <p className="w-full text-center text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize leading-7 tracking-wide font-body text-xs md:text-base">
          Capture her heart this Mother’s Day with the gift of Graff – the
          perfect symbol of your love and appreciation. Discover diamond
          bangles, rings, elegant pendants and earrings
        </p>
        <Button onClick={() => {}} label="Shop Now" className="text-xs" />
      </div>
    </MaxWidthWrapper>
  );
};

export default Gallery;
