import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
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
      <div className="bg-gray-800 text-white pt-40 pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 mb-0">
              Let's start a conversation about how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactSection />
      
      {/* Map Section */}
      <section className="section bg-white dark:bg-gray-900 p-0">
        <div className="w-full h-96 bg-gray-300 dark:bg-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.522703248621!2d55.277170974769774!3d25.21931383080571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c92e6af9f9d%3A0x7e0e3221c4f68966!2sHLB%20HAMT-%20Audit%20Tax%20Advisory!5e0!3m2!1sen!2sin!4v1747022103987!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;