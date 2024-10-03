import { useState } from "react";
import { useLanguage, languages } from "../../context/LanguageContext";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Cases", href: "#" },
    { label: "Services", href: "#" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white font-serif text-2xl">Lawfor</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white hover:text-secondary"
            >
              {item.label}
            </a>
          ))}

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center text-white hover:text-secondary"
            >
              {languages[currentLanguage].nativeName}
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                {Object.entries(languages).map(([code, lang]) => (
                  <button
                    key={code}
                    onClick={() => {
                      setCurrentLanguage(code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm capitalize w-full text-left hover:bg-neutral-100
                      ${
                        currentLanguage === code
                          ? "text-secondary"
                          : "text-neutral-700"
                      }`}
                  >
                    {lang.nativeName}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-secondary-light transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary text-white w-screen h-screen z-40 flex flex-col justify-center items-center">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>

          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block py-4 text-2xl text-white hover:text-secondary"
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Language Selector */}
          <div className="py-4 border-t border-neutral-700 mt-6">
            <p className="text-neutral-400 text-lg mb-4">Select Language</p>
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => setCurrentLanguage(code)}
                className={`block py-2 text-lg w-full text-left
                    ${
                      currentLanguage === code ? "text-secondary" : "text-white"
                    }`}
              >
                {lang.nativeName}
              </button>
            ))}
          </div>

          <button className="mt-6 w-full bg-secondary text-white px-8 py-3 rounded hover:bg-secondary-light transition duration-300">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
