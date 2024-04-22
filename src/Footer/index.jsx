import "./styles.scss";
import instaLogo from "../assets/instagram.svg";
import fbLogo from "../assets/facebook.svg";
import linkedLogo from "../assets/linkedin.svg";
import cameraIcon from "../assets/camera.svg";

function VerticalLine() {
  return <div className="vertical-line"></div>;
}

function SVGContainer({ src, alt, url }) {
  return (
    <a href={url} className="SVGContainer" target="_blank">
      <img src={src} alt={alt} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-column">
        <img src={cameraIcon} alt="Camera" />
        <img className="Logo" src="/logo.png" alt="Logo" />
      </div>
      <VerticalLine />
      <div className="footer-column">
        <h3>Segue-me</h3>
        <div className="SocialContainer">
          <SVGContainer
            src={instaLogo}
            alt={"Instagram"}
            url={"https://www.instagram.com/duartetphotography/"}
          />
          <SVGContainer
            src={linkedLogo}
            alt={"LinkedIn"}
            url={"https://www.linkedin.com/in/tiago-gil-330760242/"}
          />
          <SVGContainer
            src={fbLogo}
            alt={"Facebook"}
            url={"https://www.facebook.com/profile.php?id=100087263510202"}
          />
        </div>
      </div>
      <VerticalLine />
      <div className="footer-column">
        <h3>Marcações</h3>
        <p>Content for column 3 goes here.</p>
      </div>
    </footer>
  );
}
