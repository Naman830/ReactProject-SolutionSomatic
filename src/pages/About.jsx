import Hero from "../components/common/Hero";
import { AboutUs, BlogComponent } from "../components/CommonPages/Pages";

function About() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        heading="About Us"
        paragraph="We craft results-driven digital strategies that turn vision into measurable impact."
        pageName="About"
      />

      {/* ABOUT SECTION */}
      <AboutUs />
      {/* BLOG SECTION */}
      <BlogComponent />
    </>
  );
}

export default About;
