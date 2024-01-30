import { FOOTER_LINKS } from "../config";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <MaxWidthWrapper className="mt-20 sm:h-[330px] md:max-w-screen-xl">
      <div className="flex justify-between items-start w-full">
        <div className="flex justify-start items-start gap-20">
          <div className="flex flex-col justify-start items-start gap-2">
            {FOOTER_LINKS[0].map((linkItem) => (
              <a
                key={linkItem.value}
                href={linkItem.value}
                className="text-zinc-900 font-light font-['Optima nova LT Pro'] tracking-wide font-body leading-7 uppercase hover:text-[#897358] duration-500"
              >
                {linkItem.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            {FOOTER_LINKS[1].map((linkItem) => (
              <a
                key={linkItem.value}
                href={linkItem.value}
                className="text-zinc-900 font-light font-['Optima nova LT Pro'] tracking-wide font-body leading-7 uppercase hover:text-[#897358] duration-500"
              >
                {linkItem.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            {FOOTER_LINKS[2].map((linkItem) => (
              <a
                key={linkItem.value}
                href={linkItem.value}
                className="text-zinc-900 font-light font-['Optima nova LT Pro'] tracking-wide font-body leading-7 uppercase hover:text-[#897358] duration-500"
              >
                {linkItem.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col justify-start items-start"></div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h6 className="text-black text-lg font-light font-body font-['Optima nova LT Pro'] leading-7">
            Non blanditiis ex necessitatibus.
          </h6>
          <form className="flex mt-[10px] mb-[20px] h-[48px]">
            <input
              type="text"
              className="w-[249px] h-full border border-black mr-[9px]"
            />
            <Button
              onClick={() => {}}
              label="Send"
              className="capitalize border-0 bg-[#051F10] text-white px-4 h-full text-base font-light font-['Optima nova LT Pro'] leading-10"
            />
          </form>
          <ul className="flex justify-start items-center gap-6">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="none"
                className="group"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.02558 22.5578C5.31628 21.4555 6.20233 19.8856 6.63488 18.2756C6.8093 17.641 7.52093 15.0423 7.52093 15.0423C7.98139 15.8907 9.34186 16.6055 10.7721 16.6055C15.0558 16.6055 18.1395 12.8377 18.1395 8.14136C18.1395 3.64542 14.3093 0.285156 9.38372 0.285156C3.25116 0.285156 0 4.22662 0 8.51547C0 10.5062 1.1093 12.9914 2.8814 13.7797C3.14651 13.9066 3.29302 13.8465 3.35581 13.5926C3.39767 13.3989 3.64186 12.4837 3.75349 12.0494C3.78837 11.9158 3.77442 11.7889 3.65581 11.6553C3.06977 10.9739 2.59535 9.71795 2.59535 8.55555C2.59535 5.55603 4.96744 2.65003 9.00698 2.65003C12.4953 2.65003 14.9372 4.92139 14.9372 8.18145C14.9372 11.8624 12.9977 14.4143 10.4721 14.4143C9.07674 14.4143 8.03023 13.312 8.37209 11.9559C8.77674 10.3392 9.55116 8.59563 9.55116 7.43324C9.55116 6.39109 8.97209 5.52263 7.75116 5.52263C6.32093 5.52263 5.18372 6.9322 5.18372 8.82945C5.18372 10.0319 5.60232 10.8469 5.60232 10.8469C5.60232 10.8469 4.19302 16.5454 3.93488 17.6076C3.64884 18.7833 3.76046 20.4334 3.88605 21.5089L4.01163 22.5644L4.02558 22.5578Z"
                  fill="#051F10"
                  className="group-hover:fill-[#897358] duration-500"
                />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                className="group"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.46859 0.489502H15.1602C18.4242 0.489502 21.0933 3.05958 21.0933 6.19929V14.6504C21.0933 17.7909 18.4242 20.3602 15.1602 20.3602H6.46859C3.20463 20.3602 0.535156 17.7909 0.535156 14.6504V6.19929C0.535156 3.05958 3.2046 0.489502 6.46859 0.489502ZM10.7588 5.06001C13.9306 5.06001 16.5045 7.56942 16.5045 10.6618C16.5045 13.7545 13.9306 16.2636 10.7588 16.2636C7.58631 16.2636 5.01285 13.7545 5.01285 10.6618C5.01285 7.56942 7.58631 5.06001 10.7588 5.06001ZM10.7588 6.95205C12.8592 6.95205 14.5638 8.61365 14.5638 10.6618C14.5638 12.7099 12.8592 14.3719 10.7588 14.3719C8.65774 14.3719 6.95347 12.7099 6.95347 10.6618C6.95347 8.61365 8.65774 6.95205 10.7588 6.95205ZM16.3174 4.28361C16.8327 4.28361 17.2504 4.69086 17.2504 5.19283C17.2504 5.69517 16.8327 6.10243 16.3174 6.10243C15.8026 6.10243 15.3848 5.69517 15.3848 5.19283C15.3848 4.69086 15.8026 4.28361 16.3174 4.28361ZM7.17881 2.11265H14.4508C17.1813 2.11265 19.4145 4.27916 19.4145 6.92659V14.052C19.4145 16.6993 17.1813 18.8655 14.4508 18.8655H7.17881C4.44827 18.8655 2.21476 16.6993 2.21476 14.0519V6.92653C2.21476 4.27916 4.44827 2.11265 7.17881 2.11265Z"
                  fill="#051F10"
                  className="group-hover:fill-[#897358] duration-500"
                />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="27"
                viewBox="0 0 13 27"
                fill="none"
                className="group"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.82353 5.33358H12.7914V0.47876H8.82353C5.76066 0.47876 3.26864 3.01943 3.26864 6.1421V8.56949H0.09375V13.4248H3.26769V26.3709H8.03001V13.4248H11.9979L12.7914 8.56953H8.03001V6.1421C8.03001 5.70343 8.39326 5.33313 8.82349 5.33313V5.33362L8.82353 5.33358Z"
                  fill="#051F10"
                  className="group-hover:fill-[#897358] duration-500"
                />
              </svg>
            </a>
          </ul>
        </div>
      </div>
      <hr className="border-[#897358] mt-7 mb-4" />
      <p className="text-stone-300 text-[15px] font-normal font-['Inter'] leading-tight">
        © 2023.By R-link . All rights reserved. Privacy Policy
      </p>
    </MaxWidthWrapper>
  );
};

export default Footer;
