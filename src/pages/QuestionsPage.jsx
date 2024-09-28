import React, { useState, useEffect } from 'react'
import QuestionsList from '../components/QuestionsList'
import QuestionSort from '../components/QuestionsSort'
import { faCircleChevronDown, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostloginNavbar from '../utilities/PostloginNavbar'
import { getQuestions } from '../api/questions'
import Spinner from '../components/Spinner';


const QuestionPage = ({ theme, handleThemeSwitch }) => {
  const [modules, setModules] = useState([])
  const [isVisible, setIsVisible] = useState(false);
  const [loading,setLoading]=useState(false);

  const toggleVisibility = () => {
      setIsVisible(!isVisible);
  };

  

  useEffect(() => {
    async function fetchData() {
      try{
        setLoading(true);
      const data = await getQuestions()
      setModules(data) 
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
    }
    fetchData();
  }, [])

  return (
    <>
    { loading? <div className="w-full bg-black  justify-center items-center flex h-screen">
      <Spinner/>
      </div>:
    <div className={`flex flex-col w-full min-h-screen overflow-x-hidden ${theme === 'dark' ? 'bg-[#131313] text-white' : 'bg-[#f1f1f1] text-black'}`}>
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <section className="mt-16 md:mt-24">
        <QuestionSort />
        {modules.map((module, moduleIndex) => (
          <div key={module._id}>
            <div className='flex items-center shadow-md p-4 md:p-6 mb-5 mx-5 rounded-lg justify-between bg-[#E6E6E6] dark:bg-[#232222]'>
               <h2 className="text-xl font-semibold mb-4">{module.moduleTitle}</h2>
               <span className='flex items-center'>
                  <span
											className='border dark:border-white border-black rounded-md font-semibold text-orange-400 px-[5px] cursor-pointer ml-2'
											onClick={toggleVisibility}>
											<FontAwesomeIcon icon={faCircleChevronDown} />
									</span>
               </span>
            </div>
          {isVisible && (
            <div>
                {module.steps.map((step, stepIndex) => (
                  <QuestionsList
                    key={step._id}
                    stepNo={stepIndex + 1} // Assuming the step index as step number
                    title={step.stepTitle}
                    questions={step.problems.map((problem) => ({
                      name: problem.problem,
                      link: problem.practice,
                      difficulty: problem.difficulty,
                      done: problem.status,
                      flagged: problem.flag,
                    }))}
                    theme={theme}
                  />
                ))}
                </div>
          ) 
          }
         
            
          </div>
        ))}
        
      
      </section>
    </div>
      }
      </>
  )
}

export default QuestionPage
