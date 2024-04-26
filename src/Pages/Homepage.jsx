import React, { useRef } from "react";
import AboutMe from "../AboutMe";
import Footer from "../Footer";
import Landing from "../Landing";
import Showcase from "../Showcase";
import Navbar from "../Navbar";

function Homepage() {
  const aboutMeRef = useRef(null);

  return (
    <>
      <Navbar />
      <Landing />
      <AboutMe ref={aboutMeRef} />
      <Showcase />
      <Footer />
    </>
  );
}

export default Homepage;
