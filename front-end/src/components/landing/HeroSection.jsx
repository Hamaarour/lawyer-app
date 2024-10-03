import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Scale, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.4, 1],
      },
    },
  };

  return (
    <section className="relative h-screen bg-gray-900 bg-hero-bg bg-cover text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-between relative z-10">
        <div className="flex-grow flex items-center">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <div className="mb-4 flex items-center">
              <div className="h-[1px] w-10 bg-gold mr-4"></div>
              <span className="text-gold uppercase tracking-wider text-sm font-semibold">
                Legal Excellence
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight">
              Best Law Firm
              <br />
              <span className="text-gold">Since 1980</span>
            </h1>

            <p className="text-base sm:text-lg mb-8 max-w-2xl text-gray-300">
              Our devoted team of attorneys is dedicated to providing
              unparalleled legal services tailored to your unique needs.
            </p>

            <motion.button
              className="group bg-gold text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md text-base sm:text-lg
                         hover:bg-white hover:text-gold transition-all duration-300
                         flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8"
        >
          <Stat
            icon={<Trophy className="w-6 h-6" />}
            number={10}
            suffix="+"
            text="Years of Experience"
            inView={inView}
          />
          <Stat
            icon={<Scale className="w-6 h-6" />}
            number={1000}
            suffix="+"
            text="Cases Won"
            inView={inView}
          />
          <Stat
            icon={<Users className="w-6 h-6" />}
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
  <div className="flex items-center space-x-4 animate-fadeIn bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-white/10">
    <div className="bg-gold p-2 sm:p-3 rounded-lg flex-shrink-0">{icon}</div>
    <div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
        {inView && <CountUp start={0} end={number} duration={2} />} {suffix}
      </div>
      <div className="text-xs sm:text-sm text-white">{text}</div>
    </div>
  </div>
);

export default HeroSection;
