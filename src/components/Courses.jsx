import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function Courses({ theme, id }) {
  const navigate = useNavigate();
  const toCourse = () => {
    navigate("/dsa");
  };
  return (
    <>
      <section
        id={id}
        className={`dark:bg-[#181622] bg-[#E6D8F2] ${
          theme === "dark"
            ? "dark:bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] dark:text-black"
            : ""
        } `}
      >
        <h1 className="text-center font-bold text-3xl md:text-5xl mb-6 md:mb-10">
          Our Courses
        </h1>
        <div className="bg-white dark:bg-[#383232] dark:text-white text-black lg:mx-auto mx-5 lg:w-3/5 h-auto md:h-96 flex flex-col md:flex-row rounded-lg overflow-hidden relative">
          <div className="bg-[#DEC649] text-center w-40 py-3 absolute top-0 right-0 z-10">
            <div className="text-gray-900 text-lg font-thin line-through">
              Rs. 4999
            </div>
            <div className="text-xl text-gray-900 font-bold">Rs. 3499</div>
            <div className="flex justify-between absolute -bottom-5 left-0 right-0">
              <div className="bg-[#DEC649] w-20 h-10 skew-y-12"></div>
              <div className="bg-[#DEC649] w-20 h-10 -skew-y-12"></div>
            </div>
          </div>
          {/* Orange Section */}
          <div
            className="relative bg-[#FFA135] my-3  md:mx-8 rounded-lg flex items-center md:w-3/5 justify-center h-60 md:h-[360px]"
            style={{ marginLeft: "12px" }}
          >
            <img
              src="./images/dsaCourse.png"
              alt="Course Image"
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
          <div className="p-4 w-full md:w-1/2">
            <div className=" text-4xl md:text-6xl font-semibold mb-4 md:mb-0 md:mr-4">
              DSA
            </div>
            <ul className=" space-y-2 mt-4 md:mt-16">
              <li>✔️ Complete C++ and DSA</li>
              <li>✔️ Topic Wise Question Practice</li>
              <li>✔️ Personal Mentor</li>
              <li>✔️ Placement Assistance</li>
            </ul>
            <div className="flex justify-center md:justify-start items-center mt-6">
              <button
                className="bg-orange-600  py-2 px-4 rounded-lg"
                onClick={toCourse}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
        {theme === "dark" && (
          <div className="relative">
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 310"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                stroke="none"
                strokeWidth="0"
                fill="#131313"
                fillOpacity="1"
              ></path>
            </svg>
          </div>
        )}
      </section>
    </>
  );
}

export default Courses;
