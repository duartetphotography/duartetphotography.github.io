import React, { useRef } from "react";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Landing from "./Landing";
import Showcase from "./Showcase";

function App() {
  const aboutMeRef = useRef(null);

  const scrollToAboutMe = () => {
    if (aboutMeRef && aboutMeRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: aboutMeRef.current.offsetTop,
      });
    }
  };

  return (
    <>
      <Navbar scrollToAboutMe={scrollToAboutMe} />
      <Landing />
      <AboutMe ref={aboutMeRef} />
      <Showcase />
      <Footer />
    </>
  );
}

export default App;
