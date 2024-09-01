// Testimonial.js
import InstructorCard from "../utilities/InstructorCard.jsx";

export default function Instructors() {
  const testimonialData = [
    {
      name: "JULIE",
      surname: "HOWART",
      image: "../images/JULIE.png",
      logo: "https://developer.microsoft.com/_devcom/images/logo-ms-social.png",
      testimony: "Professional Programmar and Educator",
      educator: "Mary",
      reviews: "97,102 Reviews",
      Students: "322,827 Students",
      Courses: "5 Courses",
    },
    {
      name: "ROB",
      surname: "ROWAN",
      image: "../images/Rob.png",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0mpcTWy4WSOrDf5m5M1x4fCNM9VhpaHvMnOCDk8YNKeGlrC31yNo4RSomQ3mTojQuEw&usqp=CAU",
      testimony: "Certified Java Software Engineer",
      educator: "Mary",
      reviews: "97,102 Reviews",
      Students: "322,827 Students",
      Courses: "5 Courses",
    },
    {
      name: "Marry",
      surname: "SMITH",
      image: "../images/Marry.png",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0mpcTWy4WSOrDf5m5M1x4fCNM9VhpaHvMnOCDk8YNKeGlrC31yNo4RSomQ3mTojQuEw&usqp=CAU",
      testimony: "Certified c++ Software Engineer",
      educator: "Mary",
      reviews: "97,102 Reviews",
      Students: "322,827 Students",
      Courses: "5 Courses",
    },
  ];

  return (
    <>
      <h1 className="text-start font-bold text-[25px] mt-5 mb-5 ml-[5%]">
        Popular Instructors
      </h1>
      <div className="overflow-x-hidden">
        <div className="flex flex-wrap justify-evenly gap-4 p-4">
          {testimonialData.map((data, index) => (
            <div key={index} className="md:w-[600px] md:flex-shrink-0">
              <InstructorCard
                name={data.name}
                surname={data.surname}
                image={data.image}
                logo={data.logo}
                testimony={data.testimony}
                educator={data.educator}
                reviews={data.reviews}
                Students={data.Students}
                Courses={data.Courses}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
