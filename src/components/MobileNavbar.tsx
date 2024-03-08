import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

import useLanguage from "../hooks/use-language";
import useMobileNavbar from "../hooks/use-mobileNav";

import { NAV_LINKS } from "../config";
import { useEffect } from "react";

const MobileNavbar: React.FC = () => {
  const { isOpen } = useMobileNavbar();
  const { i18n } = useTranslation();
  const lng = useLanguage();

  useEffect(() => {
    i18n.changeLanguage(lng.language);
  }, [lng]);

  return (
    <div>
      <div
        className={cn(
          "md:hidden fixed top-[64px] left-0 h-full w-screen bg-black z-40",
          isOpen ? "bg-opacity-50" : "bg-opacity-0 hidden"
        )}
      ></div>
      <div
        className={cn(
          "md:hidden h-screen fixed top-[64px] pt-[11px] left-0 bg-white px-4 flex flex-col justify-start items-start duration-500 z-50",
          isOpen ? "w-[80%]" : "w-[0%] -translate-x-[120%]"
        )}
      >
        <div
          className={cn(
            "flex justify-start items-baseline duration-500 relative w-[80%]"
          )}
        >
          <div className="translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 19"
              fill="none"
            >
              <g clipPath="url(#clip0_4_39)">
                <path
                  d="M8.06473 0C10.2918 0 12.3076 0.836198 13.7671 2.18822C15.2265 3.54023 16.1291 5.40792 16.1291 7.47105C16.1291 9.4516 15.2973 11.2517 13.9398 12.5887C13.9645 12.6056 13.9884 12.6243 14.0109 12.645L19.8167 18.0161C20.0599 18.2402 20.0613 18.6048 19.8191 18.8302C19.5772 19.0557 19.1837 19.0566 18.9405 18.8325L13.1347 13.4614C13.0978 13.4274 13.0666 13.3903 13.0407 13.3509C11.6699 14.3477 9.94225 14.9422 8.06456 14.9422C5.83753 14.9422 3.82131 14.106 2.36189 12.754C0.902627 11.402 0 9.53417 0 7.47105C0 5.40792 0.902627 3.54023 2.36205 2.18822C3.82148 0.836353 5.8377 0 8.06473 0ZM12.8654 3.02364C11.6368 1.88547 9.93958 1.18147 8.06473 1.18147C6.18987 1.18147 4.49244 1.88547 3.26384 3.02364C2.03525 4.16182 1.27533 5.73417 1.27533 7.47105C1.27533 9.20792 2.03525 10.7804 3.26384 11.9186C4.49227 13.0568 6.1897 13.7608 8.06473 13.7608C9.93958 13.7608 11.6368 13.0568 12.8654 11.9186C14.094 10.7806 14.854 9.20807 14.854 7.47105C14.854 5.73417 14.094 4.16182 12.8654 3.02364Z"
                  fill="#20462F"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_39">
                  <rect width="20" height="19" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <input
            type="text"
            placeholder="I am looking for..."
            className={cn(
              " border-b focus:border-b-2 border-[#c0a482] duration-500 mr-1 ml-4 pl-1 pt-5 pb-2 outline-none",
              isOpen ? "w-[75%]" : "w-[0%] -translate-x-[120%] opacity-0"
            )}
          />
        </div>
        <hr className=" w-full border-zinc-500 mt-2 mb-3" />
        <ul
          className={cn(
            "flex flex-col justify-start items-start gap-4 ml-2 duration-500",
            isOpen ? "" : "-translate-x-[120%]"
          )}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.value} className={""}>
              <a
                href={link.value}
                className={cn(
                  "uppercase text-sm font-thin hover:text-[#c0a482] duration-200 hover:font-normal text-zinc-500  font-['Optima nova LT Pro'] tracking-wide font-body leading-7"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <hr className=" w-full border-zinc-500 mt-2 mb-3" />
        {lng.language === "en" ? (
          <button
            onClick={() => {
              lng.setArabic();
            }}
            className={cn(
              "ml-2 uppercase text-lg  hover:text-[#c0a482] hover:font-normal text-zinc-500  font-['Optima nova LT Pro'] tracking-wide font-body leading-7 duration-500",
              isOpen ? "" : "-translate-x-[120%]"
            )}
          >
            عربي
          </button>
        ) : (
          <button
            onClick={() => {
              lng.setEnglish();
            }}
            className={cn(
              "ml-2 uppercase text-sm font-thin hover:text-[#c0a482] duration-500 hover:font-normal text-zinc-500  font-['Optima nova LT Pro'] tracking-wide font-body leading-7",
              isOpen ? "" : "-translate-x-[120%]"
            )}
          >
            English
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
