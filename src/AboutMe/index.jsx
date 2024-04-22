import React, { forwardRef, useState, useEffect } from "react";
import "./styles.scss";

const SemiCircle = () => <div className="semi-circle" />;

const AboutMe = forwardRef((props, ref) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const images = ["/eu.png", "/altlogo.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} id="AboutMe">
      <div className="main-container">
        <SemiCircle />
        <div className="about-text">
          <h1 className="title">SOBRE MIM</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem aliquid beatae similique sapiente, commodi ea. Aut,
              a laborum natus nesciunt velit, tempore tempora illo quaerat, vero
              placeat in deleniti doloremque?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              quo eaque iure exercitationem libero et consequuntur. Quod, nobis
              hic reiciendis adipisci sequi velit quisquam debitis? Tempore et
              qui obcaecati voluptate?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              aliquam perspiciatis odio dicta amet est beatae ipsam nemo et
              aspernatur. Eaque, minus at ipsam laborum in commodi quia pariatur
              sequi!
            </p>
          </div>
        </div>
        <div className="hero">
          {images.map((image, index) => (
            <img
              key={index}
              className={index === visibleIndex ? "visible" : ""}
              src={image}
              alt="DRK"
            />
          ))}
        </div>
      </div>
    </div>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
