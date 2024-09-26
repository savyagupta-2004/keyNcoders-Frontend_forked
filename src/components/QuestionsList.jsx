import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faCircleChevronDown, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "/favicon.ico"
const QuestionsList = ({ stepNo, title, questions, theme }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const [questionsState, setQuestionsState] = useState(questions);

    const toggleDone = (index) => {
        const newQuestions = [...questionsState];
        newQuestions[index].done = !newQuestions[index].done;
        setQuestionsState(newQuestions);
    };

    const toggleFlagged = (index) => {
        const newQuestions = [...questionsState];
        newQuestions[index].flagged = !newQuestions[index].flagged;
        setQuestionsState(newQuestions);
    };

    return (
        <div className='mb-4 bg-transparent text-black px-4 md:px-8'>
            <div
                className={`flex justify-between shadow-md p-4 md:p-6 bg-[#E6E6E6] dark:bg-[#232222] ${
                    isVisible
                        ? "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
                        : "bg-[#232222]"
                } text-white rounded-t-lg shadow-md`}>
                <h1 className="dark:text-white text-black font-bold text-lg md:text-xl">
                    Step {stepNo} : {title}
                </h1>
								<span className='flex items-center'>
									<p className='border border-white rounded-full bg-gray-900 w-12 md:w-20 text-center px-2 py-1 text-sm md:text-base'>
											{questionsState.filter((q) => q.done).length} / {questionsState.length}
									</p>
									<span
											className='border dark:border-white border-black rounded-md font-semibold text-orange-400 px-[5px] cursor-pointer ml-2'
											onClick={toggleVisibility}>
											<FontAwesomeIcon icon={faCircleChevronDown} />
									</span>
							</span>
            </div>

            {isVisible && (
                <div
                    className={`p-4 md:p-6 bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] rounded-b-lg`}>
                    <div className="overflow-x-auto">
                        <table className='min-w-full border rounded-lg border-black text-black dark:text-white dark:bg-[#383232] bg-white'>
                            <thead>
                                <tr>
                                    <th className='py-2 px-4 border border-gray-300'>Status</th>
                                    <th className='py-2 px-4 border border-gray-300'>Problem Name</th>
                                    <th className='py-2 px-4 border border-gray-300'>Practice Link</th>
                                    <th className='py-2 px-4 border border-gray-300'>Leetcode Link</th>
                                    <th className='py-2 px-4 border border-gray-300'>Difficulty</th>
                                    <th className='py-2 px-4 border border-gray-300'>Flag</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questionsState.map((question, index) => (
                                    <tr key={index}>
                                        <td className='py-2 px-4 text-center border border-gray-300'>
                                            <input
                                                type='checkbox'
                                                checked={question.done}
                                                onChange={() => toggleDone(index)}
                                            />
                                        </td>
                                        <td  className='py-3 px-4 border border-gray-300'>{question.name}</td>
                                        <td className='py-2 px-4 text-center border border-gray-300'>
                                            <Link to={`/codeEditor/${index}`} target='_blank' rel='noopener noreferrer'>
                                                <img
                                                    src={logo}
                                                    alt='Practice Site Logo'
                                                    className='h-6 inline'
                                                />
                                            </Link>
                                        </td>
                                        <td className='py-2 px-4 text-center border border-gray-300'>
                                            <a href={question.link} target='_blank' rel='noopener noreferrer'>
                                                <img
                                                    src={question.logo}
                                                    alt='Practice Site Logo'
                                                    className='h-6 inline'
                                                />
                                            </a>
                                        </td>
                                        <td
                                            className='py-2 px-4 border border-gray-300'
                                            style={{ color: getDifficultyColor(question.difficulty) }}>
                                            {question.difficulty}
                                        </td>
                                        <td className='py-2 px-4 border border-gray-300 text-center'>
                                            <FontAwesomeIcon
                                                icon={faPenToSquare}
                                                className={`cursor-pointer ${
                                                    question.flagged ? "text-green-500" : "text-red-500"
                                                }`}
                                                onClick={() => toggleFlagged(index)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
        case "Easy":
            return "green";
        case "Medium":
            return "yellow";
        case "Hard":
            return "red";
        default:
            return "black";
    }
};

export default QuestionsList;
