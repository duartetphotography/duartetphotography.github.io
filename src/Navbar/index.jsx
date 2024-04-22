import "./styles.scss";
import instaLogo from "../assets/instagram.svg";
import fbLogo from "../assets/facebook.svg";
import linkedLogo from "../assets/linkedin.svg";

function SVGContainer({ src, alt, url }) {
  return (
    <a href={url} className="SVGContainer" target="_blank">
      <img src={src} alt={alt} />
    </a>
  );
}

function Navigation({ url, text, onClick }) {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <a className="Navigation" onClick={handleClick} href={url}>
      {text}
    </a>
  );
}

export default function Navbar({ scrollToAboutMe }) {
  const handleAboutMeClick = () => {
    scrollToAboutMe();
  };

  return (
    <>
      <nav id="Navbar">
        <img className="Logo" src="/logo.png" alt="" />
        <div className="LinkContainer">
          <Navigation
            url={"#"}
            text={"Sobre Mim"}
            onClick={handleAboutMeClick}
          />
          <Navigation url={"#"} text={"Portefólio"} />

          <SVGContainer
            src={instaLogo}
            alt={"Instagram"}
            url={"https://www.instagram.com/duartetphotography/"}
          />
          <SVGContainer
            src={fbLogo}
            alt={"Facebook"}
            url={"https://www.facebook.com/profile.php?id=100087263510202"}
          />
          <SVGContainer
            src={linkedLogo}
            alt={"LinkedIn"}
            url={"https://www.linkedin.com/in/tiago-gil-330760242/"}
          />
        </div>
      </nav>
    </>
  );
}
