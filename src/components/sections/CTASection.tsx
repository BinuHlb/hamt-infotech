import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-600 z-0" />
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-500 opacity-20 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-secondary-500 opacity-20 blur-3xl" />
        <div className="absolute -bottom-32 right-1/3 w-64 h-64 rounded-full bg-accent-500 opacity-20 blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Transform Your Digital Presence?
          </h2>
          
          <p className="text-xl md:text-2xl text-white opacity-90 mb-10">
            Let's collaborate to create something extraordinary for your brand.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              to="/contact" 
              variant="accent" 
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Get Started
            </Button>
            
            <Button 
              to="/services" 
              variant="outline"
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              View Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;