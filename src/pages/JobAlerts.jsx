import React from "react";
import PostloginNavbar from "../utilities/PostloginNavbar";

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
  return (
    <div
      className={`flex flex-col w-full h-full overflow-x-hidden ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      }`}
    >
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="bg-white p-8 w-fit rounded-lg shadow-lg">
        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="text-orange-500 text-lg font-bold hover:text-orange-600"
          >
            My jobs
          </a>
          <a
            href="#"
            className="text-orange-500 text-lg font-bold hover:text-orange-600"
          >
            Preferences
          </a>
          <a
            href="#"
            className="text-orange-500 text-lg font-bold hover:text-orange-600"
          >
            Skill Assessments
          </a>
          <a
            href="#"
            className="text-orange-500 text-lg font-bold hover:text-orange-600"
          >
            Interview Prep
          </a>
          <a
            href="#"
            className="text-orange-500 text-lg font-bold hover:text-orange-600"
          >
            Job Seeker Guidance
          </a>
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-lg p-6 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Suggested Job Searches</h2>
        <div className="flex flex-wrap gap-2">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-full py-2 px-4 flex items-center"
            >
              <svg
                className="w-4 h-4 text-orange-500 mr-2"
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
  );
};

export default JobAlerts;
