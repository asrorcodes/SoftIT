import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SinglePortfolio = () => {
  const navigate = useNavigate();

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Back button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-xl mb-8 hover:bg-gray-100 transition"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-5 h-5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        Back
      </motion.button>

      {/* Portfolio content */}
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl"
        variants={itemVariants}
      >
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Portfolio Title
        </motion.h1>

        <motion.p
          className="text-gray-600 leading-relaxed mb-6"
          variants={itemVariants}
        >
          This is the description of the selected portfolio item. You can
          showcase your project details, technologies used, and links to the
          live demo or source code here.
        </motion.p>

        {/* Example SVG (fixed camelCase props) */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-16 h-16 text-blue-500"
          variants={itemVariants}
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default SinglePortfolio;
