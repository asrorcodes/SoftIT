import { memo, useState } from "react";
import { mockProjects } from "../../data/mockProjects";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { ArrowRightCircle } from "lucide-react";
import SEO from "../../components/SEO";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PortfolioSection = ({ id }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const openDrawer = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

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

  // CTA variants
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.3, ease: 'easeInOut' } 
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projectItems = mockProjects.slice(0, 7);
  const portfolioEls = projectItems.map((item, index) => (
    <motion.div
      className={classNames(
        "group relative w-full overflow-hidden rounded-md min-h-[250px] sm:min-h-[300px] border-2 border-gray-200 hover:border-gray-400 transition-colors duration-300",
        index === 0 && "md:row-span-2",
        index === projectItems.length - 1 && "md:col-span-2"
      )}
      key={index}
      variants={itemVariants}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' } 
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        to={`/${item.id}`}
        title={item.title}
        className="block h-full w-full"
      >
        <figure className="relative h-full w-full">
          <img
            src={item.images[0]}
            alt={`Portfolio ${item.title}`}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="absolute inset-0 flex flex-col justify-between bg-black/40 transition-all duration-300">
          {/* Gradient overlays - changed to black/white/gray tones */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(0,0,0,0.3)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <div className="z-10 flex flex-col p-4 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">{item.title}</h3>
            <span className="text-xs sm:text-sm text-white/80 group-hover:text-gray-300 transition-colors duration-300">{item.category_name}</span>
          </div>
          
          <div className="z-10 flex justify-end p-4 sm:p-8 md:p-12">
            <span 
              className="flex translate-x-full opacity-0 items-center text-sm sm:text-base md:text-lg text-white transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-gray-100 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${item.id}`);
              }}
            >
              {t("view_more")}
              <ArrowRightCircle 
                variant="Bold"
                className="ml-2 sm:ml-3 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 -rotate-45 transition-transform duration-300 group-hover:stroke-gray-300" 
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  ));

  return (
    <>
      <SEO
        title="Portolio-Amalga oshirilgan IT loyihalarimiz"
        description="Bizning portfoliomiz orqali amalga oshirgan IT loyihalarimiz bilan tanishing. Turli sohalardagi mijozlarimiz uchun veb dasturlar, crm tizimlar,mobil ilovalar,it konsalting,ui/ux dizayn,real IT loyihalar, dasturiy ta’minot va raqamli transformatsiya yechimlarini taqdim etdik."
        keywords="Portfolio,amalga oshirilgan IT loyihalar,web dasturlar ilovalari,IT xizmatlar namunasi,real IT loyihalar,ishonchli IT yechimlar,veb-dasturlash,mobil ilovalar,ui dizayn"
        url="https://softit.uz/portfolio"
      />
      <section id={id} className="py-16">
        <div className="container mx-auto px-4">
          <motion.h3 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {t("portfolio")}
          </motion.h3>
          <motion.div
            ref={ref}
            className="mb-4 sm:mb-6 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 mid-low:grid-cols-1 mid:grid-cols-2 md:grid-cols-3 auto-rows-[400px] sm:auto-rows-[300px]"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {portfolioEls}
          </motion.div>
          <motion.div 
            className="mt-4 sm:mt-6 md:mt-8 text-left"
            initial="hidden"
            animate="visible"
            variants={ctaVariants}
            whileHover="hover"
          >
            <Link
              to="/portfolio"
              className="inline-flex w-max items-center gap-1 sm:gap-2 rounded-lg border-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-gray-800 text-white transition-all duration-300 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:shadow-gray-500 hover:border-gray-400 group focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRightCircle 
                className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:-rotate-45 group-hover:stroke-white" 
              />
              <span className="text-base sm:text-lg md:text-[20px]">
                {t("allProjects")}
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default memo(PortfolioSection);