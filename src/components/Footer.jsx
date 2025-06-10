import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";
import planet from "../assets/images/Planet1.png";
import Logo from "../assets/logos/Vector (2).png";
import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";
import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

const Footer = () => {
  const { t } = useTranslation()
  return (
    <>
    <SEO
    title="Soft IT Group"
    description="Biz IT xizmatlari, texnologik konsalting, bulutli yechimlar va kiberxavfsizlik bo‘yicha yetakchi mutaxassislarni taflif qilamiz. Innovatsion va ishonchli yondashuv bilan sizning biznesingizni raqamli rivojlantiramiz." 
    keywords="Biz haqimizda IT kompaniyasi,IT xizmatlari haqida,IT konsalting firmasi haqida,ishonchli IT yechimlar,O‘zbekiston IT kompaniyasi,IT texnologiyalar bo‘yicha maslahat,tajribali IT jamoasi,raqamli transformatsiya ekspertlari"
    url='https://softit.uz/'
    />
    <footer className="text-white py-8 z-20 " style={{
      backgroundColor: "#0D0D0D",
      backgroundImage: `url(${planet})`,
      backgroundPosition: "center bottom",
      backgroundSize: "100% auto",
      backgroundRepeat: "no-repeat",
      position: "relative",
      width: "100%",
      minHeight: "500px",
    }}>
      <div className="absolute inset-0 z-[2]" style={{
        background: "linear-gradient(0deg, rgba(0,0,0,.65) 0%, rgba(9,9,121,0) 40%)"
      }}></div>

      <div className="container mx-auto px-4 relative z-[3]">
        {/* Navigation Links */}
        <nav className="grid grid-cols-1 sm:grid-cols-1  lg:flex gap-6 lg:gap-12 mb-16 text-[22px]">
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
            {t('nav.about')}
          </Link>
          <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
            {t('nav.services')}
          </Link>
          <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
            {t('nav.portfolio')}
          </Link>
          <Link to="/vacancies" className="text-gray-400 hover:text-white transition-colors">
            {t('nav.vacancies')}
          </Link>
          <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
            {t('nav.blog')}
          </Link>
        </nav>


        {/* Social and Contact Info */}
        <div className="flex gap-16 items-center justify-between mb-8">
          {/* Social Icons */}
          {/* <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white"><FaTelegram /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaFacebook /></a>
          </div> */}
<div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-12">
          {/* Email */}
          <div className="flex items-center  gap-3 text-gray-300">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <circle cx="16" cy="16" r="15.5" stroke="white" />
                <rect x="7.5" y="7.5" width="17" height="17" stroke="#0D0D0D" />
                <path d="M19.75 22.9375H12.25C9.5125 22.9375 7.9375 21.3625 7.9375 18.625V13.375C7.9375 10.6375 9.5125 9.0625 12.25 9.0625H19.75C22.4875 9.0625 24.0625 10.6375 24.0625 13.375V18.625C24.0625 21.3625 22.4875 22.9375 19.75 22.9375ZM12.25 10.1875C10.105 10.1875 9.0625 11.23 9.0625 13.375V18.625C9.0625 20.77 10.105 21.8125 12.25 21.8125H19.75C21.895 21.8125 22.9375 20.77 22.9375 18.625V13.375C22.9375 11.23 21.895 10.1875 19.75 10.1875H12.25Z" fill="white" />
                <path d="M15.9998 16.6525C15.3698 16.6525 14.7323 16.4575 14.2448 16.06L11.8973 14.185C11.6573 13.99 11.6123 13.6375 11.8073 13.3975C12.0023 13.1575 12.3548 13.1125 12.5948 13.3075L14.9423 15.1825C15.5123 15.64 16.4798 15.64 17.0498 15.1825L19.3973 13.3075C19.6373 13.1125 19.9973 13.15 20.1848 13.3975C20.3798 13.6375 20.3423 13.9975 20.0948 14.185L17.7473 16.06C17.2673 16.4575 16.6298 16.6525 15.9998 16.6525Z" fill="white" />
              </g>
            </svg>

            <a href="mailto:softit@info.uz" className="text-[20px] text-base hover:text-white">softit@info.uz</a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-gray-300">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <circle cx="16" cy="16" r="15.5" stroke="white" />
                <rect x="7.5" y="7.5" width="17" height="17" stroke="#0D0D0D" />
                <path d="M20.0875 24.0625C19.24 24.0625 18.3475 23.86 17.425 23.47C16.525 23.0875 15.6175 22.5625 14.7325 21.925C13.855 21.28 13.0075 20.56 12.205 19.7725C11.41 18.97 10.69 18.1225 10.0525 17.2525C9.4075 16.3525 8.89 15.4525 8.5225 14.5825C8.1325 13.6525 7.9375 12.7525 7.9375 11.905C7.9375 11.32 8.0425 10.765 8.245 10.2475C8.455 9.715 8.7925 9.22 9.25 8.7925C9.8275 8.2225 10.4875 7.9375 11.1925 7.9375C11.485 7.9375 11.785 8.005 12.04 8.125C12.3325 8.26 12.58 8.4625 12.76 8.7325L14.5 11.185C14.6575 11.4025 14.7775 11.6125 14.86 11.8225C14.9575 12.0475 15.01 12.2725 15.01 12.49C15.01 12.775 14.9275 13.0525 14.77 13.315C14.6575 13.5175 14.485 13.735 14.2675 13.9525L13.7575 14.485C13.765 14.5075 13.7725 14.5225 13.78 14.5375C13.87 14.695 14.05 14.965 14.395 15.37C14.7625 15.79 15.1075 16.1725 15.4525 16.525C15.895 16.96 16.2625 17.305 16.6075 17.59C17.035 17.95 17.3125 18.13 17.4775 18.2125L17.4625 18.25L18.01 17.71C18.2425 17.4775 18.4675 17.305 18.685 17.1925C19.0975 16.9375 19.6225 16.8925 20.1475 17.11C20.3425 17.1925 20.5525 17.305 20.7775 17.4625L23.2675 19.2325C23.545 19.42 23.7475 19.66 23.8675 19.945C23.98 20.23 24.0325 20.4925 24.0325 20.755C24.0325 21.115 23.95 21.475 23.7925 21.8125C23.635 22.15 23.44 22.4425 23.1925 22.7125C22.765 23.185 22.3 23.5225 21.76 23.74C21.2425 23.95 20.68 24.0625 20.0875 24.0625ZM11.1925 9.0625C10.78 9.0625 10.3975 9.2425 10.03 9.6025C9.685 9.925 9.445 10.2775 9.295 10.66C9.1375 11.05 9.0625 11.4625 9.0625 11.905C9.0625 12.6025 9.2275 13.36 9.5575 14.14C9.895 14.935 10.3675 15.76 10.9675 16.585C11.5675 17.41 12.25 18.2125 13 18.97C13.75 19.7125 14.56 20.4025 15.3925 21.01C16.2025 21.6025 17.035 22.0825 17.86 22.4275C19.1425 22.975 20.3425 23.1025 21.3325 22.69C21.715 22.5325 22.0525 22.2925 22.36 21.9475C22.5325 21.76 22.6675 21.5575 22.78 21.3175C22.87 21.13 22.915 20.935 22.915 20.74C22.915 20.62 22.8925 20.5 22.8325 20.365C22.81 20.32 22.765 20.2375 22.6225 20.14L20.1325 18.37C19.9825 18.265 19.8475 18.19 19.72 18.1375C19.555 18.07 19.4875 18.0025 19.2325 18.16C19.0825 18.235 18.9475 18.3475 18.7975 18.4975L18.2275 19.06C17.935 19.345 17.485 19.4125 17.14 19.285L16.9375 19.195C16.63 19.03 16.27 18.775 15.8725 18.4375C15.5125 18.13 15.1225 17.77 14.65 17.305C14.2825 16.93 13.915 16.5325 13.5325 16.09C13.18 15.6775 12.925 15.325 12.7675 15.0325L12.6775 14.8075C12.6325 14.635 12.6175 14.5375 12.6175 14.4325C12.6175 14.1625 12.715 13.9225 12.9025 13.735L13.465 13.15C13.615 13 13.7275 12.8575 13.8025 12.73C13.8625 12.6325 13.885 12.55 13.885 12.475C13.885 12.415 13.8625 12.325 13.825 12.235C13.7725 12.115 13.69 11.98 13.585 11.8375L11.845 9.3775C11.77 9.2725 11.68 9.1975 11.5675 9.145C11.4475 9.0925 11.32 9.0625 11.1925 9.0625ZM17.4625 18.2575L17.3425 18.7675L17.545 18.2425C17.5075 18.235 17.4775 18.2425 17.4625 18.2575Z" fill="white" />
              </g>
            </svg>

            <a href="tel:+998993731717" className="hover:text-white text-base text-[20px]">+99893 123 45 67</a>
          </div>
</div>

          <button
          
            title="Scroll to top"
            onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
          >
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 49.2918C13.1517 49.2918 2.70837 38.8485 2.70837 26.0002C2.70837 13.1518 13.1517 2.7085 26 2.7085C38.8484 2.7085 49.2917 13.1518 49.2917 26.0002C49.2917 38.8485 38.8484 49.2918 26 49.2918ZM26 5.9585C14.95 5.9585 5.95837 14.9502 5.95837 26.0002C5.95837 37.0502 14.95 46.0418 26 46.0418C37.05 46.0418 46.0417 37.0502 46.0417 26.0002C46.0417 14.9502 37.05 5.9585 26 5.9585Z" fill="white" fillOpacity="0.6" />
              <path d="M26 35.2085C25.1117 35.2085 24.375 34.4718 24.375 33.5835V20.5835C24.375 19.6952 25.1117 18.9585 26 18.9585C26.8883 18.9585 27.625 19.6952 27.625 20.5835V33.5835C27.625 34.4718 26.8883 35.2085 26 35.2085Z" fill="white" fillOpacity="0.6" />
              <path d="M32.5 26.5415C32.0883 26.5415 31.6766 26.3898 31.3516 26.0648L26 20.7131L20.6483 26.0648C20.02 26.6931 18.98 26.6931 18.3516 26.0648C17.7233 25.4365 17.7233 24.3965 18.3516 23.7681L24.8516 17.2681C25.48 16.6398 26.52 16.6398 27.1483 17.2681L33.6483 23.7681C34.2766 24.3965 34.2766 25.4365 33.6483 26.0648C33.3233 26.3898 32.9116 26.5415 32.5 26.5415Z" fill="white" fillOpacity="0.6" />
            </svg>

          </button>
        </div>

        {/* Bottom Section */}
        <div  className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-gray-400 order-2 md:order-1 text-lg">© 2023 Soft IT Group</div>

          {/* Logo or Company Name */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-16 order-1 md:order-2" />
          </div>


        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
