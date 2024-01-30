import Button from "../../Button";

const Explore2 = () => {
  return (
    <div className='className="w-full h-[503px] my-20 bg-[#D9D9D9]'>
      <div className="flex justify-start items-center gap-36 mx-auto max-w-screen-xl">
        <div className="flex justify-start items-center w-2/5">
          <div className=" flex flex-col justify-center items-start gap-4">
            <h3 className="text-[#20462F] font-light font-display text-[32px] uppercase">
              LUDIVINE
            </h3>
            <p className="text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize tracking-wide font-body leading-7">
              Beautifully embodying transformation, the Graff Butterfly
              collection comprises precious talismans, reminding the wearer of
              their strength, freedom and opportunity to fly.
            </p>
            <Button
              onClick={() => {}}
              label="Explore"
              className="capitalize px-14 text-white bg-[#051F10] border-0 mt-6"
            />
          </div>
        </div>
        <img
          src="/src/assets/explore22.png"
          alt="white gold ring"
          className="w-[438px] h-[420px]"
        />
      </div>
    </div>
  );
};

export default Explore2;
