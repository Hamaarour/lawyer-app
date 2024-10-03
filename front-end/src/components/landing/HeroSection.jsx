const HeroSection = () => {
  return (
    <section className="relative h-screen bg-primary bg-hero-pattern bg-cover text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-32 h-full flex flex-col justify-center relative">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">
          Best Law Firm
          <br />
          Since 1980
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          Our devoted team of attorneys is dedicated to providing unparalleled
          legal services tailored to your unique needs.
        </p>
        <button className="bg-secondary text-white px-8 py-3 rounded-md text-lg hover:bg-secondary-light transition duration-300 w-fit">
          Explore More
        </button>
        <div className="absolute bottom-8 left-4 flex space-x-4">
          {/* Add team member avatars here */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
