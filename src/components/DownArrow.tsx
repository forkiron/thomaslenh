import { useState } from "react";

interface DownArrowProps {
  targetId: string;
  isVisible: boolean;
  onArrowClick?: () => void;
}

const DownArrow = ({ targetId, isVisible, onArrowClick }: DownArrowProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    if (onArrowClick) {
      onArrowClick();
    }
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div
      className={`cursor-pointer transition-all duration-500 ${
        isAnimating
          ? "opacity-0 "
          : isVisible
          ? "opacity-70 hover:opacity-90 animate-bounce"
          : "opacity-0 "
      } hover:scale-110`}
      onClick={handleClick}
      style={{
        fontFamily: "Pixelify Sans, monospace",
        fontSize: "2rem",
        color: "#ffffff",
        textShadow: "black 0px 0px 2px",
        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
      }}
    >
      ▼
    </div>
  );
};

export default DownArrow;
