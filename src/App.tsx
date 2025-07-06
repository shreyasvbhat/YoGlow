import React from 'react';
import { Hero } from './components/Hero';
import { TeacherSection } from './components/TeacherSection';
import { TestimonialsSection } from './components/TestimonialsSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TeacherSection />
      <TestimonialsSection />
    </div>
  );
}

export default App;