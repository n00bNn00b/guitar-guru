import React from "react";
import Courses from "../Courses/Courses";
import Overview from "../Overview/Overview";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Overview />
      <Courses />
    </div>
  );
};

export default Home;
