import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
      <img src="img/antyk1.jpg" alt="Slajd 1" className="slide-image" />
      </div>
      <div>
      <img src="img/antyk2.jpg" alt="Slajd 2" className="slide-image" />
      </div>
      <div>
      <img src="img/antyk3.jpg" alt="Slajd 3" className="slide-image" />
      </div>
    </Slider>
  );
};

export default MySlider;