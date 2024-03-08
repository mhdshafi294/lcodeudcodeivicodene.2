import { ELEGANCE } from "../../config";

const Elegance = () => {
  return (
    <div className="w-full h-fit">
      <ul className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-[4vw]">
        {ELEGANCE.map((item) => (
          <li
            key={item.label}
            className="flex flex-col justify-start items-center gap-2 w-full sm:w-[40%]"
          >
            <div className="flex justify-center items-center w-full bg-[#000000]">
              <img
                src={item.image}
                alt=""
                className="md:h-[400px] aspect-square object-cover"
              />
            </div>
            <h6 className="text-xl sm:text-3xl font-display uppercase mt-2 mb-2 text-center font-extralight duration-500">
              {item.label}
            </h6>
            <p className="text-zinc-600 text-sm md:text-base font-light font-['Optima nova LT Pro'] capitalize tracking-wide font-body leading-7 w-full mt-0 text-center">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Elegance;
