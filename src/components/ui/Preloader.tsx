import React from 'react';
import { motion } from 'framer-motion';
import Logo from "/assets/images/logo.svg";

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img src={Logo} alt="HamtInfotech Logo" className="h-30" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Hamt Infotech
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 rounded-full max-w-xs mx-auto"
        />
      </div>
    </div>
  );
};

export default Preloader;