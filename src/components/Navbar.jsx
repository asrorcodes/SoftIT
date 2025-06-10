import { NavLink, useLocation } from "react-router-dom";
import MainLogo from "../assets/logos/MainLogo.svg";
import LanguageDropdown from "./LanguageDropdown";
import Background from "../assets/images/background.png";
import { useTranslation  } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full bg-[#080808] z-30 top-0 left-0 sticky  text-white px-6 py-4 shadow-md"  style={{
      ...(isHomePage && {
        background: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      })
    }}
  >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img src={MainLogo} alt="SoftIT" className="w-36 cursor-pointer" />
        </NavLink>
        <button
          onClick={toggleMenu}
className="hidden mid:block 912:hidden  text-white focus:outline-none"
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

        {/* Navigation Links */}
        <ul className="flex mid:hidden  space-x-8 text-sm font-medium">
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
                  `text-gray-300 uppercase transition pb-1 text-lg ${
                    isActive
                      ? "border-b-2 border-gray-300"
                      : "hover:border-b hover:border-gray-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {/* Phone number - Call on click */}
          <li>
            <a
              href="tel:+998993731717"
              className="font-semibold text-[20px] text-gray-400 top-1 hover:text-gray-200 transition relative "
            >
              (+998) 99 {''}
              <span className="text-gray-200 ">
              373 17 17
                </span>
            </a>
          </li>
        </ul>
        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          }  absolute top-full left-0 right-0 bg-[#080808] flex-col py-4 shadow-lg`}
          style={{
            ...(isHomePage && {
              background: `url(${Background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            })
          }}
        >
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
                `text-gray-300 uppercase  transition py-3 text-lg w-full text-center ${
                  isActive
                    ? "underline border-gray-300"
                    : "hover:bg-gray-800"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Phone number in mobile menu */}
          <a
            href="tel:+998993731717"
            className="font-semibold text-[20px] text-gray-400 py-3 hover:text-gray-200 transition w-full text-center"
          >
            (+998) 99 <span className="text-gray-200">373 17 17</span>
          </a>
          
          {/* Language Dropdown in mobile menu */}
          <div className="py-3 w-full flex justify-center">
            <LanguageDropdown />
          </div>
        </div>

        {/* Language Dropdown */}
        <div className="hidden mid:hidden tablet:hidden 853:hidden md:block">
          <LanguageDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
