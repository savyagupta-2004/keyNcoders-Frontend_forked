import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const QuestionSort = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center p-4 text-black'>
			<div className='flex flex-col sm:gap-0 gap-4 space-x-4 sm:flex-row sm:mb-4 mb-2'>
				<select
					name='difficulty'
					id='difficulty'
					className='px-4 py-2 border rounded dark:text-white dark:bg-transparent'>
					<option value='easy'>Easy</option>
					<option value='medium'>Medium</option>
					<option value='hard'>Hard</option>
				</select>
				<select
					name='Topic'
					id='Topic'
					className='px-4 py-2 border rounded dark:text-white dark:bg-transparent'>
					<option value='string'>String</option>
					<option value='array'>Array</option>
					<option value='linkedlist'>Linked List</option>
					<option value='tree'>Tree</option>
					<option value='graph'>Graph</option>
				</select>
				<select
					name='Status'
					id='Status'
					className='px-4 py-2 border rounded dark:text-white dark:bg-transparent'>
					<option value='unsolved'>Unsolved</option>
					<option value='solved'>Solved</option>
				</select>
			</div>
			<div className='relative'>
				<input
					type='search'
					name='Trendy'
					id='search'
					className='px-4 py-2 border rounded-md dark:bg-transparent w-64'
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
