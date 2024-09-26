import React from "react";
import PostloginNavbar from "../utilities/PostloginNavbar";
import PostloginCard from "../components/PostloginCard";
import Footer from "../utilities/Footer";
import CustomCalendar from "../components/CustomCalendar";
import Statistics from "../components/Statistics";
import CircularProgress from "../components/CircularProgress";
import PostloginCourseCard from "../utilities/PostloginCourseCard";

const Postlogin_testing = ({ theme, handleThemeSwitch }) => {
  return (
    <>
      <div className="dark:bg-[#131313] dark:text-white ">
        <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />

        {/* Full-width rectangle for PostloginCard */}
        <div className="w-full  flex justify-center">
          <div className="rounded-lg shadow-xl p-6 w-full">
            <PostloginCard theme={theme} />
          </div>
        </div>

        {/* My Progress Section */}
        {/* My Progress Section */}
        <div className="grid grid-cols-2 mb-10 mt-5">
          <div className="flex flex-col  justify-center items-center dark:text-white">
            <span className="text-2xl font-bold mb-4 mt-10 sm:text-center">
              Your Progress
            </span>
            <div className="lg:flex  sm:justify-center mt-10">
              <div className=" flex flex-col items-center  sm:justify-center justify-center ml- lg:ml-0 ">
                <Statistics />
              </div>
              <span className="flex lg:flex-col sm:flex  md:justify-center sm:space-x-4 sm:justify-center md:space-x-4 justify-center space-x-4   items-center ml-20 md:ml-0 sm:ml-28 lg:ml-0  space-y-4 self-center">
                {" "}
                {/* Added ml-8 to create space */}
                <CircularProgress
                  label="Productivity"
                  value="100"
                  width="100"
                />
                <CircularProgress
                  label="Quiz"
                  value="75"
                  width="100"
                  color="white"
                />
              </span>
            </div>
          </div>

          {/* Custom Calendar Section */}
          <div className="flex flex-col justify-center items-center md:mb-32 sm:mb-28 mb-28 lg:mt-32">
            <span className="lg:text-2xl font-bold md:text-2xl hidden sm:block sm:mt-48 lg:mt-5 ">
              Custom Calendar
            </span>

            <CustomCalendar theme={theme} />
          </div>
        </div>

        <Footer theme={theme} />
      </div>
    </>
  );
};

export default Postlogin_testing;
