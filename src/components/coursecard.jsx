import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card w-[200px] h-[200px] overflow-hidden border border-white rounded-lg shadow-md">
      <div className="bg-[#161b22] text-white h-full flex flex-col justify-between p-2">
        <img
          src={course.image}
          alt={course.title}
          className="course-image h-[100px] w-full object-cover rounded-md"
        />
        <h2 className="course-title font-bold">{course.title}</h2>
        <p className="course-description text-sm">{course.description}</p>
        <p className="course-price font-bold">{course.price}</p>
      </div>
    </div>
  );
};

export default CourseCard;
