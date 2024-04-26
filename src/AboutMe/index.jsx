import React, { forwardRef, useState, useEffect } from "react";
import "./styles.scss";

const SemiCircle = () => <div className="semi-circle" />;

const AboutMe = forwardRef((props, ref) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const images = ["/eu.webp", "/altlogo.webp"];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} id="AboutMe">
      <div className="main-container">
        <SemiCircle />
        <div className="about-text">
          <h1 className="title">SOBRE MIM</h1>
          <div className="the-text">
            <p>
              Olá. Sou o Duarte Teixeira, um apaixonado pela arte da fotografia.
              Sempre fui fascinado pelo mundo da fotografia e, há 5 anos,
              adquiri a minha primeira câmara. O que começou num hobby
              rapidamente se tornou a minha paixão.
            </p>
            <p>
              Entrei num curso de design nas Caldas da Rainha, e ao final do dia
              ia com os meus amigos para a praia, parques, onde passámos grandes
              momentos. E eu claro aproveitava e levava a câmara para tirar umas
              fotos.
            </p>
            <p>
              Cada sessão fotográfica é uma oportunidade de contar uma história
              única e criar imagens que serão apreciadas por gerações. A
              confiança e o conforto são fundamentais para que possamos
              colaborar e criar juntos momentos especiais.
            </p>
          </div>
          <img
            src="/altlogo.webp"
            className="altLogoMobile"
            alt="Mobile Logo"
          />
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
