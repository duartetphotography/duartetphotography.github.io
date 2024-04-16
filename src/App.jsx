import "./App.css";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe className="h-full" />
      <Footer />
    </>
  );
}

export default App;
