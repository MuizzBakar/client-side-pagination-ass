import React from "react";

const Fallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>Oops! Something went wrong</h1>

      <p style={{ color: "red" }}>{error.message}</p>
    </div>
  );
};

export default Fallback;
