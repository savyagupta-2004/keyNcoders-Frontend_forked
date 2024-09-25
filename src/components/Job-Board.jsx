import React,{ useState } from "react"
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp} from 'react-icons/fi';

const JobBoard=({})=>{
    const members = [
        {
            company_icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-oD07Xuexpxwsxp6thcQkIz1nk3XuOBUdxA&s",
            company_name: "Google",
            job_title: "Full stack engineer",
            job_description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            job_type: "Full-time",
            location: "Remotely",
            path: "javascript:void(0)"
        }, {
            company_icon:"https://banner2.cleanpng.com/20180320/dwq/av0pnqwyw.webp",
            company_name: "Github",
            job_title: "Web tools manager",
            job_description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            job_type: "Part-time",
            location: "USA, New york city",
            path: "javascript:void(0)"
        }, {
            company_icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-oD07Xuexpxwsxp6thcQkIz1nk3XuOBUdxA&s",
            company_name: "Figma",
            job_title: "UI/UX Designer",
            job_description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            job_type: "Full-time",
            location: "Mauritania",
            path: "javascript:void(0)",
        }
      ]
      const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? members : members.slice(0, 2);
    const handleToggle = () => {
        setShowAll(!showAll);
      };   

      const jobs = [
        {
            company_icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-oD07Xuexpxwsxp6thcQkIz1nk3XuOBUdxA&s",
            company_name: "Google",
            job_title: "Full stack engineer",
            job_description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            job_type: "Full-time",
            location: "Remotely",
            path: "javascript:void(0)"
        }, {
            company_icon:"https://banner2.cleanpng.com/20180320/dwq/av0pnqwyw.webp",
            company_name: "Github",
            job_title: "Web tools manager",
            job_description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            job_type: "Part-time",
            location: "USA, New york city",
            path: "javascript:void(0)"
        }, 
      ]
      
      return (
        <section className="py-28">
            <div className="max-w-screen-lg dark:text-white mx-auto px-4 md:px-8">
                <div className="max-w-md">
                    <h1 className="dark:text-white text-2xl font-extrabold sm:text-3xl">Discover Jobs</h1>
                    <p className="dark:text-white-600 mt-2">Based on your profile and previous search results.</p>
                </div>
                <ul className="mt-12  space-y-3">
                    {
                        visibleItems.map((item, idx) => (
                            <li key={idx} className="px-4 py-5 bg-[#E6E6E6] hover:bg-[linear-gradient(99.32deg,_rgba(237,_55,_77,_0.9)_0.56%,_rgba(250,_121,_63,_0.9)_59.52%,_rgba(247,_246,_81,_0.9)_117.27%)] hover:dark:bg-[linear-gradient(99.32deg,_rgba(237,_55,_77,_0.9)_0.56%,_rgba(250,_121,_63,_0.9)_59.52%,_rgba(247,_246,_81,_0.9)_117.27%)] dark:bg-[#232222]  duration-150  rounded-xl">
                                <a href={item.path} className="space-y-3">
                                    <div className="flex items-center gap-x-3">
                                        <div className=" w-14 h-14  rounded-full flex items-center justify-center">
                                            <img src={item.company_icon}/>
                                        </div>
                                        <div>
                                            <span className="block text-sm dark:text-white font-medium">{item.company_name}</span>
                                            <h3 className="text-base dark:text-white font-semibold mt-1">{item.job_title}</h3>
                                        </div>
                                    </div>
                                    <p className="dark:text-white-600 sm:text-sm">
                                        {item.job_description}
                                    </p>
                                    <div className="text-sm dark:text-white-600 flex items-center gap-6">
                                        <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 dark:text-white" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z" fill="#9CA3AF" />
                                                <path d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z" fill="#9CA3AF" />
                                            </svg>
                                            {item.job_type}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 dark:text-white" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" fill="#9CA3AF" />
                                            </svg>
      
                                            {item.location}
                                        </span>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="mt-4 flex justify-center">
                    <button
                    className="text-black dark:text-white flex items-center hover:dark:text-gray-200  hover:text-gray-700 font-semibold"
                    onClick={handleToggle}
                    >
                        {showAll&&(
                            <p className="flex items-center">Show Less <FiChevronUp className="pt-1"/></p>
                        )

                        }
                        {!showAll&&(
                            <p className="flex items-center">Show More <FiChevronDown className="pt-1"/></p>
                        )

                        }
                    {/* {showAll ? 'Show Less ' : 'Show More'}<FiChevronDown className="pt-1"/> */}
                    </button>
      </div>
                </div>
            <div className="max-w-screen-lg mt-12 dark:text-white mx-auto px-4 md:px-8">
                <div className="max-w-md">
                    <h1 className="dark:text-white text-lg font-bold">Jobs where you’re a Top Applicant</h1>
                    <p className="dark:text-white-600 mt-2">Based on your chances of hearing back</p>
                </div>
                <ul className="mt-5  space-y-3">
                    {
                        jobs.map((item, idx) => (
                            <li key={idx} className="px-4 py-4 bg-[#E6E6E6] hover:bg-[linear-gradient(99.32deg,_rgba(237,_55,_77,_0.9)_0.56%,_rgba(250,_121,_63,_0.9)_59.52%,_rgba(247,_246,_81,_0.9)_117.27%)] hover:dark:bg-[linear-gradient(99.32deg,_rgba(237,_55,_77,_0.9)_0.56%,_rgba(250,_121,_63,_0.9)_59.52%,_rgba(247,_246,_81,_0.9)_117.27%)] dark:bg-[#232222]  duration-150  rounded-xl">
                                <a href={item.path} className="space-y-3">
                                    <div className="flex items-center gap-x-3">
                                        <div className=" w-14 h-14  rounded-full flex items-center justify-center">
                                               <img src={item.company_icon}/>
                                        </div>
                                        <div>
                                            <span className="block text-sm dark:text-white font-medium">{item.company_name}</span>
                                            <h3 className="text-base dark:text-white font-semibold mt-1">{item.job_title}</h3>
                                        </div>
                                    </div>
                                    <p className="dark:text-white-600 sm:text-sm">
                                        {item.job_description}
                                    </p>
                                    <div className="text-sm dark:text-white-600 flex items-center gap-6">
                                        <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 dark:text-white" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z" fill="#9CA3AF" />
                                                <path d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z" fill="#9CA3AF" />
                                            </svg>
                                            {item.job_type}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 dark:text-white" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" fill="#9CA3AF" />
                                            </svg>
      
                                            {item.location}
                                        </span>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
      )
}
export default JobBoard;
