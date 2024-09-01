import React, { useState } from "react";
import MentorsSubject from "../components/MentorsSubject";
import PostloginNavbar from "../utilities/PostloginNavbar";
import { useNavigate } from "react-router-dom";
import data from "../data/mentors.json";

const Mentor = ({ theme, handleThemeSwitch }) => {
  const [selectedSubject, setSelectedSubject] = useState("DSA");
  const navigate = useNavigate();
  const handleSubjectClick = (subjectName) => {
    if (selectedSubject === subjectName) {
      setSelectedSubject(null);
    } else {
      setSelectedSubject(subjectName);
    }
  };
  const handleCardClick = (mentorName) => {
    return () => {
      navigate(`/mentor-profile/${mentorName}`);
    };
  };
  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark"
          ? "bg-[#131313] text-white"
          : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
      }`}
    >
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="flex-grow mt-16">
        <div className="bg-gradient-to-r from-[#2D2C2C] to-[#464646] text-5xl text-white m-8 rounded-2xl h-40 p-8">
          keyncoders has Qualified
          <br />
          Mentors
        </div>
        <div className="flex flex-wrap justify-center">
          {data.subjects.map((subject) => (
            <div key={subject.subject_name} className="m-4">
              <MentorsSubject
                subject={subject.subject_name}
                onClick={() => handleSubjectClick(subject.subject_name)}
                isSelected={selectedSubject === subject.subject_name}
              />
            </div>
          ))}
        </div>
        {selectedSubject && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8 ml-8">
            {data.subjects
              .filter((subject) => subject.subject_name === selectedSubject)
              .flatMap((subject) =>
                subject.mentors.map((mentor, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg group"
                    onClick={handleCardClick(mentor.name)}
                  >
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="rounded-xl mb-2 object-cover w-60 h-80 sm:h-56 bg-contain bg-center"
                    />
                    <h2 className="font-semibold text-xl">{mentor.name}</h2>
                    <p className="text-sm dark:text-gray-500 mb-2">Mentor</p>
                    <p className="text-sm opacity-0 group-hover:opacity-100">
                      Rating: {mentor.rating}⭐
                    </p>
                  </div>
                ))
              )}
          </div>
        )}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
            Previous
          </button>
          <span className="text-muted-foreground">
            Page{" "}
            <span className="bg-gray-300 text-black px-2 rounded-sm m-2">
              1
            </span>{" "}
            of 3
          </span>
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
