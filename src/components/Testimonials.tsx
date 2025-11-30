import React from 'react';

const testimonialsData = [
  {
    name: "John Doe",
    feedback: "Creatyv.io has transformed our business operations. The automated services have saved us countless hours!",
    position: "CEO, Tech Innovations"
  },
  {
    name: "Jane Smith",
    feedback: "The efficiency and productivity we've gained from using Creatyv.io are unmatched. Highly recommend!",
    position: "Marketing Director, Creative Solutions"
  },
  {
    name: "Emily Johnson",
    feedback: "A game changer for our team! The solutions provided are top-notch and very effective.",
    position: "Operations Manager, Business Corp"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="max-w-md mx-4 mb-8 p-6 bg-gray-700 rounded-lg shadow-lg">
              <p className="italic">"{testimonial.feedback}"</p>
              <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;