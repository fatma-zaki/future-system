
// import { Link } from "react-router-dom";
// import img from "./../assets/proxy-image (1).jpg";
// import img2 from "./../assets/proxy-image (2).jpg";
// import img3 from "./../assets/proxy-image (4).jpg";
// import img4 from "./../assets/proxy-image (8).jpg";

// const servicesData = [
//   {
//     title: "Surveillance Systems كاميرات",
//     img: img3,
//     desc: "High-tech security systems to keep you safe.",
//   },
//   {
//     title: "Laptops كمبيوتر",
//     img: img2,
//     desc: "Latest models with advanced features.",
//   },
//   {
//     title: "Computer Accessories",
//     img: img4,
//     desc: "Quality accessories for your devices.",
//   },
//   {
//     title: "Smart Home Systems",
//     img: img,
//     desc: "Automate your home with smart solutions.",
//   },
//   {
//     title: "شبكات",
//     img: img,
//     desc: "Smart network solutions for your space.",
//   },
//   {
//     title: "انظمة حريق",
//     img: img,
//     desc: "Fire detection and alarm systems.",
//   },
//   {
//     title: "صوتيات",
//     img: img,
//     desc: "High-quality sound system installations.",
//   },
//   {
//     title: "كاشير",
//     img: img,
//     desc: "POS systems and cashier hardware.",
//   },
//   {
//     title: "سنترالات",
//     img: img,
//     desc: "Business telephony and PBX systems.",
//   },
//   {
//     title: "البوابات الالكترونية",
//     img: img,
//     desc: "Electronic gates for secure access control.",
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="services">
//       <h2>Our Services</h2>
//       <div className="service-cards">
//         {servicesData.map((service, index) => (
//           <Link
//             key={index}
//             to={`/service/${encodeURIComponent(service.title)}`}
//             className="card"
//           >
//             <div className="img">
//               <img src={service.img} alt={service.title} />
//             </div>
//             <div className="card-content">
//               <h3>{service.title}</h3>
//               <p>{service.desc}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;


import { Link } from "react-router-dom";
import img from "./../assets/proxy-image (1).jpg";
import img2 from "./../assets/proxy-image (2).jpg";
import img3 from "./../assets/proxy-image (4).jpg";
import img4 from "./../assets/proxy-image (8).jpg";

const serviceItems = [
  { category: "surveillance", title: "Surveillance Systems كاميرات", desc: "High-tech security systems to keep you safe.", img: img3 },
  { category: "laptops", title: "Laptops كمبيوتر", desc: "Latest models with advanced features.", img: img2 },
  { category: "accessories", title: "Computer Accessories", desc: "Quality accessories for your devices.", img: img4 },
  { category: "network", title: "شبكات", desc: "حلول متطورة للشبكات." },
  { category: "fire", title: "انظمة حريق", desc: "أنظمة متطورة للحماية من الحريق." },
  { category: "audio", title: "صوتيات", desc: "أنظمة صوت عالية الجودة." },
  { category: "cashier", title: "كاشير", desc: "أنظمة نقاط البيع المتكاملة." },
  { category: "central", title: "سنترالات", desc: "أنظمة الاتصالات المركزية." },
  { category: "gates", title: "البوابات الالكترونية", desc: "أمان عالي من خلال بوابات حديثة." },
  {
    category: "Smart Home Systems", title: "Smart Home Systems", desc: "Automate your home with smart solutions."
  }
];

const Services = () => {
  return (
    <section id="services" className="services p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceItems.map((item, index) => (
          <Link
            to={`/products/${item.category}`}
            key={index}
            className="card cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="img">
              <img
                src={item.img || img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="card-content p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
