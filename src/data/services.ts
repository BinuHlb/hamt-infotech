import { 
  Monitor, 
  PenTool, 
  Laptop, 
  Database, 
  BarChart, 
  Camera, 
  Smartphone,
  Layout, 
  Code,
  LineChart,
  Share2,
  Briefcase,
  ShoppingBag,
  Newspaper,
  Video
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceProcess {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  fullDescription?: string;
  icon: LucideIcon;
  imageUrl: string;
  keyPoints?: string[];
  process?: ServiceProcess[];
  benefits?: ServiceBenefit[];
}

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    shortDescription: 'Stunning, responsive websites that engage visitors and drive conversions.',
    description: 'We create beautiful, user-friendly websites that are optimized for performance and conversions across all devices.',
    fullDescription: 'Our web design service combines aesthetics with functionality to create websites that not only look great but also perform exceptionally well. We focus on creating intuitive user experiences, responsive layouts, and visually appealing designs that reflect your brand identity and engage your target audience.',
    icon: Monitor,
    imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'Custom, responsive designs that look great on all devices',
      'Intuitive user experience and navigation',
      'Fast loading times and optimized performance',
      'SEO-friendly structure and content',
      'Conversion-focused layouts and calls to action',
      'Accessibility compliance for all users'
    ],
    process: [
      {
        title: 'Discovery',
        description: 'We learn about your business, goals, and target audience to create a solid foundation for the design process.'
      },
      {
        title: 'Wireframing',
        description: 'We create the skeletal framework of your website to establish the basic structure before adding visual elements.'
      },
      {
        title: 'Design',
        description: 'We develop the visual aspects of your website, including color schemes, typography, and imagery.'
      },
      {
        title: 'Development',
        description: 'We build your website with clean, efficient code that ensures fast loading times and compatibility across all devices.'
      },
      {
        title: 'Testing & Launch',
        description: 'We thoroughly test your website before launch to ensure everything works perfectly and meets the highest standards.'
      }
    ],
    benefits: [
      {
        icon: Laptop,
        title: 'Increased Credibility',
        description: 'A professional website builds trust with potential customers and establishes your brand as an authority in your industry.'
      },
      {
        icon: LineChart,
        title: 'Higher Conversion Rates',
        description: 'Strategic design elements guide visitors toward taking action, resulting in more leads, sales, or sign-ups.'
      },
      {
        icon: Smartphone,
        title: 'Mobile Optimization',
        description: 'Responsive design ensures your website performs flawlessly across all devices, capturing mobile traffic.'
      },
      {
        icon: BarChart,
        title: 'Better User Experience',
        description: 'Intuitive navigation and thoughtful design create positive experiences that keep visitors engaged and coming back.'
      }
    ]
  },
  {
    id: 'branding',
    title: 'Branding',
    shortDescription: 'Distinctive brand identities that resonate with your audience and stand out from the competition.',
    description: 'We develop comprehensive brand identities that communicate your values and connect with your target audience.',
    fullDescription: 'Our branding service helps you establish a strong, memorable identity that resonates with your target audience and differentiates you from competitors. We develop comprehensive brand strategies, visual identities, and guidelines that ensure consistency across all touchpoints and help build lasting connections with your customers.',
    icon: PenTool,
    imageUrl: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'Brand strategy development and positioning',
      'Logo design and visual identity systems',
      'Typography and color palette selection',
      'Brand voice and messaging guidelines',
      'Brand collateral design (business cards, letterheads, etc.)',
      'Brand style guides for consistent implementation'
    ],
    process: [
      {
        title: 'Research',
        description: 'We analyze your market, competitors, and target audience to identify opportunities for differentiation.'
      },
      {
        title: 'Strategy',
        description: 'We develop a brand strategy that defines your positioning, values, personality, and messaging.'
      },
      {
        title: 'Identity Design',
        description: 'We create visual elements like logos, color palettes, and typography that reflect your brand essence.'
      },
      {
        title: 'Applications',
        description: 'We apply your brand identity across various touchpoints to ensure consistency and impact.'
      },
      {
        title: 'Guidelines',
        description: 'We develop comprehensive guidelines to help you maintain brand consistency in the future.'
      }
    ],
    benefits: [
      {
        icon: Briefcase,
        title: 'Brand Recognition',
        description: 'A strong visual identity makes your brand instantly recognizable and memorable to your target audience.'
      },
      {
        icon: Share2,
        title: 'Increased Trust',
        description: 'Consistent branding builds credibility and trust with your customers, leading to stronger relationships.'
      },
      {
        icon: LineChart,
        title: 'Premium Positioning',
        description: 'Strategic branding allows you to command higher prices and attract quality customers who value your offerings.'
      },
      {
        icon: Laptop,
        title: 'Cohesive Experience',
        description: 'Unified branding creates a seamless experience across all customer touchpoints, strengthening brand perception.'
      }
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    shortDescription: 'Intuitive interfaces and seamless user experiences that delight and retain users.',
    description: 'We craft user interfaces and experiences that are intuitive, engaging, and aligned with user needs and business goals.',
    fullDescription: 'Our UI/UX design service focuses on creating digital experiences that users love. We combine user research, information architecture, interaction design, and visual design to create interfaces that are not only beautiful but also intuitive and efficient. Our approach is centered on understanding user needs and behaviors to create experiences that drive engagement and conversion.',
    icon: Layout,
    imageUrl: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'User research and persona development',
      'Information architecture and user flows',
      'Wireframing and prototyping',
      'Visual design and UI component systems',
      'Interaction design and animations',
      'Usability testing and optimization'
    ],
    process: [
      {
        title: 'Research',
        description: 'We conduct user research to understand needs, goals, and pain points that inform the design process.'
      },
      {
        title: 'Information Architecture',
        description: 'We organize content and functionality in a logical, intuitive structure that supports user goals.'
      },
      {
        title: 'Wireframing',
        description: 'We create low-fidelity representations of the interface to establish layout and functionality before visual design.'
      },
      {
        title: 'Visual Design',
        description: 'We develop the visual aspects of the interface, including color, typography, and UI components.'
      },
      {
        title: 'Prototyping & Testing',
        description: 'We create interactive prototypes and test them with users to validate designs and identify improvements.'
      }
    ],
    benefits: [
      {
        icon: LineChart,
        title: 'Increased Conversions',
        description: 'User-centered design reduces friction in the user journey, leading to higher conversion rates.'
      },
      {
        icon: Smartphone,
        title: 'Reduced Support Costs',
        description: 'Intuitive interfaces minimize user confusion and errors, reducing the need for customer support.'
      },
      {
        icon: Share2,
        title: 'Enhanced User Satisfaction',
        description: 'Thoughtful UX design creates positive experiences that build loyalty and encourage user retention.'
      },
      {
        icon: BarChart,
        title: 'Competitive Advantage',
        description: 'Superior user experiences differentiate your product in the market and attract users from competitors.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Web Development',
    shortDescription: 'Custom web applications and websites built with the latest technologies and best practices.',
    description: 'We build robust, scalable websites and web applications that deliver exceptional performance and functionality.',
    fullDescription: 'Our web development service transforms designs into fully functional, high-performance websites and applications. We use modern technologies and best practices to create solutions that are fast, secure, and scalable. Whether you need a simple website, a complex web application, or an e-commerce platform, our development team has the expertise to bring your vision to life.',
    icon: Code,
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'Custom website development',
      'Web application development',
      'E-commerce solutions',
      'Content management systems',
      'API development and integration',
      'Performance optimization and security'
    ],
    process: [
      {
        title: 'Planning',
        description: 'We define the technical requirements, architecture, and development approach based on your needs.'
      },
      {
        title: 'Development',
        description: 'We write clean, efficient code to build the frontend and backend of your website or application.'
      },
      {
        title: 'Integration',
        description: 'We connect your website with third-party services, APIs, and databases to extend functionality.'
      },
      {
        title: 'Testing',
        description: 'We thoroughly test for functionality, performance, security, and compatibility across devices and browsers.'
      },
      {
        title: 'Deployment & Support',
        description: 'We launch your website and provide ongoing maintenance and support to ensure optimal performance.'
      }
    ],
    benefits: [
      {
        icon: Database,
        title: 'Scalable Solutions',
        description: 'Our development practices ensure your website can grow with your business and handle increasing traffic.'
      },
      {
        icon: Laptop,
        title: 'Custom Functionality',
        description: 'Custom development allows for unique features and workflows tailored to your specific business needs.'
      },
      {
        icon: LineChart,
        title: 'Improved Performance',
        description: 'Optimized code and advanced techniques result in faster loading times and better user experiences.'
      },
      {
        icon: ShoppingBag,
        title: 'Enhanced Security',
        description: 'We implement robust security measures to protect your website and user data from threats.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Data-driven strategies that increase brand visibility and drive qualified traffic to your website.',
    description: 'We create and execute comprehensive digital marketing strategies that increase visibility, drive traffic, and generate leads.',
    fullDescription: 'Our digital marketing service helps you reach and engage your target audience through various online channels. We develop data-driven strategies across SEO, PPC, social media, email, and content marketing to increase your online visibility, drive quality traffic to your website, and convert visitors into customers. Our approach is focused on delivering measurable results and ROI.',
    icon: BarChart,
    imageUrl: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'Search engine optimization (SEO)',
      'Pay-per-click (PPC) advertising',
      'Social media marketing',
      'Email marketing campaigns',
      'Content marketing strategies',
      'Analytics and performance reporting'
    ],
    process: [
      {
        title: 'Audit & Analysis',
        description: 'We review your current digital presence and performance to identify opportunities and challenges.'
      },
      {
        title: 'Strategy Development',
        description: 'We create a customized marketing plan based on your goals, audience, and competitive landscape.'
      },
      {
        title: 'Implementation',
        description: 'We execute the marketing activities across selected channels to reach and engage your target audience.'
      },
      {
        title: 'Optimization',
        description: 'We continuously monitor performance and make data-driven adjustments to improve results.'
      },
      {
        title: 'Reporting',
        description: 'We provide regular reports with insights and recommendations to keep you informed about your ROI.'
      }
    ],
    benefits: [
      {
        icon: LineChart,
        title: 'Increased Visibility',
        description: 'Strategic marketing helps more potential customers discover your brand when searching for related products or services.'
      },
      {
        icon: BarChart,
        title: 'Qualified Traffic',
        description: 'Targeted campaigns bring relevant visitors to your website who are more likely to convert into customers.'
      },
      {
        icon: Briefcase,
        title: 'Brand Authority',
        description: 'Consistent content marketing and social presence establish your brand as a thought leader in your industry.'
      },
      {
        icon: ShoppingBag,
        title: 'Measurable Results',
        description: 'Digital marketing provides clear metrics and analytics to track performance and demonstrate ROI.'
      }
    ]
  },
  {
    id: 'photography',
    title: 'Photography',
    shortDescription: 'Professional photography that showcases your products, services, and brand in the best light.',
    description: 'We provide high-quality photography services that capture your products, people, and spaces in a compelling way.',
    icon: Camera,
    imageUrl: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'Product photography',
      'Corporate and team portraits',
      'Event photography',
      'Location and architectural photography',
      'Lifestyle and brand photography',
      'Photo editing and retouching'
    ]
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    shortDescription: 'Engaging content that tells your brand story and connects with your audience.',
    description: 'We develop compelling written and visual content that communicates your message and drives audience engagement.',
    icon: Newspaper,
    imageUrl: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'Blog articles and website copy',
      'Social media content',
      'Email newsletters',
      'Case studies and whitepapers',
      'Video scripts and storyboards',
      'Infographics and visual content'
    ]
  },
  {
    id: 'video-production',
    title: 'Video Production',
    shortDescription: 'Captivating videos that communicate your message and inspire action.',
    description: 'We create professional videos that tell your story, showcase your products, and engage your audience.',
    icon: Video,
    imageUrl: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'Corporate videos and brand films',
      'Product demonstrations',
      'Testimonials and case studies',
      'Event coverage',
      'Social media videos',
      'Animation and motion graphics'
    ]
  }
];