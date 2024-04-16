import React from "react";

const ErrorBoundaryRefresh = () => {
  return (
    <div
      style={{
        background: "#000",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "26px",
      }}
    >
      Something does wrong... Try refresh a page
    </div>
  );
};

export default ErrorBoundaryRefresh;
