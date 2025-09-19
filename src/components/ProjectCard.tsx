import React from "react";
import foldercard from "../assets/foldercard.png";

interface ProjectCardProps {
  title: string;
  image?: string;
  description?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image = foldercard,
  description,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <img className={`w-140 h-full`} src={image} alt={title} />
      <p className="absolute text-lg font-medium mt-4">{title}</p>
      {description && (
        <p className=" absolute text-sm text-gray-600 mt-20 text-center max-w-md">
          {description}
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
