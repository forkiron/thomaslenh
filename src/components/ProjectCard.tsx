import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  stats?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: {
    main: string;
    secondary?: string;
    tertiary?: string;
  };
  buttons?: {
    primary?: {
      text: string;
      onClick: () => void;
      color?: string;
    };
    secondary?: {
      text: string;
      onClick: () => void;
      color?: string;
    };
  };
  backgroundColor?: string;
  textColor?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  images,
  liveUrl,
}) => {
  return (
    <div className="w-[360px] sm:w-[420px] mx-auto mb-12">
      <div className="relative h-[220px]">
        {/* Back folder piece with tab */}
        <div className="absolute -top-2 left-6 w-[260px] h-[90px] rounded-lg bg-gradient-to-b from-amber-300 to-amber-400 shadow-md" />
        {/* Back folder body */}
        <div className="absolute top-4 left-3 right-3 h-[140px] rounded-xl bg-gradient-to-b from-amber-300 to-amber-400 shadow-md" />

        {/* Screenshot image */}
        <div className="absolute top-2 left-8 right-8">
          <a
            href={liveUrl}
            target={liveUrl ? "_blank" : undefined}
            rel={liveUrl ? "noopener noreferrer" : undefined}
          >
            <img
              src={images.main}
              alt={title}
              className="w-full h-[120px] object-cover border-4 border-white rounded-sm shadow-lg"
            />
          </a>
        </div>

        {/* Front folder body */}
        <div className="absolute top-16 left-0 right-0 h-[150px] rounded-xl bg-gradient-to-b from-amber-300 to-amber-500 shadow-xl" />
      </div>

      {/* Title */}
      <div className="mt-4 text-center">
        <h3 className="text-2xl font-semibold text-gray-200 tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
