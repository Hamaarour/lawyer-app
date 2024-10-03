import React from "react";
import { ArrowRight, Scale, Trophy, Users } from "lucide-react";
import CountUp from "react-countup"; // Install via npm install react-countup
import { useInView } from "react-intersection-observer"; // Optional: For animation when in view

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative h-screen bg-white text-white overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-4xl">
          {/* Small highlight text */}
          <div className="mb-4 flex items-center">
            <div className="h-[1px] w-10 bg-white mr-4"></div>
            <span className="text-white uppercase tracking-wider text-sm font-semibold">
              Legal Excellence
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            Best Law Firm
            <br />
            <span className="text-white">Since 1980</span>
          </h1>

          {/* Description */}
          <p className="text-lg mb-8 max-w-2xl text-white">
            Our devoted team of attorneys is dedicated to providing unparalleled
            legal services tailored to your unique needs.
          </p>

          {/* CTA Button */}
          <button
            className="group bg-white text-gray-900 px-8 py-4 rounded-md text-lg 
                           hover:bg-gray-900 hover:text-white transition-all duration-300 
                           flex items-center space-x-2"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats/Features at bottom */}
        <div
          ref={ref}
          className="absolute bottom-8 left-4 right-4 grid grid-cols-1 md:grid-cols-3 gap-8 
                      bg-gray-900/50 backdrop-blur-md p-8 rounded-lg border border-white/10"
        >
          <Stat
            icon={<Trophy className="text-white" />}
            number={10}
            suffix="+"
            text="Years of Experience"
            inView={inView}
          />
          <Stat
            icon={<Scale className="text-white" />}
            number={1000}
            suffix="+"
            text="Cases Won"
            inView={inView}
          />
          <Stat
            icon={<Users className="text-white" />}
            number={50}
            suffix="+"
            text="Expert Attorneys"
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, number, suffix, text, inView }) => (
  <div className="flex items-center space-x-4 animate-fadeIn">
    <div className="bg-white p-3 rounded-lg">{icon}</div>
    <div>
      {/* Incrementing number animation */}
      <div className="text-4xl font-bold text-white">
        {inView && <CountUp start={0} end={number} duration={2} />} {suffix}
      </div>
      <div className="text-sm text-white">{text}</div>
    </div>
  </div>
);

export default HeroSection;
