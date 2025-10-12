import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import DownArrow from "./DownArrow";

const Projects = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        const projectsRect = projectsSection.getBoundingClientRect();

        // Show arrow when projects section is fully visible
        if (
          projectsRect.top < window.innerHeight * 0.3 &&
          projectsRect.bottom > window.innerHeight * 0.7
        ) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const projects = [
    {
      title: "TestEraser",
      description:
        "A tool for students to easily erase test answers and reuse papers.",
      tags: ["React", "TypeScript", "TensorFlow", "Python"],
    },
    {
      title: "Scrible",
      description:
        "Scrible helps individuals with tremors and similar conditions by transcribing their handwriting and reintegrating it into a digital notepad.",
      tags: ["Tensorflow", "Flask", "Python", "React Native"],
    },
    {
      title: "Portfolio Website",
      description:
        "This pixelated portfolio showcasing my work with smooth animations and modern web technologies.",
      tags: ["React", "Tailwind", "Vite"],
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
      <div
        className="text-center max-w-6xl mx-auto px-8 relative z-10"
        style={{
          fontFamily: "Pixelify Sans, monospace",
        }}
      >
        <h2
          className="text-6xl font-bold mb-12"
          style={{
            background:
              "linear-gradient(45deg, #ffcc26, #ffae17, #ffcc26,  #ffae17, #ffcc26)",
            backgroundSize: "400% 400%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "gradientShift 5s ease-in-out infinite",
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

        {/* Dynamic Down Arrow - scrolls back to top */}
        <div className="mt-12 flex justify-center">
          <DownArrow
            targetId=""
            isVisible={showArrow}
            onArrowClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setShowArrow(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
