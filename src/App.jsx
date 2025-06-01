import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import Slider from "./components/Slider";
import AboutUs from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Slider/>
      <div className="container">
        <Services />
        <AboutUs />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
