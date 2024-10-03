import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Footer from "../utilities/Footer";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

export default function Landing({ theme }) {
  const [expanded, setExpanded] = useState({});
  const refs = useRef([]);

  const topics = [
    {
      id: 1,
      title: "Introduction to Programming with C++",
      subtopics: [
        "Flowcharts & Pseudocode",
        "Components",
        "Variables & Data Types",
        "Rules for variables",
        "Different Data Types",
        "Explain how the code actually runs",
        "Print statement",
        "Input and Output",
        "Arithmetic operations",
        "Area and perimeter",
        "Type Conversion and Casting",
      ],
    },
    {
      id: 2,
      title: "Control Structures",
      subtopics: [
        "Operators",
        "Explain the types of operators",
        "Conditional Statements",
        "Explain with examples",
        "Loops (Flow Control)",
        "Explain with examples",
        "Patterns",
      ],
    },
    {
      id: 3,
      title: "Functions and Exception Handling",
      subtopics: ["Functions & Scope", "Exception Handling and Files"],
    },
    {
      id: 4,
      title: "Data Structures Basics",
      subtopics: [
        "Arrays & 2D Arrays",
        "Strings",
        "Pointers & Dynamic Allocation",
        "Linked Lists",
        "Stacks & Queues",
      ],
    },
    {
      id: 5,
      title: "Advanced Data Structures",
      subtopics: [
        "Binary Trees",
        "Binary Search Trees",
        "Heaps (Priority Queue)",
        "Hashmaps",
        "Tries",
        "Graph",
      ],
    },
    {
      id: 6,
      title: "Algorithms",
      subtopics: [
        "Sorting Algorithms",
        "Time & Space Complexity",
        "Recursion & Backtracking",
        "Divide & Conquer",
        "Greedy Algorithms",
        "Dynamic Programming",
        "Segment Trees",
      ],
    },
    {
      id: 7,
      title: "Object-Oriented Programming (OOP)",
      subtopics: ["Object-Oriented Programming (OOPs)"],
    },
    {
      id: 8,
      title: "Standard Libraries and Templates",
      subtopics: ["Standard Template Library (STL)"],
    },
  ];

  const toggleExpand = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleClickOutside = (event) => {
    if (refs.current.every((ref) => ref && !ref.contains(event.target))) {
      setExpanded({});
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const length = topics?.length || 0;

  return (
    <>
      <div className={`${theme === "dark" ? "bg-[#131313]" : "bg-white"}`}>
        <div className="md:mt-16 w-full flex flex-col md:flex-row">
          <div
            className={`w-full md:w-7/10 md:p-12 p-4 ${
              theme === "dark"
                ? "bg-gradient-to-r from-[#2D2C2C] to-[#464646]"
                : "bg-gradient-to-r from-[#E8E8E8] via-[#A8A8A8] to-[#C2C2C2]"
            }`}
          >
            <div className="text-lg text-orange-500 font-bold">
              Courses {">"} DSA
            </div>
            <div className="text-4xl font-extrabold">
              The complete guide to DSA{" "}
            </div>
            <div>
              Master C++ from foundational concepts to advanced techniques, and
              delve into Data Structures and Algorithms (DSA) with practical C++
              implementations to enhance your problem-solving skills and coding
              proficiency.
            </div>
            <div className="flex flex-row items-center justify-start">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < 4 ? "text-yellow-500" : "text-yellow-200"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
                </svg>
              ))}
              <div className="font-extrabold ml-2">4.9</div>
              <Link
                target="_blank"
                to="https://rzp.io/l/y1Eux1i"
                className="bg-orange-500 ml-4 text-white font-semibold py-1 px-4 rounded-full shadow-xl hover:bg-orange-600 transition-colors duration-300"
              >
                Join Now
              </Link>
            </div>
          </div>

          <div
            className={`w-full md:w-3/10 p-4 flex justify-center ${
              theme === "dark" ? "bg-[#464646]" : "bg-[#C2C2C2]"
            }`}
          >
            <img
              loading="lazy"
              className="h-auto w-auto"
              src="../images/teacher_video.webp"
              alt="Teacher"
            />
          </div>
        </div>

        <div className="container flex flex-col justify-center p-4 bg-white dark:bg-[#131313] ">
          <div className="text-3xl font-bold text-center dark:text-white">
            Why should you take this course
          </div>
          <div className="w-full mx-auto">
            <img
              className="h-full"
              src="../images/WHY.webp"
              alt="Why take this course"
            />
          </div>
        </div>

        <div className="pb-4 cursor-pointer">
          <div className="mx-28 mb-10 text-left">
            <h1 className="text-3xl font-bold mt-6">This Course Includes:</h1>
          </div>

          {topics.length > 0 ? (
            topics.map((topic, index) => (
              <div
                key={topic.id}
                ref={(el) => (refs.current[index] = el)}
                className={`container mx-auto p-4 my-2 rounded-lg shadow-lg ${
                  expanded[topic.id]
                    ? "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
                    : "bg-slate-200 dark:bg-custom-gradient"
                } mt-1 w-4/5`}
                onClick={() => toggleExpand(topic.id)}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{topic.title}</h2>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents click from bubbling up
                      toggleExpand(topic.id);
                    }}
                    className="ml-5 focus:outline-none"
                  >
                    {expanded[topic.id] ? (
                      <IoIosArrowUp size={24} />
                    ) : (
                      <IoIosArrowDown size={24} />
                    )}
                  </button>
                </div>
                {expanded[topic.id] && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 p-0 list-none">
                    {topic.subtopics.map((subtopic, index) => (
                      <li
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform transform hover:scale-105"
                      >
                        <p className="text-gray-900 dark:text-gray-100">
                          {subtopic}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p className="text-center mt-4">No topics available.</p>
          )}
        </div>

        <div
          className={`flex flex-col justify-center md:px-36 px-8
          ${
            theme === "dark"
              ? "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] w-full"
              : "bg-white"
          }`}
        >
          <div className="text-2xl dark:text-white ml-[5%] font-bold mt-16">
            Description:
          </div>
          <div className="ml-[5%] w-5/5 text-xl dark:text-[#050608] mt-4 mb-16 text-black">
            Dive into our expertly crafted course designed to cover every
            essential aspect of C++ programming and data structures. From
            mastering control structures and functions to exploring advanced
            algorithms and object-oriented programming, we ensure you receive
            the finest education available. With a focus on real-world
            applications and practical examples, you’ll be equipped with the
            skills to excel. Enroll now and experience top-tier learning that
            will set you up for success!
          </div>

          <div className="text-2xl font-bold dark:text-white ml-[5%]">
            About the instructor
          </div>

          <div
            className={`lg:ml-8  md:ml-0 mx-4 p-4 md:p-6 mb-4 md:mb-10 text-base md:text-xl rounded-md ${
              theme === "dark" ? "bg-white-opacity-20" : "bg-white"
            }`}
          >
            <div className="flex flex-col md:flex-row  items-center md:items-start sm:items-center  gap-4 ">
              <div className="mb-4 md:mb-0  ">
                {/* Aligning image the text adjusts accordingly */}
                <img
                  loading="lazy"
                  src="./images/mentor_ayush.jpeg"
                  className=" w-full sm:w-44 lg:w-[1024px]  md:w-96 h-auto rounded-xl border-slate-800 mx-auto md:mx-0"
                  alt="Marry"
                />
                {/* Adjust in terms of div container */}
                <div className="text-center mt-2 dark:text-white text-lg font-bold">
                  Ayush Singh
                </div>
              </div>
              <div className=" text-center md:text-left">
                <div className="text-[14px] sm:text-[15px] md:text-xl lg:text-xl text-black">
                  Ayush Singh, a B.Tech from IIT Kharagpur, is a distinguished
                  figure in competitive programming and machine learning. His
                  impressive credentials include being an Amazon ML-2023, a
                  pre-finalist in TVS EPLC 5.0 .Ayush is also recognized as an
                  expert status on Codeforces , Guardian on LeetCode and a
                  5-Star Coder on CodeChef. He achieved 1st place in Overnite
                  2024 at IIT Kharagpur and has secured notable global ranks,
                  including 49 at CodeChef Starters, 137 at Codeforces, and 164
                  at LeetCode Bi-weekly. Additionally, he earned a Global rank
                  of 1205 in the Meta Hacker Cup 2023 and secured an All India
                  Rank of 30 in MTSE 2018.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials theme={theme} type={"student"} course={"true"} />
      </div>

      <Footer theme={theme} />
    </>
  );
}
