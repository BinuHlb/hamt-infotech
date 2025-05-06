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
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sarah has over 15 years of experience in design and creative direction.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Michael brings technical expertise and a passion for clean, efficient code.',
    },
    {
      id: 3,
      name: 'Alex Rivera',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3760819/pexels-photo-3760819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Alex creates intuitive user experiences and beautiful interfaces.',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Marketing Strategist',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Emma develops marketing strategies that drive growth and engagement.',
    },
  ];

  const coreValues = [
    { 
      icon: <Shield size={32} />,
      title: 'Integrity',
      description: 'We believe in transparent communication and always doing what\'s right for our clients.'
    },
    { 
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'We push boundaries and explore new solutions to deliver unique and effective results.'
    },
    { 
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'We work closely with our clients, valuing their input throughout the creative process.'
    },
    { 
      icon: <Zap size={32} />,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we create, down to the smallest detail.'
    },
    { 
      icon: <Award size={32} />,
      title: 'Quality',
      description: 'We deliver polished, professional work that stands the test of time.'
    },
    { 
      icon: <Target size={32} />,
      title: 'Results',
      description: 'We focus on creating solutions that achieve real business goals and measurable outcomes.'
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
      <div className="bg-primary-900 text-white pt-40 pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">About Our Agency</h1>
            <p className="text-xl text-gray-200 mb-0">
              We're a team of passionate creatives dedicated to transforming brands through strategic design and development.
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
                subtitle="From humble beginnings to industry recognition, our journey has been defined by creativity and innovation."
              />
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2012, CreativeX began as a small design studio with a big vision. Our founder, Sarah Johnson, set out to create an agency that would blend strategic thinking with beautiful design to help brands make a meaningful impact.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                Over the years, we've grown into a full-service creative agency, bringing together talented designers, developers, and strategists who share a passion for creating exceptional digital experiences. Today, we work with clients across industries, from startups to global brands, helping them stand out in a crowded digital landscape.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team collaborating" 
                className="rounded-xl shadow-xl"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="font-bold text-primary-600 dark:text-primary-400 text-2xl">10+ Years</p>
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
                <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
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
                <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
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
            title="Our Core Values" 
            subtitle="The principles that guide our work and relationships"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} delay={index}>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
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