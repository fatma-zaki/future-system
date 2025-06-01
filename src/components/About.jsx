
import { FaCheckCircle, FaLaptop, FaShieldAlt, FaCogs } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-20 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto grid gap-10 text-right">
        <div className="text-center">
          <h2 className="text-6xl font-extrabold text-blue-700 mb-6">من نحن – Future System</h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-loose">
            في <strong className="text-blue-600">فيوتشر سيستم</strong>، نؤمن أن التكنولوجيا هي بوابة الأمان والراحة في الحياة الحديثة. نجمع بين الجودة، الابتكار، والدعم الحقيقي لنقدّم لك حلولًا تكنولوجية ذكية تلبي احتياجاتك.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <FaShieldAlt className="text-blue-600 text-5xl mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3 text-blue-800">رؤيتنا</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              أن نكون في مقدمة الشركات التي تقدم حلول تكنولوجية وأنظمة أمان مبتكرة في العالم العربي.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <FaCogs className="text-blue-600 text-5xl mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3 text-blue-800">مهمتنا</h3>
            <ul className="text-gray-700 text-lg space-y-2 list-disc list-inside">
              <li>توفير تقنيات متطورة بأسعار مناسبة</li>
              <li>تقديم حلول أمان شاملة</li>
              <li>دعم فني مستمر</li>
              <li>توفير أحدث المنتجات العالمية</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <FaLaptop className="text-blue-600 text-5xl mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3 text-blue-800">خدماتنا</h3>
            <ul className="text-gray-700 text-lg space-y-2 list-disc list-inside">
              <li>كاميرات مراقبة سلكية ولاسلكية</li>
              <li>لابتوبات وأجهزة إلكترونية</li>
              <li>مستلزمات تركيب الكاميرات</li>
              <li>أنظمة أمان متكاملة</li>
              <li>فريق صيانة محترف</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-r-4 border-blue-600 p-8 rounded-xl shadow-sm mt-16">
          <h3 className="text-3xl font-semibold text-blue-700 mb-5">لماذا تختارنا؟</h3>
          <ul className="text-gray-800 space-y-3 text-xl">
            <li className="flex items-center gap-3"><FaCheckCircle className="text-green-500 text-2xl" /> منتجات أصلية مضمونة</li>
            <li className="flex items-center gap-3"><FaCheckCircle className="text-green-500 text-2xl" /> أحدث تقنيات السوق</li>
            <li className="flex items-center gap-3"><FaCheckCircle className="text-green-500 text-2xl" /> توصيل وتركيب فوري</li>
            <li className="flex items-center gap-3"><FaCheckCircle className="text-green-500 text-2xl" /> دعم فني سريع ومحترف</li>
            <li className="flex items-center gap-3"><FaCheckCircle className="text-green-500 text-2xl" /> عروض وأسعار تنافسية</li>
          </ul>
        </div>

        <div className="text-center mt-14">
          <p className="text-2xl font-medium text-gray-800">
            انضم إلى مئات العملاء الراضين، وابدأ رحلتك مع التكنولوجيا والأمان الآن.
          </p>
          <p className="text-3xl font-bold text-blue-700 mt-4">
            Future System – المستقبل أقرب مما تتخيل
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
