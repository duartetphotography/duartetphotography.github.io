import React from "react";
import { NavLink } from "react-router-dom";
import instaLogo from "../assets/instagram.svg";
import fbLogo from "../assets/facebook.svg";
import linkedLogo from "../assets/linkedin.svg";
import "./styles.scss";

function SVGContainer({ src, alt, url }) {
  return (
    <a href={url} className="SVGContainer" target="_blank">
      <img src={src} alt={alt} />
    </a>
  );
}

function Navbar() {
  return (
    <>
      <nav id="Navbar">
        <img className="Logo" src="/logo.webp" alt="" />
        <div className="LinkContainer">
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/portfolio" activeclassname="active">
            Portfolio
          </NavLink>

          <SVGContainer
            src={instaLogo}
            alt={"Instagram"}
            url={"https://www.instagram.com/duartetphotography/"}
          />
          <SVGContainer
            src={linkedLogo}
            alt={"LinkedIn"}
            url={"https://www.linkedin.com/in/duartetphotography/"}
          />
          <SVGContainer
            src={fbLogo}
            alt={"Facebook"}
            url={"https://www.facebook.com/profile.php?id=100087263510202"}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
