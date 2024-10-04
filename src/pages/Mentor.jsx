import React, { useState } from 'react'
import MentorsSubject from '../components/MentorsSubject'
import PostloginNavbar from '../utilities/PostloginNavbar'
import Footer from "../utilities/Footer"
import { useNavigate } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { getMentor } from '../api/mentors'
import { useEffect } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Mentor = ({ theme, handleThemeSwitch }) => {
  const [selectedSubject, setSelectedSubject] = useState('DSA')
  const [currentPage, setCurrentPage] = useState(1);
  const [mentor,setMentor]=useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMentor();
        console.log(data);
        setMentor(data);
      } catch (err) {
        console.log(err);
      } 
    }
    fetchData();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    for (let i = 1; i <= maxStars; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500" />); // Full star
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />); // Half star
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />); // Empty star
      }
    }
    return stars;
  };


  // const mentorsPerPage = 5;
  // const navigate = useNavigate()

  // const handleSubjectClick = (subjectName) => {
  //   if (selectedSubject === subjectName) {
  //     setSelectedSubject(null)
  //   } else {
  //     setSelectedSubject(subjectName)
  //     setCurrentPage(1) // Reset page when subject changes
  //   }
  // }

  // const handleCardClick = (mentorName) => {
  //   return () => {
  //     navigate(`/mentor-profile/${mentorName}`)
  //   }
  // }

  // const handleNextPage = () => {
  //   setCurrentPage((prev) => prev + 1)
  // }

  // const handlePreviousPage = () => {
  //   setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  // }

  // Ensure data and mentors exist
  // const selectedMentors = selectedSubject
  //   ? data?.subjects?.find((subject) => subject.subject_name === selectedSubject)?.mentors || []
  //   : [];

  // Pagination logic
  // const indexOfLastMentor = currentPage * mentorsPerPage;
  // const indexOfFirstMentor = indexOfLastMentor - mentorsPerPage;
  // const currentMentors = selectedMentors.slice(indexOfFirstMentor, indexOfLastMentor);
  // const totalPages = selectedMentors.length > 0 ? Math.ceil(selectedMentors.length / mentorsPerPage) : 1;

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-[#131313] text-white' : 'bg-white'}`}>
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="flex-grow mt-16 items-center mb-16">
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
                  <span className="text-yellow-500 flex">{renderStars(mentor.ratings)}</span>
                  <span className="ml-2">({mentor.ratingsCount})</span>
                </div>
                <span className="ml-4">{mentor.ratings}</span>
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
                {mentor.about}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold">Certification</h2>
              <p className="mt-2 text-[#bebdbd] font-thin leading-[1.75rem]">
                {/* Mentor certifications data can be included here */}
                {mentor.certification}
               </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold">
                 Experience
              </h2>
              <p className="mt-2 text-[#bebdbd] font-thin leading-[1.75rem]">
                {/* Mentor certifications data can be included here */}
                {mentor.experiences}                
               </p>
            </div>

      

          </div>

          <div className="mt-8 bg-card rounded-lg h-fit w-full md:w-[400px] p-4 bg-gradient-to-tr from-[#2D2C2C] to-[#464646] lg:ml-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold text-[#FF6652]">
                Total Courses
              </h2>
              <p className="mt-2 text-orange-600">{mentor.totalCourses}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold text-[#FF6652] mt-4">
                Ratings
              </h2>
              <p className="mt-2 text-orange-600">
              <span className="ml-2">({mentor.ratingsCount})</span>
              </p>
            </div>

            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold text-[#FF6652] mt-4">
                Graduated
              </h2>
              <p className="mt-2">{mentor.graduated?"Yes":"No"}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold text-[#FF6652] mt-4">
                Language
              </h2>
              <p className="mt-2">{mentor.language}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
       
        {/* <div className="flex flex-wrap  justify-evenly">
          {data?.subjects?.map((subject) => (
            <div key={subject.subject_name} >
              <MentorsSubject subject={subject.subject_name} onClick={() => handleSubjectClick(subject.subject_name)} isSelected={selectedSubject === subject.subject_name} />
            </div>
          ))}
        </div> */}
        {/* {selectedSubject && (
        <>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
              {data?.map((mentor, index) => (
                <div key={index} className="bg-card p-4 rounded-lg group hover:bg-[linear-gradient(99.32deg,rgba(232,232,232,0.6)_0.56%,rgba(168,168,168,0.6)_59.52%,rgba(194,194,194,0.6)_117.27%)]" onClick={handleCardClick(mentor.name)}>
                  <img src={mentor.profilePictureUrl} alt={mentor.name} className="rounded-xl mb-2 object-cover w-60 h-60 sm:h-56 bg-contain bg-center" />
                  <h2 className="font-semibold text-xl">{mentor.name}</h2>
                  <p className="text-sm dark:text-gray-500 mb-2">Mentor</p>
                  <p className="text-sm opacity-0 group-hover:opacity-100">Rating: {mentor.ratings}⭐</p>
                </div>
              ))}
            </div>
            </div>
            
            <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-md transition-colors duration-300 ${currentPage === 1 ? 'opacity-50 bg-gray-200 cursor-not-allowed' : 'bg-orange-500 active:bg-orange-600'}`}
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            
            <span className="text-black dark:text-white">{currentPage} / {totalPages}</span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md transition-colors duration-300 ${currentPage === totalPages ? 'opacity-50 bg-gray-200 cursor-not-allowed' : 'bg-orange-500 active:bg-orange-600'}`}
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
            </div>

          </>
        )} */}
      </div>
      <Footer handleThemeSwitch={handleThemeSwitch} theme={theme} />
    </div>
  )
}

export default Mentor;


