import ServiceCardImage1 from '../assets/images/services-card-1.jpg';
import ServiceCardImage2 from '../assets/images/services-card-2.jpg';
import ServiceCardImage3 from '../assets/images/services-card-3.jpg';

export interface Services {
  image: string;
  title: string;
  description: string;
}

export const services: Services[] = [
  {
    image: ServiceCardImage1,
    title: 'Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    image: ServiceCardImage2,
    title: 'Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    image: ServiceCardImage3,
    title: 'Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
];
