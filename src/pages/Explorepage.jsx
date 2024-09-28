import React from "react";
import Slider from "react-slick"; // Import Slider
import ExploreNavbar from "../utilities/ExploreNavbar.jsx";
import CourseCard from "../components/coursecard.jsx"; // Import CourseCard component

const courses = [
  {
    id: 1,
    title: "React - The Complete Guide",
    description: "Learn React from scratch and build amazing web applications.",
    image: "/images/educate.png", // Update with your image path
    price: "$29.99",
  },
  {
    id: 2,
    title: "JavaScript: Understanding the Weird Parts",
    description: "Master JavaScript with this deep dive into its mechanics.",
    image: "/images/educate.png",
    price: "$19.99",
  },
  {
    id: 3,
    title: "Python for Data Science and Machine Learning",
    description: "Learn Python for data science, machine learning, and AI.",
    image: "/images/educate.png",
    price: "$39.99",
  },
  {
    id: 4,
    title: "The Complete Web Developer Bootcamp",
    description:
      "Become a full-stack web developer with this comprehensive course.",
    image: "/images/educate.png",
    price: "$49.99",
  },
  {
    id: 1,
    title: "React - The Complete Guide",
    description: "Learn React from scratch and build amazing web applications.",
    image: "/images/educate.png", // Update with your image path
    price: "$29.99",
  },
  {
    id: 2,
    title: "JavaScript: Understanding the Weird Parts",
    description: "Master JavaScript with this deep dive into its mechanics.",
    image: "/images/educate.png",
    price: "$19.99",
  },
  {
    id: 3,
    title: "Python for Data Science and Machine Learning",
    description: "Learn Python for data science, machine learning, and AI.",
    image: "/images/educate.png",
    price: "$39.99",
  },
  {
    id: 4,
    title: "The Complete Web Developer Bootcamp",
    description:
      "Become a full-stack web developer with this comprehensive course.",
    image: "/images/educate.png",
    price: "$49.99",
  },
  {
    id: 1,
    title: "React - The Complete Guide",
    description: "Learn React from scratch and build amazing web applications.",
    image: "/images/educate.png", // Update with your image path
    price: "$29.99",
  },
  {
    id: 2,
    title: "JavaScript: Understanding the Weird Parts",
    description: "Master JavaScript with this deep dive into its mechanics.",
    image: "/images/educate.png",
    price: "$19.99",
  },
  {
    id: 3,
    title: "Python for Data Science and Machine Learning",
    description: "Learn Python for data science, machine learning, and AI.",
    image: "/images/educate.png",
    price: "$39.99",
  },
  {
    id: 4,
    title: "The Complete Web Developer Bootcamp",
    description:
      "Become a full-stack web developer with this comprehensive course.",
    image: "/images/educate.png",
    price: "$49.99",
  },
  {
    id: 1,
    title: "React - The Complete Guide",
    description: "Learn React from scratch and build amazing web applications.",
    image: "/images/educate.png", // Update with your image path
    price: "$29.99",
  },
  {
    id: 2,
    title: "JavaScript: Understanding the Weird Parts",
    description: "Master JavaScript with this deep dive into its mechanics.",
    image: "/images/educate.png",
    price: "$19.99",
  },
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
};

const Explorepage = () => {
  return (
    <div className="mt-14 bg-[#0a0c10] text-white">
      <ExploreNavbar />

      {/* Full-width slider */}
      <div className="slider-container px-10">
        <Slider {...sliderSettings} className="w-full">
          <div>
            <img
              src="/images/educate.png"
              alt="Slide 1"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src="/images/educate.png"
              alt="Slide 2"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src="/images/educate.png"
              alt="Slide 3"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src="/images/educate.png"
              alt="Slide 4"
              className="slider-image"
            />
          </div>
        </Slider>
      </div>

      <div className="min-h-[92vh]">
        <h1 className="text-start px-10 text-2xl">
          <br></br>
          <span className="font-bold font-serif">
            Find all the essential skills in one place. <br></br>
          </span>
          <span className="text-pretty">
            From vital expertise to technical subjects, keyNcoders empowers your
            professional growth.
          </span>
        </h1>
        <div className="p-10 mt-10">{/* <Explore_slider /> */}</div>
        <div className="course-list gap-6 ">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <style jsx>{`
          .course-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center; // Center the cards
            margin: 20px 0;
          }
          .slider-image {
            width: 100%; // Full width for images
            height: auto; // Maintain aspect ratio
          }
        `}</style>
      </div>
    </div>
  );
};

export default Explorepage;
