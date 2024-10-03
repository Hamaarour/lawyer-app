import { useState } from "react";
import { SERVICES } from "../../data/index.js";

const LegalServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "REPRESENTATION OF INTERESTS IN COURT",
      description:
        "We assist clients in establishing and registering companies, drafting articles of association, negotiating and drafting cooperation agreements, and handling various corporate matters.",

      number: "01",
    },
    {
      title: "CORPORATE LAW",
      description:
        "We assist clients in establishing and registering companies, drafting articles of association, negotiating and drafting cooperation agreements, and handling various corporate matters.",
      number: "02",
    },
    {
      title: "REAL ESTATE AND LAND LAW",
      description:
        "We assist clients in establishing and registering companies, drafting articles of association, negotiating and drafting cooperation agreements, and handling various corporate matters.",

      number: "03",
    },
    {
      title: "LABOR LAW",
      description:
        "We assist clients in establishing and registering companies, drafting articles of association, negotiating and drafting cooperation agreements, and handling various corporate matters.",

      number: "04",
    },
    {
      title: "FAMILY LAW",
      description:
        "We assist clients in establishing and registering companies, drafting articles of association, negotiating and drafting cooperation agreements, and handling various corporate matters.",

      number: "05",
    },
    {
      title: "TAX LAW",
      description:
        "We assist clients in establishing and registering companies, drafting articles of association, negotiating and drafting cooperation agreements, and handling various corporate matters.",

      number: "06",
    },
  ];

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl mb-12">
          A WIDE RANGE OF LEGAL SERVICES TO SOLVE ANY LEGAL ISSUES
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {SERVICES.map((item, index) => (
              <div key={index} className="border-b border-neutral-200 pb-4">
                <button
                  onClick={() => toggleService(index)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="font-serif text-xl">{item.title}</span>
                  <span className="text-secondary">{item.number}</span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-4 text-neutral-600 bg-white transition-opacity duration-500 ease-in-out">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <img
              src="../../../src/assets/images//Legal-consultation.jpg"
              alt="Legal consultation"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalServices;
