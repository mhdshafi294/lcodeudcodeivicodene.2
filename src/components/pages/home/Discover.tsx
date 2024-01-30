import MaxWidthWrapper from "../../MaxWidthWrapper";
import Button from "../../Button";

const Discover = () => {
  return (
    <MaxWidthWrapper className="flex justify-between items-center mt-10">
      <div className="flex justify-center items-center">
        <div className="w-3/5 flex flex-col justify-center items-start gap-8">
          <h3 className="text-[#20462F] font-light font-display text-[32px] uppercase">
            LUDIVINE
          </h3>
          <p className="text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize tracking-wide font-body leading-7">
            Beautifully embodying transformation, the Graff Butterfly collection
            comprises precious talismans, reminding the wearer of their
            strength, freedom and opportunity to fly.
          </p>
          <Button onClick={() => {}} label="Discover" />
        </div>
      </div>
      <img
        src="/src/assets/explore2Full.jpeg"
        alt=""
        className="w-[663px] h-[937px] object-cover"
      />
    </MaxWidthWrapper>
  );
};

export default Discover;
