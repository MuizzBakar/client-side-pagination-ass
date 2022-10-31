import React from "react";
import { Outlet } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1>THIS IS THE ABOUT PAGE</h1>
      </div>
      <Outlet />;
    </div>
  );
};

export default About;
