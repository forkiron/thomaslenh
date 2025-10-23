interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden  transition-all duration-300 hover:scale-105">
      {/* Background Image */}
      <div
        className="w-full h-48 bg-cover bg-center transition-all duration-500 ease-out hover:h-52"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Darker overlay with content */}
      <div className="bg-black/70 backdrop-blur-sm p-4">
        <h3
          className="text-xl font-bold mb-2"
          style={{
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            color: "#ffffff",
            fontWeight: "700",
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </h3>
        <p
          className="text-gray-300 text-sm leading-relaxed"
          style={{
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: "400",
            letterSpacing: "-0.01em",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
