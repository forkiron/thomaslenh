interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
      <h3
        className="text-2xl font-bold mb-4"
        style={{
          fontFamily: "Pixelify Sans, monospace",
          color: "#fde68a",
          textShadow: "black 0px 0px 1px",
        }}
      >
        {title}
      </h3>
      <p
        className="text-white mb-4"
        style={{
          fontFamily: "Pixelify Sans, monospace",
          textShadow: "black 0px 0px 1px",
        }}
      >
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
