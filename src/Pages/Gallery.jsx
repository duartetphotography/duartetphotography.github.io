import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PhotoGrid from "../PhotoGrid";

const folderProperties = {
  horastt: {
    photoCount: 10,
    division: 3,
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316467520",
  },
  bajaoeste: {
    photoCount: 5,
    division: 3,
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316465302",
  },
  bajaportalegre: {
    photoCount: 13,
    division: 4,
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316483489",
  },
  dump: { photoCount: 23, division: 4 },
  photoshoots: {
    photoCount: 11,
    division: 3,
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316474656",
  },
  rallyraidbpultimate: {
    photoCount: 13,
    division: 3,
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316468000",
  },
  viagensnaminhaterra: { photoCount: 10, division: 3 },
};

function Gallery() {
  const { folder } = useParams();

  const folderProperty = folderProperties[folder];

  if (!folderProperty) {
    return <div>Folder not found</div>;
  }

  const { photoCount, division, flickr } = folderProperty;

  const photoList = Array.from(
    { length: photoCount },
    (_, index) => `/portfolio/${folder}/${index + 1}.webp`
  );

  return (
    <>
      <Navbar />
      <PhotoGrid photoList={photoList} division={division} flickr={flickr} />
      <Footer />
    </>
  );
}

export default Gallery;
