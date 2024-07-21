import TestimonialImage from '../../../assets/images/testmonials-person.jpg';

export interface Testimonial {
  name: string;
  text: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Courtney Henry',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: TestimonialImage,
    rating: 5,
  },
  {
    name: 'Courtney Henry',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: TestimonialImage,
    rating: 4,
  },
  {
    name: 'Courtney Henry',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: TestimonialImage,
    rating: 5,
  },
  {
    name: 'Courtney Henry',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: TestimonialImage,
    rating: 3,
  },
];
