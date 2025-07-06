import React from 'react';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { type Testimonial } from './types';

const testimonials: Testimonial[] = [
  {
    name: "Emma Thompson",
    role: "Yoga Enthusiast",
    content: "Sarah's classes have transformed not just my practice, but my entire approach to wellness. Her guidance is invaluable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    role: "Business Professional",
    content: "As a busy professional, these classes have been a lifeline. The flexibility of online sessions and Sarah's expertise make it perfect.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Lisa Rodriguez",
    role: "Fitness Trainer",
    content: "The attention to detail and personalized guidance in each session is remarkable. Highly recommend for all skill levels.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Student Testimonials
        </h2>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}