import Button from "./../../Button";

const Explore1 = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-8 mb-28 mt-24">
      <img
        src="/src/assets/explore1Croped.png"
        alt=""
        className="w-full h-[589px] object-cover"
      />
      <h5 className="font-display capitalize leading-10 text-3xl text-center font-extralight text-[#333] ">
        Incomparably Luxury
      </h5>
      <p className="w-4/5 text-center text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize leading-7 tracking-wide font-body md:w-3/5">
        Capture her heart this Mother’s Day with the gift of Graff – the perfect
        symbol of your love and appreciation. Discover diamond bangles, rings,
        elegant pendants and earrings
      </p>
      <Button onClick={() => {}} label="Explore" className="capitalize px-14" />
    </div>
  );
};

export default Explore1;
