import { Users, Building2, Home, Scale } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Family Law",
      icon: Users,
      description:
        "From divorce and child custody matters to spousal support and adoption.",
      bgColor: "bg-amber-100",
      textColor: "text-black",
      iconBgColor: "bg-white",
    },
    {
      title: "Business Law",
      icon: Building2,
      description:
        "From startups to established corporations, we offer strategic legal guidance.",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      iconBgColor: "bg-neutral-800",
    },
    {
      title: "Real Estates Law",
      icon: Home,
      description:
        "Whether you are buying, selling or dealing with property disputes.",
      bgColor: "bg-amber-100",
      textColor: "text-black",
      iconBgColor: "bg-white",
    },
    {
      title: "Civil Litigation",
      icon: Scale,
      description:
        "Our experienced litigators are skilled at handling a wide range of civil disputes.",
      bgColor: "bg-sky-100",
      textColor: "text-black",
      iconBgColor: "bg-white",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-6 text-gray-600">
          What We Are
        </h2>
        <h2 className="font-serif text-5xl mb-12 text-center">
          We <span className="font-light">Expertise Find A</span>{" "}
          <span className="font-bold">Solutions</span>
          <br />
          For <span className="text-gray-800 font-bold">Criminal Cases</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${service.bgColor} ${
                service.textColor || "text-black"
              } flex flex-col items-center text-center h-full shadow-md`}
            >
              <div
                className={`w-16 h-16 rounded-full ${service.iconBgColor} flex items-center justify-center mb-4`}
              >
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl mb-2 font-bold">
                {service.title}
              </h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
