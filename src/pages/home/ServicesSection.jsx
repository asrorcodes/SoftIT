import ServiceCard from "./ServiceCard";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaCloud,
  FaChartLine,
  FaCalendarCheck,
  FaShieldAlt,
  FaAd 
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { serviceDetails } from "../../data/serviceDetails";
import { memo } from "react";
import SEO from "../../components/SEO";

const serviceIcons = {
  web: FaCode,
  backend: FaServer,
  mobile: FaMobileAlt,
  cloud: FaCloud,
  brand: FaAd,
  pm: FaCalendarCheck,
  analytics: FaChartLine,
  security: FaShieldAlt,
};

const ServicesSection = () => {
  const {t,i18n}=useTranslation()
  return (
    <>
     <SEO 
    title="Xizmatlarimiz – Raqamli Yechimlar va Konsalting Xizmatlari" 
    description="Biznesingizni raqamli rivojlantirish uchun mo'ljallangan raqamli xizmatlarimizni taklif etamiz: veb-dasturlash, mobil ilovalar, crm tizimlar, IT loyihalarni boshqarish,ui/ux dizayn va konsalting xizmatlari." 
    keywords="IT xizmatlari,IT konsalting xizmatlari,IT O'zbekiston,ishonchli IT yechimlar,veb-dasturlash,mobil ilovalar,ui dizayn"
    image='/assets/images/Planet.png'
    url='https://softit.uz/services'
     />
    <div className="absolute w-full h-[100px] bg-gradient-to-t from-black/10 to-transparent"/>
    <section className="py-16  ">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-4xl z-30  font-bold text-white mb-4">{t('nav.services')}</h2>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
           {t('home.description')}
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service) => (
            <ServiceCard
              key={service.id}
              url={`/services/${service.id}`}
              title={i18n.language === "PУ" ? service.title?.ru : i18n.language === "O'Z" ? service.title?.uz : service.title?.en}
              description={i18n.language === "PУ" ? service.description?.ru : i18n.language === "O'Z" ? service.description?.uz : service.description?.en}
              icon={serviceIcons[service.icon] || FaCode}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default  memo(ServicesSection);
