import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function EventCard({ text, picture, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={link}
      className="grid-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={picture} alt="Event" />
      {isHovered && <div className="slide-down">{text}</div>}
      <div className="slide-down-mobile">{text}</div>
    </Link>
  );
}

function EventGrid() {
  const eventsData = [
    {
      text: "Baja Oeste",
      picture: "/portfolio/bajaoeste/2.webp",
      link: "/portfolio/bajaoeste",
    },
    {
      text: "Baja Portalegre",
      picture: "/portfolio/bajaportalegre/13.webp",
      link: "/portfolio/bajaportalegre",
    },
    {
      text: "24 Horas TT",
      picture: "/portfolio/horastt/5.webp",
      link: "/portfolio/horastt",
    },
    {
      text: "Rally Raid BP Ultimate",
      picture: "/portfolio/rallyraidbpultimate/11.webp",
      link: "/portfolio/rallyraidbpultimate",
    },
    {
      text: "Viagens na minha terra",
      picture: "/portfolio/viagensnaminhaterra/7.webp",
      link: "/portfolio/viagensnaminhaterra",
    },
    {
      text: "Photoshoots",
      picture: "/portfolio/photoshoots/7.webp",
      link: "/portfolio/photoshoots",
    },
    {
      text: "Photo Dump",
      picture: "/portfolio/dump/8.webp",
      link: "/portfolio/dump",
    },
  ];

  return (
    <div id="EventGrid">
      <div className="grid-container">
        {eventsData.map((event, index) => (
          <EventCard
            key={index}
            text={event.text}
            picture={event.picture}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
}

export default EventGrid;
