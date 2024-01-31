import MaxWidthWrapper from "../../MaxWidthWrapper";
import Button from "../../Button";

const Discover = () => {
  return (
    <MaxWidthWrapper className="flex flex-col-reverse md:flex-row md:justify-between items-center mt-10 px-0 max-w-full md:max-w-[92.5%]">
      <div className="flex justify-center items-center">
        <div className="w-4/5 flex flex-col justify-center items-center md:items-start gap-8 md:gap-6">
          <h3 className="font-display capitalize leading-10 text-3xl text-center font-extralight text-[#333] mt-8">
            LUDIVINE
          </h3>
          <p className="w-full md:w-11/12 text-center md:text-left text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize leading-7 tracking-wide font-body ">
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
        className="w-[331px] lg:h-[937px] md:w-[331px] lg:w-[663px] md:h-auto object-cover "
      />
    </MaxWidthWrapper>
  );
};

export default Discover;
