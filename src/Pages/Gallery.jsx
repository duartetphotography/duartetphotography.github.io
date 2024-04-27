import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PhotoGrid from "../PhotoGrid";

const folderProperties = {
  horastt: {
    photoCount: 10,
    division: 3,
    title: "24 Horas TT",
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316467520",
  },
  bajaoeste: {
    photoCount: 5,
    division: 3,
    title: "Baja Oeste",
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316465302",
  },
  bajaportalegre: {
    photoCount: 13,
    division: 4,
    title: "Baja Portalegre",
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316483489",
  },
  dump: {
    photoCount: 23,
    division: 4,
    title: "Photo Dump",
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316518836/",
  },
  photoshoots: {
    photoCount: 11,
    division: 3,
    title: "Photoshoots",
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316474656",
  },
  rallyraidbpultimate: {
    photoCount: 13,
    division: 3,
    title: "Rally Raid BP Ultimate",
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316468000",
  },
  viagensnaminhaterra: {
    photoCount: 10,
    division: 3,
    title: "Viagens na minha terra",
    flickr:
      "https://www.flickr.com/photos/200615777@N08/albums/72177720316524623/",
  },
};

function Gallery() {
  const { folder } = useParams();

  const folderProperty = folderProperties[folder];

  if (!folderProperty) {
    return <div>Folder not found</div>;
  }

  const { photoCount, division, flickr, title } = folderProperty;

  const photoList = Array.from(
    { length: photoCount },
    (_, index) => `/portfolio/${folder}/${index + 1}.webp`
  );

  return (
    <>
      <Navbar />
      <PhotoGrid
        photoList={photoList}
        division={division}
        flickr={flickr}
        title={title}
      />
      <Footer />
    </>
  );
}

export default Gallery;
