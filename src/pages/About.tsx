import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Shield, Zap } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import StatsSection from '../components/sections/StatsSection';
import CTASection from '../components/sections/CTASection';

const About: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Manoj',
      role: 'Senior Partner',
      image: 'https://hamtinfotech.com/wp-content/uploads/2024/10/Manoj-Kumar-2.webp',
      bio: '',
    },
    {
      id: 2,
      name: 'Vimal Rama Chandran',
      role: 'Director Technology',
      image: 'https://hamtinfotech.com/wp-content/uploads/2024/10/Vimal-R.webp',
      bio: '',
    },
    {
      id: 3,
      name: 'Jayaraj',
      role: 'Senior Manager ERP',
      image: 'https://hamtinfotech.com/wp-content/uploads/2024/10/Jairaj2-scaled-1-1024x1024.webp',
      bio: '',
    },
    {
      id: 4,
      name: 'Bala',
      role: 'Business Head - Digital Transformation',
      image: 'https://hamtinfotech.com/wp-content/uploads/2024/10/1702885309079.webp',
      bio: '',
    },
  ];

  const coreValues = [
    { 
      icon: <Shield size={32} />,
      title: 'Critical thinking',
      description: 'We tackle the most complex challenges for some of the world’s leading brands. Through close collaboration and unwavering commitment, we deliver successful outcomes for each and every client.'
    },
    { 
      icon: <Lightbulb size={32} />,
      title: 'Stewardship',
      description: 'We support one another on our journey to success by fostering a culture of accountability and care. Embracing a &#39;see it, own it, solve it, do it&#39; mindset, we take responsibility and act with purpose.'
    },
    { 
      icon: <Users size={32} />,
      title: 'An Underdog Spirit',
      description: 'We are determined, resourceful, spirited, resilient, and tenacious. We challenge conventional thinking, never accept &#39;no&#39; as the final answer, and embrace every challenge with unwavering optimism.'
    },
    
  ];

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
            <h1 className="mb-6">About Our Agency</h1>
            <p className="text-xl text-gray-200 mb-0">
            We're a team of technology experts passionate about helping businesses succeed in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our Story" 
                subtitle="HAMT Infotech is a global technology solutions provider, born from a legacy of excellence in business advisory. "
              />
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our story began in 2007 as the IT and business consulting arm of HLB HAMT, a leading Audit and Tax advisory firm in the UAE. Initially focused on addressing internal IT needs — including enterprise application development, process automation, digital transformation, CRM, and IT audits — we quickly became a catalyst for innovation within the organisation.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
              Recognising the growing demand for high-impact technology solutions across industries, the leadership made a pivotal decision in 2012 to establish HAMT Infotech as an independent entity. This marked the beginning of our journey as a technology company with a clear purpose: to help businesses around the world transform through innovation, intelligence, and integrity.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team collaborating" 
                className="rounded-xl shadow-xl"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="font-bold text-primary-600 dark:text-primary-400 text-2xl">15+ Years</p>
                <p className="text-gray-600 dark:text-gray-300">of excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section bg-gray-50 dark:bg-gray-800/30">
        <div className="container">
          <SectionHeading 
            title="Mission & Vision" 
            subtitle="What drives us and where we're headed"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary-500 dark:bg-primary-900/30 flex items-center justify-center text-white dark:text-primary-400 mb-6">
                  <Target size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  To empower businesses through strategic design and technology solutions that create meaningful connections with their audience and drive sustainable growth.
                </p>
              </div>
            </Card>
            
            <Card>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary-500 dark:bg-primary-900/30 flex items-center justify-center text-white dark:text-primary-400 mb-6">
                  <Lightbulb size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  To be recognized globally as a leader in creative innovation, setting new standards for digital experiences that inspire, engage, and transform how people interact with brands.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Our Solutions-centric Expertise" 
            subtitle="These core principles guide our work and define our culture."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} delay={index}>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary-500 dark:bg-primary-900/30 flex items-center justify-center text-white dark:text-primary-400 mb-4">
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <section className="section bg-gray-50 dark:bg-gray-800/30">
        <div className="container">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The talented professionals behind our success"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.id} delay={index}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
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

export default About;