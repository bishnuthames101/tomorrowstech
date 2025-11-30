export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  content: string;
  avatar?: string;
}