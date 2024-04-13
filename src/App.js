import React from "react";
import Main from "./page/Main/Main";
import ErrorBoundary from "./utils/ErrorBoundary/ErrorBoundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
