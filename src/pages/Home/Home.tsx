import About from '../../components/sections/About/About';
import ContactUs from '../../components/sections/ContactUs/ContactUs';
import Hero from '../../components/sections/Hero/Hero';
import ServicesWeProvide from '../../components/sections/ServicesWeProvide/ServicesWeProvide';
import Testimonials from '../../components/sections/Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesWeProvide />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
