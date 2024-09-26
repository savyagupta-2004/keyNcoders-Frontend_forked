import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const QuestionSort = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center p-4 text-black'>
            <div className='flex flex-col sm:flex-row sm:gap-4 gap-2'>
                <select
                    name='difficulty'
                    id='difficulty'
                    className='px-4 py-2 border-gray-200 border-2 rounded-md dark:text-white dark:bg-transparent'>
                    <option value='easy' className="text-green-500">Easy</option>
                    <option value='medium' className="text-yellow-600">Medium</option>
                    <option value='hard' className="text-red-600">Hard</option>
                </select>
                <select
                    name='Topic'
                    id='Topic'
                    className='px-4 py-2 border-gray-200 border-2 rounded-md dark:text-white dark:bg-transparent'>
                    <option value='string' className="text-black">String</option>
                    <option value='array' className="text-black">Array</option>
                    <option value='linkedlist' className="text-black">Linked List</option>
                    <option value='tree' className="text-black">Tree</option>
                    <option value='graph' className="text-black">Graph</option>
                </select>
                <select
                    name='Status'
                    id='Status'
                    className='px-4 py-2 border-gray-200 border-2 rounded-md dark:text-white dark:bg-transparent'>
                    <option value='unsolved' className="text-red-600">Unsolved</option>
                    <option value='solved' className="text-green-500">Solved</option>
                </select>
            </div>
            <div className='relative mt-4 md:mt-0'>
                <input
                    type='search'
                    name='Trendy'
                    id='search'
                    className='px-4 py-2 border rounded-md dark:bg-transparent w-full max-w-xs'
                    placeholder='Search topics...'
                />
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                />
            </div>
        </div>
    );
};

export default QuestionSort;
