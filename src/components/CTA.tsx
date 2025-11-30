import React from 'react';

const CTA = () => {
  return (
    <div className="bg-[#1a1a1a] text-white py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
      <p className="mb-6">Join us at Creatyv.io and discover how our automated services can help you save time and boost productivity.</p>
      <a href="/signup" className="bg-[#ff4757] text-white py-2 px-4 rounded hover:bg-[#ff6b81] transition duration-300">
        Get Started
      </a>
    </div>
  );
};

export default CTA;