import React from 'react';
import { FaShieldAlt, FaCheckCircle, FaHeadset } from 'react-icons/fa'; // Importing icons from react-icons

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 text-center bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          SoftSell is the best platform to turn your unused software licenses into cash. Here's why:
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-[#2c3e50] to-[#34495e] text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <div className="p-4 rounded-full bg-white text-[#2c3e50] mb-4">
              <FaShieldAlt size={40} />
            </div>
            <h3 className="text-xl font-semibold">Secure & Reliable</h3>
            <p className="mt-2 text-gray-200">
              We prioritize your privacy and ensure that your data is always secure.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-[#2c3e50] to-[#34495e] text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <div className="p-4 rounded-full bg-white text-[#2c3e50] mb-4">
              <FaCheckCircle size={40} />
            </div>
            <h3 className="text-xl font-semibold">Transparent Process</h3>
            <p className="mt-2 text-gray-200">
              We provide a clear and easy-to-understand valuation process with no hidden fees.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-[#2c3e50] to-[#34495e] text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <div className="p-4 rounded-full bg-white text-[#2c3e50] mb-4">
              <FaHeadset size={40} />
            </div>
            <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
            <p className="mt-2 text-gray-200">
              Our support team is always available to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
