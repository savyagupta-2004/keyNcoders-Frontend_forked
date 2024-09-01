import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "../utilities/TestimonialCard";

const testimonials_student = [
  {
    name: "Kumar Pranjal",
    // will use after few years
    // company: "IBM",
    image: "./images/pranjal.jpg",
    logo: "./images/ibmwithoutbg.png",
    // logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0mpcTWy4WSOrDf5m5M1x4fCNM9VhpaHvMnOCDk8YNKeGlrC31yNo4RSomQ3mTojQuEw&usqp=CAU",
    testimony:
      "I’d say just go for it—you’ll find it really valuable. This course covers everything you need in DSA to help you crack your interviews.",
    customsize: "foribm",
  },
  {
    name: "Riti Kumari",
    // company: "Apple",
    image: "./images/girlmodel.jpg",
    logo: "./images/microsoft.png",
    // logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0mpcTWy4WSOrDf5m5M1x4fCNM9VhpaHvMnOCDk8YNKeGlrC31yNo4RSomQ3mTojQuEw&usqp=CAU",
    testimony:
      "The content is really good—no fancy words, just simple, everyday examples. It’s perfect for anyone who genuinely wants to learn. Get it—it’s all you’ll need to ace the tech rounds of any company.",
    customsize: "formicrosoft",
  },
  {
    name: "Abishek Kumar",
    // company: "Apple",
    image: "./images/boymodel.jpg",
    logo: "./images/amazon.png",
    // logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0mpcTWy4WSOrDf5m5M1x4fCNM9VhpaHvMnOCDk8YNKeGlrC31yNo4RSomQ3mTojQuEw&usqp=CAU",
    testimony:
      "The best part of this course is how it sticks to the basics—no complex words, just easy-to-follow examples. For anyone aiming to learn and prepare for tech rounds, this course will give you all you need.",
    customsize: "foramazon",
  },
  {
    name: "Santosh Kumar",
    // company: "Apple",
    image: "./images/boymodel.jpg",
    logo: "./images/microsoft.png",
    // logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0mpcTWy4WSOrDf5m5M1x4fCNM9VhpaHvMnOCDk8YNKeGlrC31yNo4RSomQ3mTojQuEw&usqp=CAU",
    testimony:
      "What I love about this course is the simplicity. There’s no unnecessary jargon, just straightforward content with practical examples. If you’re serious about learning DSA, this course has you covered everything.",
    customsize: "formicrosoft",
  },
];
const testimonials = [
  {
    text: "As a college student, I found this DSA course with C++ on KeynCoders incredibly helpful. It covers everything we’ve been learning in class but in a much more detailed and understandable way. The examples are practical, and the coding problems are very similar to what we get in our assignments. I feel much more prepared for my coding exams now.",
    name: "Neelarghya Kundu (IIT-KGP)",
    image: "./images/nellu.jpeg",
  },
  {
    text: "I’ve taken a few other online courses on DSA, but this one on KeynCoders offers the best value for the price. The content is thorough, the instructors are knowledgeable, and the platform is user-friendly. The C++ examples are spot-on, and the assignments really push you to apply what you’ve learned. Definitely worth the investment!",
    name: "Shaswat Kumar (IIT-K)",
    image: "./images/shaswat.jpg",
  },
  {
    text: "What I really appreciate about this course is Ayush’s focus on quality content. Unlike other courses that rely on catchy phrases and gimmicks, this DSA course is straightforward and to the point.I’ve learned so much, and it’s all thanks to the clear, practical examples provided.",
    name: "Arpita (VIT-V)",
    image: "./images/girlmodel.jpg",
  },
  {
    text: "At first, I wasn’t sure about this course, but after starting it, I’ve got mixed feelings—mostly good ones! The content is really solid, so you won't miss out on anything important. The combination of theory and practice questions is excellent, and the educator explains things in a simple, easy way. Initially, I found it a bit boring, but later on, I realized I’m actually getting the best learning experience.",
    name: "Rishek Raj (DTU)",
    image: "./images/boymodel.jpg",
  },
];

const Testimonials = ({ theme, type, course }) => {
  const location = useLocation();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Determine styling based on location pathname
  const isLandingPage = location.pathname === "/";
  const isCoursePage = location.pathname === "/dsa";

  return (
    // ${theme === "dark" ? "bg-[#131313]" : "bg-[#181622]"}
    <div
      className={` flex flex-col text-center 
        ${course ? "bg-transparent" : ""} ${
        isLandingPage && "bg-[#E6D8F2]  dark:bg-[#131313]  "
      } ${isCoursePage && "bg-[#1d1534] text-black "}`}
    >
      <h1
        className={`mt-10 font-bold text-3xl md:text-5xl text-center
         ${isCoursePage && " text-black dark:text-white"}
        
        ${course ? "text-black" : ""}`}
      >
        {type === "student" ? "Hear From Our Students" : "Expert Reviews"}
      </h1>
      <p className="mt-2 dark:text-[#8A8A8A]">
        {type !== "student"
          ? "Hear what Industry people say about our Course"
          : ""}
      </p>
      {type === "student" ? (
        <Slider {...settings} className="text-white mx-5 mt-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="text-left max-w-lg mx-auto p-6 bg-[#383232] rounded-lg mb-10"
            >
              <p className="text-lg mb-4 text-gray-400">{testimonial.text}</p>
              <div className="flex items-center justify-end">
                <p className="text-white">{testimonial.name}</p>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-4"
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <Slider {...settings} className="text-white mx-5 mt-20">
          {testimonials_student.map((testimonials_student, index) => (
            <TestimonialCard
              key={index}
              name={testimonials_student.name}
              company={testimonials_student.company}
              image={testimonials_student.image}
              logo={testimonials_student.logo}
              testimony={testimonials_student.testimony}
              customsize={testimonials_student.customsize}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Testimonials;
