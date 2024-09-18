import React from "react";
import { useState } from "react";
import PostloginNavbar from "../utilities/PostloginNavbar";
import JobBoard from "../components/Job-Board";
import Footer from "../utilities/Footer";
const JobAlerts = ({ theme, handleThemeSwitch }) => {
  const jobs = [
    "Remote",
    "Head of Brand",
    "Head of Brand",
    "Remote",
    "Head of resource and Development",
    "Head of Rnd",
    "Loremipsu",
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={`flex flex-col w-full   h-full overflow-x-hidden ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      }`}
    >
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="grid grid-cols-1 sm:grid-cols-4 ">
        <div className="col-span-1 grid p-2 gap-3  grid-rows-2">
          <div className=" dark:bg-[#232222] bg-[#E6E6E6] pl-4  row-span-1  h-fit mt-16    p-4  rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="text-[#F14A16] text-lg font-bold hover:text-[#F14A16]"
              >
                My jobs
              </a>
              <a
                href="#"
                className="text-[#F14A16] text-lg font-bold hover:text-[#F14A16]"
              >
                Preferences
              </a>
              <a
                href="#"
                className="text-[#F14A16] text-lg font-bold hover:text-[#F14A16]"
              >
                Skill Assessments
              </a>
              <a
                href="#"
                className="text-[#F14A16] text-lg font-bold hover:text-[#F14A16]"
              >
                Interview Prep
              </a>
              <a
                href="#"
                className="text-[#F14A16] text-lg font-bold hover:text-[#F14A16]"
              >
                Job Seeker Guidance
              </a>
            </div>
          </div>
          <div className="dark:bg-[#232222] bg-[#E6E6E6]   row-span-1 h-fit p-8   rounded-lg shadow-lg sm:max-w-md">
            <h2 className="text-2xl font-bold mb-4">Suggested Job Searches</h2>
            <div className="flex flex-wrap gap-2">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-[linear-gradient(99.32deg,_rgba(113,_113,_113,_0.6)_0.56%,_rgba(87,_86,_86,_0.6)_59.52%,_rgba(195,_195,_195,_0.6)_117.27%)] rounded-full py-2 px-4 flex items-center"
                >
                  <svg
                    className="w-4 h-4 text-[#F14A16] mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <span className="text-sm">{job}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2">
              <JobBoard/>
        </div>
        <div className="col-span-1 pl-1 flex justify-center pb-6 h-fit sm:mt-20">
          <div className=" flex flex-col max-w-sm dark:bg-[#232222] bg-[#E6E6E6] p-6 mr-2 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Job Seeker Assistance
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {isExpanded
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunerit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunerit in voluptate velit esse cillum dolore..."}
            </p>
            <button
              onClick={toggleExpand}
              className="mt-2 dark:text-white flex justify-end  text-black hover:underline"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>

      <Footer handleThemeSwitch={handleThemeSwitch} theme={theme} />
    </div>
  );
};

export default JobAlerts;
