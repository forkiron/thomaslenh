import { useEffect, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  video,
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
    <div className="relative rounded-lg overflow-hidden  transition-all duration-300 hover:scale-105">
      {/* Background Image or Video */}
      {video ? (
        <video
          ref={videoRef}
          className="w-full h-80 object-cover transition-all duration-500 ease-out hover:h-90"
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <div
          className="w-full h-80 bg-cover bg-center transition-all duration-500 ease-out hover:h-90"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

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
