import React, { useState,useRef } from 'react';
import Navbar from '../utilities/Navbar';
import Editor from '@monaco-editor/react';
const CodeEditor = ({ theme, handleThemeSwitch }) => {
  const [currentView, setCurrentView] = useState('description'); // State to manage the current view
  const defaultCode = {
    // javascript: "// JavaScript\nconsole.log('Hello, World!');",
    // typescript: "// TypeScript\nconsole.log('Hello, World!');",
    python: "# Python\nprint('Hello, World!')",
    java: "// Java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
    c: "/* C */\n#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
    cpp: "// C++\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}",
  };
  const editorRef = useRef(null);
  const [language, setLanguage] = useState('java'); // Initial language state
  const [code, setCode] = useState(defaultCode.java); // Initial code state
  const [ans,setans]=useState(false)
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function showValue() {
    alert(editorRef.current.getValue());
  }
  function handleLanguageChange(event) {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setCode(defaultCode[selectedLanguage]); // Update code based on selected language
  }
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
      solution: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit iste error sequi ducimus dolores quidem numquam, magni ipsa amet quibusdam laborum laboriosam atque omnis saepe vero aspernatur, minima quas assumenda?",
      exDes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sapiente laborum error nobis, explicabo ducimus minima vitae ex tempora nisi dolor ipsa dignissimos iure facilis tempore! Neque veniam vel facere."
    }
  ];

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <section>
        <div className='grid g grid-cols-2 gap-2 bg-black'>
          <div className='col-span-1 p-5  bg-[#262626] h-screen'>
            <div className="flex overflow-x-auto mt-16 whitespace-nowrap">
              <button
                className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 border-b border-gray-300 sm:text-base dark:border-gray-500  dark:text-white whitespace-nowrap focus:outline-none ${currentView === 'description' ? 'dark:border-gray-500 rounded-t-md border border-b-0' : 'bg-transparent'}`}
                onClick={() => handleViewChange('description')}
              >
                Description
              </button>
              <button
                className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700  border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300 ${currentView === 'solution' ? 'dark:border-gray-500 rounded-t-md border border-b-0' : 'bg-transparent'}`}
                onClick={() => handleViewChange('solution')}
              >
                Solution
              </button>
              <button
                className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700  border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300 ${currentView === 'submission' ? 'dark:border-gray-500 rounded-t-md border border-b-0' : 'bg-transparent'}`}
                onClick={() => handleViewChange('submission')}
              >
                Submission
              </button>
            </div>
            <div className='text-white'>
              {questions.map((question, index) => (
                <div key={index} className="space-y-2"> 
                  {currentView === 'description' && (
                    <>
                      <h1 className="mt-4 text-2xl">{question.num}: {question.name}</h1> 
                      <p className="m-0 p-0">{question.des}</p> 
                      <h1 className="m-0 p-0 text-xl">{question.exnum} Example</h1> 
                      <p className="m-0 p-0">{question.exDes}</p> 
                    </>
                  )}
                  {currentView === 'solution' && <p className="m-0 pt-4">{question.solution}</p>}
                  {currentView === 'submission' && (
                    <div>{
                         ans&&
                         <p className="m-0 pt-4">{question.submission.true}</p>
                        }
                       {
                         !ans&&
                         <p className="m-0 pt-4">{question.submission.false}</p>
                        }
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='col-span-1 grid gap-2  grid-rows-3 '>
            <div className='row-span-2  px-5 bg-[#262626]'>
                <div className='mt-20 '>
                    <select value={language} onChange={handleLanguageChange} className="text-sm bg-[#232222] ml-2 dark:border-gray-500 border  px-2 py-1 dark:text-white outline-none rounded-md h-full">
                        <option>cpp</option>
                        <option>c</option>
                        <option>java</option>
                        <option>python</option>
                    </select>
                </div>
                <div>
                <Editor
                  className=' bg-[#232222] h-72 w-full m-2 dark:border-gray-500 border dark:text-white  outline-none rounded-md'
                  language={language}
                  value={code}
                  onMount={handleEditorDidMount}
                  options={{ selectOnLineNumbers: true }} // Optional editor option
                 />
                </div>  
                <div className='flex gap-3 flex-row-reverse'>
                <button className='border dark:border-gray-500 rounded-md dark:text-white px-2 py-1 '>Submit</button>
                <button className='border dark:border-gray-500 rounded-md dark:text-white px-2 py-1 '>Run Code</button>
                </div>
            </div>
            <div className='row-span-1  bg-[#262626]'>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CodeEditor;
