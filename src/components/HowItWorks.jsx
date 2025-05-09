import React from 'react';
import { FaUpload, FaCalculator, FaMoneyBillWave } from 'react-icons/fa'; // Importing icons from react-icons

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          How It Works
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          The process is simple, quick, and secure. Here's how SoftSell works:
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-8 rounded-full bg-gradient-to-r from-[#f39c12] to-[#e67e22] text-white mb-4 shadow-xl transform hover:scale-110 transition duration-300">
              <FaUpload size={40} /> {/* Using React Icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Upload License
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Upload your unused software licenses for evaluation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-8 rounded-full bg-gradient-to-r from-[#f39c12] to-[#e67e22] text-white mb-4 shadow-xl transform hover:scale-110 transition duration-300">
              <FaCalculator size={40} /> {/* Using React Icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Get Valuation
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Receive a transparent and accurate valuation of your licenses.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-8 rounded-full bg-gradient-to-r from-[#f39c12] to-[#e67e22] text-white mb-4 shadow-xl transform hover:scale-110 transition duration-300">
              <FaMoneyBillWave size={40} /> {/* Using React Icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Get Paid
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Receive payment for your licenses directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
