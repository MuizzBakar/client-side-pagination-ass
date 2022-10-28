import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1 style={{ marginBottom: "20px" }}>OOPS! </h1>
      <p style={{ textTransform: "capitalize" }}>page not found</p>

      <Link to="/"> Return to the homepage...</Link>
    </div>
  );
};

export default Error;
