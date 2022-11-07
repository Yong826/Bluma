import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../img/main1.jpg";
import logo2 from "../img/main2.jpg";
import logo3 from "../img/main3.jpg";



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="main_banner">
      <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img className="d-block" style={{height:'566px', width:'100%'}} src={logo1} alt='slied-one'/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block" style={{height:'566px', width:'100%'}} src={logo2} alt='slied-two'/>
        <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>

      <Carousel.Item>
        <img className="d-block" style={{height:'566px', width:'100%'}} src={logo3} alt='slied-three'/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

    </Carousel>
        </div>
  );
}

export default ControlledCarousel;
