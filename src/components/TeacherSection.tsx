import React from 'react';

export function TeacherSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image - Now on the left for desktop */}
          <div className="relative group order-1 mb-8 md:mb-0">
            <div className="absolute -inset-2 sm:-inset-4 bg-purple-100 rounded-lg -z-10 transform 
              group-hover:rotate-2 transition-transform duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
              alt="Yoga Session" 
              className="rounded-lg shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transform 
                group-hover:-rotate-2 transition-transform duration-300"
            />
          </div>

          {/* Content - Now on the right for desktop */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Meet Your Guide
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Sarah Mitchell brings over 15 years of experience in yoga practice and teaching. 
              Certified in Hatha and Vinyasa yoga, she has helped hundreds of students 
              discover their inner strength and peace through mindful movement and breath work.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Her teaching style combines traditional yoga principles with modern wellness 
              practices, creating a unique experience that caters to both beginners and 
              advanced practitioners.
            </p>
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-lg 
                font-semibold shadow-lg hover:bg-purple-700 transform hover:-translate-y-1 
                transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}