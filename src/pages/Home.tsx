import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import StatsSection from '../components/sections/StatsSection';
import CTASection from '../components/sections/CTASection';
import PartnersSlider from '../components/sections/ClientSection';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection
        title="We Create Digital Experiences That Matter"
        subtitle="Award-winning creative agency specializing in brand strategy, web design, and digital marketing that drives real business growth."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
        backgroundVideo="assets/videos/bg-vdo.mp4"
      />
      <PartnersSlider />
      <ServicesSection compact={true} />
      
      <AboutSection />
      
      <StatsSection />
      
      <PortfolioSection compact={true} />
      
      <TestimonialsSection />
      <PartnersSlider />
      <CTASection />
    </motion.div>
  );
};

export default Home;