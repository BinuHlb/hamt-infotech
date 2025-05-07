export type ProjectCategory = 'web' | 'branding' | 'ui-ux' | 'development';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  client: string;
  year: number;
  imageUrl: string;
  featuredImageUrl?: string;
  detailImages?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  services?: string[];
  challenge?: string;
  solution?: string;
  results?: string;
}

export const projects: Project[] = [
  {
    id: 'fusion-fitness',
    title: 'Fusion Fitness',
    description: 'A modern, responsive website for a premium fitness brand with online booking and membership management.',
    category: 'web',
    categoryLabel: 'Web Design',
    client: 'Fusion Fitness',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featuredImageUrl: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailImages: [
      'https://images.pexels.com/photos/4162450/pexels-photo-4162450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    testimonial: {
      quote: "HamtInfotech transformed our online presence with a website that perfectly reflects our brand's energy and values. The new booking system has significantly increased our class attendance.",
      author: "Alex Thompson",
      role: "Marketing Director, Fusion Fitness"
    },
    services: [
      "Web Design",
      "Web Development",
      "UI/UX Design",
      "Branding"
    ],
    challenge: "Fusion Fitness needed a website that would appeal to their target demographic of fitness enthusiasts while streamlining their booking process and membership management.",
    solution: "We created a modern, visually dynamic website with intuitive navigation and integrated a custom booking system. The responsive design ensures a seamless experience across all devices.",
    results: "The new website led to a 45% increase in online bookings and a 30% reduction in administrative time spent managing appointments."
  },
  
  
  {
    id: 'quantum-finance',
    title: 'Quantum Finance Platform',
    description: 'Custom web application development for a financial services company, including portfolio management and reporting tools.',
    category: 'development',
    categoryLabel: 'Development',
    client: 'Quantum Finance',
    year: 2022,
    imageUrl: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featuredImageUrl: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailImages: [
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8370424/pexels-photo-8370424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    testimonial: {
      quote: "The web application HamtInfotech developed has revolutionized how we manage client portfolios. The system is robust, secure, and has significantly improved our operational efficiency.",
      author: "Sarah Johnson",
      role: "CTO, Quantum Finance"
    },
    services: [
      "Web Application Development",
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
      "Testing & Quality Assurance"
    ],
    challenge: "Quantum Finance needed a secure, scalable web application for portfolio management that would integrate with multiple financial data sources and provide comprehensive reporting tools.",
    solution: "We developed a custom platform with real-time data integration, advanced visualization tools, and role-based access control. The application features responsive design for use across devices and robust security protocols.",
    results: "The platform reduced portfolio analysis time by 65%, increased client satisfaction scores by 40%, and supported a 25% growth in assets under management."
  },
  {
    id: 'alpine-outdoors',
    title: 'Alpine Outdoors',
    description: 'E-commerce website for an outdoor gear retailer, featuring product catalog, shopping cart, and secure checkout.',
    category: 'web',
    categoryLabel: 'Web Design',
    client: 'Alpine Outdoors',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featuredImageUrl: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'urban-eats',
    title: 'Urban Eats',
    description: 'Brand identity and packaging design for a gourmet food delivery service targeting urban professionals.',
    category: 'branding',
    categoryLabel: 'Branding',
    client: 'Urban Eats',
    year: 2022,
    imageUrl: 'https://images.pexels.com/photos/5824518/pexels-photo-5824518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featuredImageUrl: 'https://images.pexels.com/photos/5824518/pexels-photo-5824518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description: 'UI/UX design for a productivity app that helps teams organize projects and track progress.',
    category: 'ui-ux',
    categoryLabel: 'UI/UX Design',
    client: 'TaskFlow',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/6804079/pexels-photo-6804079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featuredImageUrl: 'https://images.pexels.com/photos/6804079/pexels-photo-6804079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'horizon-real-estate',
    title: 'Horizon Real Estate',
    description: 'Custom property management system for a real estate agency, including listing management and client portal.',
    category: 'development',
    categoryLabel: 'Development',
    client: 'Horizon Real Estate',
    year: 2022,
    imageUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featuredImageUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'bloom-skincare',
    title: 'Bloom Skincare',
    description: 'Branding and packaging design for a natural skincare line, emphasizing sustainability and clean ingredients.',
    category: 'branding',
    categoryLabel: 'Branding',
    client: 'Bloom Skincare',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featuredImageUrl: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];