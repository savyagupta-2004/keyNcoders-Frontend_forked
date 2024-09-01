import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";

const LaptopSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <LazyLoad height={200} offset={100}>
          <img
            src="../images/slider-CE.png"
            alt="Slide 1"
            className="w-full h-auto rounded-lg"
          />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height={200} offset={100}>
          <img
            src="../images/slider-VE.png"
            alt="Slide 2"
            className="w-full h-auto rounded-lg"
          />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height={200} offset={100}>
          <img
            src="../images/slider_Profile.png"
            alt="Slide 3"
            className="w-full h-auto rounded-lg"
          />
        </LazyLoad>
      </div>
    </Slider>
  );
};

export default LaptopSlider;
