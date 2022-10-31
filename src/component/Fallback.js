import React from "react";

const Fallback = ({ error, resetErrorBoundary }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Oops! Something went wrong</h1>

      <p style={{ color: "red", fontSize: "20px" }}>{error.message}</p>

      <button onClick={() => resetErrorBoundary}>Restore App</button>
    </div>
  );
};

export default Fallback;
