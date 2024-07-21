import React from 'react';
import { services, Services } from '../../../utils/servicesData'; // Ensure to import your services data

const ServiceCard: React.FC = () => {
  return (
    <div className="services-cards flex items-center justify-center gap-10">
      {services.map((service: Services, index) => {
        return (
          <div
            key={index}
            className="max-w-xs bg-white shadow-md rounded-md overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-extrabold mb-2">
                {service.title}
              </h2>
              <p className="text-sm font-semibold">
                {service.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
