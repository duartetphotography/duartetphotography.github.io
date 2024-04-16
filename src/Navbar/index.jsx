import "./styles.css";
import instaLogo from "../assets/instagram.svg";
import fbLogo from "../assets/facebook.svg";
import linkedLogo from "../assets/linkedin.svg";

function SVGContainer({ src, alt, url }) {
  return (
    <a href={url} target="_blank">
      <img className="h-[35px] svg" src={src} alt={alt} />
    </a>
  );
}

function Navigation({ url, text }) {
  return (
    <a className="text-xl hover:text-white mr-10" href={url}>
      {text}
    </a>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className="w-full bg-[#829499]">
        <div className="flex justify-between">
          <img className="w-2/12" src="/logo.png" alt="" />
          <div className="flex items-center gap-10 mr-10">
            <Navigation url={"asdasd"} text={"Sobre Mim"} />
            <Navigation url={"asdasd"} text={"Portefólio"} />

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
        </div>
      </nav>
    </>
  );
}
