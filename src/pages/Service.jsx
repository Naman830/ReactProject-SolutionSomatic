import { CtaComponent } from "../components/CommonSection/Sections";
import Testimonial from "../components/CommonSection/Testimonial";
import ServicePageCard, { ServiceCardReverse } from "../components/Card/ServicePageCard";
import Hero from "../components/common/Hero";
import ServiceImg1 from "../assests/images/services-img1.jpg";
import ServiceIcon1 from "../assests/icons/serviceIcon1.png";
import ServiceCardRow from "../components/Card/ServicePageCard";

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
        <ServiceCardRow
          serviceImg={ServiceImg1}
          serviceIcon={ServiceIcon1}
          heading="Branding & Design"
          paragraph="Our Branding & Design service helps you define a unique identity, create memorable visuals, and build consistent experiences across all digital touchpoints. We craft brand systems that not only look great but also drive recognition, trust, and engagement."
          listtext1="Brand Identity Development"
          listtext2="Creative Assets & Collateral"
        />

         <ServiceCardReverse
          serviceImg={ServiceImg1}
          serviceIcon={ServiceIcon1}
          heading="Branding & Design"
          paragraph="Our Branding & Design service helps you define a unique identity, create memorable visuals, and build consistent experiences across all digital touchpoints. We craft brand systems that not only look great but also drive recognition, trust, and engagement."
          listtext1="Brand Identity Development"
          listtext2="Creative Assets & Collateral"
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
