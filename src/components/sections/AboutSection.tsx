import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Target, Users, Lightbulb, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <SectionHeading
                title="About Hamt Infotech"
                subtitle="We're a team of technology experts passionate about helping businesses succeed in the digital age."
              />
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 mb-6"
            >
              HAMT Infotech is a global technology solutions provider, born from a legacy of excellence in business advisory. Our story began in 2007 as the IT and business consulting arm of HLB HAMT, a leading Audit and Tax advisory firm in the UAE. Initially focused on addressing internal IT needs — including enterprise application development, process automation, digital transformation, CRM, and IT audits — we quickly became a catalyst for innovation within the organisation.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 mb-8"
            >
              Recognising the growing demand for high-impact technology solutions across industries, the leadership made a pivotal decision in 2012 to establish HAMT Infotech as an independent entity. This marked the beginning of our journey as a technology company with a clear purpose: to help businesses around the world transform through innovation, intelligence, and integrity.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Target className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Our Mission</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Lightbulb className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Our Vision</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Users className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Our Values</h4>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button 
                to="/about" 
                variant="primary"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Main image */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="assets/images/abt-img.jpg" 
                alt="Creative team working together" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-6">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500 rounded-lg shadow-lg flex items-center justify-center transform -rotate-12">
              <div className="text-white font-bold text-xl">15+</div>
            </div>
            
            <motion.div 
              className="absolute -bottom-4 right-8 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="font-semibold text-gray-900 dark:text-white">Empower your Business</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;