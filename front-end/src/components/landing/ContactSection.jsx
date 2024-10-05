const ContactSection = () => {
  return (
    <section id="contact" className="py-10 bg-cream">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Feel free to reach out to us for any inquiries or consultation.
        </p>
        <form className="space-y-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full p-3 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
