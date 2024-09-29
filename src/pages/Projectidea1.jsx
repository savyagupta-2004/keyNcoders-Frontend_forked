import { useState } from "react";
import React from "react";
import PostloginNavbar from "../utilities/PostloginNavbar";
import Footer from "../utilities/Footer";
const Projectidea1 = ({ theme, handleThemeSwitch }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="mt-14 bg-black shadow-xl p-10 min-h-[80vh] ">
        <div className="main-content bg-black">
          <h1 className="text-4xl text-orange-500 font-bold text-center mb-5">
            Data Structure and Algorithm (DSA) Project Ideas
          </h1>
          <img
            src="images/todolist.png" // Replace with your image path
            alt="DSA Project"
            className="mx-auto my-4 w-1/2 rounded-lg shadow-md"
          />
          <p className="text-xl text-[#c9d1d9] font-roboto mt-5">
            Understanding data structures and algorithms is pivotal for software
            developers seeking to enhance their problem-solving capabilities and
            optimize data organization. This knowledge is indispensable for
            professionals across the programming spectrum, contributing to more
            efficient and effective software development.
          </p>
          <p className="text-xl text-[#c9d1d9] font-roboto mt-4">
            Having instructed over 3000 students, our findings indicate that
            theoretical expertise falls short in enabling students to fully
            grasp the intricacies of data structures and algorithms (DSA)
            concepts. Practical application is paramount in honing their
            problem-solving acumen and fostering a comprehensive understanding
            of these principles.
          </p>
          <p className="text-xl text-[#c9d1d9] font-roboto mt-4">
            But what are the best DSA projects to work on? We are here to share
            a few data structure project ideas you can start with.
          </p>
        </div>
        <div className="min-h-screen flex justify-center items-center ">
          <div className="border border-white p-3 w-[60rem] mt-10 bg-[#161b22]  flex-col justify-center">
            <div className="mt-8">
              <h1 className="text-3xl text-orange-500 font-bold mt-5">
                1. Creating a To-do List
              </h1>
              <p className="text-xl text-white mt-3">Difficulty level: Easy</p>
              <p className="text-xl text-white mt-3">
                This project is ideal for those new to Data Structures and
                Algorithms. It focuses on implementing CRUD operations (Create,
                Read, Update, Delete) within practical applications, while also
                exploring various data structures and the principles of FIFO and
                LIFO. The To-Do list application enables users to add tasks,
                mark them as completed or incomplete, and remove them once they
                are finished.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-3xl text-orange-500 font-bold mt-5">
                Learning Outcomes:
              </h1>
              <ul className="text-xl text-[#c9d1d9] font-roboto mt-3  pl-5">
                <li>
                  • Familiarity with techniques for storing and organizing
                  various tasks using arrays and lists
                </li>
                <li>
                  • Ability to implement algorithms for searching and sorting
                  tasks based on criteria such as priority or deadlines
                </li>
                <li>
                  • Understanding of linked list data structures for the dynamic
                  management of tasks
                </li>
                <li>
                  • Knowledge of the efficiency of different operations,
                  including adding, removing, and searching, with a focus on
                  time complexity analysis
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h1 className="text-3xl text-orange-500 font-bold mt-5">
                What It Takes to Execute This Project:
              </h1>
              <ul className="text-xl text-[#c9d1d9] font-roboto mt-3  pl-5">
                <li>
                  • Establish a suitable data structure for task storage, such
                  as a linked list or dynamic array.
                </li>
                <li>
                  • Create functions to add, delete, and update the status of
                  tasks as completed.
                </li>
                <li>
                  • Apply a sorting method like merge sort or quicksort to
                  arrange tasks by their priority or deadline.
                </li>
                <li>
                  • Develop a search mechanism, such as binary or linear search,
                  to locate specific tasks efficiently.
                </li>
                <li>
                  • Explore the use of a hash table or tree structure for
                  improved task organization and retrieval speed.
                </li>
                <li>
                  • Ensure data persistence by implementing functionality to
                  save and retrieve tasks from a file or database.
                </li>
                <li>
                  • Leverage algorithms for effective task scheduling and
                  prioritization, using approaches like greedy algorithms or
                  dynamic programming.
                </li>
                <li>
                  • Design a user-friendly interface for users to interact with
                  the to-do list features.
                </li>
              </ul>
            </div>

            <h1 className="text-3xl text-orange-500 font-bold mb-5 mt-10">
              My To-Do List
            </h1>

            <section className="mb-6 w-full">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="mb-2 w-full p-3 rounded-lg bg-[#22272e] text-[#c9d1d9] border border-[#8b949e] placeholder:text-[#8b949e]"
                placeholder="Add a new task"
              />
              <button
                onClick={addTask}
                className="w-full bg-orange-500 text-white py-2 rounded-lg shadow-md hover:bg-orange-600"
              >
                Add Task
              </button>
            </section>

            <ul className="w-full">
              {tasks.map((t, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center p-3 border-b border-[#8b949e]`}
                >
                  <span
                    className={
                      t.completed
                        ? "line-through text-[#8b949e]"
                        : "text-[#c9d1d9]"
                    }
                  >
                    {t.text}
                  </span>
                  <div>
                    <button
                      onClick={() => toggleTaskCompletion(index)}
                      className="mr-2 text-orange-500 hover:underline"
                    >
                      Toggle
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <section className="mt-6 w-full">
          <h2 className="text-2xl text-orange-500 font-bold text-center mb-4">
            Watch How to Solve This Project
          </h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/your-video-id" // Replace with your video ID
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </section> */}
      </div>
      <Footer theme={theme} />
    </>
  );
};

export default Projectidea1;
