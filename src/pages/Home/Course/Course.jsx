import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, image, description, price } = course;
  const navigate = useNavigate();
  const navigateToCourseDetail = (id) => {
    navigate(`/course/${id}`);
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 ">
      <div className="card " style={{ width: "18rem" }}>
        <img height="350px" src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title course-title text-center">{name}</h5>
          <h5 className="card-text pb-2">ID: {id}</h5>
          <p className="card-text text-start">{description}</p>
          <h5 className="card-text pb-2">Price: $ {price}</h5>
          <Button
            onClick={() => navigateToCourseDetail(id)}
            style={{ backgroundColor: "#406e8e" }}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Course;
