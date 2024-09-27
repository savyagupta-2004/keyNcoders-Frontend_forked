import React from "react";
import ActivityGrid from "../components/ActivityGrid";
import PostloginNavbar from "../utilities/PostloginNavbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Statistics from "../components/Statistics";
import Footer from "../utilities/Footer";
import { Link, useLocation } from "react-router-dom";
import CircularProgress from "../components/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faCodeBranch,
  faCheckCircle,
  faChalkboardTeacher,
  faChartLine,
  faChartPie,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
const UserProfile = ({ theme, handleThemeSwitch }) => {
  let percentage = 75;
  const activities = [
    {
      monthName: "Jan",
      daysActive: [
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
      ],
    },
    {
      monthName: "Feb",
      daysActive: [
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
      ],
    },
    {
      monthName: "March",
      daysActive: [
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ],
    },
    {
      monthName: "April",
      daysActive: [
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ],
    },
    {
      monthName: "May",
      daysActive: [
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
      ],
    },
    {
      monthName: "June",
      daysActive: [
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ],
    },
    {
      monthName: "June",
      daysActive: [
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ],
    },
    {
      monthName: "June",
      daysActive: [
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ],
    },
    {
      monthName: "June",
      daysActive: [
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ],
    },
    {
      monthName: "June",
      daysActive: [
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ],
    },
    {
      monthName: "June",
      daysActive: [
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ],
    },
    {
      monthName: "December",
      daysActive: [
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col bg-[#0a0c10]  min-h-[180vh]">
        <div>
          <PostloginNavbar
            handleThemeSwitch={handleThemeSwitch}
            theme={theme}
          />
        </div>

        {/* Main Section */}
        <div className="flex flex-row justify-center space-x-6 p-8 items-center pt-36">
          {/* Contributions Section */}
          <div className="flex-grow p-8 flex justify-center ">
            <div className="bg-[#161b22] p-6 rounded-lg shadow-lg w-64 border border-white">
              <h3 className="font-bold text-2xl text-[#c9d1d9] text-center mb-4">
                My Mentor
              </h3>
              <div className="flex flex-col items-center">
                <img
                  width={177}
                  src="/images/founder.png"
                  alt="Founder"
                  className="rounded-lg mb-4"
                />
                <p className="font-bold text-lg text-[#c9d1d9]">Jane Doe</p>
                <p className="text-[#8b949e]">
                  hehe
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </span>
                </p>
              </div>
            </div>

            {/* Contributions */}
            <div>
              <div className=" mb-12">
                <h3 className="text-white mb-10 font-bold font-roboto   text-3xl text-center">
                  My contributions this year
                </h3>
              </div>
              <div className="border border-white ml-8 bg-[#161b22] text-[#c9d1d9] w-fit overflow-auto flex flex-col items-center h-fit rounded-xl p-8">
                <div className="flex flex-row justify-center items-center space-x-3 text-lg mb-6">
                  <div className="flex flex-col items-center">
                    <span>
                      TOTAL ACTIVE DAYS:{" "}
                      <span className="text-[#ffa657]">21</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>
                      STREAK: <span className="text-[#ffa657]">15</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>
                      🏆 <span className="text-[#ffa657]">25</span>
                    </span>
                  </div>
                </div>

                {/* Activity Grids */}
                <div className="grid grid-cols-6 gap-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <ActivityGrid
                        daysActive={activity.daysActive}
                        monthName={activity.monthName}
                        boxSize="small"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#161b22] p-6 rounded-lg shadow-lg w-64 border border-white ml-7">
              <h3 className="font-bold text-2xl text-[#c9d1d9] text-center mb-4">
                My Details
              </h3>
              <div className="flex flex-col items-center">
                <img
                  width={177}
                  src="/images/founder.png"
                  alt="Founder"
                  className="rounded-lg mb-4"
                />
                <p className="font-bold text-lg text-[#c9d1d9]">Jane Doe</p>
                <p className="text-[#8b949e]">
                  hehe
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis and Statistics Section */}
        <div className="flex flex-col justify-center items-center mb-10 mt-12 w-full ">
          <h1 className="text-white mb-10 font-bold text-3xl">
            My progress and statistics
          </h1>
          <div className="w-full max-w-7xl grid grid-cols-2 gap-8">
            {/* Left Column: Circular Progress and Stats */}
            <div className="grid grid-cols-2 gap-8">
              {/* Circular Progress Components */}
              <div className="bg-[#161b22] rounded-lg shadow-lg p-6 w-full text-center border border-white">
                <FontAwesomeIcon
                  icon={faChalkboardTeacher}
                  className="h-12 w-12 text-[#ffa657] mx-auto mb-4"
                />
                <h2 className="text-xl text-[#c9d1d9] mb-2">
                  Lectures Watched
                </h2>
                <p className="font-bold text-4xl text-[#58a6ff]">890</p>
              </div>

              <div className="bg-[#161b22] rounded-lg shadow-lg p-6 w-full flex flex-col items-center border border-white">
                <h2 className="text-xl font-bold text-[#c9d1d9] mb-2 text-center">
                  Productivity
                </h2>
                <CircularProgress
                  label="Productivity"
                  value="100"
                  width="100"
                  textColor="white"
                />
              </div>

              {/* Additional Stats */}
              <div className="bg-[#161b22] rounded-lg shadow-lg p-6 w-full text-center border border-white">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="h-12 w-12 text-[#ffa657] mx-auto mb-4"
                />
                <h2 className="text-xl text-[#c9d1d9] mb-2">
                  Questions Solved
                </h2>
                <p className="font-bold text-4xl text-[#58a6ff]">890</p>
              </div>
              <div className="bg-[#161b22] rounded-lg shadow-lg p-6 w-full flex flex-col items-center border border-white">
                <h2 className="text-xl font-bold text-[#c9d1d9] mb-2 text-center ">
                  Quiz
                </h2>
                <CircularProgress
                  label="Quiz"
                  value="75"
                  width="100"
                  textColor="white"
                />
              </div>
            </div>

            {/* Right Column: Statistics Component */}
            <div className="h-full flex items-center justify-center border border-white">
              <div className="bg-[#161b22] shadow-lg w-full h-full rounded-lg p-8 flex items-center justify-center">
                <Statistics />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer theme={theme} />
    </>
  );
};

export default UserProfile;
