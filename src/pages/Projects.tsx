import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "TestEraser",
      description:
        "A tool for students to easily erase test answers and reuse papers.",
      image: "/src/assets/foldercard.png",
    },
    {
      title: "Scrible",
      description:
        "Scrible helps individuals with tremors and similar conditions by transcribing their handwriting and reintegrating it into a digital notepad.",
      image: "/src/assets/scriblepage.png",
    },
    {
      title: "iSpy",
      description:
        "iSpy is a Chrome extension that helps users detect AI-generated media with a single click, empowering artists to protect their work and preserve authenticity.",
      image: "/src/assets/pixel-art-1.jpeg",
    },
    {
      title: "Portfolio Website",
      description:
        "This pixelated portfolio showcasing my work with smooth animations and modern web technologies.",
      image: "/src/assets/backgroundwood.png",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] pt-20 w-full">
      {/* Projects Content */}
      <div className="flex items-center justify-center relative pb-20 pt-10 w-full">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="w-full max-w-[600px] mx-auto px-4">
          <div
            className="text-center relative z-10"
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
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
