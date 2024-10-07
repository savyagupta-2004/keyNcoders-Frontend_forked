import React, { useState, useEffect } from "react";
import QuestionsList from "../components/QuestionsList";
import QuestionSort from "../components/QuestionsSort";
import {
  faCircleChevronDown,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostloginNavbar from '../utilities/PostloginNavbar'
import { getQuestions } from '../api/questions'
import Spinner from '../components/Spinner';


const QuestionPage = ({ theme, handleThemeSwitch }) => {
  const handleAddToGoogleCalendar = () => {
    const eventTitle = "DSA with KeyNcoders"; // Title of the event
    const eventDescription = ""; // Description of the event
    const startDate = "20241025"; // Format: YYYYMMDD for a single-day event

    // Construct the Google Calendar URL with title, start date, and description
    const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(
      eventTitle
    )}&dates=${startDate}/${startDate}&details=${encodeURIComponent(
      eventDescription
    )}`;

    // Redirect to the URL in a new tab
    window.open(googleCalendarUrl, "_blank");
  };
  const [modules, setModules] = useState([]);
  const [visibleSteps, setVisibleSteps] = useState({}); // For tracking visibility of each step
  const [loading, setLoading] = useState(false);

  const toggleVisibility = (moduleIndex, stepIndex) => {
    setVisibleSteps((prevState) => ({
      ...prevState,
      [`${moduleIndex}_${stepIndex}`]: !prevState[`${moduleIndex}_${stepIndex}`],
    }));
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setLoading(true);
  //       const data = await getQuestions();
  //       setModules(data);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      {loading ? (
        <div className="w-full bg-black justify-center items-center flex h-screen">
          <Spinner />
        </div>
      ) : (
        <div
          className={`flex flex-col w-full min-h-screen overflow-x-hidden ${
            theme === "dark" ? "bg-[#131313] text-white" : "bg-[#f1f1f1] text-black"
          }`}
        >
          <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
          <section className="mt-16 md:mt-24 relative">
           
            <QuestionSort />
            <div className="flex flex-col top-60 left-2/4 absolute">
                      <h1 className="text-gray-300  text-2xl font-bold">Stay tune till <span className="text-orange-500">oct 10</span></h1>
                      <button
                          className="bg-orange-500 mt-3 flex items-center gap-3 text-white py-2 px-4 rounded"
                          onClick={handleAddToGoogleCalendar}
                        >
                          <img className="h-9 w-9 rounded-t-md rounded-bl-md rounded-br-2xl bg-white" src="/images/calender_google.png"/> 
                          Add to Calendar
                        </button>
            </div>
            {modules.map((module, moduleIndex) => (
              
              <div key={module._id}>
                <div className="flex items-center shadow-md p-4 md:p-6 mb-5 mx-5 rounded-lg justify-between bg-[#E6E6E6] dark:bg-[#232222]">
                  <h2 className="text-xl font-semibold mb-4">{module.moduleTitle}</h2>
                  <span className="flex items-center">
                    <span
                      className="border dark:border-white border-black rounded-md font-semibold text-orange-400 px-[5px] cursor-pointer ml-2"
                      onClick={() => toggleVisibility(moduleIndex, "module")}
                    >
                      <FontAwesomeIcon icon={faCircleChevronDown} />
                    </span>
                  </span>
                  
                </div>
                
               
                {/* {visibleSteps[`${moduleIndex}_module`] && (
                  <div>
                    {module.steps.map((step, stepIndex) => (
                   
                      // <QuestionsList
                      //   key={step._id}
                      //   stepNo={stepIndex + 1}
                      //   title={step.stepTitle}
                      //   questions={step.problems.map((problem) => ({
                      //     name: problem.problem,
                      //     link: problem.practice,
                      //     difficulty: problem.difficulty,
                      //     done: problem.status,
                      //     flagged: problem.flag,
                      //   }))}
                      //   theme={theme}
                      //   moduleIndex={moduleIndex}
                      //   stepIndex={stepIndex}
                      // />
                    ))}
                  </div>
                )} */}
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default QuestionPage;
