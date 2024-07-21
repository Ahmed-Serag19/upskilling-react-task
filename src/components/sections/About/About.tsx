import AboutUsImage from '../../../assets/images/about-us-section.jpg';
import SectionButton from '../../../utils/SectionButton/SectionButton';
import './About.css';
const About = () => {
  return (
    <section className="about-us h-screen z-30">
      <div className="flex items-center justify-center gap-52 h-4/5 text-white">
        <div className="about-left-side self-start pt-20 sm:pt-10 z-50">
          <h1 className="text-5xl font-extrabold">About Us</h1>
          <p className="font-bold text-sm pt-8 pb-5 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an
          </p>
          <div>
            <img
              src={AboutUsImage}
              className="rounded-2xl"
              alt="two trash bags image"
            />
          </div>
        </div>
        <div className="about-right-side  max-w-md text-right z-50">
          <div className="right-side-layer"></div>
          <h1 className="text-5xl font-extrabold py-6">Where</h1>
          <p className="font-semibold text-sm max-w-96">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="btn-container flex items-center justify-center">
          <SectionButton label="Help Me" color="warning" />
        </div>
      </div>
    </section>
  );
};

export default About;
