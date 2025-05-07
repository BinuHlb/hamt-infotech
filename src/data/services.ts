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
    id: 'erp-consulting',
    title: 'ERP Consulting',
    shortDescription: 'With our comprehensive end-to-end ERP software configuration and support services,',
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
    id: 'digital-transformation',
    title: 'Digital Transformation',
    shortDescription: 'Transform your business with our comprehensive digital transformation services.',
    description: 'We help businesses leverage technology to improve processes, enhance customer experiences, and drive innovation.',
    fullDescription: 'Our digital transformation service empowers businesses to adapt to the rapidly changing digital landscape. We analyze your current processes, identify areas for improvement, and implement technology solutions that enhance efficiency, customer engagement, and overall performance. Our goal is to help you harness the power of technology to drive growth and innovation.',
    icon: Laptop,
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'Business process analysis and optimization',
      'Technology assessment and roadmap development',
      'Implementation of digital tools and platforms',
      'Change management and training programs',
      'Data analytics and insights generation',
      'Continuous improvement and innovation strategies'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'We evaluate your current processes, technology, and market position to identify opportunities for improvement.'
      },
      {
        title: 'Strategy Development',
        description: 'We create a tailored digital transformation strategy that aligns with your business goals and objectives.'
      },
      {
        title: 'Implementation',
        description: 'We deploy the necessary technology solutions and processes to drive your digital transformation.'
      },
      {
        title: 'Training & Support',
        description: 'We provide training and ongoing support to ensure your team is equipped to leverage new technologies effectively.'
      },
      {
        title: 'Continuous Improvement',
        description: 'We monitor performance and make data-driven adjustments to optimize your digital transformation efforts.'
      }
    ],
    benefits: [
      {
        icon: BarChart,
        title: 'Increased Efficiency',
        description: 'Streamlined processes and automation reduce manual work, saving time and resources.'
      },
      {
        icon: LineChart,
        title: 'Enhanced Customer Experience',
        description: 'Digital tools enable personalized interactions and improved service delivery, leading to higher customer satisfaction.'
      },
      {
        icon: Database,
        title: 'Data-Driven Decisions',
        description: 'Access to real-time data and analytics empowers informed decision-making and strategic planning.'
      },
      {
        icon: Laptop,
        title: 'Competitive Advantage',
        description: 'Embracing digital transformation positions your business ahead of competitors in a rapidly evolving market.'
      }
    ]
    
  },
  {
    id: 'it-audit',
    title: 'IT Audit & Assessment',
    shortDescription: 'Comprehensive IT audits that identify risks, ensure compliance, and enhance security.',
    description: 'We conduct thorough IT audits to assess your systems, processes, and security measures, ensuring compliance and risk mitigation.',
    fullDescription: 'Our IT audit and assessment service provides a comprehensive evaluation of your IT systems, processes, and security measures. We identify vulnerabilities, assess compliance with industry standards, and provide actionable recommendations to enhance your IT infrastructure. Our goal is to help you mitigate risks, improve security, and ensure that your technology aligns with your business objectives.',
    icon: Database,
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'Comprehensive IT audits and assessments',
      'Risk management and mitigation strategies',
      'Compliance with industry standards and regulations',
      'Vulnerability assessments and penetration testing',
      'IT governance and best practices',
      'Ongoing monitoring and reporting'
    ],
    process: [
      {
        title: 'Planning',
        description: 'We define the scope and objectives of the audit, ensuring alignment with your business goals.'
      },
      {
        title: 'Data Collection',
        description: 'We gather relevant data and documentation to assess your IT systems, processes, and security measures.'
      },
      {
        title: 'Analysis',
        description: 'We analyze the collected data to identify vulnerabilities, compliance gaps, and areas for improvement.'
      },
      {
        title: 'Reporting',
        description: 'We provide a detailed report with findings, recommendations, and an action plan for remediation.'
      },
      {
        title: 'Follow-Up',
        description: 'We assist with implementing recommendations and provide ongoing support to ensure compliance and security.'
      }
    ],
    benefits: [
      {
        icon: BarChart,
        title: 'Risk Mitigation',
        description: 'Identifying vulnerabilities and compliance gaps helps reduce the risk of data breaches and legal issues.'
      },
      {
        icon: Database,
        title: 'Improved Security',
        description: 'Regular audits enhance your security posture, protecting sensitive data and maintaining customer trust.'
      },
      {
        icon: Laptop,
        title: 'Regulatory Compliance',
        description: 'Ensuring compliance with industry standards and regulations reduces the risk of penalties and legal action.'
      },
      {
        icon: LineChart,
        title: 'Operational Efficiency',
        description: 'Identifying inefficiencies in IT processes leads to improved performance and cost savings.'
      }
    ]
    
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    shortDescription: 'Transform complex data into clear, actionable insights with our data visualization services.',
    description: 'We create interactive dashboards and reports that make data easy to understand and act upon.',
    fullDescription: 'Our data visualization service helps you turn complex data into clear, actionable insights. We design interactive dashboards and reports that make it easy to understand trends, patterns, and key performance indicators. Our goal is to empower your team with the tools they need to make informed decisions based on data-driven insights.',
    icon: BarChart,
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    keyPoints: [
      'Custom dashboard design and development',
      'Interactive data visualizations',
      'Real-time data integration',
      'Data storytelling and reporting',
      'User training and support',
      'Ongoing maintenance and updates'
    ],
    process: [
      {
        title: 'Data Assessment',
        description: 'We evaluate your data sources and requirements to determine the best approach for visualization.'
      },
      {
        title: 'Design & Prototyping',
        description: 'We create wireframes and prototypes to visualize the layout and functionality of your dashboards.'
      },
      {
        title: 'Development',
        description: 'We build interactive dashboards and reports that integrate with your data sources and provide real-time insights.'
      },
      {
        title: 'Testing & Validation',
        description: 'We thoroughly test the dashboards to ensure accuracy, performance, and usability.'
      },
      {
        title: 'Training & Support',
        description: 'We provide training and ongoing support to help your team effectively use the dashboards.'
      }
    ],
    benefits: [
      {
        icon: LineChart,
        title: 'Enhanced Decision-Making',
        description: 'Visualizing data helps identify trends and patterns, enabling better decision-making based on insights.'
      },
      {
        icon: Database,
        title: 'Improved Data Understanding',
        description: 'Interactive visualizations make complex data more accessible and easier to understand for all stakeholders.'
      },
      {
        icon: BarChart,
        title: 'Real-Time Insights',
        description: 'Dashboards provide real-time data updates, allowing for timely responses to changing conditions.'
      },
      {
        icon: Laptop,
        title: 'Increased Engagement',
        description: 'Interactive dashboards encourage user engagement and exploration of data, leading to deeper insights.'
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