import React from 'react';
import img from "../assets/images/logo.png";

export function Logo() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-60 h-60 sm:w-52 sm:h-52 rounded-full bg-purple-100 flex items-center justify-center group transition-transform hover:scale-110">
        <img 
          src={img} 
          alt="Logo" 
          className="w-full h-full sm:w-full sm:h-full object-contain"
        />
      </div>
    </div>
  );
}
