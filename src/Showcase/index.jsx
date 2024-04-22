import "./styles.scss";

export default function Showcase() {
  return (
    <div className="portfolio-bg">
      <div className="portefolio-images">
        <div className="line1"></div>
        <div className="column">
          <div className="column-header">Photoshoots</div>
          <img src="photos/primo.png" alt="Photoshoot" />
        </div>
        <div className="line2"></div>
        <div className="column">
          <div className="column-header">Eventos</div>
          <img src="photos/baja.jpg" alt="Eventos" />
        </div>
        <div className="line3"></div>
        <div className="column">
          <div className="column-header">Outros</div>
          <img src="photos/barco.jpg" alt="Outros" />
        </div>
      </div>
    </div>
  );
}
