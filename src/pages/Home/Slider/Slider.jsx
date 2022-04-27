import React from "react";
import { Carousel } from "react-bootstrap";
import slider_1 from "../../../images/slider/slider_1.jpg";
import slider_2 from "../../../images/slider/slider_2.jpg";

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          height="621px"
          className="d-block w-100"
          src={slider_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "#a8cbe5" }}>Learn with Patience</h3>
          <p style={{ color: "#a8cbe5" }}>
            Learn guitar or any instrument with patience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="621px"
          className="d-block w-100"
          src={slider_2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Practice</h3>
          <p>There is nothing but practice to make yourself perfect.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="621px"
          className="d-block w-100"
          src={slider_1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: "#a8cbe5" }}>Be Creative</h3>
          <p style={{ color: "#a8cbe5" }}>
            With a lot of practising and improvising creativity comes out.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
