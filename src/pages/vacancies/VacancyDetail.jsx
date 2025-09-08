import { useParams } from "react-router-dom";
import { vacancies } from "../../data/vacancies";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, Briefcase, ArrowRight } from "lucide-react";

function VacancyDetail() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const languageKey = language === "PУ" ? "ru" : language === "O'Z" ? "uz" : "en";
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const vacancy = vacancies.find((job) => job.id === parseInt(id));
  const title = vacancy.title[languageKey];
  const category = vacancy.category[languageKey];
  const level = vacancy.level[languageKey];
  const type = vacancy.type[languageKey];
  const salary = vacancy.salary[languageKey];
  const location = vacancy.location[languageKey];
  const days = vacancy.days[languageKey];
  const time = vacancy.time[languageKey];
  const requirements = vacancy?.requirements?.[languageKey];
  const tasks = vacancy?.tasks?.[languageKey];
  const conditions = vacancy?.conditions?.[languageKey];

  if (!vacancy) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center p-8 max-w-md">
        <div className="text-red-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{t('vacancy.notFound')}</h2>
        <p className="text-gray-400">{t('vacancy.removed')}</p>
      </div>
    </div>
  );

  // Container variants for lists
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.3, 
        ease: 'easeOut' 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 50,
      transition: { 
        duration: 0.2, 
        ease: 'easeIn' 
      } 
    },
  };

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      } 
    },
  };

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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#080808]">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Header Section */}
        <motion.div
          className="bg-[#121212] rounded-t-xl p-6 md:p-8 border-2 border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h1>
              <div className="flex flex-wrap gap-2 mt-3">
                <motion.span 
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {category}
                </motion.span>
                <motion.span 
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  {level}
                </motion.span>
                <motion.span 
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  {type}
                </motion.span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-xl font-semibold text-white">{salary}</p>
              <p className="text-gray-300">{location}</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="bg-[#121212] rounded-b-xl p-6 md:p-8 space-y-8 border-2 border-gray-200 border-t-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Basic Info */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('vacancy.schedule')}
              </h3>
              <p className="text-gray-300"><span className="font-medium">{t('vacancy.days')}:</span> {days}</p>
              <p className="text-gray-300"><span className="font-medium">{t('vacancy.hours')}:</span> {time}</p>
            </div>
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.8 }
              }
            }}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-4 flex items-center border-b border-gray-600 pb-2"
              variants={sectionVariants}
            >
              <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('vacancy.requirements')}
            </motion.h2>
            <motion.ul className="space-y-2 text-gray-300" variants={containerVariants}>
              {requirements.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={listItemVariants}
                >
                  <span className="text-gray-400 mr-2">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 1.0 }
              }
            }}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-4 flex items-center border-b border-gray-600 pb-2"
              variants={sectionVariants}
            >
              <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {t('vacancy.tasks')}
            </motion.h2>
            <motion.ul className="space-y-2 text-gray-300" variants={containerVariants}>
              {tasks.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={listItemVariants}
                >
                  <span className="text-gray-400 mr-2">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 1.2 }
              }
            }}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-4 flex items-center border-b border-gray-600 pb-2"
              variants={sectionVariants}
            >
              <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('vacancy.conditions')}
            </motion.h2>
            <motion.div className="grid grid-cols-1 sm:grid-cols-1 gap-4" variants={containerVariants}>
              {conditions.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 p-3 rounded-lg flex items-start border border-gray-600"
                  variants={listItemVariants}
                  whileHover={{ x: 5, scale: 1.01 }}
                >
                  <svg className="w-5 h-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-base">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Apply Button */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.button 
              onClick={() => setIsModalOpen(true)} 
              className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 border border-gray-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {t('vacancy.apply')}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-[#121212] rounded-none sm:rounded-xl lg:p-6 px-6 py-4 w-full lg:w-[800px] lg:h-[400px] h-[100vh] sm:h-auto sm:max-w-xl relative overflow-y-auto border-2 border-gray-200"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <motion.h3 
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {t('vacancy.apply')}
              </motion.h3>

              <motion.form className="space-y-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="col-span-2 lg:col-span-1">
                    <label className="text-white block mb-2">{t('vacancy.fullName')}</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 text-white rounded-lg border border-gray-600 p-2 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition-all duration-300"
                      placeholder={t('vacancy.enterName')}
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <label className="text-white block mb-2">{t('vacancy.phone')}</label>
                    <input
                      type="tel"
                      className="w-full bg-gray-800 text-white rounded-lg border border-gray-600 p-2 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition-all duration-300"
                      placeholder="+998 __ ___ __ __"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <label className="text-white block mb-2">{t('vacancy.select')}</label>
                    <select
                      className="w-full bg-gray-800 text-white rounded-lg border border-gray-600 p-2.5 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition-all duration-300"
                    >
                      <option value="option1">{t('UI&UX Designer')}</option>
                      <option value="option2">{t('Backend developer')}</option>
                      <option value="option3">{t('Project Manager')}</option>
                      <option value="option3">{t('Sales Manager')}</option>
                      <option value="option3">{t('IT Business Analyst')}</option>
                      <option value="option3">{t('Marketing Manager')}</option>
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label className="text-white block mb-2">{t('vacancy.cv')}</label>
                    <div className="border bg-gray-800 flex items-center justify-between border-gray-600 rounded-lg p-2 text-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.33 21.3401C11.24 21.3401 10.15 20.9301 9.32004 20.1001C7.66004 18.4401 7.66004 15.7501 9.32004 14.0901L11.8 11.6201C12.09 11.3301 12.57 11.3301 12.86 11.6201C13.15 11.9101 13.15 12.3901 12.86 12.6801L10.38 15.1501C9.31004 16.2201 9.31004 17.9701 10.38 19.0401C11.45 20.1101 13.2 20.1101 14.27 19.0401L18.16 15.1501C19.34 13.9701 19.99 12.4001 19.99 10.7301C19.99 9.06011 19.34 7.49011 18.16 6.31011C15.72 3.87011 11.76 3.87011 9.32004 6.31011L5.08004 10.5501C4.09004 11.5401 3.54004 12.8601 3.54004 14.2601C3.54004 15.6601 4.09004 16.9801 5.08004 17.9701C5.37004 18.2601 5.37004 18.7401 5.08004 19.0301C4.79004 19.3201 4.31004 19.3201 4.02004 19.0301C2.75004 17.7501 2.04004 16.0601 2.04004 14.2601C2.04004 12.4601 2.74004 10.7601 4.02004 9.49011L8.26004 5.25011C11.28 2.23011 16.2 2.23011 19.22 5.25011C20.68 6.71011 21.49 8.66011 21.49 10.7301C21.49 12.8001 20.68 14.7501 19.22 16.2101L15.33 20.1001C14.5 20.9301 13.42 21.3401 12.33 21.3401Z" fill="white" fillOpacity="0.6" />
                      </svg>

                      <input type="file" className="hidden" id="cv-upload" accept=".pdf,.doc,.docx" />

                      <label htmlFor="cv-upload" className="cursor-pointer flex items-center gap-5 text-gray-400 hover:text-gray-200 transition-colors duration-300">
                        {t('vacancy.uploadCV')}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="white" />
                        </svg>
                      </label>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gray-800 col-span-2 text-white py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-600"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('vacancy.submit')}
                  </motion.button>
                </div>
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(VacancyDetail);