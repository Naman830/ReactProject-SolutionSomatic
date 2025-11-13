import { CtaComponent } from "../components/CommonSection/Sections";
import Testimonial from "../components/CommonSection/Testimonial";
import ServicePageCard from "../components/Card/ServicePageCard";
import Hero from "../components/common/Hero";
import ServiceImg1 from "../assests/images/services-img1.jpg"
import ServiceIcon1 from "../assests/icons/serviceIcon1.png"

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
      <section className="w-full md:py-24 py-16 bg-gray-50">
        <ServicePageCard 
        serviceImg={ServiceImg1}
        flex="flex-row"
        serviceIcon={ServiceIcon1}
        />
      </section>
      {/* CTA SECTION */}
      <CtaComponent />

      {/* TESTIMONIAL SECTION */}
      <Testimonial />
    </>
  );
};

export default Service;
