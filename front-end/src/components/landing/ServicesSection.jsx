const ServicesSection = () => {
  const services = [
    {
      title: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      description:
        "From divorce and child custody matters to spousal support and adoption.",
    },
    {
      title: "Business Law",
      icon: "💼",
      description:
        "From startups to established corporations, we offer strategic legal guidance.",
    },
    {
      title: "Real Estate Law",
      icon: "🏠",
      description:
        "Whether you are buying, selling or dealing with property disputes.",
    },
    {
      title: "Civil Litigation",
      icon: "⚖️",
      description:
        "Our experienced litigators are skilled at handling a wide range of civil disputes.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl mb-12 text-center">
          We Expertise Find A Solutions
          <br />
          For Criminal Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
