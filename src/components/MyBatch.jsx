import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function MyBatch({ theme, id }) {
  const navigate = useNavigate();
  const toCourse = () => {
    navigate("/videos");
  };
  return (
    <>
      <section
        id={id}
        className={`dark:bg-[#181622] bg-[#E6D8F2] mt-[66px] ${
          theme === "dark"
            ? "dark:bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] dark:text-black"
            : ""
        } `}
      >
        <h1 className="text-center font-bold text-3xl md:text-5xl mb-6 md:mb-10 mt-20">
          My Batches
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
                Proceed
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyBatch;
