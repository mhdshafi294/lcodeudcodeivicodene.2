import { CATEGORIES } from "../../../config";

const Categories = () => {
  return (
    <div className="w-full mt-11 mb-[70px] flex flex-col justify-start items-center mx-auto max-w-[968px]">
      <h3 className="text-[#20462F] text-3xl leading-10 font-display capitalize tracking-wide mb-6 ">
        Categories
      </h3>
      <div className="flex justify-between w-full items-center">
        {CATEGORIES.map((category) => (
          <a
            className="flex flex-col justify-start items-center gap-0 w-52 group"
            key={category.label}
            href={category.href}
          >
            <img src={category.image} alt="" />
            <h6 className="text-[#20462F] text-base font-display uppercase duration-200 group-hover:text-[#c0a482]">
              {category.label}
            </h6>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Categories;
