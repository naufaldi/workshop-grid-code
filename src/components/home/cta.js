import React from 'react';

const CallToAction = () => {
  return (
    <section
      id="cta"
      className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto py-[60px]"
    >
      <div className="col-span-8 col-start-3">
        <div className="max-w-[661px] w-full flex flex-col items-center text-center">
          <h1 className="text-white font-bold text-[48px] mb-4">
            Have a project idea and want to make it come true?
          </h1>
          <p className="mb-64[px] text-white opacity-70">
            Please contact us and we will discuss about your project, don't
            forget we are always here for you
          </p>
          <button className="flex items-center justify-center gap-[8px] py-[23px] px-[32px] bg-white ">
            <p className="text-[#2A2C3D] font-bold text-[20px]">Contact Us </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M3.75 12.5H20.25"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 5.75L20.25 12.5L13.5 19.25"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-Linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
