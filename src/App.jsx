import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Services />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
