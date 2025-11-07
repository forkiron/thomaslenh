import { useEffect, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  icon?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  video,
  icon,
}: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [video]);

  return (
    <div className="relative rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 max-w-full md:max-w-none">
      {/* Background Image or Video */}
      {video ? (
        <video
          ref={videoRef}
          className="w-full h-40 md:h-60 object-cover transition-all duration-500 ease-out md:hover:h-65"
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <div
          className="w-full h-40 md:h-60 bg-cover bg-center transition-all duration-500 ease-out md:hover:h-65"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Darker overlay with content */}
      <div className="bg-black/70 backdrop-blur-sm p-2 md:p-4">
        <h3
          className="text-lg md:text-2xl font-semibold px-1 mb-1 md:mb-2 flex justify-between"
          style={{
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            color: "#ffffff",
            fontWeight: "700",
            letterSpacing: "-0.025em",
          }}
        >
          <span>{title}</span>
          {icon && (
            <img
              src={icon}
              alt={`${title} icon`}
              className={`ml-2 ${
                title === "Scrible"
                  ? "h-4 w-auto md:h-6"
                  : "w-5 h-5 md:w-8 md:h-8"
              }`}
            />
          )}
        </h3>
        <p
          className="text-gray-300 text-xs md:text-sm font-extralight px-1 leading-relaxed text-left"
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
