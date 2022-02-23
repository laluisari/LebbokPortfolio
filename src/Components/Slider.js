import React from "react";
import {Carousel} from "react-bootstrap";
import g1 from "../img/1.jpg";
import g2 from "../img/2.jpg";
import g3 from "../img/3.jpg"

const Slider = () => {
  return (
  <div className="slider">
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id="gambar"
      src={g1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id="gambar"
      src={g2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id="gambar"
      src={g3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
  );
};

export default Slider;

