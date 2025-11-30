import React from 'react';

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to Creatyv.io</h1>
        <p className="text-lg mb-8 animate-fade-in">
          We design and provide automated services for businesses, helping you reduce time and increase productivity.
        </p>
        <a href="#cta" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;