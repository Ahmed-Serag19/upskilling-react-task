import React from 'react';
import { Testimonial } from './testimonialsData';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <div className="testimonial-container bg-white flex-basis-1/2 max-w-2xl rounded-3xl shadow-lg p-6 border flex justify-center border-blue-400">
      <div className="flex-shrink-0">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full mr-4"
        />
      </div>
      <div className="max-w-md testimonials-text">
        <h3 className="text-xl font-bold pb-3">{testimonial.name}</h3>
        <p className="mb-4">{testimonial.text}</p>
        <div className="flex gap-x-3">
          {[...Array(testimonial.rating)].map((_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
          {[...Array(5 - testimonial.rating)].map((_, index) => (
            <i key={index} className="far fa-star"></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
