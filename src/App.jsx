import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerTestimonials from './components/CustomerTestimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

function App() {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for user's dark mode preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }
  }, []);

  // Toggle dark mode and save preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  // Apply dark mode to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100`}>
      {/* Dark Mode Toggle Button */}
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
        >
          {darkMode ? (
            <span role="img" aria-label="sun">☀️</span>
          ) : (
            <span role="img" aria-label="moon">🌙</span>
          )}
        </button>
      </div>

      {/* Hero Section */}
      <Hero />
      {/* How It Works Section */}
      <HowItWorks />
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      {/* Customer Testimonials Section */}
      <CustomerTestimonials />
      {/* Contact Form Section */}
      <ContactForm />
      <ChatWidget/>
    </div>
  );
}

export default App;
