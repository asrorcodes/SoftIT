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
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Enhanced animation variants for fade-in and staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] // Custom easing for smoother, bouncy feel
      } 
    },
  };

  // Header specific animation
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      } 
    },
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
            variants={headerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text text-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
            >
              {t('nav.services')}
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('home.description')}
            </motion.p>
          </motion.header>

          {/* Services Grid */}
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {serviceDetails.map((service, index) => (
              <motion.div 
                key={service.id} 
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02, 
                  transition: { duration: 0.3, ease: 'easeOut' } 
                }}
                whileTap={{ scale: 0.98 }}
              >
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
        </section>
      </div>
    </>
  );
};

export default memo(Service);