import { useState, useEffect } from "react";
import { ChevronDown, Globe, Menu, X, User } from "lucide-react";

const Navbar = () => {
  const languages = [
    { label: "English", code: "en" },
    { label: "Français", code: "fr" },
    { label: "العربية", code: "ar" },
  ];

  const navItems = [
    { label: "Our firm", href: "#" },
    { label: "Our lawyers", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#", className: "text-gold" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  // Function to handle login click
  const handleLoginClick = () => {
    // Replace '/login' with the actual path to your login page
    window.location.href = "/login";
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/30"
      }`}
    >
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <img
          src="../../../src/assets/images/logo.png"
          className="w-32"
          alt="Law Firm Logo"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-gray-200 hover:text-gold transition-colors duration-300 ${
                item.className || ""
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-1 text-gray-200 hover:text-gold transition-colors duration-300"
              aria-expanded={isLanguageDropdownOpen}
              aria-haspopup="true"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">
                {selectedLanguage.label}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-black/90 backdrop-blur-md border border-white/10 rounded-md shadow-lg overflow-hidden">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`w-full px-4 py-2 text-left text-sm ${
                      selectedLanguage.code === language.code
                        ? "bg-gold/10 text-gold"
                        : "text-gray-200 hover:bg-white/5"
                    } transition-colors duration-300`}
                    onClick={() => handleLanguageSelect(language)}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login Icon */}
          <button
            onClick={handleLoginClick}
            className="text-gray-200 hover:text-gold transition-colors duration-300"
            aria-label="Login"
          >
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 text-gray-200 hover:text-gold transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col justify-center items-center h-full transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block py-3 text-xl text-gray-200 hover:text-gold transition-colors duration-300 ${
                item.className || ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Language Selector */}
          <div className="relative mt-6">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-2 text-gray-200 hover:text-gold transition-colors duration-300"
            >
              <Globe className="w-5 h-5" />
              <span className="text-lg">{selectedLanguage.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLanguageDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-md shadow-lg overflow-hidden">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`w-full px-4 py-2 text-center ${
                      selectedLanguage.code === language.code
                        ? "bg-gold/10 text-gold"
                        : "text-gray-200 hover:bg-white/5"
                    } transition-colors duration-300`}
                    onClick={() => {
                      handleLanguageSelect(language);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
