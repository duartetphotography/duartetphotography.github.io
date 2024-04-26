import React from "react";
import "./styles.scss";
import { shuffle } from "../Utilities";

function PhotoGrid({
  photoList,
  division,
  flickr = "https://www.flickr.com/people/200615777@N08/",
}) {
  const photosPerColumn = Math.ceil(photoList.length / division);

  shuffle(photoList);

  return (
    <div id="Gallery">
      <div className="image-gallery">
        {[...Array(division)].map((_, columnIndex) => (
          <div key={columnIndex} className="column">
            {photoList
              .slice(
                columnIndex * photosPerColumn,
                Math.min((columnIndex + 1) * photosPerColumn, photoList.length)
              )
              .map((photoUrl, index) => (
                <div key={index} className="image-item">
                  <img
                    src={photoUrl}
                    alt={`Image ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
      {flickr && (
        <a href={flickr} className="flickr" target="_blank">
          Ver mais no Flickr
        </a>
      )}
    </div>
  );
}

export default PhotoGrid;
