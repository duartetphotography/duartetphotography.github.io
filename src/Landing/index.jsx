import { useEffect } from "react";
import "./styles.scss";

export default function Landing() {
  useEffect(() => {
    const img = new Image();
    const mobile = new Image();

    img.src = "landing/background.webp";
    mobile.src = "landing/mobile_background.webp";
  }, []);
  return <div id="Landing"></div>;
}
