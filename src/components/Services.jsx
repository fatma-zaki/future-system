import "./Services.css";
import img from "./../assets/proxy-image (1).jpg";
import img2 from "./../assets/proxy-image (2).jpg";
import img3 from "./../assets/proxy-image (4).jpg";
import img4 from "./../assets/proxy-image (8).jpg";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">
          <div className="img">
            <img src={img3} alt="Surveillance" />
          </div>
          <div className="card-content">
            <h3>Surveillance Systems كاميرات</h3>
            <p>High-tech security systems to keep you safe.</p>
          </div>
        </div>

        <div className="card">
          <div className="img">
            <img src={img2} alt="Laptops" />
          </div>
          <div className="card-content">
            <h3>Laptops كمبيوتر</h3>
            <p>Latest models with advanced features.</p>
          </div>
        </div>

        <div className="card">
          <div className="img">
            <img src={img4} alt="Accessories" />
          </div>
          <div className="card-content">
            <h3>Computer Accessories</h3>
            <p>Quality accessories for your devices.</p>
          </div>
        </div>

        <div className="card">
          <div className="img">
            <img src={img} alt="Smart Home Systems" />
          </div>
          <div className="card-content">
            <h3>Smart Home Systems</h3>
            <p>Automate your home with smart solutions.</p>
          </div>
        </div>


        
        <div className="card">
          <div className="img">
            <img src={img} alt="Smart Home Systems" />
          </div>
          <div className="card-content">
            <h3>شبكات</h3>
            <p>Automate your home with smart solutions.</p>
          </div>
        </div>

        
        <div className="card">
          <div className="img">
            <img src={img} alt="Smart Home Systems" />
          </div>
          <div className="card-content">
            <h3>انظمة حريق</h3>
            <p>Automate your home with smart solutions.</p>
          </div>
        </div>

        
        <div className="card">
          <div className="img">
            <img src={img} alt="Smart Home Systems" />
          </div>
          <div className="card-content">
            <h3>صوتيات</h3>
            <p>Automate your home with smart solutions.</p>
          </div>
        </div>

         <div className="card">
          <div className="img">
            <img src={img} alt="Smart Home Systems" />
          </div>
          <div className="card-content">
            <h3>كاشير</h3>
            <p>Automate your home with smart solutions.</p>
          </div>
        </div>


         <div className="card">
          <div className="img">
            <img src={img} alt="Smart Home Systems" />
          </div>
          <div className="card-content">
            <h3>سنترالات</h3>
            <p>Automate your home with smart solutions.</p>
          </div>
        </div>

         <div className="card">
          <div className="img">
            <img src={img} alt="Smart Home Systems" />
          </div>
          <div className="card-content">
            <h3>البوابات الالكترونية</h3>
            <p>Automate your home with smart solutions.</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Services;
