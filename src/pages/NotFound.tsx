import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-6">404</h1>
        
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Button 
          to="/" 
          variant="primary"
          icon={<Home size={16} />}
          iconPosition="left"
        >
          Back to Home
        </Button>
      </div>
    </motion.div>
  );
};

export default NotFound;