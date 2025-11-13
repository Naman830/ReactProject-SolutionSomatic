import { CtaComponent } from "../components/CommonSection/Sections";
import Testimonial from "../components/CommonSection/Testimonial";
import Hero from "../components/common/Hero";


const Service = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        heading="Services"
        paragraph="We craft results-driven digital strategies that turn vision into measurable impact."
        pageName="Services"
      />
      {/* Service Card Section */}
      {/* CTA SECTION */}
      <CtaComponent />

      {/* TESTIMONIAL SECTION */}
      <Testimonial />
    </>
  );
};

export default Service;
