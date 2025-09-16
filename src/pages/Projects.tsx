import { useState } from "react";
import { GridBackgroundDemo } from "../components/background/GridBackgroundDemo";
import ProjectCard from "../components/ProjectCard";
import foldercard from "../assets/foldercard.png";
const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  type Project = {
    title: string;
    description: string;
    stats?: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    images: {
      main: string;
      secondary?: string;
      tertiary?: string;
    };
    buttons?: {
      primary?: {
        text: string;
        onClick: () => void;
        color?: string;
      };
      secondary?: {
        text: string;
        onClick: () => void;
        color?: string;
      };
    };
  };

  const projects: Project[] = [];

  // Add your projects above by pushing to the `projects` array.

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen">
      {/* Background grid */}
      <div className="absolute inset-0 -z-20">
        <GridBackgroundDemo />
      </div>

      {/* Main content */}
      <div className="relative z-10 pt-20 pb-20">
        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-12 px-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="search for a project, technology, etc."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Project cards */}
        <div className="px-4 flex flex-col items-center">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              stats={project.stats}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              images={project.images}
              buttons={project.buttons}
            />
          ))}
          {filteredProjects.length === 0 && (
            <div className="max-w-4xl mx-auto mb-8 rounded-lg border border-dashed border-gray-400 p-8 text-center bg-white/70">
              <p className="text-gray-700 text-lg mb-2">No projects yet</p>
              <p className="text-gray-500">
                Add your projects to the{" "}
                <span className="font-medium">projects</span> array to display
                them here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
