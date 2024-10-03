const ServicesSection = () => {
  const services = [
    {
      title: "Family Law",
      icon: "../../../src/assets/images/Family.png",
      description:
        "From divorce and child custody matters to spousal support and adoption.",
    },
    {
      title: "Business Law",
      icon: "../../../src/assets/images/Business.png",
      description:
        "From startups to established corporations, we offer strategic legal guidance.",
    },
    {
      title: "Real Estate Law",
      icon: "../../../src/assets/images/Estate.png",
      description:
        "Whether you are buying, selling or dealing with property disputes.",
    },
    {
      title: "Civil Litigation",
      icon: "../../../src/assets/images/Litigation.png",
      description:
        "Our experienced litigators are skilled at handling a wide range of civil disputes.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-100" id="services">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl mb-12 text-center">
          We Expertise Find A Solutions
          <br />
          For Criminal Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center"
            >
              <img className=" size-12 text-center mb-2" src={service.icon} />
              <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
              <p className="text-neutral-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
