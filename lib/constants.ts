import { Service, NavItem, Testimonial } from '@/types';

export const COMPANY_NAME = "Tomorrow's Tech";
export const COMPANY_TAGLINE = "Building Tomorrow's Technology Today";
export const COMPANY_DESCRIPTION = "We specialize in cutting-edge web development, mobile applications, digital marketing, and custom websites that drive your business forward in the digital age.";

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js. We create scalable, secure, and high-performance solutions tailored to your business needs.',
    icon: '🌐',
    slug: 'web-development',
    features: [
      'React & Next.js Applications',
      'Node.js Backend Development',
      'Database Design & Integration',
      'API Development & Integration',
      'Performance Optimization',
      'Security Implementation'
    ]
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. From concept to deployment, we deliver user-friendly apps that engage your audience.',
    icon: '📱',
    slug: 'app-development',
    features: [
      'Native iOS & Android Apps',
      'Cross-platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications',
      'Analytics Integration'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence, increase traffic, and convert visitors into customers through SEO, social media, and content marketing.',
    icon: '📈',
    slug: 'digital-marketing',
    features: [
      'Search Engine Optimization',
      'Social Media Marketing',
      'Content Marketing',
      'PPC Advertising',
      'Email Marketing',
      'Analytics & Reporting'
    ]
  },
  {
    id: 'websites',
    title: 'Websites',
    description: 'Professional websites that represent your brand perfectly. From simple landing pages to complex e-commerce platforms, we create responsive and SEO-optimized websites.',
    icon: '💻',
    slug: 'websites',
    features: [
      'Responsive Design',
      'E-commerce Solutions',
      'CMS Integration',
      'SEO Optimization',
      'Performance Optimization',
      'Maintenance & Support'
    ]
  }
];

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechStart Inc.',
    rating: 5,
    content: "Tomorrow's Tech delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
    avatar: '/testimonials/sarah.svg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'Marketing Director',
    company: 'Global Solutions',
    rating: 5,
    content: 'The digital marketing strategy implemented by Tomorrow\'s Tech increased our online visibility by 300%. Highly recommend their services.',
    avatar: '/testimonials/michael.svg'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Founder',
    company: 'Creative Studio',
    rating: 5,
    content: 'Professional, reliable, and innovative. Tomorrow\'s Tech created a stunning website that perfectly represents our brand.',
    avatar: '/testimonials/emily.svg'
  }
];

export const FEATURES = [
  {
    title: 'SEO Optimization',
    description: 'Built-in SEO best practices for maximum visibility',
    icon: '🔍'
  },
  {
    title: 'Modern Technologies',
    description: 'Latest frameworks and tools for cutting-edge solutions',
    icon: '⚡'
  },
  {
    title: 'Responsive Design',
    description: 'Perfect experience across all devices and screen sizes',
    icon: '📱'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your needs',
    icon: '🛠️'
  },
  {
    title: 'Agile Development',
    description: 'Iterative approach for faster delivery and feedback',
    icon: '🚀'
  },
  {
    title: 'Competitive Pricing',
    description: 'High-quality solutions at affordable prices',
    icon: '💰'
  }
];

export const CONTACT_INFO = {
  email: 'info@tomorrowstech.com.np',
  phone: '+977 9810323270',
  address: 'Balkumari-Kharibot, Lalitpur, Nepal',
  hours: {
    weekdays: '10:00 AM - 5:00 PM',
    saturday: '1:00 PM - 4:00 PM',
    sunday: 'Closed'
  }
};