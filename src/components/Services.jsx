import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card rotate-item">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/cctv-camera.png" alt="Surveillance" />
          <h3>Surveillance Systems</h3>
          <p>High-tech security systems to keep you safe.</p>
        </div>
        <div className="card rotate-item">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/laptop.png" alt="Laptops" />
          <h3>Laptops</h3>
          <p>Latest models with advanced features.</p>
        </div>
        <div className="card rotate-item">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/data-in-both-directions.png" alt="Accessories" />
          <h3>Computer Accessories</h3>
          <p>Quality accessories for your devices.</p>
        </div>
        <div className="card rotate-item">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/smart-home.png" alt="Smart Home" />
          <h3>Smart Home Systems</h3>
          <p>Automate your home with smart solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
