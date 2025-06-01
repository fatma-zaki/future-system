// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Slider from "./components/Slider";
// import AboutUs from "./components/About";
// import ServiceDetail from "./components/ServiceDetail"; // New component
// import "./index.css";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Header />
//       <Slider />
//       <div className="container">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Services />
//                 <AboutUs />
//                 <Contact />
//               </>
//             }
//           />
//           <Route path="/service/:title" element={<ServiceDetail />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import AboutUs from "./components/About";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Slider />
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