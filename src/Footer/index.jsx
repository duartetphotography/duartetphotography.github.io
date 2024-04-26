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
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <footer>
      <div className="footer-column">
        <img src={cameraIcon} alt="Camera" />
        <img className="Logo" src="/logo.webp" alt="Logo" />
        <div className="copyright">© Duarte Teixeira {currentYear}</div>
        <a
          href="https://tiagomdg.github.io/portfolio/"
          target="_blank"
          className="desenvolvido footer-link pulsating-text"
        >
          Desenvolvido por Tiago Gil
        </a>
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
            url={"https://www.linkedin.com/in/duartetphotography/"}
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
        <h3 className="marcacoes-title">Marcações</h3>
        <a
          className="marcacoes"
          href="https://forms.gle/bNX23sqfwT2r2BPA9"
          target="_blank"
        >
          Agendar
        </a>
      </div>
      <div className="creditos-column-mobile">
        <div>© Duarte Teixeira {currentYear}</div>
        <a
          href="https://tiagomdg.github.io/portfolio/"
          target="_blank"
          className="footer-link pulsating-text"
        >
          Desenvolvido por Tiago Gil
        </a>
      </div>
    </footer>
  );
}
