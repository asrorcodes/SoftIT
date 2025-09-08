import { NavLink, useLocation } from "react-router-dom";
import MainLogo from "../assets/logos/MainLogo.svg";
import LanguageDropdown from "./LanguageDropdown";
import Background from "../assets/images/Background.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="w-full bg-[#080808] z-30 top-0 left-0 sticky text-white px-4 md:px-6 py-4 shadow-md"
      style={{
        ...(isHomePage && {
          background: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }),
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img src={MainLogo} alt="SoftIT" className="w-32 md:w-36 cursor-pointer" />
        </NavLink>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {[
            { to: "/about", label: t("nav.about") },
            { to: "/service", label: t("nav.services") },
            { to: "/portfolio", label: t("nav.portfolio") },
            { to: "/vacancies", label: t("nav.vacancies") },
          ].map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-300 uppercase transition pb-1 text-lg hover:text-white ${
                    isActive
                      ? "border-b-2 border-white text-white"
                      : "hover:border-b-2 hover:border-gray-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {/* Phone number - Call on click */}
          <li className="ml-4">
            <a
              href="tel:+998993731717"
              className="font-semibold text-lg md:text-xl text-gray-300 hover:text-white transition relative"
            >
              (+998) 99{" "}
              <span className="text-white">373 17 17</span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMenu}></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 h-full w-80 bg-[#080808] flex-col py-4 shadow-xl z-50 transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
            isHomePage ? "bg-[#080808]" : ""
          }`}
          style={{
            ...(isHomePage && isMenuOpen && {
              background: `url(${Background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }),
          }}
        >
          {/* Mobile Logo */}
          <div className="p-4 border-b border-gray-700">
            <NavLink to="/" onClick={toggleMenu}>
              <img src={MainLogo} alt="SoftIT" className="w-32 cursor-pointer" />
            </NavLink>
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white focus:outline-none p-1 rounded-md hover:bg-gray-700 transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {[
              { to: "/about", label: t("nav.about") },
              { to: "/service", label: t("nav.services") },
              { to: "/portfolio", label: t("nav.portfolio") },
              { to: "/vacancies", label: t("nav.vacancies") },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg text-gray-300 uppercase text-lg font-medium transition ${
                    isActive
                      ? "bg-gray-700 text-white border border-gray-400"
                      : "hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Phone number in mobile menu */}
            <a
              href="tel:+998993731717"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg font-semibold text-xl text-gray-300 hover:bg-gray-700 hover:text-white transition w-full"
            >
              (+998) 99 <span className="text-white ml-1">373 17 17</span>
            </a>

            {/* Language Dropdown in mobile menu */}
            <div className="px-4 py-3">
              <LanguageDropdown />
            </div>
          </nav>
        </div>

        {/* Desktop Language Dropdown */}
        <div className="hidden md:block">
          <LanguageDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;