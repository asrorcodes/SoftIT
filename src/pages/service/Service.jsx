import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaCloud,
  FaChartLine,
  FaCalendarCheck,
  FaShieldAlt,
  FaAd,
} from 'react-icons/fa';
import ServiceCard from '../home/ServiceCard';
import { useTranslation } from 'react-i18next';
import { serviceDetails } from '../../data/serviceDetails';
import { memo } from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';

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

const Service = () => {
  const { t, i18n } = useTranslation();

  // Animation variants for fade-in and staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <>
      <SEO
        title="Xizmatlarimiz – Raqamli Yechimlar va Konsalting Xizmatlari"
        description="Biznesingizni raqamli rivojlantirish uchun mo'ljallangan raqamli xizmatlarimizni taklif etamiz: veb-dasturlash, mobil ilovalar, crm tizimlar, IT loyihalarni boshqarish,ui/ux dizayn va konsalting xizmatlari."
        keywords="IT xizmatlari,IT konsalting xizmatlari,IT O'zbekiston,ishonchli IT yechimlar,veb-dasturlash,mobil ilovalar,ui dizayn"
        url="https://softit.uz/services"
      />
      <div className="min-h-[100vh] bg-gradient-to-b from-black to-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <section className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.header
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
              {t('nav.services')}
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('home.description')}
            </p>
          </motion.header>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {serviceDetails.map((service, index) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard
                  url={`/services/${service.id}`}
                  title={
                    i18n.language === 'PУ'
                      ? service.title?.ru
                      : i18n.language === "O'Z"
                      ? service.title?.uz
                      : service.title?.en
                  }
                  description={
                    i18n.language === 'PУ'
                      ? service.description?.ru
                      : i18n.language === "O'Z"
                      ? service.description?.uz
                      : service.description?.en
                  }
                  icon={serviceIcons[service.icon] || FaCode}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <a
              href="/services/all"
              className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full font-medium hover:from-indigo-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300"
            >
              {t('services.viewAll')}
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default memo(Service);
