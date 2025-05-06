import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../ui/SectionHeading';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // Auto-advance testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [inView]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section ref={ref} className="section bg-primary-900 py-24">
      <div className="container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Hear what our clients have to say about our work."
          center={true}
          light={true}
        />
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-16 text-primary-300/30">
            <Quote size={120} />
          </div>
          
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="text-center px-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 0.9,
                  display: currentIndex === index ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto border-4 border-white/10"
                  />
                </div>
                
                <blockquote className="text-white text-xl md:text-2xl italic mb-8 max-w-3xl mx-auto">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-primary-300">{testimonial.role}, {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary-800 text-primary-300 hover:bg-primary-700 hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === index ? 'bg-primary-300' : 'bg-primary-800 hover:bg-primary-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-primary-800 text-primary-300 hover:bg-primary-700 hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;