import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const CourseDetail = () => {
  const { courseId } = useParams();

  return (
    <div className="container text-center bg-light p-5">
      <h2>Course Order ID: {courseId} </h2>
      <div>
        <Link to="/checkout">
          <Button className="mt-5" style={{ backgroundColor: "#406e8e" }}>
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
