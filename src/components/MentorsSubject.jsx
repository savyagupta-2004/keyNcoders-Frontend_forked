import React from "react";

const MentorsSubject = ({ subject, onClick, isSelected }) => {
  return (
    <div
      className={`inline-block w-64 h-20 py-4 px-8 m-4 font-bold text-4xl   flex justify-center rounded-xl cursor-pointer overflow-hidden ${
        isSelected
          ? "bg-[#F17650] text-gray-800"
          : "bg-gradient-to-r from-[#585858] via-[#474646] to-[#C3C3C3] dark:text-orange-500 text-black hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-500"
      }`}
      onClick={onClick}
    >
      <h1 className="truncate">{subject}</h1>
    </div>
  );
};

export default MentorsSubject;
