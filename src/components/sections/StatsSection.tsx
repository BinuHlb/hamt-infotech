import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Clock, Star } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactElement;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, suffix = '', delay }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;
    const increment = value / steps;
    let currentCount = 0;
    
    const timer = setInterval(() => {
      currentCount += increment;
      
      if (currentCount >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-500 flex items-center justify-center text-primary-500 dark:text-primary-100">
          {icon}
        </div>
      </div>
      <h3 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
        {count}{suffix}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{label}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            icon={<Trophy size={32} />}
            value={150}
            label="Projects Completed"
            delay={0}
          />
          <StatItem
            icon={<Users size={32} />}
            value={84}
            label="Satisfied Clients"
            suffix="+"
            delay={1}
          />
          <StatItem
            icon={<Clock size={32} />}
            value={12}
            label="Years Experience"
            delay={2}
          />
          <StatItem
            icon={<Star size={32} />}
            value={98}
            label="Client Satisfaction"
            suffix="%"
            delay={3}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;