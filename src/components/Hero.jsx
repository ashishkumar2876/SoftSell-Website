import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#2c3e50] via-[#4e5c6e] to-[#34495e] dark:from-[#1c1f26] dark:via-[#212d3b] dark:to-[#2c3e50] py-20 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Unlock the Value of Unused Software Licenses
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl opacity-90">
          SoftSell helps businesses monetize unused software licenses with speed, security, and ease.
        </p>
        <button className="mt-8 px-10 py-4 bg-gradient-to-r from-[#f39c12] to-[#e67e22] text-white font-semibold rounded-md shadow-lg hover:scale-105 transition duration-300 transform hover:bg-gradient-to-l hover:from-[#e67e22] hover:to-[#f39c12]">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;
