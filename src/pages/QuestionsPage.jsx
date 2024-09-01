import React from "react";
import QuestionsList from "../components/QuestionsList";
import QuestionSort from "../components/QuestionsSort";
import PostloginNavbar from "../utilities/PostloginNavbar";

const QuestionPage = ({ theme, handleThemeSwitch }) => {
	const steps = [
		{
			stepNo: 1,
			title: "Problems on Arrays",
			questions: [
				{
					name: "Two Sum",
					link: "https://leetcode.com/problems/two-sum/",
					logo:
						"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
					difficulty: "Easy",
					done: false,
					flagged: false,
				},
				{
					name: "Best Time to Buy and Sell Stock",
					link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
					logo:
						"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
					difficulty: "Easy",
					done: false,
					flagged: false,
				},
			],
		},
		{
			stepNo: 2,
			title: "Problems on Strings",
			questions: [
				{
					name: "Longest Substring Without Repeating Characters",
					link:
						"https://leetcode.com/problems/longest-substring-without-repeating-characters/",
					logo:
						"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
					difficulty: "Medium",
					done: false,
					flagged: false,
				},
				{
					name: "Valid Parentheses",
					link: "https://leetcode.com/problems/valid-parentheses/",
					logo:
						"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
					difficulty: "Easy",
					done: false,
					flagged: false,
				},
			],
		},
		{
			stepNo: 3,
			title: "Problems on Linked Lists",
			questions: [
				{
					name: "Add Two Numbers",
					link: "https://leetcode.com/problems/add-two-numbers/",
					logo:
						"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
					difficulty: "Medium",
					done: false,
					flagged: false,
				},
				{
					name: "Merge Two Sorted Lists",
					link: "https://leetcode.com/problems/merge-two-sorted-lists/",
					logo:
						"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
					difficulty: "Easy",
					done: false,
					flagged: false,
				},
			],
		},
	];

	return (
		<div
			className={`flex flex-col w-full min-h-screen overflow-x-hidden ${
				theme === "dark"
					? "bg-[#131313] text-white"
					: "bg-[#f1f1f1] text-black"
			}`}>
			<PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
			<section className="mt-16 md:mt-24">
				<QuestionSort />
				{steps.map((step, index) => (
					<QuestionsList
						key={index}
						stepNo={step.stepNo}
						title={step.title}
						questions={step.questions}
						theme={theme}
					/>
				))}
			</section>
		</div>
	);
};

export default QuestionPage;
