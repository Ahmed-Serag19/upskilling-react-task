import React from 'react';
import SectionButton from '../../../utils/SectionButton/SectionButton';
import SectionHeader from '../../../utils/SectionHeader/SectionHeader';
import ServiceCard from './ServiceCard';
import './ServicesWeProvide.css';
const ServicesWeProvide: React.FC = () => {
  return (
    <section className="services bg-slate-200 h-screen flex flex-col items-center gap-16 justify-center">
      <SectionHeader label="Services" />
      <ServiceCard />
      <div className="services-btn">
        <SectionButton label="Help Me" color="secondary" />
      </div>
    </section>
  );
};

export default ServicesWeProvide;
