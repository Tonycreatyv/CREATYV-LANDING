import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="mb-8">
          At Creatyv.io, we streamline your business processes through our automated services. 
          Here's how we do it:
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="md:w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-4">Step 1: Consultation</h3>
            <p>
              We begin with a thorough consultation to understand your unique business needs and challenges.
            </p>
          </div>
          <div className="md:w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-4">Step 2: Custom Solutions</h3>
            <p>
              Our team designs tailored solutions that leverage the latest technology to enhance your productivity.
            </p>
          </div>
          <div className="md:w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-4">Step 3: Implementation</h3>
            <p>
              We implement the solutions seamlessly, ensuring minimal disruption to your operations.
            </p>
          </div>
        </div>
        <p className="mt-8">
          Experience the future of business automation with Creatyv.io and watch your efficiency soar!
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;