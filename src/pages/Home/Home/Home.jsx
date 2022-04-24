import React from "react";
import Courses from "../Courses/Courses";
import Overview from "../Overview/Overview";
import Slider from "../Slider/Slider";
import Songs from "../Songs/Songs";

const Home = () => {
  return (
    <div>
      <Slider />
      <Overview />
      <Courses />
      <Songs />
    </div>
  );
};

export default Home;
