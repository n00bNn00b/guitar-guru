import React from "react";
import overview from "../../../images/overview/overview_cover.jpg";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview container w-100 bg bg-light">
      <div>
        <h1 className="overview-title">Overview</h1>
        <p>
          Guitar Guru is an online platform to learn guitar and other
          intstruments. From Beginner to Advanced, Bass, Harmonica, Piano,
          Indian Classical and Vocal Coaching all together in one platform.
        </p>
      </div>
      <div className="overview-cover ms-5 ps-5">
        <img className="w-75" src={overview} alt="" />
      </div>
    </div>
  );
};

export default Overview;
