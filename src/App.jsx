import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Portfolio from "./Pages/Portfolio";
import Gallery from "./Pages/Gallery";
import ScrollToTop from "./ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path="/portfolio/:folder/" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
