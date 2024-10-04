import React from "react";
import Slider from "react-slick";

// SliderComponent combining logic and styles
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    fade: false, // Set to false to enable horizontal sliding
  };

  const slides = [
    {
      id: 1,
      image: "../images/bookbg.jpg", // Update with correct image paths
      caption: "Learn new skills with top instructors",
    },
    {
      id: 2,
      image: "/images/DSA.webp",
      caption: "Join millions of learners worldwide",
    },
    {
      id: 3,
      image: "/images/educate.webp",
      caption: "Upgrade your career with online courses",
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="slider-image"
            />
            <div className="caption">{slide.caption}</div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slider-container {
          width: 100%;
          height: 30vh; // Adjust height as needed
          position: relative;
        }
        .slide {
          position: relative;
          height: 90%%; // Allow height to be defined by the image
        }
        .slider-image {
          width: 100%;
          height: 90%; // Set height to auto to maintain aspect ratio
          object-fit: cover; // Ensures the image covers the slide area
        }
        .caption {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: white;
          font-size: 24px;
          background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background
          padding: 10px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default SliderComponent;
