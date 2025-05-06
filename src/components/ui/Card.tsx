import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glass = false,
  hover = true,
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardClasses = clsx(
    'rounded-xl overflow-hidden transition-all duration-300',
    {
      'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg': !glass && hover,
      'bg-white dark:bg-gray-800 shadow-md': !glass && !hover,
      'bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md hover:shadow-lg': glass && hover,
      'bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md': glass && !hover,
    },
    className
  );

  return (
    <motion.div
      ref={ref}
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;