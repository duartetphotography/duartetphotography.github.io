import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { shuffle } from "../Utilities";

function PhotoGrid({
  photoList,
  division,
  title,
  flickr = "https://www.flickr.com/people/200615777@N08/",
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [shuffledPhotoList, setShuffledPhotoList] = useState([]);
  const modalRef = useRef(null);

  const photosPerColumn = Math.ceil(photoList.length / division);

  useEffect(() => {
    const shuffledList = [...photoList];
    shuffle(shuffledList);
    setShuffledPhotoList(shuffledList);
  }, [photoList]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPreviousImage();
      } else if (event.key === "ArrowRight") {
        goToNextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex]);

  const openImage = (index) => {
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setCurrentImageIndex(null);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? shuffledPhotoList.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === shuffledPhotoList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (event) => {
    const touchStartX = event.touches[0].clientX;
    event.currentTarget.addEventListener("touchmove", handleTouchMove);

    function handleTouchMove(event) {
      const touchEndX = event.touches[0].clientX;
      const difference = touchStartX - touchEndX;
      if (Math.abs(difference) > 50) {
        if (difference > 0) {
          goToNextImage();
        } else {
          goToPreviousImage();
        }
        event.currentTarget.removeEventListener("touchmove", handleTouchMove);
      }
    }
  };

  const handleCloseModal = (event) => {
    if (event.target === modalRef.current) {
      closeImage();
    }
  };

  return (
    <div id="Gallery">
      <div className="breadcrumb">
        <Link to="/">Home</Link> <span>/</span>{" "}
        <Link to="/portfolio/">Portfolio</Link> <span>/</span> {title}
      </div>
      <div className="image-gallery">
        {[...Array(division)].map((_, columnIndex) => (
          <div key={columnIndex} className="column">
            {shuffledPhotoList
              .slice(
                columnIndex * photosPerColumn,
                Math.min(
                  (columnIndex + 1) * photosPerColumn,
                  shuffledPhotoList.length
                )
              )
              .map((photoUrl, index) => (
                <div key={index} className="image-item">
                  <img
                    src={photoUrl}
                    alt={`Image ${index + 1}`}
                    loading="lazy"
                    onClick={() =>
                      openImage(columnIndex * photosPerColumn + index)
                    }
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

      {currentImageIndex !== null && (
        <div
          className="modal"
          onTouchStart={handleTouchStart}
          ref={modalRef}
          onClick={handleCloseModal}
        >
          <span className="close-btn" onClick={closeImage}>
            ×
          </span>
          <img
            src={shuffledPhotoList[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
          <div className="prev" onClick={goToPreviousImage}>
            &#10094;
          </div>
          <div className="next" onClick={goToNextImage}>
            &#10095;
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGrid;
