import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import CTASection from '../components/sections/CTASection';
import { services } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // If service doesn't exist, redirect to services page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

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
      {/* Service Header */}
      <div className="bg-gray-800 text-white pt-40 pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-lg bg-primary-800/50 text-primary-300">
              {React.createElement(service.icon, { size: 42 })}
            </div>
            <h1 className="mb-6">{service.title}</h1>
            <p className="text-xl text-gray-200 mb-0">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title={`About Our ${service.title}`} 
                subtitle="How we approach this service to deliver exceptional results for your business"
              />
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.fullDescription || service.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {service.keyPoints && service.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                to="/contact" 
                variant="primary"
              >
                Discuss Your Project
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="rounded-xl shadow-xl w-full h-auto"
              />
              
              {/* Optional decorative elements */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="font-bold text-primary-600 dark:text-primary-400 text-lg">Trusted By</p>
                <p className="text-gray-600 dark:text-gray-300">50+ Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process/Approach */}
      <section ref={ref} className="section bg-gray-50 dark:bg-gray-800/30">
        <div className="container">
          <SectionHeading 
            title="Our Approach" 
            subtitle={`How we deliver exceptional ${service.title} that drives results`}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {service.process && service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card delay={index}>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold text-xl mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Benefits" 
            subtitle={`Why our ${service.title} service will help your business thrive`}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {service.benefits && service.benefits.map((benefit, index) => (
              <Card key={index} delay={index}>
                <div className="p-6 flex">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mr-4 flex-shrink-0">
                    {React.createElement(benefit.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-gray-50 dark:bg-gray-800/30">
        <div className="container">
          <SectionHeading 
            title="Related Services" 
            subtitle="Explore other services that complement our offerings"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services
              .filter(s => s.id !== id)
              .slice(0, 3)
              .map((relatedService, index) => (
                <Card key={relatedService.id} delay={index}>
                  <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      {React.createElement(relatedService.icon, { size: 24 })}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {relatedService.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {relatedService.shortDescription}
                    </p>
                    
                    <Button 
                      to={`/services/${relatedService.id}`} 
                      variant="outline"
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </motion.div>
  );
};

export default ServiceDetail;