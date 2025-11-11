import { ProjectsComponent } from "../components/CommonPages/Pages";

const Projects = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        heading="Projects"
        paragraph="Showcasing the Power of Innovative, Results-Driven Digital Solutions in Action."
        pageName="Projects"
      />
      <ProjectsComponent />
    </>
  );
};

export default Projects;
