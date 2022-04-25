import React from "react";
import { Button } from "react-bootstrap";

const Course = ({ course }) => {
  const { name, image, description } = course;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 ">
      <div className="card " style={{ width: "18rem" }}>
        <img height="350px" src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title course-title text-center">{name}</h5>
          <p className="card-text">{description}</p>
          <Button
            href="#"
            target="_blank"
            style={{ backgroundColor: "#406e8e" }}
          >
            Watch Video
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Course;
