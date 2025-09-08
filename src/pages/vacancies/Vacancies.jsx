import { Briefcase, CalendarDays, Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { memo } from "react";
import SEO from "../../components/SEO";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const vacancies = [
  {
    id: 1,
    title: "UI/UX designer",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
  {
    id: 2,
    title: "Beckend developer",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
  {
    id: 3,
    title: "Project manager",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
  {
    id: 4,
    title: "Sales manager",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
  {
    id: 5,
    title: "IT business analyst",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
  {
    id: 6,
    title: "Marketing manager",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
];

function Vacancies() {
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

  return (
    <>
      <SEO
        title="Vakansiyalarimiz – Soft IT"
        description="Ijodkor va tajribali mutaxassislarni jamoamizga taklif qilamiz: dizaynerlar, dasturchilar, menejerlar va marketologlar. Kasbiy rivojlanish va zamonaviy IT muhitda ishlash imkoniyati sizni kutmoqda."
        keywords="IT bo‘sh ish o‘rinlari,izayner ish o‘rinlari O‘zbekiston,dasturchi ish o‘rinlari,backend developer vakansiyasi,loyiha menejeri ish o‘rni,savdo menejeri vakansiyasi,marketing menejeri ish o‘rni,IT kompaniyada ish, bo'sh ish o'rinlari,ish qidirayotganlar uchun vakansiyalar"
        url="https://softit.uz/vacancies"
      />
      <section className="bg-[#080808] text-white py-16 px-4 md:px-10 mb-20 mt-10">
        <div className="text-center mb-16">
          <motion.h2
            className="heading-outline-xs md:heading-outline-sm lg:heading-outline my-8"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            {t("nav.vacancies")}
          </motion.h2>
        </div>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {vacancies.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' } 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={`/vacancies/${job.id}`}
                className="bg-[#121212] rounded-xl p-6 hover:border hover:border-gray-500 transition duration-300 block"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">{job.title}</h3>
                  <hr className="border-gray-700 mb-4" />
                  <div className="flex items-start gap-2 mb-2">
                    <CalendarDays className="w-5 h-5 text-gray-400 mt-1" />
                    <p>
                      {job.days}
                      <br />
                      {job.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <p>{job.time}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-gray-800 text-sm px-4 py-2 rounded flex items-center gap-2 text-gray-300 hover:bg-gray-700 transition-colors duration-300">
                    <Briefcase className="w-4 h-4" />
                    Kelishilgan holda
                  </button>
                  <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default memo(Vacancies);