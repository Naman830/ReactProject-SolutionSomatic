import { CtaComponent } from "../components/CommonSection/Sections";
import Testimonial from "../components/CommonSection/Testimonial";
import { ServiceCardReverse } from "../components/Card/ServicePageCard";
import Hero from "../components/common/Hero";
import ServiceImg1 from "../assests/images/services-img1.jpg";
import ServiceImg2 from "../assests/images/services-img2.jpg";
import ServiceImg3 from "../assests/images/services-img3.jpg";
import ServiceImg4 from "../assests/images/services-img4.jpg";

import ServiceIcon1 from "../assests/icons/serviceIcon1.png";
import ServiceIcon2 from "../assests/icons/serviceIcon2.png";
import ServiceIcon3 from "../assests/icons/serviceIcon3.png";
import ServiceIcon4 from "../assests/icons/serviceIcon4.png";

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
      <section className="w-full md:py-24 py-16 bg-gray-50 flex flex-col xl:gap-16 lg:gap-8 gap-7">
        <ServiceCardRow
          serviceImg={ServiceImg1}
          serviceIcon={ServiceIcon1}
          heading="Branding & Design"
          paragraph="Our Branding & Design service helps you define a unique identity, create memorable visuals, and build consistent experiences across all digital touchpoints. We craft brand systems that not only look great but also drive recognition, trust, and engagement."
          listtext1="Brand Identity Development"
          listtext2="Creative Assets & Collateral"
        />

        <ServiceCardReverse
          serviceImg={ServiceImg2}
          serviceIcon={ServiceIcon2}
          heading="Web Design & Development"
          paragraph="We design and build high-performing websites that are as functional as they are visually compelling. Whether you need a sleek marketing site or a complex web platform, our team blends creative design with clean, scalable code to ensure your site is fast."
          listtext1="Custom Website Design"
          listtext2="Responsive Development"
        />

        <ServiceCardRow
          serviceImg={ServiceImg3}
          serviceIcon={ServiceIcon3}
          heading="Digital Marketing"
          paragraph="We create data-driven digital marketing strategies that help you attract the right audience, increase engagement, and drive measurable growth. From content and SEO to paid media and analytics, our team works across channels to build campaigns."
          listtext1="Search Engine Optimization (SEO) "
          listtext2="Content & Social Media Marketing"
        />

        <ServiceCardReverse
          serviceImg={ServiceImg4}
          serviceIcon={ServiceIcon4}
          heading="Graphic Design"
          paragraph="
Great design communicates, captivates, and inspires action. Our Graphic Design services bring your brand to life through visually striking, purpose-driven creative. Whether you need digital assets, print materials, or custom illustrations."
          listtext1="Marketing & Promotional Materials "
          listtext2="Digital Assets& Brand Collateral Design"
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
