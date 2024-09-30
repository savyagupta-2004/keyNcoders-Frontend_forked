// Testimonial.js
import TestimonialCard from "../utilities/TestimonialCard";

export default function StudentsReview() {
  const testimonialData = [
    {
      name: "Shaswat Kumar",
      company: "IIT kharagpur",
      image: "../images/pfp.jpg",
      logo: "https://developer.microsoft.com/_devcom/images/logo-ms-social.webp",
      testimony:
        "As a college student, I found this DSA course with C++ on KeynCoders incredibly helpful. It covers everything we’ve been learning in class but in a much more detailed and understandable way. The examples are practical, and the coding problems are very similar to what we get in our assignments. I feel much more prepared for my coding exams now.",
    },
    {
      name: "Jane Doe",
      company: "Apple",
      image: "../images/pfp.jpg",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0mpcTWy4WSOrDf5m5M1x4fCNM9VhpaHvMnOCDk8YNKeGlrC31yNo4RSomQ3mTojQuEw&usqp=CAU",
      testimony:
        "Lorem Ipsum courses we have? lorem ipsum Loremdiorigh vodfjv idfjbvid dfjbvlsdjfvb sjdfvjsjdbfvkjsdfivsj sidjfsi isjdbfisbdfi sidjfbisjbdf isdjfbsijdffsd sdøjhsøjdhf sjdbfsjdfijs sdjfbisjdfsu sjdfsihjf ssdjhgfsø sdjf",
    },
  ];

  return (
    <>
      <h1 className=" text-start font-bold text-[25px] mt-5 mb-5 ml-[5%] ">
        Hear from our students
      </h1>
      <div className="flex flex-col flex-wrap justify-between md:flex-row">
        {testimonialData.map((data, index) => (
          <TestimonialCard
            key={index}
            name={data.name}
            company={data.company}
            image={data.image}
            logo={data.logo}
            testimony={data.testimony}
          />
        ))}
      </div>
    </>
  );
}
