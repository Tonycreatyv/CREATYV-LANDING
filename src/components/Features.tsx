import React from 'react';

const Features = () => {
  const featuresList = [
    {
      title: 'Automated Services',
      description: 'Streamline your business processes with our automated solutions that save time and enhance productivity.',
    },
    {
      title: 'AI-Driven Insights',
      description: 'Leverage advanced analytics to make informed decisions and stay ahead of the competition.',
    },
    {
      title: 'User-Friendly Interface',
      description: 'Enjoy a seamless experience with our intuitive design that requires no technical expertise.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Easily adapt our services to fit your growing business needs without any hassle.',
    },
    {
      title: '24/7 Support',
      description: 'Get assistance whenever you need it with our dedicated support team available around the clock.',
    },
  ];

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;