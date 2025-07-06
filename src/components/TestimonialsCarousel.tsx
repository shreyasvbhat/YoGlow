import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mx-4 sm:mx-6 h-full">
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
    <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
      "{testimonial.content}"
    </p>
  </div>
);

interface CarouselButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full 
      shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
    style={{ [direction]: '1rem' }}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
    ) : (
      <ChevronRight className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
    )}
  </button>
);

interface CarouselDotsProps {
  total: number;
  active: number;
  onDotClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ total, active, onDotClick }) => (
  <div className="flex justify-center gap-2 mt-6">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onDotClick(i)}
        className={`w-2 h-2 rounded-full transition-all duration-300 
          ${active === i ? 'bg-purple-600 w-4' : 'bg-purple-200 hover:bg-purple-300'}`}
      />
    ))}
  </div>
);

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      <CarouselButton direction="left" onClick={prev} />
      <CarouselButton direction="right" onClick={next} />
      <CarouselDots 
        total={testimonials.length} 
        active={activeIndex} 
        onDotClick={setActiveIndex} 
      />
    </div>
  );
}