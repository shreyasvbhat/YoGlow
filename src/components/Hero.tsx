import React from 'react';
import { Logo } from './Logo';
import { ImportanceSection } from './ImportanceSection';

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-purple-800/70 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center">
        <Logo />
        <ImportanceSection />
      </div>
    </div>
  );
}