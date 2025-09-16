import { useState } from "react";
import { GridBackgroundDemo } from "../components/background/GridBackgroundDemo";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen w-screen flex justify-center">
      {/* Background grid */}
      <div className="fixed inset-0 -z-20">
        <GridBackgroundDemo />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Search bar */}
        <div className="w-120 mx-auto mb-12 px-4">
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
              placeholder="search for work, projects, etc."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <ProjectCard
            title="My Project"
            description="A brief description of your project"
          />
          <ProjectCard
            title="Project 2"
            description="A brief description of your project"
          />
          <ProjectCard
            title="Project 3"
            description="A brief description of your project"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
