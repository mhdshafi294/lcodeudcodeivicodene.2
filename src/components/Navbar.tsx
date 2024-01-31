import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import useLanguage from "../hooks/use-language";
import useMobileNavbar from "../hooks/use-mobileNav";
import { cn } from "./../lib/utils";

import { NAV_LINKS } from "../config";

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { isOpen, onOpen, onClose } = useMobileNavbar();

  // const { t, i18n } = useTranslation();
  const { i18n } = useTranslation();
  const lng = useLanguage();

  const toggleNav = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };
  const toggleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  useEffect(() => {
    i18n.changeLanguage(lng.language);
  }, [lng]);

  // const changeLanguage = () => {
  //   if (lng.language === "en") {
  //     lng.setArabic();
  //   } else {
  //     lng.setEnglish();
  //   }
  // };

  return (
    <div className="sticky w-full top-0 bg-white md:pb-6 overflow-hidden z-50">
      <div
        className={cn(
          `h-10 px-7 md:px-16 flex flex-row-reverse md:flex-row justify-between items-center my-3 relative mx-auto w-full`,
          { " md:flex-row-reverse": lng.language === "ar" }
        )}
      >
        {lng.language === "en" ? (
          <button
            onClick={() => {
              lng.setArabic();
            }}
            className="-translate-y-1"
          >
            ع
          </button>
        ) : (
          <button
            onClick={() => {
              lng.setEnglish();
            }}
          >
            EN
          </button>
        )}
        <h1 className="text-[#20462F] text-2xl font-light uppercase font-display absolute left-1/2 -translate-x-1/2">
          LUDIVINE
        </h1>
        <div
          className={cn(
            "hidden md:flex items-center justify-end  duration-500 overflow-hidden",
            {
              "w-[166px]": isSearch,
              "w-[14px]": !isSearch,
            }
          )}
        >
          <input
            type="text"
            placeholder="I am looking for..."
            className={cn(
              "outline-none border-b focus:border-b-2 border-[#c0a482] duration-500 mr-1 pl-1 py-0.5",
              { "w-36 focus": isSearch, "w-0": !isSearch }
            )}
          />
          <button className="" onClick={toggleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
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
          </button>
        </div>

        <button
          onClick={toggleNav}
          className="flex md:hidden flex-col justify-center items-center"
        >
          <span
            className={`bg-steel-500 block transition-all duration-500 ease-out h-[1.5px] w-6 rounded-sm bg-[#b9a893] ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-steel-500 block transition-all duration-500 ease-out h-[1.5px] w-6 rounded-sm my-[1.5px] bg-[#b9a893] ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>{" "}
          <span
            className={`bg-steel-500 block transition-all duration-500 ease-out h-[1.5px] w-6 rounded-sm bg-[#b9a893] ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          >
            {" "}
          </span>
        </button>
      </div>
      <hr className="border-[#897358]" />
      {/*Desktop nav start*/}
      <div className="w-full hidden md:flex justify-center items-center px-2">
        <nav className="w-full hidden md:flex justify-center items-center mt-4">
          <ul className="hidden md:flex w-full max-w-[1077px]  justify-between items-center px-2 sm:px-0">
            {NAV_LINKS.map((link) => (
              <li key={link.value}>
                <a
                  href={link.value}
                  className="uppercase font-display font-light text-[#707070] text-xs sm:text-base hover:text-[#c0a482] duration-200 hover:font-normal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/*Desktop nav end*/}
    </div>
  );
};

export default Navbar;
