import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgress from "../components/CircularProgress";
import Statistics from "../components/Statistics";
import PostloginCourseCard from "../utilities/PostloginCourseCard";
import LaptopSlider from "../components/LaptopSlider";
import { Link, useLocation } from "react-router-dom";
import Footer from "../utilities/Footer";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import {
  faBug,
  faCodeBranch,
  faCheckCircle,
  faChalkboardTeacher,
  faChartLine,
  faChartPie,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import PostloginNavbar from "../utilities/PostloginNavbar";
const Postlogin_temp = ({ theme, handleThemeSwitch }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [1, 2, , 3, 4, 5, 6, 7, 8];
  const [showStats, setShowstats] = useState(true);
  const [userdetails, setuserdetails] = useState({});
  const navigate = useNavigate();
  const backendUrl = "https://keyncoders-main-backend.vercel.app";
  const handlesignout = () => {
    localStorage.removeItem("token");
  };

  const fetchShowStats = async () => {
    const savedUser = JSON.parse(localStorage.getItem("savedUser"));
    const userId = savedUser._id; // Access _id directly from savedUser object
    console.log(userId);
    const user_resetId = savedUser.resetPasswordToken;
    console.log(user_resetId);

    const courseId = "66b501e92bc0fdcb012c1449";
    const token = localStorage.getItem("token");
    try {
      // Verify endpoint
      const response = await fetch(`${backendUrl}/course/checkCourses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token in Authorization header
        },
        body: JSON.stringify({ userId, courseId }),
      });

      const json = await response.json();
      // console.log(json);

      if (response.status === 200) {
        setShowstats(true);
      } else {
        setShowstats(false);
      }
    } catch (error) {
      console.error("Error fetching showStats:", error);
    }
  };

  const debouncedFetchShowStats = useCallback(
    debounce(fetchShowStats, 300),
    []
  );
  useEffect(() => {
    const savedUser = localStorage.getItem("savedUser");
    if (savedUser) {
      setuserdetails(JSON.parse(savedUser));
      // debouncedFetchShowStats();
    } else {
      setShowstats(false);
    }
    return () => {
      // debouncedFetchShowStats.cancel();
    };
  }, [debouncedFetchShowStats]);

  return (
    <>
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      {showStats ? (
        <div className="flex max-h-screen bg-[#0a0c10] text-white overflow-hidden">
          {/* Sidebar - Leftmost section */}
          <div className="mt-10 lg:w-1/5 fixed lg:p-4 p-1 min-h-screen bg-[#161b22] space-y-6 lg:text-xl md:text-[18px] sm:text-[15px] text-[8px]">
            <Link
              to="/videos"
              className="bg-orange-500 text-white font-medium rounded-md w-full block text-center p-3 mt-8 hover:underline hover:decoration-white hover:underline-offset-8"
            >
              Lectures
            </Link>
            <Link
              to="/questions"
              className="bg-orange-500 text-white font-medium rounded-md w-full block text-center p-3 mt-8 hover:underline hover:decoration-white hover:underline-offset-8"
            >
              Practice Questions
            </Link>
            <Link
              to="/my-batches"
              className="bg-orange-500 text-white font-medium rounded-md w-full block text-center p-3 mt-8 hover:underline hover:decoration-white hover:underline-offset-8"
            >
              My Batches
            </Link>
            <Link
              to="/job-alerts"
              className="bg-orange-500 text-white font-medium rounded-md w-full block text-center p-3 hover:underline hover:decoration-white hover:underline-offset-8"
            >
              Job Alerts
            </Link>
            <Link
              to="/mentor-connect"
              className="bg-orange-500 text-white font-medium rounded-md w-full block text-center p-3 hover:underline hover:decoration-white hover:underline-offset-8"
            >
              Mentor Connect
            </Link>

            <div className="bg-orange-500 text-white font-medium rounded-md w-full block text-center p-3 hover:underline hover:decoration-white hover:underline-offset-8">
              <Link to="/user-profile">My Profile</Link>
            </div>
          </div>

          {/* Main content - Right section */}
          <div className="flex-col justify-end mt-10 lg:ml-[20%] ml-[25%] overflow-x-hidden w-full">
            {/* Navigation */}
            <nav className="relative">
              <div className="absolute flex justify-between px-12 py-5 w-full mt-8">
                <div>
                  <h1 className="font-bold lg:text-3xl md:text-[34px] sm:text-[30px] text-[18px]">
                    Welcome back{" "}
                    <span className="text-orange-500">
                      {userdetails.name || "User"}
                    </span>
                  </h1>
                  <p className="mt-2 lg:text-3xl md:text-[34px] sm:text-[30px] text-[13px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </nav>

            {/* Additional Content */}
            <div className="relative mt-40 p-8 min-h-screen">
              <div className="max-w-7xl mx-auto mb-20">
                <h1 className="lg:text-3xl md:text-[34px] sm:text-[30px] text-[18px] font-bold text-center mb-8 lg:mt-0 md:mt-20">
                  <span>Your</span> Progress
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-5">
                  {data.length <= 0 ? (
                    <span className="col-span-4 text-center">
                      No data available
                    </span>
                  ) : (
                    <>
                      {/* Lectures Watched */}
                      <div className="bg-[#161b22] rounded-lg shadow-lg p-6 sm:text-center text-center">
                        <FontAwesomeIcon
                          icon={faChalkboardTeacher}
                          className="h-12 w-12 text-orange-500 mx-auto mb-4"
                        />
                        <h2 className="text-xl mb-2">Lectures Watched</h2>
                        <p className="font-bold text-4xl mb-4">890</p>
                        {/* Progress bar */}
                        <div className="w-full bg-gray-300 rounded-full h-4">
                          <div
                            className="bg-orange-500 h-4 rounded-full"
                            style={{ width: "75%" }} // Adjust this width dynamically if needed
                          ></div>
                        </div>
                        <p className="mt-2 text-sm">75% completed</p>{" "}
                        {/* Adjust percentage dynamically */}
                      </div>

                      {/* Analysis (Circular Progress) */}
                      <div className="bg-[#161b22] shadow-lg rounded-lg p-6 items-center flex justify-center">
                        <div>
                          <h2 className="text-xl font-bold mb-2 text-center">
                            Analysis
                          </h2>
                          <CircularProgress
                            label="Productivity"
                            value="100"
                            width="150"
                            textColor="white"
                          />
                        </div>
                      </div>

                      {/* Questions Solved */}
                      <div className="bg-[#161b22] sm:text-center text-center shadow-lg rounded-lg p-6">
                        <FontAwesomeIcon
                          icon={faQuestionCircle}
                          className="h-12 w-12 text-orange-500 mx-auto mb-4"
                        />
                        <h2 className="text-xl mb-2">Questions Solved</h2>
                        <p className="font-bold text-4xl mb-4">890</p>
                        {/* Progress bar */}
                        <div className="w-full bg-gray-300 rounded-full h-4">
                          <div
                            className="bg-orange-500 h-4 rounded-full"
                            style={{ width: "50%" }} // Adjust this width dynamically if needed
                          ></div>
                        </div>
                        <p className="mt-2 text-sm">50% completed</p>{" "}
                        {/* Adjust percentage dynamically */}
                      </div>

                      {/* Another Analysis (Circular Progress) */}
                      <div className="bg-[#161b22] rounded-lg shadow-lg p-6 items-center flex justify-center">
                        <div>
                          <h2 className="text-xl font-bold mb-2 text-center">
                            Analysis
                          </h2>
                          <CircularProgress
                            label="Quiz"
                            value="75"
                            width="150"
                            textColor="white"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="lg:text-3xl lg:mt-6 md:text-[34px] sm:text-[30px] text-[18px] font-bold text-center mb-4">
                    Your Statistics
                  </h1>

                  <div className="lg:bg-[#161b22] md:bg-[#161b22] sm:bg-[#161b22] max-w-[55rem] w-[19rem] lg:w-full sm:w-[28rem] rounded-lg mt-4 p-6 flex items-center justify-center">
                    <Statistics />
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        defaultValue={dayjs("2022-04-17")}
                        slotProps={{
                          toolbar: {
                            toolbarFormat: "ddd DD MMMM",
                            hidden: false,
                          },
                        }}
                      />
                    </LocalizationProvider> */}
                  </div>
                </div>

                <h1 className="lg:text-3xl md:text-[34px] sm:text-[30px] text-[18px] font-bold text-center mt-8 mb-8">
                  Quick Links
                </h1>
                <div className="lg:flex lg:space-x-4 lg:ml-4">
                  {/* First Card */}
                  <div className="rounded-md w-full">
                    <PostloginCourseCard
                      theme={theme}
                      course="DSA"
                      topic="Linked List"
                      img="dsa-postlogin"
                      play={true}
                      onPlayClick={() => console.log("Play button clicked!")}
                      onCodeClick={() => console.log("Code button clicked!")}
                    />
                  </div>

                  {/* Second Card */}
                  <div className="w-full rounded-md">
                    <PostloginCourseCard
                      theme={theme}
                      course="Questions"
                      topic="Linked List"
                      img="hack"
                      play={false}
                      onPlayClick={() => console.log("Play button clicked!")}
                      onCodeClick={() => console.log("Code button clicked!")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`${
              theme === "dark"
                ? "bg-black"
                : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] "
            }`}
          >
            <div className=" mt-48 sm:mt-0 ">
              <div
                className={`w-full h-[90vh] md:flex justify-center items-center ${
                  theme === "dark"
                    ? "bg-black"
                    : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
                }`}
              >
                <div className="mx-10  flex flex-col lg:flex-row   items-center justify-between">
                  <div>
                    <h1 className="mt-10 max-w-xl text-[38.8px]  leading-[1.1] md:text-5xl md:leading-[1.3] font-bold text-white dark:text-white">
                      Hey{" "}
                      <span className="text-black dark:text-yellow-200">
                        {" "}
                        {userdetails.name || "User"}
                      </span>{" "}
                      seems you haven't enrolled yet
                    </h1>
                    <p className="text-[#FFB453] font-semibold mt-2 dark:text-[#e87f7f] md:text-[28px] max-w-sm mb-5">
                      Don't hesitate - Join now and get the finest available
                    </p>
                    <Link target="_blank" to="https://rzp.io/l/y1Eux1i">
                      <button
                        // onClick={handleNavigatehome}
                        className="dark:bg-orange-600 bg-orange-500 shadow-lg hover:bg-orange-600  text-white font-bold py-2 px-4 rounded-lg md:mt-0 mt-5 ml-0 md:mb-10 mb-6 sm:mb-8 md:ml-0 lg:ml-0 flex justify-center items-center"
                      >
                        Join Now
                      </button>
                    </Link>
                  </div>
                  <div className=" relative w-[110%] -ml-3 mx-auto  sm:w-[70%] sm:ml-20  md:w-[500%] md:justify-center max-w-md">
                    <img
                      src="../images/laptop.png"
                      alt="Laptop Slider"
                      className="w-full h-auto rounded-lg "
                    />
                    <div className=" absolute md:top-[8.3%] left-[11.5%] w-[76%] h-[65%] top-[7%] sm:top-[5%] lg:top-[4.6%]">
                      <LaptopSlider />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* <Footer theme={theme} /> */}
    </>
  );
};

export default Postlogin_temp;
