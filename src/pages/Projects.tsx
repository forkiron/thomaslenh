import ProjectCard from "../components/ProjectCard";
import ispy from "../assets/ispy.mp4";
import scrible from "../assets/scrible.mp4";
import ispyicon from "../assets/ispyicon.gif";
import scribleicon from "../assets/scribleicon.gif";

const Projects = () => {
  const projects = [
    {
      title: "Scrible",
      description:
        "Scrible helps individuals with tremors and similar conditions by transcribing their handwriting and reintegrating it into a digital notepad.",
      video: scrible,
      icon: scribleicon,
    },
    {
      title: "iSpy",
      description:
        "iSpy is a Chrome extension that helps users detect AI-generated media with a single click, empowering artists to protect their work and preserve authenticity.",
      video: ispy,
      icon: ispyicon,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] md:overflow-y-auto w-full">
      {/* Projects Content */}
      <div className="flex items-center justify-center relative pb-32 pt-10 w-full">
        <div className="absolute inset-0 "></div>
        <div className="lg:w-120 md:w-120 w-80 mx-auto px-0 lg:px-4 md:px-4">
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
                    video={project.video}
                    icon={project.icon}
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
