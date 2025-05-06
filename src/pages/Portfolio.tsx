import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, ProjectCategory } from '../data/projects';
import CTASection from '../components/sections/CTASection';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const categories: { id: ProjectCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Web Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'ui-ux', label: 'UI/UX' },
    { id: 'development', label: 'Development' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-200 mb-0">
              Explore our creative work across various industries and project types.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Browse our collection of work that showcases our creativity and expertise"
          />
          
          <div className="flex flex-wrap justify-center gap-3 mb-10 mt-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  layout
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-80" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-600/80 text-white rounded-full mb-3">
                        {project.categoryLabel}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <Link
                        to={`/portfolio/${project.id}`}
                        className="inline-flex items-center text-white font-medium hover:text-primary-300 transition-colors duration-300"
                      >
                        View Project
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No projects found in this category. Please check back later or select another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </motion.div>
  );
};

export default Portfolio;