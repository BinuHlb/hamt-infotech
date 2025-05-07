import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
  backgroundVideo?: string; // ✅ Added video prop
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
  backgroundVideo,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative h-[88vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background video or image */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : backgroundImage ? (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ) : null}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/10 z-10" />

      {/* Content */}
      <div className="container relative z-20">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-white mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-gray-200 text-xl mb-10 max-w-2xl"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Button 
              to={primaryButtonLink} 
              variant="primary" 
              size="lg"
              icon={<ArrowUpRight size={18} />}
              iconPosition="right"
            >
              {primaryButtonText}
            </Button>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Button 
                to={secondaryButtonLink} 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10"
              >
                {secondaryButtonText}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Optional decorative bottom gradient */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </section>
  );
};

export default HeroSection;
