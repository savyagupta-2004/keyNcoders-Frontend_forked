import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import mentorsData from "../data/mentors.json";
import PostloginNavbar from "../utilities/PostloginNavbar";
import Footer from "../utilities/Footer";

const MentorProfile = ({ theme, handleThemeSwitch }) => {
  const { mentorName } = useParams();
  const [mentor, setMentor] = useState(null);
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    const fetchMentorData = () => {
      let selectedMentor = null;
      let mentorSubject = null;

      // Loop through each subject and its mentors to find the matching mentor
      for (const subj of mentorsData.subjects) {
        const foundMentor = subj.mentors.find(
          (mentor) => mentor.name.toLowerCase() === mentorName.toLowerCase()
        );
        if (foundMentor) {
          selectedMentor = foundMentor;
          mentorSubject = subj.subject_name;
          break;
        }
      }

      setMentor(selectedMentor);
      setSubject(mentorSubject);

      console.log(selectedMentor, mentorSubject); // Debugging: Check if mentor and subject are set
    };

    fetchMentorData();
  }, [mentorName]);

  // Handle mentor not found case
  if (!mentor) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Mentor not found</p>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark"
          ? "bg-[#131313] text-white"
          : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
      }`}
    >
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />

      <div className="bg-background mt-10">
        <div className="bg-gradient-to-r from-[#272727] via-[#3d3c3c] to-[#4b4a4a] text-white">
          {/* <nav className="font-semibold text-xl flex items-center space-x-4 py-5 px-4 md:px-0">
            <Link to="#" className="hover:text-primary text-[#F28D6D]">
              Mentors
            </Link>
            &gt;
            <Link to="#" className="hover:text-primary text-[#F28D6D]">
              {subject}
            </Link>
          </nav> */}

          <div className="flex flex-col md:flex-row p-4 md:p-10 ">
            <div className="flex-1 mt-3">
              <h1 className="text-2xl md:text-3xl font-bold">{mentor.name}</h1>
              <p>{mentor.qualification}</p>
              <p className="mt-2">{mentor.description}</p>

              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="ml-2">(135)</span>
                </div>
                <span className="ml-4">4.9</span>
              </div>

              <div className="flex space-x-2 md:space-x-4 mt-4">
                {/* <button className="bg-gradient-to-r from-[#797979] via-[#606060] to-[#797979] rounded-lg text-orange-500 py-2 px-4 text-sm">
                  About
                </button> */}
                <button className="bg-gradient-to-r from-[#797979] via-[#606060] to-[#797979] rounded-lg text-orange-500 py-2 px-4 text-sm">
                  Chat now
                </button>
                <button className="bg-gradient-to-r from-[#797979] via-[#606060] to-[#797979] rounded-lg text-orange-500 py-2 px-4 text-sm">
                  Request a call  
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-6 self-center flex justify-center p-4 rounded-lg">
              <img
                className="w-[120px] h-[150px] md:w-[150px] md:h-[180px] rounded-lg"
                src={mentor.image || "https://via.placeholder.com/200x250"}
                alt={mentor.name}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center p-4 md:p-12">
          <div className="flex flex-col lg:w-[60%] w-full">
            <div className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold">About Mentor</h2>
              <p className="mt-2 text-[#bebdbd] font-thin leading-[1.75rem]">
                {mentor.description}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold">Certification</h2>
              <p className="mt-2 text-[#bebdbd] font-thin leading-[1.75rem]">
                {/* Mentor certifications data can be included here */}
                Placeholder text about mentor certifications.
              </p>
            </div>
          </div>

          {/* <div className="mt-8 bg-card rounded-lg h-fit w-full md:w-[400px] p-4 bg-gradient-to-tr from-[#2D2C2C] to-[#464646] lg:ml-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold text-[#FF6652]">
                Total Courses
              </h2>
              <p className="mt-2 text-orange-600">30</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold text-[#FF6652] mt-4">
                Ratings
              </h2>
              <p className="mt-2">
                {mentor.rating} (<span className="text-orange-600">135</span>)
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold text-[#FF6652] mt-4">
                Experience
              </h2>
              <p className="mt-2">10 Years</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold text-[#FF6652] mt-4">
                Graduated
              </h2>
              <p className="mt-2">Yes</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold text-[#FF6652] mt-4">
                Language
              </h2>
              <p className="mt-2">English</p>
            </div>
          </div> */}
        </div>
      </div>

      <Footer theme={theme} />
    </div>
  );
};

export default MentorProfile;
