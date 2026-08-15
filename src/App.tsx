import { useState } from "react";
import AnimatedBackground from "./components/layout/AnimatedBackground";
import Header from "./components/layout/Header";
import AboutMe from "./components/layout/AboutMe";
import Timeline from "./components/layout/Timeline";
import ProjectCarousel from "./components/projects/ProjectCarousel";
import { internships, projects } from "./data/projects";
import { useActiveSection } from "./hooks/useActiveSection";
import type { Project } from "./types/project";

const INTERNSHIP_SECTION_ID = "internship-experience";
const PROJECTS_SECTION_ID = "projects";

function App() {
  const [internshipIndex, setInternshipIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  const focusedSectionId = useActiveSection([INTERNSHIP_SECTION_ID, PROJECTS_SECTION_ID]);
  const activeEntry: Project | null =
    focusedSectionId === PROJECTS_SECTION_ID
      ? projects[projectIndex]
      : focusedSectionId === INTERNSHIP_SECTION_ID
        ? internships[internshipIndex]
        : null;

  function handleTimelineSelect(entry: Project) {
    if (entry.kind === "internship") {
      setInternshipIndex(internships.findIndex((p) => p.id === entry.id));
      document.getElementById(INTERNSHIP_SECTION_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setProjectIndex(projects.findIndex((p) => p.id === entry.id));
      document.getElementById(PROJECTS_SECTION_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground activeCategory={activeEntry?.category ?? null} showMountains={focusedSectionId === null} />
      <Timeline
        internships={internships}
        projects={projects}
        activeId={activeEntry?.id ?? null}
        onSelect={handleTimelineSelect}
      />
      <div className="relative">
        <Header />
        <AboutMe />
        <ProjectCarousel
          title="Internship Experience"
          sectionId={INTERNSHIP_SECTION_ID}
          items={internships}
          activeIndex={internshipIndex}
          onIndexChange={setInternshipIndex}
        />
        <ProjectCarousel
          title="Projects"
          sectionId={PROJECTS_SECTION_ID}
          items={projects}
          activeIndex={projectIndex}
          onIndexChange={setProjectIndex}
        />
      </div>
    </div>
  );
}

export default App;
