import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import mentorsData from "../data/mentors.json"; // Adjust the import path as needed
import PostloginNavbar from "../utilities/PostloginNavbar";
import Footer from "../utilities/Footer";

const MentorProfile = ({ theme, handleThemeSwitch }) => {
  const { mentorName } = useParams();
  const [mentor, setMentor] = useState(null);
  const [subject, setSubject] = useState(null);
  useEffect(() => {
    // Fetch data from the mentors.json file
    const fetchMentorData = async () => {
      try {
        // Assuming mentorsData is already imported from the JSON file
        let selectedMentor = null;
        let mentorSubject = null;

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
      } catch (error) {
        console.error("Error fetching mentor data:", error);
      }
    };

    fetchMentorData();
  }, [mentorName]);

  if (!mentor) {
    return <div>Loading...</div>;
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
      <div className="bg-background mt-12">
        <div className="bg-gradient-to-tr from-[#2D2C2C] to-[#464646] py-10 md:px-24 px-10">
          <nav className=" font-semibold text-xl flex items-center space-x-4 py-5">
            <Link to="/mentors" className="hover:text-primary text-[#F28D6D]">
              Mentors{"\t"}
            </Link>
            &gt;
            <Link to="/mentors" className="hover:text-primary text-[#F28D6D]">
              {subject}
            </Link>
          </nav>
          <div className="flex p-6 md:flex-row flex-col">
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{mentor.name}</h1>
              <p className="">{mentor.qualification}</p>
              <p className="mt-2">{mentor.description}</p>
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="ml-2 ">(135)</span>
                </div>
                <span className="ml-4 ">4.9</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <button className="bg-gray-700 rounded-lg drop-shadow-[2px_2px_2px_rgb(255,165,0)] text-orange-500 py-2 px-4">
                  About
                </button>
                <button className="bg-gray-700 rounded-lg drop-shadow-[2px_2px_2px_rgb(255,165,0)] text-orange-500 py-2 px-4">
                  Courses
                </button>
                <button className="bg-gray-700 rounded-lg drop-shadow-[2px_2px_2px_rgb(255,165,0)] text-orange-500 py-2 px-4">
                  Reviews
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 ml-6">
              <img
                className="w-[200px] h-[250px] rounded-lg md:mt-0 mt-10 self-center"
                src={mentor.image}
                alt={mentor.name}
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center p-12 md:px-[200px] px-12  ">
          <div className="flex flex-col lg:w-[60%] w-full">
            <div className="mt-8">
              <h2 className="text-2xl font-bold">About Mentor</h2>
              <p className="mt-2 w-[80%] text-[#999999] font-thin leading-[1.75rem]">
                About Mentor Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                viverra maecenas accumsan lacus vel facilisis consectetur
                adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                Risus commodo viverra maecenas accumsan lacus vel facilisis
                consectetur adipiscing elit.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold">Certification</h2>
              <p className="mt-2 w-[80%] text-[#999999] font-thin leading-[1.75rem]">
                About Mentor Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                viverra maecenas accumsan lacus vel facilisis consectetur
                adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                Risus commodo viverra maecenas accumsan lacus vel facilisis
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-card rounded-lg h-fit w-[400px] p-4 bg-gradient-to-tr from-[#2D2C2C] to-[#464646]">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold  text-[#FF6652] ">
                Total Course
              </h2>
              <p className="mt-2 text-orange-600">30</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#FF6652]  mt-4">
                Ratings
              </h2>
              <p className="mt-2">
                {mentor.rating} (<span className="text-orange-600">135</span>)
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#FF6652]  mt-4">
                Experiences
              </h2>
              <p className="mt-2">10 Years</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold  text-[#FF6652] mt-4">
                Graduated
              </h2>
              <p className="mt-2">Yes</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold  text-[#FF6652] mt-4">
                Language
              </h2>
              <p className="mt-2">English</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentorProfile;
