import { ArrowCircleRight2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { memo } from "react";
import SEO from "../../components/SEO";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, url, icon: Icon }) => {
  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords="veb dasturlash xizmatlari,veb sayt yaratish,moslashtirilgan veb ilovalar,biznes uchun veb sayt,frontend dasturlash,sayt,vebsayt,crm tizimi, mobil ilova,ui dizayn,ux dizayn,konsalting"
      />
      <motion.div
        whileHover={{ 
          y: -5,
          scale: 1.02,
          transition: { duration: 0.3, ease: 'easeOut' } 
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Link 
          to={url || "/"} 
          title={title}
          className="block group h-full" 
        >
          <motion.div 
            className="relative bg-[#121212] p-6 rounded-xl border-2 border-gray-700 hover:border-gray-400 transition-all duration-300 h-full min-h-[180px] flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.22, 1, 0.36, 1] // Custom easing for smoother, bouncy feel
            }}
          >
            <div className="flex justify-between items-start mb-4">
              {Icon && (
                <motion.div 
                  className="text-white p-2 rounded-lg bg-gray-800 border border-gray-600"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size={20} />
                </motion.div>
              )}
              <motion.div 
                className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <ArrowCircleRight2 size={20} />
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.h3 
                className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {title}
              </motion.h3>
              <motion.p 
                className="text-gray-300 text-sm line-clamp-2 group-hover:text-gray-200 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Subtle gradient overlay on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.05)] via-transparent to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
};

export default memo(ServiceCard);