// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  projectType: 'Web' | 'Apps' | 'Creative' | 'Otro';
  message: string;
  phone?: string;
  company?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

// Team Member Type
export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// Testimonial Type
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  website?: string;
  quote: string;
  rating?: number;
  image?: string;
}

// Project/Service Type
export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  image?: string;
}

// Metric Type
export interface Metric {
  label: string;
  value: string;
  description?: string;
}

// SEO Types
export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}
