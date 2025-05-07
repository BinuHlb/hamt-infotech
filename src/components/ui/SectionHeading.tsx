import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '80px',
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`mb-12 ${center ? 'text-center' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.h2 
        variants={titleVariants}
        className={`mb-4 ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        variants={lineVariants}
        className={`h-1 bg-primary-500 dark:bg-primary-500 rounded-full mb-4 ${center ? 'mx-auto' : ''}`}
      />
      
      {subtitle && (
        <motion.p 
          variants={subtitleVariants}
          className={`text-lg md:text-xl max-w-3xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;