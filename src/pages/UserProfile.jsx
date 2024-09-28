import React from "react";
import { useMediaQuery } from "react-responsive"; // Import a library to handle media queries
import Slider from "react-slick"; // Ensure this is already imported in your component
import ActivityGrid from "../components/ActivityGrid";
import PostloginNavbar from "../utilities/PostloginNavbar";
// import CircularProgress from "../components/CircularProgress";
import Statistics from "../components/Statistics";
import Footer from "../utilities/Footer";
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
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1016px)" }); // Adjust this according to your breakpoints

  const badges = [
    {
      title: "Top Performer",
      description: "Awarded for exceptional performance in 2023",
      image: "/images/founder.png",
    },
    {
      title: "Quiz Master",
      description: "Completed all quizzes with a 100% score",
      image: "/images/founder.png",
    },
    {
      title: "Mentor Award",
      description: "Recognized for mentoring new users",
      image: "/images/founder.png",
    },
    // Add more badges as needed
  ];

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
      monthName: "Mar",
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
      monthName: "Apr",
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
      monthName: "Jully",
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
      monthName: "Aug",
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
      monthName: "Sept",
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
      monthName: "Oct",
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
      monthName: "Nov",
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
      monthName: "Dec",
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

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };
  const analysisSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="flex flex-col bg-[#0a0c10] min-h-[80vh] sm:min-h-[80vh] md:min-h-[90vh]">
        <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />

        {/* Main Section */}
        {isSmallScreen ? (
          <Slider
            {...sliderSettings}
            className="text-white sm:w-[30rem] w-[22rem] mx-auto lg:w-fit lg:left-0 flex-col lg:mt-20"
          >
            {/* Slide for My Mentor */}
            <div className="flex flex-row justify-center items-center pt-36">
              <div className="bg-[#161b22] p-6 rounded-lg shadow-lg h-[27.4rem] border border-white">
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
                    hehe{" "}
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Slide for My Contributions */}
            <div className="flex flex-row justify-center items-center pt-36">
              <div className="border border-white bg-[#161b22] text-[#c9d1d9] w-fit flex flex-col items-center h-fit rounded-xl p-8">
                <h3 className="text-white font-bold font-roboto lg:text-3xl md:text-2xl sm:text-xl text-xl mb-5 text-center">
                  My contributions this year
                </h3>
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

            {/* Slide for My Details */}
            <div className="flex flex-row justify-center items-center pt-36">
              <div className="bg-[#161b22] p-6 rounded-lg shadow-lg h-[27.4rem] border border-white">
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
                    hehe{" "}
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        ) : (
          <div className="flex flex-row justify-between mx-5 mt-20 space-x-4">
            {/* My Mentor */}
            <div className="bg-[#161b22] p-6 rounded-lg shadow-lg w-1/4 border border-white">
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
                  hehe{" "}
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </span>
                </p>
              </div>
            </div>

            {/* My Contributions */}
            <div className="border border-white bg-[#161b22] text-[#c9d1d9] w-1/2 overflow-auto flex flex-col items-center h-fit rounded-xl p-8">
              <h3 className="text-white font-bold font-roboto lg:text-3xl md:text-2xl sm:text-xl text-xl text-center">
                My contributions this year
              </h3>
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

            {/* My Details */}
            <div className="bg-[#161b22] p-6 rounded-lg shadow-lg w-1/4 border border-white">
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
                  hehe{" "}
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Analysis and Statistics Section */}
        <div className="flex flex-col justify-center items-center mb-10 mt-12 w-[20rem] mx-auto lg:w-full">
          <h1 className="text-white mb-10 font-bold lg:text-3xl md:text-2xl sm:text-xl text-xl">
            My progress and statistics
          </h1>
          <div className="w-full max-w-7xl">
            {isSmallScreen ? (
              <Slider
                {...analysisSliderSettings}
                className="grid grid-cols-1 gap-8"
              >
                {/* Circular Progress Components */}
                <div className="bg-[#161b22] rounded-lg shadow-lg p-6 text-center border border-white flex flex-col justify-center items-center h-48">
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    className="h-12 w-12 text-[#ffa657] mx-auto mb-4"
                  />
                  <h2 className="text-xl text-[#c9d1d9] mb-2">
                    Lectures Watched
                  </h2>
                  <p className="font-bold text-4xl text-[#58a6ff]">890</p>
                </div>

                <div className="border border-white bg-[#161b22] shadow-lg rounded-lg p-6 flex flex-col justify-center items-center h-48">
                  <h2 className="text-xl font-bold mb-2 text-center text-white">
                    Analysis
                  </h2>
                  <div className="flex justify-center">
                    <CircularProgress
                      label="Productivity"
                      value="100"
                      width="120"
                      textColor="white"
                    />
                  </div>
                </div>

                <div className="bg-[#161b22] rounded-lg shadow-lg p-6 text-center border border-white flex flex-col justify-center items-center h-48">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="h-12 w-12 text-[#ffa657] mx-auto mb-4"
                  />
                  <h2 className="text-xl text-[#c9d1d9] mb-2">
                    Questions Solved
                  </h2>
                  <p className="font-bold text-4xl text-[#58a6ff]">890</p>
                </div>

                <div className="border border-white bg-[#161b22] rounded-lg shadow-lg p-6 flex flex-col justify-center items-center h-48">
                  <h2 className="text-xl font-bold mb-2 text-center text-white">
                    Analysis
                  </h2>
                  <div className="flex justify-center">
                    <CircularProgress
                      label="Quiz"
                      value="75"
                      width="120"
                      textColor="white"
                    />
                  </div>
                </div>
              </Slider>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Circular Progress and Stats */}
                <div className="grid grid-cols-2 gap-8">
                  {/* Circular Progress Components */}
                  <div className="bg-[#161b22] rounded-lg shadow-lg p-6 text-center border border-white">
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className="h-12 w-12 text-[#ffa657] mb-4"
                    />
                    <h2 className="text-xl text-[#c9d1d9] mb-2">
                      Lectures Watched
                    </h2>
                    <p className="font-bold text-4xl text-[#58a6ff]">890</p>
                  </div>

                  <div className="border border-white bg-[#161b22] shadow-lg rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-2 text-center text-white">
                      Analysis
                    </h2>
                    <CircularProgress
                      label="Productivity"
                      value="100"
                      width="150"
                      textColor="white"
                    />
                  </div>

                  {/* Additional Stats */}
                  <div className="bg-[#161b22] rounded-lg shadow-lg p-6 text-center border border-white">
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="h-12 w-12 text-[#ffa657] mx-auto mb-4"
                    />
                    <h2 className="text-xl text-[#c9d1d9] mb-2">
                      Questions Solved
                    </h2>
                    <p className="font-bold text-4xl text-[#58a6ff]">890</p>
                  </div>

                  <div className="border border-white bg-[#161b22] rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-2 text-center text-white">
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

                {/* Right Column: Statistics Component */}
                <div className="h-full flex items-center justify-center border border-white">
                  <div className="bg-[#161b22] shadow-lg w-full h-full rounded-lg p-8 flex items-center justify-center">
                    <Statistics />
                  </div>
                </div>
              </div>
            )}

            {/* Leaderboard Section */}
            <div className="mt-12 bg-[#161b22] p-6 rounded-lg shadow-lg border border-white">
              <h3 className="text-2xl text-[#c9d1d9] font-bold text-center mb-4">
                Leaderboard
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#0a0c10]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#c9d1d9] uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#c9d1d9] uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#c9d1d9] uppercase tracking-wider">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#161b22] divide-y divide-gray-200">
                    {/* Dummy users for initial display */}
                    {Array.from({ length: 10 }, (_, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#ffa657]">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#c9d1d9]">
                          User {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#58a6ff]">
                          Score {Math.floor(Math.random() * 1000)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Badges and Achievements Section */}
            <div className="mt-12 bg-[#161b22] p-6 rounded-lg shadow-lg border border-white flex flex-col items-center">
              <h3 className="text-2xl text-[#c9d1d9] font-bold text-center mb-4">
                My Badges and Achievements
              </h3>
              <div className="overflow-x-auto">
                {isSmallScreen ? (
                  <Slider
                    {...sliderSettings}
                    className="text-white w-[18rem] sm:w-[20rem]  lg:w-full"
                  >
                    {badges.map((badge, index) => (
                      <div
                        key={index}
                        className="bg-[#22272e] rounded-lg shadow-lg p-4 flex flex-col items-center border border-white w-40 mx-auto"
                      >
                        <img
                          src={badge.image}
                          alt={badge.title}
                          className="h-16 w-16 mb-2"
                        />
                        <h4 className="text-[#c9d1d9] font-bold text-lg text-center">
                          {badge.title}
                        </h4>
                        <p className="text-[#8b949e] text-sm text-center">
                          {badge.description}
                        </p>
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="flex space-x-4 py-4 justify-center">
                    {badges.map((badge, index) => (
                      <div
                        key={index}
                        className="bg-[#22272e] rounded-lg shadow-lg p-4 flex flex-col items-center border border-white w-40"
                      >
                        <img
                          src={badge.image}
                          alt={badge.title}
                          className="h-16 w-16 mb-2"
                        />
                        <h4 className="text-[#c9d1d9] font-bold text-lg text-center">
                          {badge.title}
                        </h4>
                        <p className="text-[#8b949e] text-sm text-center">
                          {badge.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer theme={theme} />
      </div>
    </>
  );
};

export default UserProfile;
