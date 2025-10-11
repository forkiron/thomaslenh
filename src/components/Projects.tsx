import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "TestEraser",
      description:
        "A revolutionary tool for students to easily erase test answers and reuse papers.",
      tags: ["React", "TypeScript"],
    },
    {
      title: "Scrible Research",
      description:
        "Contributing to research at Scrible, exploring new ways to enhance academic research and citation management.",
      tags: ["Research", "Academic"],
    },
    {
      title: "Portfolio Website",
      description:
        "This pixelated portfolio showcasing my work with smooth animations and modern web technologies.",
      tags: ["React", "Tailwind", "Vite"],
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="text-center max-w-6xl mx-auto px-8 relative z-10">
        <h2
          className="text-6xl font-bold mb-12"
          style={{
            fontFamily: "Pixelify Sans, monospace",
            color: "#fde68a",
            textShadow: "black 0px 0px 2px",
          }}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
