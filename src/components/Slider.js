import React from "react";
import "../styles/Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const images = [
    { src: "images/drums.jpg", name: "Drums" },
    { src: "images/electronic.jpg", name: "Electronic instruments" },
    { src: "images/equipments.jpg", name: "Music equipment" },
    { src: "images/guitars.jpg", name: "Guitars" },
    { src: "images/piano.jpg", name: "Pianos" },
    { src: "images/String-instruments.jpg", name: "String instruments" },
    { src: "images/violins.jpg", name: "Wind instruments" },
  ];

  return (
    <Carousel
      className="slider"
      infiniteLoop
      autoPlay
      showThumbs={false}
      selectedItem={1}
      showStatus={false}
    >
      {images.map((image, i) => (
        <div key={i}>
          <img src={image.src} alt="img" className="img-slider" />
          <p className="legend">{image.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
