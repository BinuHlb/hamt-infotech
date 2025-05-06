import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import CTASection from '../components/sections/CTASection';
import { services } from '../data/services';

const Services: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Page Header */}
      <div className="bg-primary-900 text-white pt-40 pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 mb-0">
              Comprehensive creative solutions designed to elevate your brand and drive your business forward.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="What We Offer" 
            subtitle="From initial concept to final execution, we provide end-to-end creative solutions tailored to your business goals."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <Card key={service.id} delay={index}>
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    {React.createElement(service.icon, { size: 32 })}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
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
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section bg-gray-50 dark:bg-gray-800/30">
        <div className="container">
          <SectionHeading 
            title="Our Process" 
            subtitle="How we approach every project to deliver exceptional results"
            center={true}
          />
          
          <div className="relative mt-16">
            {/* Timeline connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-primary-900/50 transform -translate-x-1/2 hidden md:block" />
            
            {/* Process steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-500 text-white flex items-center justify-center font-bold mx-auto md:mx-0 mb-6 md:mb-0 z-10">
                  1
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="md:text-right">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Discovery</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We start by understanding your business, goals, audience, and challenges. This foundational step ensures our strategy aligns with your vision.
                    </p>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-500 text-white flex items-center justify-center font-bold mx-auto md:mx-0 mb-6 md:mb-0 z-10">
                  2
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="hidden md:block" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Strategy</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We develop a comprehensive plan tailored to your specific needs and objectives, mapping out the journey to achieve your goals.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-500 text-white flex items-center justify-center font-bold mx-auto md:mx-0 mb-6 md:mb-0 z-10">
                  3
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="md:text-right">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Creation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our team brings the strategy to life through design, development, and content creation, keeping you involved throughout the process.
                    </p>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-500 text-white flex items-center justify-center font-bold mx-auto md:mx-0 mb-6 md:mb-0 z-10">
                  4
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="hidden md:block" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Refinement</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We iteratively refine the solution based on feedback and testing to ensure it meets the highest standards of quality and effectiveness.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative">
                <div className="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-500 text-white flex items-center justify-center font-bold mx-auto md:mx-0 mb-6 md:mb-0 z-10">
                  5
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="md:text-right">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Launch & Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We ensure a smooth deployment and provide ongoing support and optimization to help you achieve long-term success.
                    </p>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </motion.div>
  );
};

export default Services;