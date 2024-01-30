const Elegance = () => {
  return (
    <div className="w-full h-fit">
      <ul className="flex justify-center items-center gap-[4vw]">
        <li className="flex flex-col justify-start items-center gap-2 w-[40%]">
          <div className="flex justify-center items-center w-full bg-[#051F10]">
            <img src="/src/assets/blackR.png" alt="" className="h-[400px]" />
          </div>
          <h6 className="text-3xl font-display uppercase mt-2 mb-2 text-center font-extralight duration-500">
            Ring
          </h6>
          <p className="text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize tracking-wide font-body leading-7 w-full mt-0 text-center">
            Discover our exemplary jewellery creations at your nearest Graff
            boutique.
          </p>
        </li>
        <li className="flex flex-col justify-start items-center gap-2 w-[40%]">
          <div className="flex justify-center items-center w-full bg-[#051F10]">
            <img src="/src/assets/blackL.png" alt="" className="h-[400px]" />
          </div>
          <h6 className="text-3xl font-display uppercase mt-2 mb-2 text-center font-extralight duration-500">
            Bracelet
          </h6>
          <p className="text-zinc-600 font-light font-['Optima nova LT Pro'] capitalize tracking-wide font-body leading-7 w-full mt-0 text-center">
            Discover our exemplary jewellery creations at your nearest Graff
            boutique.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Elegance;
