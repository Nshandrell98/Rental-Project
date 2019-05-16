import React, { Component } from "react";
import Slider from "react-slick";

class HSlider extends Component {
  render() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false
    }
    return (
      <div>
        <Slider {...settings}>

            <div><img className="slider img-responsive" src='/images/rainbowLamb.jpg'/></div>

            <div><img className="slider img-responsive"  src='/images/bugatti.jpg'/></div>

            <div><img className="slider img-responsive" src='/images/stingray2016.jpg'/></div>

            <div><img className="slider img-responsive" src='/images/orange.jpg'/></div>
                
        </Slider>
      </div>
    );
  }
}
export default HSlider