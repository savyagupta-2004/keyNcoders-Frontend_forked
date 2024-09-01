import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import LaptopSlider from "../components/LaptopSlider";
import Footer from "../utilities/Footer";
import debounce from "lodash.debounce";
// in order to fetch user data

import { Link } from "react-router-dom";

const backendUrl = "https://keyncoders-main-backend.vercel.app";
// const backendUrl = process.env.BACKEND_URL;
const PostLogin = ({ theme, handleThemeSwitch }) => {
  const [showStats, setShowstats] = useState(false);
  const [userdetails, setuserdetails] = useState({});
  const navigate = useNavigate();

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
      debouncedFetchShowStats();
    } else {
      setShowstats(false);
    }
    return () => {
      debouncedFetchShowStats.cancel();
    };
  }, [debouncedFetchShowStats]);

  const handleNavigateDsa = () => {
    navigate("/dsa");
  };
  const handleNavigatehome = () => {
    navigate("/");
  };

  return (
    <div
      className={`flex flex-col w-full h-full overflow-x-hidden ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      }`}
    >
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />

      {showStats ? (
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
                    <h1 className="max-w-xl text-4xl leading-[1.1] md:text-5xl md:leading-[1.3] font-bold text-white dark:text-white">
                      Hey{" "}
                      <span className="text-black dark:text-yellow-200">
                        {userdetails.name || "User"}
                      </span>{" "}
                      You’ve got a knack for smart decisions
                    </h1>
                    <p className="text-[#FFB453] font-semibold mt-4 dark:text-[#e87f7f] md:text-[28px] max-w-sm mb-5">
                      Your batch starts on Sept 6
                    </p>
                    <Link target="_blank" to="https://rzp.io/l/y1Eux1i">
                      <button
                        onClick={handleNavigatehome}
                        className="dark:bg-orange-600 bg-orange-500 shadow-lg hover:bg-orange-600 dark:hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg md:mt-0 mt-5 ml-0 md:mb-10 mb-6 sm:mb-8 md:ml-0 lg:ml-0 flex justify-center items-center"
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
                    <div className=" absolute md:top-[8.3%] left-[11.5%] w-[76%] h-[65%] top-[7%] sm:top-[5%] lg:top-[11.6%]">
                      <LaptopSlider />
                    </div>
                  </div>
                </div>
              </div>
              <Footer theme={theme} />
            </div>
          </div>
        </>
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
                        onClick={handleNavigatehome}
                        className="dark:bg-orange-600 bg-orange-500 shadow-lg hover:bg-orange-600 dark:hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg md:mt-0 mt-5 ml-0 md:mb-10 mb-6 sm:mb-8 md:ml-0 lg:ml-0 flex justify-center items-center"
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
              <Footer theme={theme} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostLogin;
