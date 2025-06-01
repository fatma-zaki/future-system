import React from "react";

const ContactForm = () => {
  return (
    <section
      className="bg-white py-16 px-6 md:px-20 font-sans"
      dir="rtl"
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-right">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">
          تواصل معنا
        </h2>

        <form className="bg-gray-50 shadow-md rounded-xl p-8 space-y-6">
          <div>
            <label className="block mb-2 text-lg text-blue-800 font-medium">
              الاسم الكامل
            </label>
            <input
              type="text"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="اكتب اسمك هنا"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg text-blue-800 font-medium">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg text-blue-800 font-medium">
              رسالتك
            </label>
            <textarea
              className="w-full px-5 py-3 border border-gray-300 rounded-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="اكتب رسالتك هنا..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition duration-300"
            >
              إرسال
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
