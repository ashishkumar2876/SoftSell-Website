import React from 'react';
import { FaStar } from 'react-icons/fa'; // Importing the star icon

const CustomerTestimonials = () => {
  return (
    <section className="bg-gradient-to-r from-[#2c3e50] via-[#4e5c6e] to-[#34495e] dark:from-[#1c1f26] dark:via-[#212d3b] dark:to-[#2c3e50] py-20 px-6 text-center text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-xl mb-12 text-gray-200">
          Here's why SoftSell is trusted by our customers:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="mb-6">
              <img
                className="w-20 h-20 rounded-full object-cover mx-auto"
                src="https://randomuser.me/api/portraits/men/10.jpg" // Dummy image URL
                alt="Customer 1"
              />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              John Doe
            </h3>
            <p className="text-gray-400 mb-4">CEO, SoftTech Inc.</p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-300">
              "SoftSell made it incredibly easy for us to sell our unused software licenses. The process was transparent, and we got a great value for our licenses!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="mb-6">
              <img
                className="w-20 h-20 rounded-full object-cover mx-auto"
                src="https://randomuser.me/api/portraits/women/10.jpg" // Dummy image URL
                alt="Customer 2"
              />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Jane Smith
            </h3>
            <p className="text-gray-400 mb-4">Marketing Director, TechWorld</p>
            <div className="flex justify-center mb-4">
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
              <FaStar className="text-gray-300" />
            </div>
            <p className="text-gray-300">
              "The customer support from SoftSell was exceptional. They were responsive and made sure we were happy with the valuation. Highly recommended!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
