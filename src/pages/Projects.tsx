import ProjectCard from "../components/ProjectCard";
import ispy from "../assets/ispy.mp4";
import scrible from "../assets/scrible.mp4";

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
      video: scrible,
    },
    {
      title: "iSpy",
      description:
        "iSpy is a Chrome extension that helps users detect AI-generated media with a single click, empowering artists to protect their work and preserve authenticity.",
      video: ispy,
    },
    {
      title: "Portfolio Website",
      description:
        "This pixelated portfolio showcasing my work with smooth animations and modern web technologies.",
      image: "/src/assets/backgroundwood.png",
    },
  ];

  return (
    <div className="h-[calc(100vh-80px)] overflow-y-auto pt-20 w-full">
      {/* Projects Content */}
      <div className="flex items-center justify-center relative pb-20 pt-10 w-full">
        <div className="absolute inset-0 "></div>
        <div className="w-full max-w-[600px] mx-auto px-4">
          <div
            className="text-center relative z-10"
            style={{
              fontFamily: "Pixelify Sans, monospace",
            }}
          >
            <div className="flex flex-col gap-4">
              {projects.map((project, index) => (
                <div key={index} className="w-full">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    video={project.video}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
