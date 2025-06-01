import { useParams } from "react-router-dom";

const allProducts = {
  surveillance: [
    { id: 1, name: "Outdoor Camera كاميرا خارجية" },
    { id: 2, name: "Smart Doorbell جرس ذكي" },
  ],
  laptops: [
    { id: 1, name: "MacBook Pro" },
    { id: 2, name: "Dell XPS" },
  ],
  accessories: [
    { id: 1, name: "Wireless Mouse ماوس لاسلكي" },
    { id: 2, name: "Mechanical Keyboard لوحة مفاتيح" },
  ],
  network: [
    { id: 1, name: "Router راوتر" },
    { id: 2, name: "Switch سويتش" },
  ],
  fire: [
    { id: 1, name: "Smoke Detector كاشف دخان" },
    { id: 2, name: "Fire Alarm إنذار حريق" },
  ],
  audio: [
    { id: 1, name: "Microphone ميكروفون" },
    { id: 2, name: "Amplifier مضخم صوت" },
  ],
  cashier: [
    { id: 1, name: "POS Machine ماكينة كاشير" },
    { id: 2, name: "Receipt Printer طابعة فواتير" },
  ],
  central: [
    { id: 1, name: "PBX System نظام سنترال" },
    { id: 2, name: "Phone Set جهاز هاتف" },
  ],
  gates: [
    { id: 1, name: "Access Gate بوابة دخول" },
    { id: 2, name: "Barrier Gate بوابة حاجزة" },
  ],
};

function Products() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const products = allProducts[decodedCategory] || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold capitalize mb-4">{decodedCategory} Products</h1>
      {products.length > 0 ? (
        <ul className="space-y-2">
          {products.map((item) => (
            <li key={item.id} className="bg-gray-100 p-3 rounded shadow-sm">
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
}

export default Products;
