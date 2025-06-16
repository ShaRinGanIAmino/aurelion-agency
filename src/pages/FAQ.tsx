import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What services does Aurelion Creative offer?",
    answer:
      "We offer branding, digital marketing, web development, and creative design solutions tailored to elevate your brand.",
  },
  {
    question: "How do I start working with Aurelion Creative?",
    answer:
      "Simply reach out through our contact form or consultation request — we’ll schedule a meeting to learn about your goals and propose a plan.",
  },
  {
    question: "Do you work with startups or only established brands?",
    answer:
      "We work with both! Whether you’re launching your first product or scaling up, our strategies adapt to your business stage.",
  },
  {
    question: "How long does a branding project typically take?",
    answer:
      "It varies by scope, but typically a full branding project takes between 2 to 6 weeks from kickoff to delivery.",
  },
  {
    question: "Can you help redesign my existing website?",
    answer:
      "Absolutely. We specialize in redesigning websites to improve visual appeal, usability, and marketing performance.",
  },
];

type FAQCardProps = {
  question: string;
  answer: string;
};

const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-4 transition-all duration-300 ease-in-out overflow-hidden">
      <button
        className="w-full text-left text-main title text-xl md:text-2xl flex justify-between items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        {question}
        <span className="ml-4 text-2xl">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "max-h-96 mt-4" : "max-h-0 mt-0"
        } overflow-hidden`}
      >
        <p className="text-gray-700 paragraph text-base md:text-lg">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-white py-20 px-8 md:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-6xl title text-main font-bold">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg paragraph">
          Get answers to some of the most common questions we receive about our
          services, process, and approach.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <FAQCard key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
