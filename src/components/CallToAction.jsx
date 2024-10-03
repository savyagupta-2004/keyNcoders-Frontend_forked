import React from "react";
import LazyLoad from "react-lazyload";

function CallToAction({ theme }) {
  return (
    <div
      className={`flex flex-col  ${
        theme === "dark" ? "bg-[#131313]" : "bg-[#1d1534]"
      } text-white`}
    >
      <section className="flex-grow flex flex-col items-center min-h-[300px]">
        <h1 className="font-semibold text-2xl md:text-[50px] text-center text-[#E5E5E5]">
          Hiring Partners
        </h1>
        <p className="mt-4 mb-16 text-base md:text-lg text-[#8A8A8A] text-center">
          Lorem Ipsum courses we have? lorem ipsum
        </p>
        <div className="flex justify-center mt-1 w-full h-[90px] dark:bg-[#645B5B] bg-white">
          <LazyLoad height={200} offset={100}>
            <img
              src="../images/companie.webp"
              alt="Companies"
              className="object-cover w-full"
            />
          </LazyLoad>
        </div>
      </section>
    </div>
  );
}

export default CallToAction;
