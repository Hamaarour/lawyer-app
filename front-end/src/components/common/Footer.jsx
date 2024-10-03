export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Lawfor</h3>
            <p className="text-neutral-400">
              Expert legal solutions for all your needs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white">
                  Family Law
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white">
                  Business Law
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white">
                  Real Estate Law
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white">
                  Civil Litigation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Subscribe to the newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-neutral-800 px-4 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-secondary"
              />
              <button className="bg-secondary px-4 py-2 rounded-r hover:bg-secondary-light transition duration-300">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400">
            © 2024 Lawfor. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white">
              Privacy policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-white">
              Legal notice
            </a>
            <a href="#" className="text-neutral-400 hover:text-white">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
