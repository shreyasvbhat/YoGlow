import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

export function CarouselButton({ direction, onClick }: CarouselButtonProps) {
  return (
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
}

interface CarouselDotsProps {
  total: number;
  active: number;
  onDotClick: (index: number) => void;
}

export function CarouselDots({ total, active, onDotClick }: CarouselDotsProps) {
  return (
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
}