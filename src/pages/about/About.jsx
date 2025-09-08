import { useTranslation } from "react-i18next";
import OurTeamSlider from "../../components/OurTeamSlider";
import TeamSection from "../home/TeamSection";
import { memo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for staggered entrance
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

  // Header animation
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

  // List item variants for what we cover
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4, 
        ease: 'easeOut' 
      } 
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080808] to-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <motion.h1 
            className="heading-outline-xs md:heading-outline-sm lg:heading-outline my-12 text-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
          >
            {t('about.softIt')}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("about.description")}
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          ref={ref}
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Mission Section */}
          <motion.section 
            className="bg-[#121212] rounded-xl p-6 shadow-lg border-2 border-gray-700"
            variants={itemVariants}
            whileHover={{ 
              y: -5, 
              scale: 1.01, 
              transition: { duration: 0.3, ease: 'easeOut' } 
            }}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {t('about.ourMission')}
            </motion.h2>
            <motion.p 
              className="text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("about.missionDesc")}
            </motion.p>
          </motion.section>

          {/* What We Cover Section */}
          <motion.section 
            className="bg-[#121212] rounded-xl p-6 shadow-lg border-2 border-gray-700"
            variants={itemVariants}
            whileHover={{ 
              y: -5, 
              scale: 1.01, 
              transition: { duration: 0.3, ease: 'easeOut' } 
            }}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('about.whatWeCover')}
            </motion.h2>
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                t('about.softTrends'),
                t('about.webMobile'),
                t('about.cybersecurity'),
                t('about.cloudComputing'),
                t('about.ai_ml'),
                t('about.it_career'),
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={listItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <svg
                    className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
};

export default memo(About);