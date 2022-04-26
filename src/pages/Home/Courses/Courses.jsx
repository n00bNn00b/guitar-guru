import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  // console.log(courses);
  return (
    <div id="courses" className="container courses-container">
      <h2 className="text-center  course-title pt-3">Popular Courses </h2>
      <div className="row mb-2 text-center">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
