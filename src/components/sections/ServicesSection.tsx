import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { services } from '../../data/services';

interface ServicesSectionProps {
  compact?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ compact = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const displayServices = compact 
    ? services.slice(0, 3) 
    : services;

  return (
    <section ref={ref} className="section bg-gray-50 dark:bg-gray-800/30">
      <div className="container">
        <SectionHeading
          title="Our Services"
          subtitle="We offer a comprehensive range of creative services to help your brand stand out in the digital landscape."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <Card key={service.id} delay={index}>
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-primary-500 dark:bg-primary-900/30 text-white dark:text-primary-400">
                  {React.createElement(service.icon, { size: 32 })}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.shortDescription}
                </p>
                
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300"
                >
                  Learn More 
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
        
        {compact && (
          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link 
                to="/services" 
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                View All Services
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;