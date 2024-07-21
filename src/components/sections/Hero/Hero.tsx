import HeroLogo from '../../../assets/images/truck-logo.png';
import SectionButton from '../../../utils/SectionButton/SectionButton';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero flex flex-col items-center w-full">
      <header className="flex gap-4 justify-center py-16">
        <div className="logo w-18 pt-1">
          <img
            src={HeroLogo}
            alt="recycle truck logo"
            className="logo-image"
          />
        </div>
        <div className="logo-text flex flex-col ">
          <h1 className="text-5xl tracking-wider font-light">
            Round Rock
          </h1>
          <p className="font-bold text-lg">Trush Hauling</p>
        </div>
      </header>
      <div className="main-hero flex flex-col items-center justify-between py-2">
        <button className="experts-btn  text-white py-2 px-10 rounded-2xl mb-4 text-lg">
          Experts
        </button>
        <h2 className="text-8xl lorem-header py-1 font-thin">
          Lorem
        </h2>
        <h2 className="text-8xl font-extrabold">Lorem lorem</h2>
        <p className="text-center max-w-xl pt-5 pb-3 font-semibold text-lg">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the
        </p>
      </div>
      <SectionButton label="Help Me" />
    </section>
  );
};

export default Hero;
