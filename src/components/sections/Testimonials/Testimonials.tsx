import React from 'react';
import SectionHeader from '../../../utils/SectionHeader/SectionHeader';
import TestimonialCard from './TestimonialCard';
import { testimonials, Testimonial } from './testimonialsData';
import './Testimonials.css'; // Assuming you have a CSS file

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials py-16 bg-gray-200 h-screen flex flex-col items-center justify-center gap-16">
      <SectionHeader label="Testimonials" />
      <div className="container mx-auto">
        <div className="testimonials-container flex justify-center flex-wrap gap-12">
          {testimonials.map(
            (testimonial: Testimonial, index: number) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
