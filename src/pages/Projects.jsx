import { ProjectsComponent } from "../components/CommonSection/Sections";
import Hero from "../components/common/Hero";

const Projects = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        heading="Projects"
        paragraph="Showcasing the Power of Innovative, Results-Driven Digital Solutions in Action."
        pageName="Projects"
      />
      <section className="w-full md:py-24 py-16 bg-gray-50">
        <div className="lg:container w-full mx-auto px-4">
          <ProjectsComponent />
        </div>
      </section>
    </>
  );
};

export default Projects;
