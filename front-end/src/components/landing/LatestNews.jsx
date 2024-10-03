export default function LatestNews() {
  const news = [
    {
      date: "January 25, 2023",
      title: "Community Engagement and Legal Advocacy",
      image: "/api/placeholder/300/200",
    },
    {
      date: "January 25, 2023",
      title: "How Technology Affects the Legal Sector?",
      image: "/api/placeholder/300/200",
    },
    {
      date: "January 23, 2023",
      title: "US legal jobs dip following record high, Labor Dept says",
      image: "/api/placeholder/300/200",
    },
  ];

  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-4xl">Latest News</h2>
          <button className="text-secondary hover:text-secondary-light">
            Explore More
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-neutral-500 mb-2">{item.date}</p>
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <button className="text-secondary hover:text-secondary-light">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
