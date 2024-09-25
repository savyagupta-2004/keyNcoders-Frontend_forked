import { useEffect, useState } from "react";
import Courses from "./Courses";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

export default function Landing({ theme }) {
  const [modal, showModal] = useState(false);

  useEffect(() => {
    showModal(true);
  }, []);

  const handleCloseModal = () => {
    showModal(false);
  };

  const handleModalCloseClick = () => {
    showModal(false);
  };

  return (
    <div className={theme === "dark" ? "bg-[#131313]" : "bg-[#6A38C2]"}>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="dark:bg-emerald-300 bg-[#a0d7f3] text-black p-8 rounded-lg shadow-lg relative max-w-md mx-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-black text-2xl hover:text-3xl hover:scale-110 transition-transform duration-300"
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <LazyLoad height={200} offset={100}>
                <img
                  src="../images/modal_alt.png"
                  alt="Modal Image"
                  className="w-fit h-fit rounded-t-lg"
                />
              </LazyLoad>
              <div className="text-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-2">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                  Early Bird Offer
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Limited seats available
                </p>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-orange-500 mb-2">
                    ₹3499
                  </span>
                  <span className="text-sm text-gray-500">
                    Save flat 30% off the regular price!
                  </span>
                </div>
              </div>

              <button
                className="mt-4 rounded-md bg-orange-600 w-16 h-10  text-white"
                onClick={handleModalCloseClick}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-10 md:mx-12 p-6 md:mt-10 lg:mt-14 flex flex-col md:flex-row items-center justify-between mt-11">
        <div className="space-y-4 md:space-y-10">
          <div className="w-full">
            <h1 className="text-xl sm:text-xl md:text-4xl lg:text-6xl pt-8 leading-[1.0] sm:leading-[1.3] md:leading-[1.3] font-bold text-zinc-900 dark:text-white">
              <span className="dark:text-orange-500 text-white">
                From Classroom
              </span>
              <span className="text-white lg:ml-1 md:ml-10 "> to Career</span>
            </h1>
          </div>

          <p className="text-gray-300 dark:text-[#A4A4A4] md:text-[28px] lg:text-[30px] max-w-lg mb-5 text-[14px] ">
            Building Bridges Between Education and Industry for Tomorrow's Tech
            Leaders, keyNcoders Connects You with Tech Success.
          </p>
          <div className="flex flex-row justify-center items-center mx-auto">
            <Link
              to={"/dsa"}
              className="dark:bg-orange-600 bg-orange-500 shadow-custom hover:shadow-lg hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg md:mt-0 mt-10 w-fit text-center"
            >
              Join Now
            </Link>
          </div>
        </div>

        <div className="mt-0 bottom-0">
          <LazyLoad height={200} offset={100}>
            <img
              loading="lazy"
              src="../images/hero2.png"
              alt="Person pointing"
              className="max-w-xs md:max-w-lg lg:max-w-xl m-6 md:m-2 rounded-lg"
            />
          </LazyLoad>
        </div>
      </div>
      <div className="relative">
        <svg
          width="100%"
          height="100%"
          color="#ED374D"
          id="svg"
          viewBox="0 0 1440 310"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ED374D"></stop>
              <stop offset="51%" stopColor="#FA793F"></stop>
              <stop offset="100%" stopColor="#FCB900"></stop>
            </linearGradient>
          </defs>
          <path
            d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            stroke="none"
            strokeWidth="0"
            fill={theme === "dark" ? "url(#gradient)" : "#E6D8F2"}
            fillOpacity="1"
          ></path>
        </svg>
      </div>
    </div>
  );
}
