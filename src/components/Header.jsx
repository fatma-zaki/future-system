import "./Header.css";
// import Swiper bundle with all modules installed


// import styles bundle
import 'swiper/css/bundle';
const Header = () => {
  return (
    <header className="header slide-in">
      <h1>Future System</h1>
      <p>Innovative Technology Solutions</p>
      <button className="learn-more">Learn More</button>
    </header>
  );
};

export default Header;
