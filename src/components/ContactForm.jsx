import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { ...errors };

    // Validate required fields
    for (let key in formData) {
      if (formData[key] === '') {
        valid = false;
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
      } else {
        newErrors[key] = '';
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // Add form submission logic here (e.g., send data to server)
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#2c3e50] via-[#4e5c6e] to-[#34495e] dark:from-[#1c1f26] dark:via-[#212d3b] dark:to-[#2c3e50] py-20 px-6 text-center text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
          Contact Us
        </h2>
        <p className="text-xl mb-12 text-gray-200">
          Have questions? Reach out to us, and we'll get back to you soon!
        </p>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="col-span-1">
              <label className="block text-left text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label className="block text-left text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Company */}
            <div className="col-span-1">
              <label className="block text-left text-sm font-semibold mb-2" htmlFor="company">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your company name"
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>

            {/* License Type */}
            <div className="col-span-1">
              <label className="block text-left text-sm font-semibold mb-2" htmlFor="licenseType">
                License Type
              </label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select License Type</option>
                <option value="Software">Software</option>
                <option value="Cloud">Cloud</option>
                <option value="Enterprise">Enterprise</option>
              </select>
              {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block text-left text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="6"
              placeholder="Enter your message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-8 w-full px-8 py-4 bg-gradient-to-r from-[#f39c12] to-[#e67e22] text-white font-semibold rounded-md shadow-lg hover:scale-105 transition duration-300 transform hover:bg-gradient-to-l hover:from-[#e67e22] hover:to-[#f39c12]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
