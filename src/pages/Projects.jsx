import React from "react";
import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";

function Projects() {
  return (
    <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} /> 
        ))}
      </div>
  );
}

export default SectionWrapper(Projects, "");
