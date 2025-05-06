export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Quantum Finance',
    quote: 'Working with CreativeX was transformative for our business. Their team took the time to understand our unique challenges and delivered a solution that exceeded our expectations. Our website now perfectly represents our brand and has significantly increased our lead generation.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Alpine Outdoors',
    quote: 'The e-commerce site CreativeX designed for us has been a game-changer. Not only is it visually stunning, but it\'s also incredibly intuitive for our customers. Since launch, we\'ve seen a 40% increase in online sales and a significant reduction in cart abandonment.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Bloom Skincare',
    quote: 'The branding and packaging design CreativeX created for our skincare line perfectly captured our ethos of natural beauty and sustainability. Their work has helped us stand out in a crowded market and connect with our target audience in a meaningful way.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Product Manager',
    company: 'TaskFlow',
    quote: 'The UI/UX design for our productivity app has received rave reviews from our users. CreativeX delivered an interface that is not only beautiful but also highly functional and intuitive. Our user engagement metrics have improved dramatically since the redesign.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];