import { useState } from "react";

export default function ExpertAnswers() {
  const [activeIndex, setActiveIndex] = useState(null); // Track the open question
  const questions = [
    {
      question: "Does Lawfor handle billing and fees?",
      answer:
        "We offer easy negotiating on the nature of the cases during your initial consultation. Our billing depends on the challenging nature of the case and we have no hidden costs.",
    },
    {
      question: "Can I submit an application to the court of protection?",
      answer:
        "Yes, our expert team can guide you through the process of submitting applications to the court of protection.",
    },
    {
      question: "What kind of LPAs are there?",
      answer:
        "There are several types of Lasting Power of Attorney (LPA) including financial decisions and health and care decisions.",
    },
    {
      question: "What's the right time to file for divorce?",
      answer:
        "The decision to file for divorce is personal, but we can provide guidance on legal considerations and timing.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the selected question
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl mb-12">Our Expert Answers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {questions.map((item, index) => (
              <div key={index} className="border-b border-neutral-200 pb-4">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="font-serif text-xl">{item.question}</span>
                  <svg
                    className={`w-6 h-6 text-secondary transition-transform ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-4 text-neutral-600 bg-white transition-opacity duration-500 ease-in-out">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <img
              src="../../../src/assets/images/Legal-consultation.jpg"
              alt="Legal consultation"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
