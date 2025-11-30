import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Creatyv.io offer?",
      answer: "Creatyv.io provides automated services designed to help businesses reduce time and increase productivity through innovative solutions."
    },
    {
      question: "How can Creatyv.io help my business?",
      answer: "Our services streamline processes, allowing your team to focus on core activities while we handle the automation of repetitive tasks."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a free trial for new users to explore our services and see how they can benefit your business."
    },
    {
      question: "What industries do you serve?",
      answer: "We cater to a variety of industries, including healthcare, finance, retail, and more, providing tailored solutions to meet specific needs."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply sign up on our website, and you can begin using our services immediately."
    }
  ];

  return (
    <section className="py-12 bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;