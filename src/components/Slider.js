import React from "react";
import "../styles/Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel
      className="slider"
      axis="vertical"
      infiniteLoop
      autoPlay
      showThumbs={false}
    >
      <div>
        <img src="images/guitars.jpg" alt="img" className="img-slider" />
        <p className="legend">Guitars</p>
      </div>
      <div>
        <img src="images/piano.jpg" alt="img" className="img-slider" />
        <p className="legend">Pianos</p>
      </div>
      <div>
        <img
          src="images/String-instruments.jpg"
          alt="img"
          className="img-slider"
        />
        <p className="legend">String instruments</p>
      </div>

      <div>
        <img src="images/violins.jpg" alt="img" className="img-slider" />
        <p className="legend">wind instruments</p>
      </div>
    </Carousel>
  );
};

export default Slider;
