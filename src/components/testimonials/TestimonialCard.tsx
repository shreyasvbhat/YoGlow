import React from 'react';
import { type Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mx-2 sm:mx-3 h-full flex flex-col">
      <div className="flex items-center mb-4 sm:mb-6">
        <img 
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4 ring-2 ring-purple-100"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-purple-600">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base flex-grow">
        "{testimonial.content}"
      </p>
    </div>
  );
}