import React, { useState, useRef } from "react";

import Editor from "@monaco-editor/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import PostloginNavbar from "../utilities/PostloginNavbar";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const CodeEditor = ({ theme, handleThemeSwitch }) => {
  const [currentView, setCurrentView] = useState("description");
  const defaultCode = {
    python: "# Python",
    java: "// Java\npublic class HelloWorld {\n    public static void main(String[] args) {\n     \n }\n}",
    c: "/* C */\n#include <stdio.h>\n\nint main() {\n       \n}",
    cpp: "// C++\n#include <iostream>\n\nint main() {\n    \n}",
  };

  const { questionId } = useParams();
  const editorRef = useRef(null);
  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState(defaultCode.java);
  const [ans, setAns] = useState(false);
  const [data, setData] = useState("");

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function submitData() {
    localStorage.setItem("submittedCode", data);
    setAns(data);
    setCurrentView("submission");
  }

  const handleEditorChange = (value) => {
    setData(value);
  };
  function handleLanguageChange(event) {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setCode(defaultCode[selectedLanguage]);
  }

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

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

  const editorTheme = theme === "dark" ? "vs-dark" : "vs-light";

  const questions = [
    {
      num: "1.1",
      name: "Longest Subsequence",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sapiente laborum error nobis, explicabo ducimus minima vitae ex tempora nisi dolor ipsa dignissimos iure facilis tempore! Neque veniam vel facere.",
      exnum: "1.1.1",
      submission: {
        true: "Correct",
        false: "Incorrect",
      },
      solution: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      exDes:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sapiente laborum error nobis.",
    },
  ];

  useEffect(() => {
    const savedCode = localStorage.getItem("submittedCode");
    if (savedCode) {
      setAns(savedCode);
      setCurrentView("submission");
    }
  }, []);

  return (
    <div className="">
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#D9D9D9] gap-2 dark:bg-black min-h-screen">
          <div className="col-span-1 p-5 dark:bg-[#262626] bg-white  md:h-auto">
            <div className="flex overflow-x-auto mt-10 md:mt-16 whitespace-nowrap">
              <button
                className={`inline-flex items-center h-12 px-4 py-2 text-sm text-black border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white ${
                  currentView === "description"
                    ? "dark:border-gray-500 rounded-t-md border border-b-0"
                    : "bg-transparent"
                }`}
                onClick={() => handleViewChange("description")}
              >
                Description
              </button>
              <button
                className={`inline-flex items-center h-12 px-4 py-2 text-sm text-black border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white ${
                  currentView === "solution"
                    ? "dark:border-gray-500 rounded-t-md border border-b-0"
                    : "bg-transparent"
                }`}
                // onClick={() => handleViewChange('solution')}
              >
                Solution
              </button>
              <button
                className={`inline-flex items-center h-12 px-4 py-2 text-sm text-black border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white ${
                  currentView === "submission"
                    ? "dark:border-gray-500 rounded-t-md border border-b-0"
                    : "bg-transparent"
                }`}
                onClick={() => handleViewChange("submission")}
              >
                Submission
              </button>
            </div>
            <div className="dark:text-white text-black relative">
              {questions.map((question, index) => (
                <div key={index} className="space-y-2">
                  {currentView === "description" && (
                    <>
                       <h1 className="mt-4 text-2xl">
                        {question.num}: {question.name}
                      </h1>
                      <p>{question.des}</p>
                      <h1 className="text-xl">{question.exnum} Example</h1>
                      <p>{question.exDes}</p> 
                      
                      {/* <div className="flex flex-col top-44  absolute left-48 justify-center">
                        <h1 className="text-gray-300 text-2xl font-bold">Stay tune till <span className="text-orange-500">oct 10</span></h1>
                        <button
                            className="bg-orange-500 mt-3 flex items-center gap-3 text-white py-2 w-48 px-4 rounded"
                            onClick={handleAddToGoogleCalendar}
                          >
                            <img className="h-9 w-9 rounded-t-md rounded-bl-md rounded-br-2xl bg-white" src="/images/calender_google.png"/> 
                            Add to Calendar
                        </button>
                      </div> */}
                    </>
                  )}
                  {currentView === "solution" && (
                    <p className="pt-4">{question.solution}</p>
                  )}
                  {currentView === "submission" && (
                    <div>
                      <pre className="p-4 overflow-auto">
                        <code>{ans}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side (Editor) */}
          <div className="col-span-1 grid gap-2 grid-rows-3  md:min-h-auto">
            <div className="row-span-2 px-5 bg-white dark:bg-[#262626] overflow-x-scroll  md:h-auto">
              <div className="mt-10 md:mt-20">
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="text-sm bg-white dark:bg-[#232222] ml-2 dark:border-gray-500 border px-2 py-1 dark:text-white outline-none rounded-md"
                >
                  <option value="cpp">C++</option>
                  <option value="c">C</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                </select>
              </div>
              <div>
                <Editor
                  className="h-60 md:h-72 w-full m-2 dark:text-white outline-none rounded-md overflow-x-scroll"
                  language={language}
                  theme={editorTheme}
                  value={code}
                  onChange={handleEditorChange}
                  onMount={handleEditorDidMount}
                />
              </div>
              <div className="flex gap-3 flex-row-reverse">
                <button
                  onClick={submitData}
                  className="border dark:border-gray-500 rounded-md dark:text-white px-2 py-1"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Additional content area */}
            <div className="row-span-1 bg-white dark:bg-[#262626]">
              {/* Optional content for future expansion */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeEditor;
