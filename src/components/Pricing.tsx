import React from 'react';

const Pricing = () => {
  return (
    <section className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
        <p className="mb-12">Choose a plan that fits your business needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-lg mb-4">$19/month</p>
            <ul className="mb-6">
              <li>Automated services</li>
              <li>24/7 Support</li>
              <li>Basic Analytics</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
          </div>
          <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="text-lg mb-4">$49/month</p>
            <ul className="mb-6">
              <li>All Basic features</li>
              <li>Advanced Analytics</li>
              <li>Priority Support</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
          </div>
          <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
            <p className="text-lg mb-4">Contact us for pricing</p>
            <ul className="mb-6">
              <li>All Pro features</li>
              <li>Custom Solutions</li>
              <li>Dedicated Account Manager</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;