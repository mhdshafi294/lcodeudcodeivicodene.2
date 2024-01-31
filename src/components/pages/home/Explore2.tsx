import Button from "../../Button";

const Explore2 = () => {
  return (
    <div className="w-full md:h-[503px] my-20 bg-[#D9D9D9] flex justify-center items-center">
      <div className="max-w-full flex flex-col-reverse gap-5 sm:gap-0 sm:flex-row justify-between items-center mx-auto sm:w-[80%] md:max-w-screen-xl my-4">
        <div className="flex justify-start items-center md:w-2/5">
          <div className=" flex flex-col justify-center items-center sm:items-start gap-4">
            <h3 className="text-[#20462F] font-light font-display text-[32px] uppercase text-center sm:text-left">
              LUDIVINE
            </h3>
            <p className="text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize tracking-wide font-body leading-7 text-center sm:text-left w-4/5">
              Beautifully embodying transformation, the Graff Butterfly
              collection comprises precious talismans, reminding the wearer of
              their strength, freedom and opportunity to fly.
            </p>
            <Button
              onClick={() => {}}
              label="Explore"
              className="capitalize px-14 text-white bg-[#051F10] border-0 my-6"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src="/src/assets/explore22.png"
            alt="white gold ring"
            className="h-[150px] md:h-[200px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore2;
