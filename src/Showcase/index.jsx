import React from "react";
import "./styles.scss";
import { randomNumber } from "../Utilities";
import { Link } from "react-router-dom";

export default function Showcase() {
  const getRandomImage = (category, max) => {
    const randomNum = randomNumber(max);
    return `portfolio/${category}/${randomNum}.webp`;
  };

  return (
    <div id="Showcase" className="portfolio-bg">
      <div className="portfolio-images">
        <div className="column">
          <div className="line" />
          <Link to="/portfolio">
            <div className="card">
              <div className="column-header">Photoshoots</div>
              <img
                src={getRandomImage("photoshoots", 11)}
                alt="Photoshoot"
                loading="lazy"
              />
            </div>
          </Link>
        </div>

        <div className="column">
          <div className="line" />
          <Link to="/portfolio">
            <div className="card">
              <div className="column-header">Eventos</div>
              <img
                src={getRandomImage("bajaportalegre", 13)}
                alt="Eventos"
                loading="lazy"
              />
            </div>
          </Link>
        </div>

        <div className="column">
          <div className="line" />
          <Link to="/portfolio">
            <div className="card">
              <div className="column-header">Outros</div>
              <img
                src={getRandomImage("dump", 23)}
                alt="Outros"
                loading="lazy"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
