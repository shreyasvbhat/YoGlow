import React, { useState, useCallback } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { CarouselButton, CarouselDots } from './CarouselControls';
import { type Testimonial } from './types';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    if (window.innerWidth >= 1280) return 3; // xl
    if (window.innerWidth >= 768) return 2; // md
    return 1; // sm
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Update visible cards on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = testimonials.length;
  const maxIndex = totalSlides - visibleCards;

  const next = useCallback(() => {
    setActiveIndex((current) => {
      const nextIndex = current + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  }, [maxIndex]);

  const prev = useCallback(() => {
    setActiveIndex((current) => {
      const prevIndex = current - 1;
      return prevIndex < 0 ? maxIndex : prevIndex;
    });
  }, [maxIndex]);

  // Create a circular array of testimonials
  const getVisibleTestimonials = () => {
    const visibleItems = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (activeIndex + i) % totalSlides;
      visibleItems.push(testimonials[index]);
    }
    return visibleItems;
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${(activeIndex * 100) / visibleCards}%)`,
            width: `${(totalSlides * 100) / visibleCards}%`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-shrink-0"
              style={{ width: `${100 / totalSlides}%` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      <CarouselButton direction="left" onClick={prev} />
      <CarouselButton direction="right" onClick={next} />
      <CarouselDots 
        total={maxIndex + 1}
        active={activeIndex}
        onDotClick={setActiveIndex}
      />
    </div>
  );
}