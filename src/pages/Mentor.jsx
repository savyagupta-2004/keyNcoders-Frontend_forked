import React, { useState } from 'react'
import MentorsSubject from '../components/MentorsSubject'
import PostloginNavbar from '../utilities/PostloginNavbar'
import Footer from "../utilities/Footer"
import { useNavigate } from 'react-router-dom'
import data from '../data/mentors.json'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Mentor = ({ theme, handleThemeSwitch }) => {
  const [selectedSubject, setSelectedSubject] = useState('DSA')
  const [currentPage, setCurrentPage] = useState(1) 
  const mentorsPerPage = 5;
  const navigate = useNavigate()

  const handleSubjectClick = (subjectName) => {
    if (selectedSubject === subjectName) {
      setSelectedSubject(null)
    } else {
      setSelectedSubject(subjectName)
      setCurrentPage(1) // Reset page when subject changes
    }
  }

  const handleCardClick = (mentorName) => {
    return () => {
      navigate(`/mentor-profile/${mentorName}`)
    }
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  // Filter the mentors based on the selected subject
  const selectedMentors = selectedSubject
    ? data.subjects.find((subject) => subject.subject_name === selectedSubject).mentors
    : []

  // Pagination logic
  const indexOfLastMentor = currentPage * mentorsPerPage;
  const indexOfFirstMentor = indexOfLastMentor - mentorsPerPage;
  const currentMentors = selectedMentors.slice(indexOfFirstMentor, indexOfLastMentor);
  const totalPages = Math.ceil(selectedMentors.length / mentorsPerPage);

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-[#131313] text-white' : 'bg-white'}`}>
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="flex-grow mt-16 mb-16">
        <div className="bg-[linear-gradient(99.32deg,rgba(232,232,232,0.6)_0.56%,rgba(168,168,168,0.6)_59.52%,rgba(194,194,194,0.6)_117.27%)] text-5xl text-black dark:text-white m-8 rounded-2xl h-auto p-8">
          keyNcoders has Qualified
          <br />
          Mentors
        </div>
        <div className="flex flex-wrap  justify-evenly">
          {data.subjects.map((subject) => (
            <div key={subject.subject_name} >
              <MentorsSubject subject={subject.subject_name} onClick={() => handleSubjectClick(subject.subject_name)} isSelected={selectedSubject === subject.subject_name} />
            </div>
          ))}
        </div>
        {selectedSubject && (
        <>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
              {currentMentors.map((mentor, index) => (
                <div key={index} className="bg-card p-4 rounded-lg group hover:text-white` hover:bg-[linear-gradient(99.32deg,rgba(232,232,232,0.6)_0.56%,rgba(168,168,168,0.6)_59.52%,rgba(194,194,194,0.6)_117.27%)]" onClick={handleCardClick(mentor.name)}>
                  <img src={mentor.image} alt={mentor.name} className="rounded-xl mb-2 object-cover w-60 h-60 sm:h-56 bg-contain bg-center" />
                  <h2 className="font-semibold text-xl">{mentor.name}</h2>
                  <p className="text-sm  dark:white mb-2">Mentor</p>
                  <p className="text-sm opacity-0 group-hover:opacity-100">Rating: {mentor.rating}⭐</p>
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
        )}
      </div>
      <Footer handleThemeSwitch={handleThemeSwitch} theme={theme} />
    </div>
  )
}

export default Mentor
