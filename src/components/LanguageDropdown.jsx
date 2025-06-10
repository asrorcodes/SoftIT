import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Global } from "iconsax-react";
import { useTranslation } from "react-i18next";
const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || "EN");
  const languages = [
    { id: 1, name: "EN" },
    { id: 2, name: "PУ" },
    { id: 3, name: "O'Z" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block  py-1 px-2 border rounded-[10px] border-[#FFFFFF] hover:bg-gray-700 text-left min-w-[84px]">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex uppercase py-[2px]  gap-3 items-center w-full text-lg font-medium text-white bg-transparent rounded-md hover:bg-gray-700 focus:outline-none"
        id="language-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18.9583C5.05835 18.9583 1.04169 14.9417 1.04169 9.99999C1.04169 5.05832 5.05835 1.04166 10 1.04166C14.9417 1.04166 18.9584 5.05832 18.9584 9.99999C18.9584 14.9417 14.9417 18.9583 10 18.9583ZM10 2.29166C5.75002 2.29166 2.29169 5.74999 2.29169 9.99999C2.29169 14.25 5.75002 17.7083 10 17.7083C14.25 17.7083 17.7084 14.25 17.7084 9.99999C17.7084 5.74999 14.25 2.29166 10 2.29166Z" fill="white" />
            <path d="M7.50001 18.125H6.66668C6.32501 18.125 6.04168 17.8417 6.04168 17.5C6.04168 17.1583 6.30835 16.8833 6.65001 16.875C5.34168 12.4083 5.34168 7.59167 6.65001 3.125C6.30835 3.11667 6.04168 2.84167 6.04168 2.5C6.04168 2.15833 6.32501 1.875 6.66668 1.875H7.50001C7.70001 1.875 7.89168 1.975 8.00835 2.13333C8.12501 2.3 8.15835 2.50833 8.09168 2.7C6.52501 7.40833 6.52501 12.5917 8.09168 17.3083C8.15835 17.5 8.12501 17.7083 8.00835 17.875C7.89168 18.025 7.70001 18.125 7.50001 18.125Z" fill="white" />
            <path d="M12.5 18.125C12.4333 18.125 12.3667 18.1167 12.3 18.0917C11.975 17.9833 11.7917 17.625 11.9083 17.3C13.475 12.5917 13.475 7.40832 11.9083 2.69165C11.8 2.36665 11.975 2.00832 12.3 1.89999C12.6333 1.79165 12.9833 1.96665 13.0917 2.29165C14.75 7.25832 14.75 12.725 13.0917 17.6833C13.0083 17.9583 12.7583 18.125 12.5 18.125Z" fill="white" />
            <path d="M10 14.3333C7.675 14.3333 5.35833 14.0083 3.125 13.35C3.11667 13.6833 2.84167 13.9583 2.5 13.9583C2.15833 13.9583 1.875 13.675 1.875 13.3333V12.5C1.875 12.3 1.975 12.1083 2.13333 11.9917C2.3 11.875 2.50833 11.8417 2.7 11.9083C7.40833 13.475 12.6 13.475 17.3083 11.9083C17.5 11.8417 17.7083 11.875 17.875 11.9917C18.0417 12.1083 18.1333 12.3 18.1333 12.5V13.3333C18.1333 13.675 17.85 13.9583 17.5083 13.9583C17.1667 13.9583 16.8917 13.6917 16.8833 13.35C14.6417 14.0083 12.325 14.3333 10 14.3333Z" fill="white" />
            <path d="M17.5 8.125C17.4334 8.125 17.3667 8.11666 17.3 8.09166C12.5917 6.525 7.40002 6.525 2.69169 8.09166C2.35836 8.2 2.00836 8.025 1.90002 7.7C1.80002 7.36666 1.97502 7.01666 2.30002 6.90833C7.26669 5.25 12.7334 5.25 17.6917 6.90833C18.0167 7.01666 18.2 7.375 18.0834 7.7C18.0084 7.95833 17.7584 8.125 17.5 8.125Z" fill="white" />
          </svg>


        </span>
        {selectedLanguage}
        
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 top-[120%] w-24 rounded-lg overflow-hidden  shadow-lg bg-gray-800 transition-opacity duration-300 z-10 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => handleLanguageSelect(language.name)}
                className="block w-full text-left px-4 py-2 text-[1rem] text-gray-900 bg-gray-100 hover:bg-white focus:bg-white"
                role="menuitem"
              >

                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
