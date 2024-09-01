// Testimonial.js
import StartingCourseCard from "../utilities/StartingCourseCard.jsx";

export default function Starting_courses() {
  const testimonialData = [
    {
      name: "NextJs",
      image: "../images/Nextjs.png",
      logo: "https://developer.microsoft.com/_devcom/images/logo-ms-social.png",
      testimony1: "The complete guide to build a full-stack app with Next.js",
      testimony2:
        "how to build a complete full stack web dev app using next.js,prism orm,tailwind,NextUi and NextAuth",
      educator: "Mary",
      rating: 4.9,
    },  
    {
      name: "DSA",
      image: "../images/DSA.png",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0mpcTWy4WSOrDf5m5M1x4fCNM9VhpaHvMnOCDk8YNKeGlrC31yNo4RSomQ3mTojQuEw&usqp=CAU",
      testimony1: "The complete guide to build a full-stack app with Next.js",
      testimony2:
        "how to build a complete full stack web dev app using next.js,prism orm,tailwind,NextUi and NextAuth",
      educator: "Mary",
      rating: 4.9,
    },
  ];

  return (
    <>
      <h1 className=" text-start font-bold text-[25px] mt-20 mb-5 ml-[5%]">
        Courses to get Started
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonialData.map((data, index) => (
          <StartingCourseCard
            key={index}
            name={data.name}
            image={data.image}
            logo={data.logo}
            testimony1={data.testimony1}
            testimony2={data.testimony2}
            educator={data.educator}
            rating={data.rating}
          />
        ))}
      </div>
    </>
  );
}
